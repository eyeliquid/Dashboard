import os
import socket
import threading
import time
from scapy.all import ARP, Ether, srp
from flask import Flask, render_template, request, redirect, url_for

# Initialize Flask app
app = Flask(__name__)

# Store discovered IPs and open ports
scanned_ips = {}
known_game_ports = [25565, 27015, 7777, 19132]  # Add known game server ports here
scan_in_progress = False  # To track if a scan is in progress

def scan_network(ip_range):
    """Scan the local network for active IP addresses."""
    global scanned_ips
    print(f'Scanning network {ip_range}...')
    
    # Create ARP request and broadcast
    ether = Ether(dst="ff:ff:ff:ff:ff:ff")
    arp = ARP(pdst=ip_range)
    packet = ether/arp
    result = srp(packet, timeout=3, verbose=0)[0]

    # Collect IPs
    scanned_ips.clear()  # Clear previous results
    for sent, received in result:
        scanned_ips[received.psrc] = []  # Initialize with empty list for ports

    print(f'Scanned IPs: {list(scanned_ips.keys())}')

def scan_ports(ip):
    """Scan for open ports on the specified IP."""
    print(f'Scanning ports for IP: {ip}')
    open_ports = []
    for port in known_game_ports:
        with socket.socket(socket.AF_INET, socket.SOCK_STREAM) as sock:
            sock.settimeout(1)  # Set timeout for the port scan
            result = sock.connect_ex((ip, port))
            if result == 0:  # If the port is open
                open_ports.append(port)
    scanned_ips[ip] = open_ports
    print(f'Open ports for {ip}: {open_ports}')

def scheduled_port_scan():
    """Schedule port scans every hour."""
    while True:
        if scan_in_progress:  # Only scan ports if network scan is ongoing
            for ip in scanned_ips.keys():
                scan_ports(ip)
        time.sleep(60 * 60)  # Wait for 1 hour

@app.route('/', methods=['GET', 'POST'])
def index():
    """Render the HTML page with scanned results or handle the scan request."""
    global scan_in_progress
    if request.method == 'POST':
        ip_range = request.form.get('ip_range')
        if ip_range:  # If IP range is provided
            scan_in_progress = True  # Mark scan as in progress
            threading.Thread(target=scan_network, args=(ip_range,), daemon=True).start()
            return redirect(url_for('index'))  # Redirect to show results

    return render_template('index.html', scanned_ips=scanned_ips)

if __name__ == "__main__":
    # Start background thread for port scanning
    threading.Thread(target=scheduled_port_scan, daemon=True).start()

    # Run the Flask app
    app.run(host='0.0.0.0', port=5000)

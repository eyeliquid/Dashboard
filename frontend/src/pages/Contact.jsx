import Card from "@/components/Card";

const Contact = () => {
  return (
    <div className="h-screen w-2/4 overflow-y-auto bg-gray-900 text-white">
      <Card title="Lan locatie">
        <p>Kampeerboerderij De Zandkamp</p>
        <p>Zandkampweg 21</p>
        <p>3853 PN Ermelo</p>
      </Card>
      <Card title="Wanneer?">
        <p><b>Arrival:</b> Thursday 21st of November 2024 12:00</p>
        <p><b>Departure:</b> Sunday 24th of November 2024 16:00</p>
      </Card>
      <Card title="Verplicht mee nemen">
        <p>UTP kabel</p>
        <p>Stekkerdoos</p>
        <p>Haspel</p>
        <p>Slaapzak</p>
        <p>Kussen</p>
        <p>Handdoek</p>
        <p>Deo</p>
      </Card>
    </div>
  )
}

export default Contact;
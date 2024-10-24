import Card from "@/components/Card";

const Contact = () => {
  return (
    <>
      <h1 className="text-2xl font-bold mb-8">Waar, wanneer en wat?</h1>
      <Card title="Wanneer, wat en waar!">
        <p>Kampeerboerderij De Zandkamp</p>
        <p>Zandkampweg 21</p>
        <p>3853 PN Ermelo</p>
        <br />
        <p><b>Arrival:</b> Thursday 21st of November 2024 - <b>12:00</b></p>
        <p><b>Departure:</b> Sunday 24th of November 2024 -<b>16:00</b></p>
        <br />
        <h3 className="mb-2 font-bold">Verplicht mee te nemen</h3>
        <p>- UTP kabel</p>
        <p>- Stekkerdoos</p>
        <p>- Haspel</p>
        <p>- Slaapzak</p>
        <p>- Kussen</p>
        <p>- Handdoek</p>
        <p>- Deo</p>
      </Card>
    </>
  )
}

export default Contact;
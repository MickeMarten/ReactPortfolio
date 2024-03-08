function Contact(){

    let contact = {
        email: 'KarlMikael.Martensson@gmail.com',
        adress: 'Butgatan 16',
        postalAdress:'60240, Norrköping',
        phone: 'No Access',
        

    }
    return (
        <ul className="hidden">
            <li>Email: {contact.email}</li>
            <li>Adress: {contact.adress}</li>
            <li>Postal adress: {contact.postalAdress}</li>
            <li>Phone: {contact.phone}</li>
            
        </ul>
    )
}

export default Contact;
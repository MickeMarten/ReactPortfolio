
function Contact(props:any){


    const currentDate = new Date().toDateString();
    return (
        <div className=" ? : hidden"> 
        <ul className="">
            <li>Email: {props.email}</li>
            <li>Adress: {props.adress}</li>
            <li>Postal adress: {props.postalAdress}</li>
            <li>Phone: {props.phone}</li>
            <li>Am I on vacation, {currentDate}: {props.vacation ? 'Yes': 'No'}</li>
            
        </ul>
        </div>
    )
}



export default Contact;
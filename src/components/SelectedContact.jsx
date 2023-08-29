import { useState } from "react";
import { useEffect } from "react";
import ContactRow from "./ContactRow";


function SelectedContact({selectedContactId, setSelectedContactId}) {
    const [contact, setContact] = useState(null);

    useEffect(() => {
        async function fetchContact(){
            try {
                const response = await fetch(`https://jsonplaceholder.typicode.com/users/${selectedContactId}`);
                const data = await response.json()
                setContact(data)
            } catch (error) {
                console.log(error)
            }
        }
        fetchContact()
    },[])
    console.log("Contact: ", contact)
    return ( 
        <>
         {contact? <ContactRow contact={contact} />: <div> Loading </div>}
         </>
       
    )
}

export default SelectedContact;


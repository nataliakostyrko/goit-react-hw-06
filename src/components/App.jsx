import { useEffect, useState } from "react";
import ContactForm from "./ContactForm/ContactForm";
import SearchBox from "./SearchBox/SearchBox";
import ContactList from "./ContactList/ContactList";
import contacts from "..//assets/contact.json";
import "./App.module.css";



function App() {
    const localeContacts = () => {
    const savedContacts = window.localStorage.getItem("Contacts");
    return savedContacts ? JSON.parse(savedContacts) : contacts;
    };
    const [contact, setContact] = useState(localeContacts);
    const [filter, setFilter] = useState("");


useEffect(() => {
    window.localStorage.setItem("Contacts", JSON.stringify(contact));
  }, [contact]);
   

    const addContact = (newContact) => {
        setContact((prevContact) => {
            return [...prevContact, newContact];
        });
    };


    const deleteContact = (contactId) => {
        setContact((prevContact) => {
            return prevContact.filter((contact) => contact.id !== contactId);
        });
    };
    const searchContact = contact.filter((cont) =>
        cont.name.toLowerCase().includes(filter.toLowerCase())
    );
    
    
    
    return (
    <div className ="container">
  <h1>Phonebook</h1>
            <ContactForm addContact={addContact} />
            <SearchBox value={filter} onFilter={setFilter} />
            <ContactList deleteContact={deleteContact} contact={searchContact} />
    </div>
);
}

export default App;
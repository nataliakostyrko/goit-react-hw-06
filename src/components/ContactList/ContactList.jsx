
import Contact from "../Contact/Contact";

const ContactList = ({ contact, deleteContact }) => {
  return (
    <>
      <ul>
        {contact.map((contact) => {
          return (
            <Contact
              key={contact.id}
              contact={contact}
              deleteContact={deleteContact}
            />
          );
        })}
      </ul>
    </>
  );
};

export default ContactList;

import { FaUser, FaPhone } from "react-icons/fa6";
import css from "./Contact.module.css";


const Contact = ({ contact, deleteContact }) => {
  const name = contact.name;
  const number = contact.number;
  const id = contact.id;
  return (
    <div className={css.contactList}>
      <div className={css.contact}>
        <p>
          <FaUser className={css.icon} />
          {name}
        </p>
        <p>
          <FaPhone className={css.icon} />
          {number}
        </p>
      </div>
      <button type="button" className="button" onClick={() => deleteContact(id)}>
        Delete
      </button>
    </div>
  );
};

export default Contact;
import { useDispatch } from "react-redux";
import { deleteContacts } from "../../redux/contactsSlice";
import { FaUser, FaPhone } from "react-icons/fa6";
import css from "./Contact.module.css";


const Contact = ({ name, number, id }) => {
  const dispatch = useDispatch();

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
      <button type="button" className="button" onClick={() => dispatch(deleteContacts(id))}>
        Delete
      </button>
    </div>
  );
};

export default Contact;
import { useDispatch } from "react-redux";
import { deleteContacts } from "../../redux/contactsSlice";
import { FaUser, FaPhone } from "react-icons/fa6";
import css from "./Contact.module.css";


const Contact = ({ name, number, id }) => {
  const dispatch = useDispatch();

  return (
    <div className={css.contactList}>
      <div className={css.contact}>
        <p className={css.contactName}>
          <span className={css.icon}>
            <FaUser size={16} />
            </span>
          {name}
        </p>
        <p className={css.contactPhone}>
          <span className={css.icon}>
            <FaPhone size={16} />
            </span>
          {number}
        </p>
      </div>
      <button
        className={css.button}
        onClick={() => dispatch(deleteContacts(id))}>
        Delete
      </button>
    </div>
  );
};

export default Contact;
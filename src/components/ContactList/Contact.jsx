import { FaUser } from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";
import s from "./Contact.module.css";

const Contact = ({ data, onDelete }) => {
  const { name, number, id } = data;
  return (
    <div className={s.container}>
      <div>
        <p className={s.text}>
          <FaUser className={s.icon} />
          {name}
        </p>
        <p className={s.text}>
          <FaPhone className={s.icon} />
          {number}
        </p>
      </div>
      <button
        className={s.deleteButton}
        type="button"
        onClick={() => {
          onDelete(id);
        }}
      >
        Delete
      </button>
    </div>
  );
};

export default Contact;

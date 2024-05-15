import Contact from "./Contact";
import s from "./ContactList.module.css";

const ContactList = ({ contacts, onDelete }) => {
  return (
    <div className={s.container}>
      <ul className={s.list}>
        {contacts.map((contact) => {
          return (
            <li className={s.item} key={contact.id}>
              <Contact data={contact} onDelete={onDelete} />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ContactList;

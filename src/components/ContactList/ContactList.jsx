import { useSelector } from "react-redux";
import Contact from "./Contact";
import s from "./ContactList.module.css";
import { selectContacts } from "../../redux/contactsSlice";

const ContactList = () => {
  const items = useSelector(selectContacts);

  return (
    <div className={s.container}>
      <ul className={s.list}>
        {items.map((item) => {
          return (
            <li className={s.item} key={item.id}>
              <Contact item={item} />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ContactList;

import { useSelector } from 'react-redux';
import { selectFilteredContacts } from 'redux/selectors';
import css from './ContactList.module.css';
import { Contact } from 'components/Contact/Contact';

export const ContactList = () => {
  const contacts = useSelector(selectFilteredContacts);

  return (
    contacts.length !== 0 && (
      <ul>
        {contacts.map(contact => (
          <li key={contact.id} className={css.listItem}>
            <Contact contact={contact} />
          </li>
        ))}
      </ul>
    )
  );
};

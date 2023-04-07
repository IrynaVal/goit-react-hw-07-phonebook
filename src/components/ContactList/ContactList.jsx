import { useSelector } from 'react-redux';
import { getContacts, getFilter } from 'redux/selectors';
import css from './ContactList.module.css';
import { Contact } from 'components/Contact/Contact';

export const ContactList = () => {
  const contacts = useSelector(getContacts);
  const filterValue = useSelector(getFilter);
  // console.log(filterValue);
  const lowerCaseFilter = filterValue.value.toLowerCase();

  const showFilteredContacts = () =>
    contacts.filter(contact =>
      contact.name.toLowerCase().includes(lowerCaseFilter)
    );

  const filteredContacts = showFilteredContacts();

  return (
    filteredContacts.length !== 0 && (
      <ul>
        {filteredContacts.map(contact => (
          <li key={contact.id} className={css.listItem}>
            <Contact contact={contact} />
          </li>
        ))}
      </ul>
    )
  );
};

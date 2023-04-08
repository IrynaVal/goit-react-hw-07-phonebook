import { useSelector } from 'react-redux';
import { selectContacts, selectFilter } from 'redux/selectors';
import css from './ContactList.module.css';
import { Contact } from 'components/Contact/Contact';

export const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const filterValue = useSelector(selectFilter);
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

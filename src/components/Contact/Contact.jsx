import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/operations';
// import PropTypes from 'prop-types';

export const Contact = ({ contact }) => {
  const dispatch = useDispatch();

  const onDelete = () => dispatch(deleteContact(contact.id));

  return (
    <>
      <p>{contact.name}:</p>
      <p>{contact.phone}</p>
      <button type="button" onClick={onDelete}>
        Delete
      </button>
    </>
  );
};

// Contact.propTypes = {
//   contact: PropTypes.exact({
//     id: PropTypes.string.isRequired,
//     name: PropTypes.string.isRequired,
//     number: PropTypes.string.isRequired,
//   }).isRequired,
// };

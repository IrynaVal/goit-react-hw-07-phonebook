import { useDispatch } from 'react-redux';
import { changeFilter } from 'redux/filterSlice';
import css from './Filter.module.css';

export const Filter = () => {
  const dispatch = useDispatch();

  const handleFilterChange = evt => {
    dispatch(changeFilter(evt.currentTarget.value));
  };

  return (
    <lable className={css.filter}>
      Find contacts by name
      <input type="text" onChange={handleFilterChange}></input>
    </lable>
  );
};

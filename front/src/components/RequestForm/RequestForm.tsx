import { ChangeEvent, FormEvent, useState } from 'react';
import { useAppDispatch } from '../../hooks/hooks';
import './RequestForm.css';
import { fetchNewMessages } from '../../features/message.slice';
import { useNavigate } from 'react-router-dom';

const RequestForm = () => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
  
    const [date, setDate] = useState('');
  
    const submitFormHandler = async (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      await dispatch(fetchNewMessages(date));
      navigate('/');
    };
  
    const inputChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
      const { value } = e.target;
      setDate(value);
    };

  return (
    <div>
    <form className="request_form" onSubmit={submitFormHandler}>
    <h3 className='request_form_title'>Request new messages:</h3>
    <input
      type="text"
      className="saerch_data"
      placeholder="Enter date"
      onChange={inputChangeHandler}
    ></input>
    <button className="search_button">Search</button>
    </form>
    </div>
    
  )
};

export default RequestForm;
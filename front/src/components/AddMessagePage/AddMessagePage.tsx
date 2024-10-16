import { ChangeEvent, FormEvent, useState } from "react";
import "./AddMessagePage.css";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../hooks/hooks";
import { createMessage } from "../../features/message.slice";

export interface MessageData {
  author: string;
  message: string;
}

const AddMessagePage = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const [newMessage, setNewMessage] = useState({
    author: '',
    message: '',
  });

  const submitFormMessage = async(messageData: MessageData) => {
    await dispatch(createMessage(messageData));
    navigate('/');
  }

  const submitFormHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    submitFormMessage({ author: newMessage.author, message: newMessage.message });
  };

  const inputChangeHandler = (e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = e.target;

    setNewMessage((prevMessage) => {
      return { ...prevMessage, [name]: value };
    });
  };

  return (
    <div className="add_page">
      <h1 className="add_page_title">Add new message</h1>
      <form className="form" onSubmit={submitFormHandler}>
        <p>Author</p>
        <input
          type="text"
          className="message_author"
          onChange={inputChangeHandler}
          value={newMessage.author}
          name="author"
        ></input>
        <p>Message</p>
        <textarea
          className="message_text"
          onChange={inputChangeHandler}
          value={newMessage.message}
          name="message"
        ></textarea>
        <button className="save_button">Save</button>
      </form>
    </div>
  );
};

export default AddMessagePage;
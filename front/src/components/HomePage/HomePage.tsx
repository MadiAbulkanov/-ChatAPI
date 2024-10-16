import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { fetchMessages } from "../../features/message.slice";
import MessageItem from "./MessageItem/MessageItem";
import './HomePage.css';

const HomePage = () => {
  const dispatch = useAppDispatch();
  const { messages } = useAppSelector((state) => {
    return state.messages
  });

  useEffect(() => {
    dispatch(fetchMessages());
  }, [dispatch]);

  return (
    <div className="posts_block">
      <h3 className="block_title">Messages:</h3>
      <div className="posts">
        {messages.map((messageItem) => (
            <MessageItem messageItem={messageItem} key={messageItem.id} />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
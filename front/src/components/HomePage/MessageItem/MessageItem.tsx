import "./MessageItem.css";

interface Props {
  messageItem: IMessage;
}

const MessageItem = ({ messageItem }: Props) => {
  const { author, message, datatime } = messageItem;

  const dateFormatting = new Date(datatime).toLocaleDateString();
  const timeFormatting = new Date(datatime).toLocaleTimeString();


  return (
    <div className="message_item">
      <p className="item-date">Created on: {dateFormatting} {timeFormatting}</p>
      <h2 className="item-author">{author}</h2>
      <p className="item-message">{message}</p>
    </div>
  );
};

export default MessageItem;
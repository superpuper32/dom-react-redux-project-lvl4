import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { addMessage } from '../../redux/slices/messagesSlice';
import socket from '../../api/socket';
import Message from './Message.tsx';

import { TMessage } from '../../types/index.ts';

const MessagesBox: React.FC<{ messages: Array<TMessage>}> = ({ messages }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    socket.on('newMessage', (payload) => {
      dispatch(addMessage(payload));
    });
  });

  if (messages.length === 0) {
    return <div id="messages-box" className="chat-messages overflow-auto px-5 " />;
  }

  console.log('messages - ', messages);

  return (
    <div id="messages-box" className="chat-messages overflow-auto px-5 ">
      {messages.map((message) => <Message key={message.id} message={message} />)}
    </div>
  );
};

export default MessagesBox;

import React from 'react';
import { useSelector } from 'react-redux';

import { channelsSelectors } from '../../redux/slices/channelsSlice.js';
import { messagesSelectors } from '../../redux/slices/messagesSlice';

import ChatHeader from './ChatHeader.tsx';
import ChatForm from './ChatForm.tsx';
import MessagesBox from './MessagesBox.tsx';

const Chat: React.FC = () => {
  const currentChannelId = useSelector((state) => state.channels.currentChannelId);
  const channel = useSelector((state) => channelsSelectors.selectById(state, currentChannelId));
  const messages = useSelector(messagesSelectors.selectAll);

  if (!channel) return null;

  return (
    <div className="col p-0 h-100">
      <div className="d-flex flex-column h-100">
        <ChatHeader channel={channel} messagesCount={messages.length} />
        <MessagesBox messages={messages} />
        <ChatForm />
      </div>
    </div>
  );
};

export default Chat;

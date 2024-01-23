import React from 'react';

const ChatHeader = ({ channel, messagesCount }) => (
  <div className="bg-light mb-4 p-3 shadow-sm small">
    <p className="m-0">
      <b>
        #
        {` ${channel.name}`}
      </b>
    </p>
    <span className="text-muted">
      {messagesCount}
      {' '}
      сообщений
    </span>
  </div>
);

export default ChatHeader;

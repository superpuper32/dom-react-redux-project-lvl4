import React from 'react';

import classNames from 'classnames';
import { TChannel } from '../../types';

type TChannelProps = {
    channel: TChannel;
    activeTab: number;
    handleClick: (id: number) => () => void;
}

const Channel: React.FC<TChannelProps> = ({ channel, activeTab, handleClick }) => {
  const btnClass = classNames('w-100 rounded-0 text-start btn', {
    'btn-secondary': activeTab === channel.id,
  });

  return (
    <li key={channel.id} className="nav-item w-100">
      <button type="button" className={btnClass} onClick={handleClick(channel.id)}>
        <span className="me-1">#</span>
        {channel.name}
      </button>
    </li>
  );
};

export default Channel;

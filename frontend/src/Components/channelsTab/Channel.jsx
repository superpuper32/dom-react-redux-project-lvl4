import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import classNames from 'classnames';

const Channel = ({ channel, curTab, handleClick }) => {
  const btnClass = classNames('w-100 rounded-0 text-start btn', {
    'btn-secondary': curTab === channel.id,
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

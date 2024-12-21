import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { channelsSelectors, setChannel } from '../../redux/slices/channelsSlice.js';
// @ts-ignore
import Channel from './Channel.tsx';
// @ts-ignore
import Button from './Button.tsx';

const ChannelsTab: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('1');
  const channels = useSelector(channelsSelectors.selectAll);
  const dispatch = useDispatch();

  const handleClick = (id: string) => {
    dispatch(setChannel(channels[Number(id)]));
    setActiveTab(id);
  };

  if (channels.length < 1) return null;

  return (
    <div className="col-4 col-md-2 border-end px-0 bg-light flex-column h-100 d-flex">
      <div className="d-flex mt-1 justify-content-between mb-2 ps-4 pe-2 p-4">
        <b>Каналы</b>
        <Button />
      </div>

      <ul id="channels-box" className="nav flex-column nav-pills nav-fill px-2 mb-3 overflow-auto h-100 d-block">
        {channels.map((channel) => (
          <Channel
            key={channel.id}
            channel={channel}
            activeTab={activeTab}
            handleClick={handleClick}
          />
        ))}
      </ul>
    </div>
  );
};

export default ChannelsTab;
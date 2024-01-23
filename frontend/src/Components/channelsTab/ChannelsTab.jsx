import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { channelsSelectors, setCurrentChannel } from '../../redux/slices/channelsSlice.js';
import { openModal } from '../../redux/slices/modalSlice.js';
import Channel from './Channel.jsx';
import Button from './Button.jsx';

const ChannelsTab = () => {
  const [curTab, setCurTab] = useState(1);
  const channels = useSelector(channelsSelectors.selectAll);
  const dispatch = useDispatch();

  const handleChannelClick = (id) => () => {
    dispatch(setCurrentChannel(id));
    setCurTab(id);
  };
  const handleAddChannel = (type, extra = null) => dispatch(openModal({ type, extra }));

  if (channels.length < 1) return null;

  return (
    <div className="col-4 col-md-2 border-end px-0 bg-light flex-column h-100 d-flex">
      <div className="d-flex mt-1 justify-content-between mb-2 ps-4 pe-2 p-4">
        <b>Каналы</b>
        <Button showModal={handleAddChannel} />
      </div>

      <ul id="channels-box" className="nav flex-column nav-pills nav-fill px-2 mb-3 overflow-auto h-100 d-block">
        {channels.map((channel) => (
          <Channel
            key={channel.id}
            channel={channel}
            curTab={curTab}
            handleClick={handleChannelClick}
          />
        ))}
      </ul>
    </div>
  );
};

export default ChannelsTab;

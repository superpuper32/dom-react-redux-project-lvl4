import React, { useEffect } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import axios from 'axios';

import useAuth from '../../hooks/useAuth.tsx';
import routes from '../../utils/routes.ts';
import getAuthHeader from '../../utils/utils.ts';
import { addChannels } from '../../redux/slices/channelsSlice.ts';
import { addMessages } from '../../redux/slices/messagesSlice.ts';
import { ChannelsTab } from '../../components/index.ts';

interface IProps {
  children: React.JSX.Element;
}

const PrivateMain: React.FC<IProps> = ({ children }): React.JSX.Element => {
  const auth = useAuth();
  const location = useLocation();

  return (
    auth.loggedIn ? children : <Navigate to="/login" state={{ from: location }} />
  );
};

const Main: React.FC = (): React.JSX.Element => {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchCahnnels = async () => {
      const authHeader = getAuthHeader()
      const {data: channels} = await axios.get(routes.channels(), {
        headers: authHeader,
      });
      const {data: messages} = await axios.get(routes.messages(), {
        headers: authHeader,
      });

      dispatch(addChannels(channels));
      dispatch(addMessages(messages));
    }

    fetchCahnnels();
  },[]);


  return (
    <PrivateMain>
        <ChannelsTab />
    </PrivateMain>
  )
}

export default Main;

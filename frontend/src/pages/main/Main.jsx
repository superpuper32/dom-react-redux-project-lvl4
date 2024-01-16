import React, { useEffect } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import axios from 'axios';

import { ChannelsTab, Chat } from '../../components';
import { addChannels } from '../../redux/slices/channelsSlice.js';
import { addMessages } from '../../redux/slices/messagesSlice.js';
import useAuth from '../../hooks/useAuth.jsx';
import routes from '../../utils/routes.js';

const PrivateRoute = ({ children }) => {
  const auth = useAuth();
  const location = useLocation();

  return (
    auth.loggedIn ? children : <Navigate to="/login" state={{ from: location }} />
  );
};

const Main = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { token } = JSON.parse(localStorage.getItem('userId'));
        const { data } = await axios.get(routes.dataPath(), {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        dispatch(addChannels(data.channels));
        dispatch(addMessages(data.messages));
      } catch (e) {
        throw new Error(e);
      }
    };

    fetchData();
  });

  return (
    <PrivateRoute>
      <div className="container h-100 my-4 overflow-hidden rounded shadow">
        <div className="row h-100 bg-white flex-md-row">
          <ChannelsTab />

          <Chat />
        </div>
      </div>
    </PrivateRoute>
  );
};

export default Main;

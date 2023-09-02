import React from 'react';

import { Link, Outlet } from 'react-router-dom';

export const Main = () => {
    return (
        <>
            <nav class="navbar navbar-light bg-light">
                <div class="container-fluid">
                    <Link to="#" class="navbar-brand">Chat (Slack)</Link>
                </div>
            </nav>
            
            <Outlet />
        </>
    );
};
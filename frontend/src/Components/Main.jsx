import React from 'react';

import { Link, Outlet } from 'react-router-dom';

export const Main = () => {
    return (
        <>
            <nav className="navbar navbar-light bg-light">
                <div className="container-fluid">
                    <Link to="#" className="navbar-brand">Chat (Slack)</Link>
                </div>
            </nav>
            
            <Outlet />
        </>
    );
};

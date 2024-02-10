import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

function withAuth(WrappedComponent) {
  return (props) => {
    const { isAuth } = useSelector((state) => state.Auth);
    const navigate = useNavigate();

    if (!isAuth) navigate('/login');

    return <WrappedComponent {...props} />;
  };
}

export default withAuth;

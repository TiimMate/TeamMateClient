import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

function withAuth(WrappedComponent) {
  return (props) => {
    const { isAuth } = useSelector((state) => state.user);
    const navigate = useNavigate();

    useEffect(() => {
      isAuth || navigate('/login');
    }, [isAuth, navigate]);

    return isAuth && <WrappedComponent {...props} />;
  };
}

export default withAuth;

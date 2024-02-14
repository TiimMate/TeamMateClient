import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

function withAuth(WrappedComponent) {
  return (props) => {
    const { isAuth } = useSelector((state) => state.user);
    const navigate = useNavigate();

    useEffect(() => {
      if (!isAuth) {
        alert('로그인이 필요합니다.');
        navigate('/login');
      }
    }, [isAuth, navigate]);

    return isAuth && <WrappedComponent {...props} />;
  };
}

export default withAuth;

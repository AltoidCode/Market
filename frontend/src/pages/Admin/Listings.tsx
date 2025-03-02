import React, { useState, useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export const Listings = () => {
    const navigate = useNavigate();
    const [isAdmin, setIsAdmin] = useState(false);

    useEffect(() => {
        const role = localStorage.getItem('role');
        if (role === 'admin') {
            setIsAdmin(true);
            navigate('/Listings');
        } else {
            navigate('/*');
        }
    }, [navigate]);
  return (
    <div>
    </div>
  );
};


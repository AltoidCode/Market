import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

export const Users = () => {

    const navigate = useNavigate();
    const [isAdmin, setIsAdmin] = useState(false);
    
    useEffect(() => {
        const role = localStorage.getItem('role');
        if (role === 'admin') {
            setIsAdmin(true);
            navigate('/Transactions');
        } else {
            navigate('/*');
        }
    }, [navigate]);
  return (
    <div></div>
  )
}

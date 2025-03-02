import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

const AuthContext = React.createContext<any>(null);

export const Transactions = () => {

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
    <div>

    </div>
  )
}

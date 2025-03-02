import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

export const Analytics = () => {
    
    const navigate = useNavigate();
    const [isAdmin, setIsAdmin] = useState(false);
    
    useEffect(() => {
        const role = localStorage.getItem('role');
        if (role === 'admin') {
            setIsAdmin(true);
            navigate('/Analytics');
        } else {
            navigate('/*');
        }
    }, [navigate]);

  return (
    <div>

    </div>
  )
}

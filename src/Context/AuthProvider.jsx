import React, { useState } from 'react';
import { AuthContext } from './Context';

const AuthProvider = ({children}) => {
    const [users, setUsers] = useState([])
    const userInfo = {
        users,
        setUsers,
    }
    return (
        <AuthContext value={userInfo}>
            {children}
        </AuthContext>
    );
};

export default AuthProvider;
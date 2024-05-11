import React, { useContext } from 'react';
import { AuthContext } from './AuthProvider';

const useProvider = () => {
    const all = useContext(AuthContext)
    return all
}
export default useProvider;
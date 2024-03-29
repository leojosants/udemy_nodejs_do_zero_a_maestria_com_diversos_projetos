/*  react   */
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';  //    import { useHistory } from 'react-router-dom';

import api from '../utils/api';
import useflashMessage from './useFlashMessage';    //  Hook

// 
export default function useAuth() {
    const [authenticated, setAuthenticated] = useState(false);
    const { setFlashMessage } = useflashMessage();
    const navegate = useNavigate();   //    const history = useHistory();

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            api.defaults.headers.Authorization = `Bearer ${JSON.parse(token)}`;
        }
        setAuthenticated(true);
    }, []);

    async function register(user) {
        let msgText = 'Cadastro realizado com sucesso!';
        let msgType = 'success';

        try {
            const data = await api.post('/users/register', user).then((response) => {
                return response.data;
            });
            await authUser(data);
        }
        catch (error) {
            msgText = error.response.data.message;
            msgType = 'error';
        }

        setFlashMessage(msgText, msgType);
    };   
  
    function logout() {
        const msgText = 'Logout realizado com sucesso!';
        const msgType = 'success';
        setAuthenticated(false);
        localStorage.removeItem('token');
        api.defaults.headers.Authorization = undefined;
        navegate('/');
        setFlashMessage(msgText, msgType);
    };

    async function login(user) {
        let msgText = 'Login realizado com sucesso!';
        let msgType = 'success';

        try {
            const data = await api.post('/users/login', user).then((response) => { return response.data });
            await authUser(data);
        } catch (error) {
            msgText = error.response.data.message;
            msgType = 'error';
        }

        setFlashMessage(msgText, msgType);
    };

    async function authUser(data) {
        setAuthenticated(true);
        localStorage.setItem('token', JSON.stringify(data.token));
        navegate('/');  // history.push('/');
    };

    return { authenticated, register, logout, login };
};
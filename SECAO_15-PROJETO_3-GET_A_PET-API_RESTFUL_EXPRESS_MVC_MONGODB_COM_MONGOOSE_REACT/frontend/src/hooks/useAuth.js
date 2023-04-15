/*  react   */
import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

// API
import api from '../utils/api';

// Hook
import useflashMessage from './useFlashMessage';

// 
export default function useAuth() {
    const { setFlashMessage } = useflashMessage();

    async function register(user) {
        let msgText = 'Cadastro realizado com sucesso!';
        let msgType = 'Success';

        try {
            const data = await api
                .post('/users/register', user)
                .then((response) => { return response.data; });
            console.log(data);
        }
        catch (error) {
            msgText = error.response.data.message;
            msgType = 'error';
        }
        setFlashMessage(msgText, msgType);
    };

    return { register };
};
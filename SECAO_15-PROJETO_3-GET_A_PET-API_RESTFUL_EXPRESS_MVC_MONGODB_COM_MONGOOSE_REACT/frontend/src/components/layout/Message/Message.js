// 
import styles from './Message.module.css';

// 
import { useState, useEffect } from 'react';

// 
import bus from '../../../utils/bus';

// 
function Message() {
    const [visibity, setVisibity] = useState(false);
    const [message, setMessage] = useState('');
    const [type, setType] = useState('');

    useEffect(() => {
        bus.addListener('flash', ({ message, type }) => {
            setVisibity(true);
            setMessage(message);
            setType(type);
            setTimeout(() => { setVisibity(false); }, 3000);
        });
    }, []);

    return (visibity && (<div className={`${styles.message} ${styles[type]}`}>{message}</div>));
};

export default Message;
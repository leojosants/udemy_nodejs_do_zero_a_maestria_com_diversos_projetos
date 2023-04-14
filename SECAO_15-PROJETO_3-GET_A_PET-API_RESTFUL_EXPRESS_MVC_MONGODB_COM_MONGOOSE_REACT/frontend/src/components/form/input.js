// 
import styles from './input.module.css';

function Input(
    { type, text, name, placeholder, handleOnchange, value, multiple }
) {
    return (

        <div>
            <label htmlFor={name}>{text}:</label>
            <input
                type={type}
                name={name}
                id={name}
                placeholder={placeholder}
                onChange={handleOnchange}
                value={value}
                {...(multiple ? { multiple } : '')}
            />
        </div>
    );
};
export default Input;
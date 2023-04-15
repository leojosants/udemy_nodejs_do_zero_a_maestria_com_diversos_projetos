// 
import { useState, useContext } from 'react'
import { Link } from 'react-router-dom';
import Input from '../../../components/form/Input/Input';
import styles from '../../form/Form.module.css';

//  Context
import { Context } from '../../../context/UserContext';

// 
function Login() {
    function handleChange(e) { };

    return (

        <section className={styles.form_container}>
            <h1>Login</h1>

            <form>
                <Input
                    text='E-mail'
                    type='email'
                    name='email'
                    placeholder='Digite o seu e-mail'
                    handleOnChange={handleChange}
                />

                <Input
                    text='Senha'
                    type='password'
                    name='password'
                    placeholder='Digite a sua senha'
                    handleOnChange={handleChange}
                />

                <input type="submit" value="Entrar" />
            </form>

            <p>Não tem conta? <Link to='/register'>Clique aqui!</Link></p>
        </section>

    );
};

export default Login;
//
import api from '../../../../utils/api';
import styles from './AddPet.module.css';
import { useState } from 'react'
import { useNavigate} from 'react-router-dom';

/*  Hooks   */
import useFlashMessage from '../../../../hooks/useFlashMessage';


// 
function AddPet() {
    return (
        <section className={styles.addPet_header}>
            <div>
                <h1>Cadastre um Pet</h1>
             
                <p>Depois ele ficará disponível para adoção</p>
            </div>

            <p>Formulário</p>
        </section>
    );
};

export default AddPet;
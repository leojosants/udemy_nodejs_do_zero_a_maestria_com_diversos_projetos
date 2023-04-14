// 
import Input from "../../form/input";

function Register() {
    function handleOnchange(e) { }

    return (
        <section>

            <h1>Registrar</h1>
           
            <form>
                <Input
                    name='name'
                    id='name'
                    placeholder='Digite o seu nome'
                    onChange={handleOnchange}
                />
            </form>

        </section>
    );
};
export default Register;
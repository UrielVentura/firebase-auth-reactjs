import React ,{useState} from 'react'
import {auth} from '../firebaseconfig'
import {useHistory} from 'react-router-dom'
const Login = () => {
    
    const [email, setemail] = useState('')
    const [pass, setPass] = useState('')
    const [msgerror, setMsgerror] = useState(null)
    const history = useHistory()

    const UserRegister = (e) => {
        e.preventDefault()

        auth.createUserWithEmailAndPassword(email, pass)
            .then( r => {
                history.push('/')
            })
            .catch(e => {
                if (e.code === 'auth/invalid-email') {
                    setMsgerror('Formato de Email Incorrecto')
                }if (e.code === 'auth/weak-password') {
                    
                } else {
                    setMsgerror('La contraseña debe tener 6 caracters o mas')
                }
            })
        setMsgerror(null)
        
        }
    const UserLogin = (e) => {
        //auth/wrong-password
        auth.signInWithEmailAndPassword(email,pass)
        .then((r) => {
            history.push('/')
        })
        .catch( (e) =>{
            if (e.code === 'auth/wrong-password') {
                setMsgerror('Contraseña incorrecta.')                
            }
        })
    }

    return (
        <div className='row mt-5'>
            <div className="col"></div>
            <div className="col">
                <form onSubmit={UserRegister} action="" className='form-group border border-rounded'>
                    <input 
                        className='form-control'
                        placeholder='Introduce Email'
                        type="email"
                        onChange={(e) => {setemail(e.target.value)}}/>
                    <input 
                        className='form-control mt-4'
                        placeholder='Introduce la Password'
                        type="password"
                        onChange={(e) => {setPass(e.target.value)}}/>
                    <input 
                        type="submit" 
                        value='Registrar Usuario' 
                        className='btn btn-info btn-block mt-4 '/>
                </form>
                <button className='btn btn-success btn-block' onClick={UserLogin}>
                    Iniciar Sesion
                </button>
                {
                    msgerror != null ? 
                    (
                        <div className ="alert alert-danger">{msgerror}</div>
                    )
                    :
                    (
                        <div></div>
                    )
                }
            </div>
            <div className="col"></div>
        </div>
    )
}

export default Login

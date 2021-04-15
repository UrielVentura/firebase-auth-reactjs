import React, { useEffect, useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { auth } from '../firebaseconfig'
const Menu = () => {

    const [usuario, setUsuario] = useState(null)
    const history = useHistory()

    useEffect(() => {
        auth.onAuthStateChanged((user) => {
            if (user) {
                setUsuario(user.email)
            }
        })
    }, [])

    const closeSesion = () => {
        auth.signOut()
        setUsuario(null)
        history.push('/')
    }



    return (
        <div>
            <nav className='navbar navbar-expand-lg navbar-dark bg-dark mr-lg'>
                <ul className='navbar-nav mr-auto'>
                    <li className='nav-item'>
                        <Link className='nav-link' to='/'>Inicio</Link>
                    </li>
                    <li>

                        {
                            !usuario ?
                                (
                                    <Link className='nav-link' to='/login'>Login</Link>
                                )
                                :
                                (
                                    <span></span>
                                )
                        }

                    </li>
                    <li>

                        {
                            !usuario ?
                                (
                                    <Link className='nav-link' to='/admin'>Admin</Link>
                                )
                                :
                                (
                                    <span></span>
                                )
                        }
                    </li>

                </ul>
                {
                    usuario ?
                        (
                            <button
                                className='btn btn-danger '
                                onClick={closeSesion}>
                                Cerrar Sesion
                            </button>
                        )
                        :
                        (
                            <span></span>
                        )
                }
            </nav>
        </div>
    )
}

export default Menu

import React from 'react'

const Login = () => {
    return (
        <div className='row mt-5'>
            <div className="col"></div>
            <div className="col">
                <form action="" className='form-group border border-rounded'>
                    <input 
                        className='form-control'
                        placeholder='Introduce Email'
                        type="text"/>
                    <input 
                        className='form-control mt-4'
                        placeholder='Introduce la Password'
                        type="password"/>
                    <input 
                        type="submit" 
                        value='Registrar Usuario' 
                        className='btn btn-info btn-block mt-4 '/>
                </form>
            </div>
            <div className="col"></div>
        </div>
    )
}

export default Login

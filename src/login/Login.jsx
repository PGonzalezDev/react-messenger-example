import React, { useState } from 'react';

const Login = function() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        localStorage.setItem('username', username);
        localStorage.setItem('password', password);
        window.location.replace("/Home");
    }

    return (
        <>
            <h3 className="h3 mb-3 fw-normal">Iniciar Sesión</h3>
            <div className="form-floating mb-3">
                <input type="email" className="form-control" id="floatingInput" onChange={(e) => setUsername(e.target.value)} placeholder="name@example.com" />
                <label htmlFor="floatingInput">Email address</label>
            </div>
            <div className="form-floating">
                <input type="password" className="form-control" id="floatingPassword" onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
                <label htmlFor="floatingPassword">Password</label>
            </div>
            <div className="form-floating">
                <button onClick={handleLogin}>Login</button>
            </div>
        </>
    )
}

export default Login
import './App.css'
import Login from './login/Login.jsx'

function App() {
  const logoutHandler = () =>{
    localStorage.clear()
    window.location.reload()
  }
  const user = localStorage.getItem('username')

  return (
    <>
      { !user && <Login />}
      { user && 
          <>
            <div>Bienvenido a React Messenger</div><br />
            <button onClick={logoutHandler}>Cerrar Sesion</button>
          </>
      }
    </>
  )
}

export default App

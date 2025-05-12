import React from 'react'

const Login = () => {
  return (
    <main className="main-site-home vh-100 vw-100 d-flex justify-content-center align-items-center flex-column">
      <div className="logo-xxl mb-5">
        <img src="./img/logo-xxl.png" alt="" />
      </div>
      <div className="d-flex flex-column justify-content-center align-items-center">
        <form action="" className="d-flex flex-column justify-content-center align-items-center">
          <div className="d-flex flex-column justify-content-start align-items-start mb-3">
            <label for="email" className="label-rpg fs-3">E-mail</label>
            <input type="text" id="email" name="email" className="inpt-rpg" />
          </div>
          <div className="d-flex flex-column justify-content-start align-items-start mb-3">
            <label for="password" className="label-rpg fs-3">Senha</label>
            <input type="password" id="password" name="password" className="inpt-rpg" />
          </div>
          <button className="btn-rpg mb-3" type="submit">Login</button>
        </form>
      </div>
    </main>
  )
}

export default Login

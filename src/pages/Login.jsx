import React, { useState } from 'react'
import InptGroup from '../components/InptGroup'

const Login = () => {
  // Form
  const [password, setPassword] = useState('')
  const [email, setEmail] = useState('')

  function handleSubmit(e) {
    e.preventDefault()
  }

  return (
    <main className="main-site-home vh-100 vw-100 d-flex justify-content-center align-items-center flex-column">
      <div className="logo-xxl mb-5">
        <img src="./img/logo-xxl.png" alt="" />
      </div>
      <div className="d-flex flex-column justify-content-center align-items-center">
        <form className="d-flex flex-column justify-content-center align-items-center" onSubmit={handleSubmit}>
          <InptGroup name={'email'} type={'email'} label={'E-mail'} value={email} handleChange={setEmail} />
          <InptGroup name={'password'} type={'password'} label={'Senha'} value={password} handleChange={setPassword} />
          <button className="btn-rpg mb-3" type="submit">Login</button>
        </form>
      </div>
    </main>
  )
}

export default Login

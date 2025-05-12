import React from 'react'

const Home = () => {
  return (
    <main className="main-site-home vh-100 vw-100 d-flex justify-content-center align-items-center flex-column">
      <div className="logo-xxl mb-5">
        <img src="./img/logo-xxl.png" alt="" />
      </div>
      <div className="d-flex flex-column">
        <a className="btn-rpg mb-3" href="#">Login</a>
        <a className="btn-rpg" href="#">Register</a>
      </div>
    </main>
  )
}

export default Home

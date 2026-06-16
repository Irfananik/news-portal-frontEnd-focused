import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../../Components/Header/Header'

const HomeLayout = () => {
  return (
    <div>
    <header>
        <Header></Header>
    </header>
      <main>
        <section className="left"></section>
        <section className="center">
              <Outlet></Outlet>
        </section>
        <section className="right"></section>
      </main>
    </div>
  )
}

export default HomeLayout
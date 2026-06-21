import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../../Components/Header/Header'
import Latest from '../../Components/Latest/Latest'
import Nav from '../../Components/Nav/Nav'

const HomeLayout = () => {
  return (
    <div>
    <header>
        <Header></Header>
        <section className="w-11/12 mx-auto flex justify-center items-center mt-4">
          <Latest></Latest>
        </section>
        <section>
          <Nav></Nav>
        </section>
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
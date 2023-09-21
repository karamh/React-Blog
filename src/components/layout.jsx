import { useState, useEffect } from 'react'
import { ReactDOM } from 'react-dom/client'
import Navbar from './Navbar.jsx'
import Footer from './footer.jsx'
import { Link, Outlet, useParams } from 'react-router-dom'

function Layout() {
    return (
        <div className='outer-main'>
            <Navbar />
            <main className='inner-main'>
                <Outlet />
                <Footer />
            </main>
        </div>
        
    )
}

export default Layout

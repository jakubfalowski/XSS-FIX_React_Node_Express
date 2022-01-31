import React from 'react'
import './Navbar.css'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
    return (
            <div
                className='collapse navbar-collapse'
                id='navbarSupportedContent'
            >
                
                <ul className="navbar-nav ml-auto">
                    <li className='nav-item active'>
                        <NavLink className="nav-link" to="/" exact>
                            <i
                            className='fas fa-home'>
                            </i> Strona główna
                        </NavLink>
                    </li>

                    {/* <li className='nav-item'>
                        <NavLink className="nav-link" to="/category" exact>
                            <i
                            className='fab fa-buromobelexperte'>
                            </i> Kategorie
                        </NavLink>
                    </li> */}

                    
                    <li className='nav-item'>
                        <NavLink className="nav-link" to="/ofert" exact>
                            <i
                            className='fas fa-book-open'>
                            </i> Oferty
                        </NavLink>
                    </li>

                    <li className='nav-item'>
                        <NavLink className="nav-link" to="/register" exact>
                            <i
                            className='fas fa-sign-in-alt'>
                            </i> Zarejestruj
                        </NavLink>
                    </li>

                    <li className='nav-item'>
                        <NavLink className="nav-link" to="/login" exact>
                            <i
                            className='fas fa-key'>
                            </i> Zaloguj
                        </NavLink>
                    </li>

                </ul>
            </div>
    )
}

export default Navbar
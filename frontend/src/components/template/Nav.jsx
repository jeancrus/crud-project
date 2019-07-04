import './Nav.css'
import React from 'react'

export default props => {
    return <aside className="menu-area">
        <nav className="menu">
            {/* Refatorar em casa! */}
            <a href="#/">
                <i className="fa fa-home"></i>&ensp;Início
            </a>
            <a href="#/users">
                <i className="fa fa-users"></i>&ensp;Usuários
            </a>
        </nav>
    </aside>
}
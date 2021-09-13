import React from 'react'
import './Header.css'
const Header: React.FC = () => {
    return (
        <div className="header">
            <h2>Каталог</h2>
            <div>
                <h2>СРАВНЕНИЕ</h2>
                <h2>Личный кабинет</h2>
                <img src="/assets/profile.svg" alt="profile avatar" />
            </div>
        </div>
    )
}

export default Header;
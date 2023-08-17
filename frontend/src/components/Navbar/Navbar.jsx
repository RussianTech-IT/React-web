import React from 'react';
import './Navbar.css';

function Navbar() {
	return (
		<header className="header">
			<nav>
				<div className="logo">
					<a href="/">Russian<span>Tech</span></a>
				</div>
				<input type="checkbox" id="menu-toggle" />
				<label htmlFor="menu-toggle" className="menu-icon">&#9776;</label>
				<ul className="menu">
					<li><a href="/home">Главная</a></li>
					<li><a href="/blog">Блог</a></li>
					<li><a href="/about">О нас</a></li>
					<li><a href="/feedback">Связь</a></li>
				</ul>
			</nav>
		</header>
	);
}

export default Navbar;
import React from 'react'
import './Navbar.css'

function Navbar() {
	return (
		<header class="header">
			<nav>
				<div class="logo">
					<a href="/">Russian<span>Tech</span></a>
				</div>
				<input type="checkbox" id="menu-toggle" />
				<label for="menu-toggle" class="menu-icon">&#9776;</label>
				<ul class="menu">
					<li><a href="/home">Главная</a></li>
					<li><a href="/about">О нас</a></li>
					<li><a href="/">Блог</a></li>
					<li><a href="/">Связь</a></li>
				</ul>
			</nav>
		</header>
	);
};

export default Navbar
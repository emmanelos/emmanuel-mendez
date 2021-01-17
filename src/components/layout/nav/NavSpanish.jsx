import React from 'react'
import { NavLink } from "react-router-dom";
import classNames from 'classnames';

export const NavSpanish = ({ toggle, setToggle }) => {

	return (
		<nav className={classNames('nav', {
			'menuShow': toggle
		})}>

			<ul className="nav__menu" onClick={() => setToggle(!toggle)}>
				<NavLink className="menu__link" to="/es/profile" >
					<li className="menu__item">
						Perfil
					</li>
				</NavLink>

				<NavLink className="menu__link" to="/es/projects" >
					<li className="menu__item">
						Proyectos
					</li>
				</NavLink>

				<NavLink className="menu__link" to="/es/skills" >
					<li className="menu__item">
						Habilidades
					</li>
				</NavLink>

				<NavLink className="menu__link" to="/es/hobbies" >
					<li className="menu__item">
						Aficiones
					</li>
				</NavLink>

				<NavLink className="menu__link" to="/es/contact" >
					<li className="menu__item">
						Contacto
					</li>
				</NavLink>
			</ul>

			<div className="nav__copyright">
				<p className="nav__copyrightDescription">Copyright © 2021 http://emmanelos.github.io/portfolio</p>
				<p className="nav__copyrightDescription">Todos los derechos reservados</p>
			</div>
		</nav>
	)
}
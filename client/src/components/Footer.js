import React from 'react'
import {NavLink} from 'react-router-dom';

const Footer = ({isLoggedIn}) => (
      <footer>
     
        <div><p>Want to learn more about us?</p>
				<NavLink exact style={styles.default} activeStyle={styles.active} to={'/about'}>
					About us
				</NavLink>
        </div>
        <div><p>Copyright © 2021 — Web Cosmetics | Treat yo self!</p>
				<i className="fab fa-facebook"></i>
				<span>    </span>
				<i className="fab fa-twitter"></i>
				<span>    </span>
				<i className="fab fa-instagram"></i>
				</div>
        <div><p>
        	<NavLink exact style={styles.default} activeStyle={styles.active} to={'/secret-page'}>
		      	Admin Page
	      </NavLink></p>
        {!isLoggedIn ? (
			[
			<NavLink exact style={styles.default} activeStyle={styles.active} to={'/register'}>
					Register -
				</NavLink>,
				<NavLink exact style={styles.default} activeStyle={styles.active} to={'/login'}>
					Login
				</NavLink>
			]
		) : null}</div>



      </footer>
)
export default Footer;
const styles = {
	active: {
		color: '#e99f4c'
	},
	default: {
		textDecoration: 'none',
		color: '#eddcd9'
	}
};

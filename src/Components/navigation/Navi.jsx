import React from 'react'
import ReactDOM from 'react-dom'
import './../../App.css'
import { FaRegUserCircle } from 'react-icons/fa'
import { GiFilmProjector } from 'react-icons/gi'
import { Link } from 'react-router-dom'
import SignIn from '../users/SignIn'
import SignUp from '../users/SignUp'


const Navi = () => {
	

  return (
    <div className='naviContainer' >
		<div className="logo">
			<h1>Movies App </h1>
			<GiFilmProjector className='giFilm' />
		</div>
		<ul className="navi-info">
			<li>FILMS</li>
			<li>SERIES</li>
			<li><input placeholder="Search for movies" className="input" name="text" type="text" /> </li>
			<div className="sign">
				<a href="SignIn">Sign In</a>/
				
				<a href="SignUp">
					<button>Sign Up</button>
				</a>
			</div>
			<div className="profile">
				<b>guest user</b>
				<FaRegUserCircle />
			</div>
		</ul>
    </div>
  )
}

export default Navi
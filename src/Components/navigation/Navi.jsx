import React from 'react'
import ReactDOM from 'react-dom'
import './../../App.css'
import { FaRegUserCircle } from 'react-icons/fa'
import { GiFilmProjector } from 'react-icons/gi'


const Navi = () => {
	

  return (
    <div className='naviContainer' >
		<div className="logo">
			<h1>Movies App </h1>
			<GiFilmProjector className='giFilm' />
		</div>
		<ul className="navi-info">
			<li>HOME</li>
			<li>FILMS</li>
			<li>SERIES</li>
			<li><input placeholder="Search for movies" className="input" name="text" type="text" /> </li>
			<div className="sign">
				<a href="#">Sign In</a> 
						/
				<button>Sign Up</button>
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
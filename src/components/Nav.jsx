import { React } from 'react'
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

function Nav({changeQuery}) {

  const handleSubmit = e => {
    e.preventDefault();
    changeQuery(e.target.innerHTML);
    //e.currentTarget.reset();
  }

  return (
    <>
      <nav className="main-nav">
        <ul>
          <li><NavLink to="cats" end onClick={e => handleSubmit(e)}>Cats</NavLink></li>
          <li><NavLink to="dogs" onClick={e => handleSubmit(e)}>Dogs</NavLink></li>
          <li><NavLink to="computers" onClick={e => handleSubmit(e)}>Computers</NavLink></li>
        </ul>
      </nav>
    </>
  )
}

Nav.propTypes = {
  changeQuery: PropTypes.func
}

export default Nav;

import React from 'react';
import { Link } from 'react-router-dom';
import { Nav, NavLink, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';


class NavBar extends React.Component {
  render () {
    var numTeam = [];
    for(var i = 1; i < 2; i++) {
      numTeam.push(i);
    }
    const teamsNavLink = numTeam.map((num) => 
      <NavLink tag={Link} key={num} to={'/submission/team/'+num}>Submission</NavLink>
    )
    return(
      <div className='home-container'>
        <Nav pills>
          <NavLink tag={Link} to='/'>Home</NavLink>
          {teamsNavLink[0]}
        </Nav>
      </div>
  );
  }
}
export default NavBar;

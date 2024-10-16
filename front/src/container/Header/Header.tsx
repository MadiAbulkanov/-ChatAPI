import { NavLink } from 'react-router-dom';
import './Header.css';
import RequestForm from '../../components/RequestForm/RequestForm';

const Header = () => {

  return (
    <div className='header'>
      <RequestForm/>
      <ul className='menu'>
        <li className='menu_item'><NavLink to='/' className='nav_link'>Home</NavLink></li>
        <li className='menu_item'><NavLink to='/messages/add-message' className='nav_link'>Add message</NavLink></li>
      </ul>
    </div>
  )
};

export default Header;
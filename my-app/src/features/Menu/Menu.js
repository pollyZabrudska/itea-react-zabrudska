import { Link } from 'react-router-dom';
import "../../styles/index.scss";

export const Menu = () => {
  return (
    <div className="menu">
      <ul className='menu-list'>
        <li className='menu-link'>
          <Link to="/">Home</Link>
        </li>
        <li className='menu-link'>
          <Link to="/profile">Profile</Link>
        </li>
      </ul>
    </div>
  );
};

import { Link, useHistory } from 'react-router-dom';
import classes from './MainNavigation.module.css';
import { useContext } from 'react';
import authContext from '../../store/auth-context';

const MainNavigation = () => {
  const authCtx = useContext(authContext);
  const history = useHistory();

  const logoutHandler = () => {
    authCtx.logout();
    history.push('/auth');
  };

  return (
    <header className={classes.header}>
      <Link to='/'>
        <div className={classes.logo}>React Auth</div>
      </Link>
      <nav>
        <ul>
          {!authCtx.isLoggedIn && (
            <li>
              <Link to='/auth'>Login</Link>
            </li>
          )}
          {authCtx.isLoggedIn && (
            <>
              <li>
                <Link to='/profile'>Profile</Link>
              </li>
              <li>
                <button onClick={logoutHandler}>Logout</button>
              </li>
            </>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
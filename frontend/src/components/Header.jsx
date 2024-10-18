import { FaSignInAlt, FaSignOutAlt, FaUser } from 'react-icons/fa'
import { Link,  } from 'react-router-dom'

function Header() {
//   const navigate = useNavigate()
//   const dispatch = useDispatch()
//   const { user } = useSelector((state) => state.auth)

const user = null;

  const onLogout = () => {
    // dispatch(logout())
    // dispatch(reset())
    // navigate('/')
  }

  return (
    <header className='header'>
      <div className='logo'>
        <Link to='/'>GoalSetter</Link>
      </div>
      <ul>
        {user ? (
          <li>
            <button className='btn' onClick={() => {}}>
              <FaSignOutAlt /> Logout
            </button>
          </li>
        ) : (
          <>
            <li>
              <Link to='/login'>
                <FaSignInAlt /> Login
              </Link>
            </li>
            <li>
              <Link to='/register'>
                <FaUser /> Register
              </Link>
            </li>
          </>
        )}
      </ul>
    </header>
  )
}

export default Header
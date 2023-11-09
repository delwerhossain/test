import { NavLink } from 'react-router-dom';
import logo from '../assets/image/Food-removebg-preview.png'
import Context from '../hook/useContext';

const Navbar = () => {
  const { user, logOut } = Context()
//   console.log(user);
  return (
    <div className=" w-full max-w-[1250px] px-[25px] mx-auto">
      <div className="flex-none lg:hidden">
        <label
          htmlFor="my-drawer-3"
          aria-label="open sidebar"
          className="btn btn-square btn-ghost"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="inline-block w-6 h-6 stroke-current"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </label>
      </div>
      <img className='w-1/12 lg:w-12' src={logo} alt="" />
      <div className="flex-1 text-2xl font-bold text-green-600">HungerHaven</div>
      <div className="flex-none hidden lg:block">
        <div className="flex items-center gap-2">

{/*           
<ReactiveButton 
  style={{
    borderRadius: '10px',
    color: 'white',
   
  }}
/> */}
          {/* Navbar menu content here */}
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? 'btn btn-warning btn-sm' : 'btn btn-outline btn-warning btn-sm'
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/featureFood"
            className={({ isActive }) =>
              isActive ? 'btn btn-warning btn-sm' : 'btn btn-outline btn-warning btn-sm'
            }
          >
            Foods
          </NavLink>
         
          {user?.email && (
        <ul className="flex gap-5">
   
      <NavLink
            to="/addFood"
            className={({ isActive }) =>
              isActive ? 'btn btn-warning btn-sm' : 'btn btn-outline btn-warning btn-sm'
            }
          >
           Add Foods
          </NavLink>
      <NavLink
            to="/myFood"
            className={({ isActive }) =>
              isActive ? 'btn btn-warning btn-sm' : 'btn btn-outline btn-warning btn-sm'
            }
          >
           My Foods
          </NavLink>
          <NavLink
            to="/myFoodRequest"
            className={({ isActive }) =>
              isActive ? 'btn btn-warning btn-sm' : 'btn btn-outline btn-warning btn-sm'
            }
          >
           My Foods Requests
          </NavLink>
        </ul>
      )}






         
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive ? 'btn btn-warning btn-sm' : 'btn btn-outline btn-warning btn-sm'
            }
          >
            About
          </NavLink>
          <NavLink
            to="/contract"
            className={({ isActive }) =>
              isActive ? 'btn btn-warning btn-sm' : 'btn btn-outline btn-warning btn-sm'
            }
          >
            Contact
          </NavLink>
          {user?.email ? (
            <div className="dropdown dropdown-end ">
              <label tabIndex={0} className="cursor-pointer">
                <div className="avatar">
                  <div className="w-10 rounded-full">
                    <img src={user.image} />
                  </div>
                </div>
              </label>
              <div
                tabIndex={0}
                className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
              >
                <NavLink
                  to="/user"
                  className="px-4 py-2 hover:bg-base-300 rounded-lg"
                >
                  Profile
                </NavLink>

                <div
                  onClick={logOut}

                  className="cursor-pointer text-red-500 px-4 py-2 hover:bg-base-300 rounded-lg"
                >
                  Logout
                </div>
              </div>
            </div>
          ) : (
            <NavLink
            to="/login"
            className={({ isActive }) =>
            isActive ?'btn btn-warning btn-sm' : 'btn btn-outline btn-warning btn-sm'
          }
          >
              Login
            </NavLink>
              )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
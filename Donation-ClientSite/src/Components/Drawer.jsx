import PropTypes from 'prop-types';
// import Navber from '../Components/Navber';
import Footer from '../Components/Footer';
import Sidebar from './NavChildren/Sideber';
import Navbar from './Navbar';
// import Sidebar from '../Components/NavChildren/Sideber';
const Drawer = ({ children }) => {
  return (
    <div className="drawer">
      <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col">
        {/* Navbar */}
        <div className="w-full navbar ">
          <Navbar/>
        </div>
        {/* Page content here */}
        {children}
        <Footer />
      </div>
      <div className="drawer-side">
        <label
          htmlFor="my-drawer-3"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <div className="menu p-4 w-80 min-h-full">
          {/* Sidebar content here */}
        <Sidebar
        ></Sidebar>
        </div>
      </div>
    </div>
  );
};

Drawer.propTypes = {
  children: PropTypes.node,
};

export default Drawer;


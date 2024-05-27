import { Link, NavLink } from "react-router-dom"; 
function AppNav() {
 
  return (
      <>
      <nav   className="navbar navbar-expand-lg bg-body-tertiary ">
  <div className="container-fluid">
    <NavLink   className="navbar-brand"   data-aos="fade-right"  data-aos-duration="3000"  to={'/products'}>Products</NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav ">
        <li className="nav-item ">
          <NavLink   className="nav-link " aria-current="page"  data-aos="zoom-out"  data-aos-duration="3000"  to={'/'}>Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink   className="nav-link"  data-aos="fade-left"  data-aos-duration="3000" to={'/about'}>About</NavLink>
        </li>
       
      </ul>
    </div>
  </div>
</nav>
      </>
  );
}

export default AppNav;
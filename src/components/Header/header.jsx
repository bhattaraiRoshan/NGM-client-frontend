import { Navbar, Nav, NavDropdown, Container, Dropdown, Button } from 'react-bootstrap';
import { MDBCardBody, MDBCardImage } from "mdb-react-ui-kit"
import { NavLink } from 'react-router-dom';
import { Link } from "react-router-dom"
import logo from "../../assets/logo.png"
import { useSelector } from 'react-redux';
import { FaCartShopping } from "react-icons/fa6";

export const Header = () =>{

    const {user} = useSelector(state => state.user)
    const {count} = useSelector(state => state.cart)
    return(
      <Navbar expand="lg" className="btn_colour py-1 sticky-top">
      <div className="container">
                <NavLink className="navbar-brand fw-bold fs-4 px-2" to="/">
                    <img src={logo} alt="" className='logo-image' />
                </NavLink>
                <button className="navbar-toggler mx-2" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav m-auto my-2 text-center">
                        <li className="nav-item">
                            <NavLink className="nav-link fw-bold" to="/">HOME</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link fw-bold" to="/product">PRODUCTS</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link fw-bold" to="/shop">SHOP</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link fw-bold" to="/contact">CONTACT</NavLink>
                        </li>
                    </ul>
                    {/* <div className='text-center'> */}

                        <Link to="/cart" className=" cartHeader m-2"><i className=" cartHeader fa fa-cart-shopping mr-1"></i>
                          <span className='cart-badge'>{count}</span>
                         </Link>
                    {/* </div> */}
                    <div className="buttons text-center d-flex">
                        {/* <NavLink to="/signup" className="btn btn-outline-dark m-2"><i className="fa fa-user-plus mr-1"></i> Register</NavLink> */}

                        {
                            !user?._id && <NavLink to="/login" className="btn btn-outline-dark m-2"><i className="fa fa-sign-in-alt mr-1"></i> Login</NavLink>
                        }
                        {
                            user?._id &&
                            <>
                            <Navbar.Toggle/>
                           
                            <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
            <Nav>
                <Nav.Item>
                
                
                  <Dropdown>
                    <Dropdown.Toggle 
                      id="dropdown-autoclose-true" 
                      className="bg-transparent text-dark fw-bold border-2 border-primary"
                    >
                      <MDBCardBody className="text-center">
                <MDBCardImage
                  src="https://media.licdn.com/dms/image/C5603AQFRe-EfYXiJlQ/profile-displayphoto-shrink_400_400/0/1643103984014?e=1721260800&v=beta&t=_XZn50e0cEu557YZacfvUODLI7o8NDgMLi4egA7wd4w"
                  alt="avatar"
                  className="rounded-circle"
                  style={{ width: '50px' }}
                  fluid />
          
              </MDBCardBody>
                    </Dropdown.Toggle>
      
                    <Dropdown.Menu>
                      <Dropdown.Item className="fw-bold">
                        <Link to="/burrows" className="text-decoration-none text-dark">Order History</Link>
                      </Dropdown.Item>
                      <Dropdown.Item className="fw-bold">
                      <Link to="/profile" className="text-decoration-none text-dark">Profile</Link>
                      </Dropdown.Item>
                      <Dropdown.Item>
                        <Button 
                          variant="outline-danger" 
                          className="w-100"
                          onClick={() => handleLogout()}
                        >
                          Logout
                        </Button>
                        </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                  
                </Nav.Item>
            </Nav>

          </Navbar.Collapse>
          </>
                        }
                        

                    </div>
                </div>


            </div>
    </Navbar>
    
    )
}
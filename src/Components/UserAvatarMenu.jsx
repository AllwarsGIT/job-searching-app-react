import { FaChevronDown } from "react-icons/fa";
import NavDropdown from 'react-bootstrap/NavDropdown';

function UserAvatarMenu() {
    return (
        <>
        <NavDropdown
              id="nav-dropdown-dark-example"
              title={<span
                 className="user-avatar-button dropdown-toggle" 
                style={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}>
          <img
            src="https://placehold.co/30"
            alt="User Avatar"
            width="30"
            height="30"
            className="rounded-circle me-2"
          />
          <FaChevronDown style={{ marginLeft: '8px' }} />
        </span>
              }
              className="user-avatar-button"
              menuVariant="dark"
            >
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
        </>
    )
}

export default UserAvatarMenu;
import SimpleButton from "../SimpleButton/SimpleButton.jsx";
import UserAvatarMenu from "../UserAvatarMenu/UserAvatarMenu.jsx";
import logo from '../../assets/react.svg';
import styles from './Navbar.module.css';

const Navbar = () => {
    return (
        <nav className={`navbar navbar-expand-lg ${styles.customNavbar}`}>
            <div className="container">
                <img src={logo} alt="logo" width="30" height="30" className="d-inline-block align-text-top me-2" />
                <a className="navbar-brand text-light" style={{ fontWeight: 600 }}>Job Page</a>
                <button className="navbar-toggler text-light" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav  ">
                        <SimpleButton className={styles.navButton}>Home</SimpleButton>
                        <SimpleButton className={styles.navButton}>Jobs</SimpleButton>
                        <SimpleButton className={styles.navButton}>Add Jobs</SimpleButton>
                    </ul>
                </div>
                <UserAvatarMenu />
             </div>
        </nav>


    );
}

export default Navbar;

import SimpleButton from "./SimpleButton";
import UserAvatarMenu from "./UserAvatarMenu";
import logo from '../assets/react.svg';

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg ">
            <div className="container">
                <img src={logo} alt="logo" width="30" height="30" className="d-inline-block align-text-top me-2" />
                <a className="navbar-brand text-light" >Job Listing</a>
                <button className="navbar-toggler text-light" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav  ">
                        <SimpleButton>Home</SimpleButton>
                        <SimpleButton>Jobs</SimpleButton>
                        <SimpleButton>Add Jobs</SimpleButton>
                    </ul>
                </div>
                <UserAvatarMenu />
             </div>
        </nav>


    );
}

export default Navbar;

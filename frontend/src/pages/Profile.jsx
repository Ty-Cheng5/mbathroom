import Navbar from '../components/Navbar';
import './Profile.css';

function Profile() {
    return (
        <div className="profile-page">
            <Navbar />

            <div className="page-body">
                <h1 className="page-title">Profile</h1>
            </div>
        </div>
    );
}

export default Profile;

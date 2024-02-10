import { Link } from "react-router-dom";

const NavigatorBar = () => {

    function handleLogout() {
        // remove user's cookie
        console.log('log out');
    }

    return(
        <>
            <nav>
                <ul>
                    <li>
                        <Link to={'/'}>
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link to={'/exam'}>
                            Exam | ทำแบบทดสอบ
                        </Link>
                        
                    </li>
                    <li>
                        <Link to={'/profile'}>
                            Profile
                        </Link>
                    </li>
                    <li>
                        <Link to={'/view-score'}>
                            คูคะแนน
                        </Link>
                    </li>
                    <li>
                        <Link to={'/signup'} >
                            Sign up
                        </Link>
                    </li>
                    <li>
                        <Link to={'/login'} >
                            Log in
                        </Link>
                    </li>
                    <li onClick={handleLogout}>
                        Log out
                    </li>
                </ul>
            </nav>
        </>
    )
}

export default NavigatorBar;
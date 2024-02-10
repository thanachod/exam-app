import { Link } from "react-router-dom";
import Exam from "./Exam";
import NavigatorBar from "../components/NavigatorBar";




const Home = () => {

    return (
        <>
            <NavigatorBar />
            <div>
                home
            </div>
            <div>
                <Link to={'/exam'}>
                    ทำแบบทดสอบ
                </Link>
            </div>
            <div>
                <Link to={'/profile'}>
                    Profile
                </Link>
            </div>
        </>
    )
}

export default Home;
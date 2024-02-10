import { useEffect, useState } from "react";
import NavigatorBar from "../components/NavigatorBar";


const Profile = () => {

    var [firstName, setFirstName] = useState('');
    var [lastName, setLastName] = useState('');
    var [email, setEmail] = useState('');
    var [studentID, setStudentID] = useState('');

    useEffect(() => {
        setFirstName('Ryan')
        setLastName('Lee')
        setEmail('ryan@email.com')
        setStudentID('1919191919')
    }, [])

    return (
        <>
            <NavigatorBar />
            <div>
                profile
            </div>
            <div>
                studentId: {studentID}
            </div>
            <div>
                email: {email}
            </div>
            <div>
                firstName: {firstName}
            </div>
            <div>
                lastName: {lastName}
            </div>

            <div>
                <div>
                    edit
                </div>
            </div>
        </>
    )
}

export default Profile;
import { useEffect, useState } from "react";
import NavigatorBar from "../components/NavigatorBar";
import Pagination from "../components/Pagination";
import Question from "../components/Question";
import { Navigate, useNavigate } from "react-router-dom";


const Exam = () => {
    
    console.log(Math.round(Math.random() * 3));

    const [loading, setLoading] = useState(true)
    const navigate = useNavigate();

    useEffect(() => {
        const fetchData = () => {
            setLoading(true)

            setLoading(false)
        }
        fetchData();
        
    },[])

    function handleSubmit(){
        console.log('sent exam.');
        navigate('/profile')
    }

    return (
        <>
            <NavigatorBar />
            <div>
                Exam
            </div>
            <div>
                
                <Question loading={loading}/>
            </div>
            <div>
                <button onClick={handleSubmit}>ส่งข้อสอบ</button>
            </div>
        </>
    )
}

export default Exam;
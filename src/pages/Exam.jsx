import { useEffect, useState } from "react";
import NavigatorBar from "../components/NavigatorBar";
import Pagination from "../components/Pagination";
import Question from "../components/Question";


const Exam = () => {
    
    console.log(Math.round(Math.random() * 3));

    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const fetchData = () => {
            setLoading(true)

            setLoading(false)
        }
        fetchData();
        
    },[])

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
                
            </div>
        </>
    )
}

export default Exam;
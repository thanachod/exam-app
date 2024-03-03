import { useState } from "react";
import NavigatorBar from "../components/NavigatorBar";


const ViewScores = () => {

    const [score, setScore] = useState('23')
    const [maxScore, setMaxScore] = useState('40')
    return (
        <>
            <NavigatorBar />
            <div>
                ดูคะแนนที่ผ่านมา
            </div>
            <div>
                {score} / {maxScore}
            </div>
        </>
    )
}

export default ViewScores;
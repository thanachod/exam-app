import { useEffect, useState } from "react";
import Pagination from "./Pagination";

export default function Question({loading}) {

    const [examLIst, setExamLIst] = useState([
        {
            examId: '1',
            examQuestion: 'คำถามข้อที่ 1',
            choice1: 'คำตอบ 1',
            choice2: 'คำตอบ 2',
            choice3: 'คำตอบ 3',
            choice4: 'คำตอบ 4',
            userAnswer: ''
        },
        {
            examId: '2',
            examQuestion: 'คำถามข้อที่ 2',
            choice1: 'คำตอบ 1',
            choice2: 'คำตอบ 2',
            choice3: 'คำตอบ 3',
            choice4: 'คำตอบ 4',
            userAnswer : ''
        },
        {
            examId: '3',
            examQuestion: 'คำถามข้อที่ 3',
            choice1: 'คำตอบ 1',
            choice2: 'คำตอบ 2',
            choice3: 'คำตอบ 3',
            choice4: 'คำตอบ 4',
            userAnswer : ''
        },
        {
            examId: '4',
            examQuestion: 'คำถามข้อที่ 4',
            choice1: 'คำตอบ 1',
            choice2: 'คำตอบ 2',
            choice3: 'คำตอบ 3',
            choice4: 'คำตอบ 4',
            userAnswer : ''
        },
        {
            examId: '5',
            examQuestion: 'คำถามข้อที่ 5',
            choice1: 'คำตอบ 1',
            choice2: 'คำตอบ 2',
            choice3: 'คำตอบ 3',
            choice4: 'คำตอบ 4',
            userAnswer : ''
        }
        
    ]);
    
    const [posts, setPosts] = useState([])
    const [currentPage, setCurrentPage] = useState('1')
    const postsPerPage = 3



    function handlePagination(event) {
        setCurrentPage(event.target.value)
    };

    function handleClick(event, key, answer){
        event.preventDefault()
        
        var isNewQuestion = true;
       
        examLIst.forEach((question, index) => {
            if(question.examId === key){

                isNewQuestion = false
                
                examLIst[index].userAnswer = answer;
                
            } 
        })

        if(isNewQuestion){
            setExamLIst(
                [
                    ...examLIst, {
                    
                        examId: key,
                        userAnswer: event.target.value
                        }
                ]
            )
        }
        const newExamList = [...examLIst]
        setExamLIst(newExamList)

        
    }

    useEffect(() => {
        
        console.log("update: ", examLIst);
        
    }, [examLIst])

    const indexOfLastPost = currentPage * postsPerPage
    const indexOfFirstPost = indexOfLastPost - postsPerPage
    const currentPost = examLIst.slice(indexOfFirstPost, indexOfLastPost)

    if(loading){
        return (
            <>
                <h1>loading...</h1>
            </>
        )
    }


    return(
        <>
            <div>
                {!currentPost ? "loading" : (
                    <div>
                        {currentPost.map((item) => (
                        (
                            
                            <div key={item.examId}>
                                <div>
                                {item.examId} : {item.examQuestion}
                                </div>
                                <div>
                                    <button value={item.choice1} 
                                    style={{ color: item.userAnswer === "choice1" ? "#F00" : ""}}
                                    onClick={(event) => handleClick(event, item.examId, "choice1")}>
                                        {item.choice1}
                                        </button><br/>
                                    <button value={item.choice2} 
                                    style={{ color: item.userAnswer === "choice2" ? "#F00" : ""}}
                                    onClick={(event) => handleClick(event, item.examId, "choice2")}>
                                        {item.choice2}
                                        </button><br/>
                                    <button value={item.choice3} 
                                    style={{ color: item.userAnswer === "choice3" ? "#F00" : ""}}
                                    onClick={(event) => handleClick(event, item.examId, "choice3")}>
                                        {item.choice3}
                                        </button><br/>
                                    <button value={item.choice4} 
                                    style={{ color: item.userAnswer === "choice4" ? "#F00" : ""}}
                                    onClick={(event) => handleClick(event, item.examId, "choice4")}>
                                        {item.choice4}
                                        </button>
                                </div>
                            </div>
                            
                        )
                        ))}
                    </div>
                )}
                
            </div>
            <div>
                <Pagination postsPerPage={3} length={examLIst.length} handlePagination={handlePagination}/>             
            </div>
            
        </>
    )
}
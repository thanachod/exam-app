import { useEffect, useState } from "react";
import Pagination from "./Pagination";

export default function Question({loading}) {

    const examLIst = [{
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
    ]
    
    const [answer, setAnswer] = useState({
        questionId: '',
        userAnswer: ''
    });

    const [posts, setPosts] = useState([])
    const [currentPage, setCurrentPage] = useState('1')
    const postsPerPage = 3

    function handlePagination(event) {
        setCurrentPage(event.target.value)
    };

    function handleClick(event){
        console.log(event.target.value);
    }

    // useEffect(() => {
        
    //     // const indexOfLastPost = currentPage * postsPerPage
    //     // const indexOfFirstPost = indexOfLastPost - postsPerPage
    //     // const currentPost = examLIst.slice(indexOfFirstPost, indexOfLastPost)
    //     // console.log('moving: ', currentPage);
        
    // }, [currentPage])

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
                                    <button value={item.choice1} onClick={handleClick}>{item.choice1}</button><br/>
                                    <button value={item.choice2} onClick={handleClick}>{item.choice2}</button><br/>
                                    <button value={item.choice3} onClick={handleClick}>{item.choice3}</button><br/>
                                    <button value={item.choice4} onClick={handleClick}>{item.choice4}</button>
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
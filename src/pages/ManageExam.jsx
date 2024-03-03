import { Button, Table } from "react-bootstrap";
import NavigatorBar from "../components/NavigatorBar";
import { useState } from "react";
import { useNavigate } from "react-router-dom";


export default function ManageExam() {

    const [titleList, setTitleList] = useState([
        {
            titleId: 1,
            title: "สะสารและเคมี",
            questionExam: 40,
            selectedExam: 30,
            subject: "วิทยาศาสตร์"
        },
        {
            titleId: 2,
            title: "พันธเคมี",
            questionExam: 40,
            selectedExam: 30,
            subject: "วิทยาศาสตร์"
        }
    ])
    const navigate = useNavigate();

    

    return(
        <>
            <NavigatorBar />
            <div>
                mangae exam
            </div>
            <div>
                <Button onClick={() => navigate('/add-exam')}>เพิ่มหัวเรื่องข้อสอบ</Button>
            </div>
            <div>
                  <Table striped bordered hover>
                    <thead>
                        <tr>
                        <th>#</th>
                        <th>หัวเรื่องข้อสอบ</th>
                        <th>หมวดวิชา</th>
                        <th>จำนวนข้อสอบทั้งหมด</th>
                        <th>จำนวนข้อสอที่ให้ทำ</th>
                        <th>ตัวเลือก</th>
                        </tr>
                    </thead>
                    <tbody>
                        {titleList.map((item) => (
                            <>
                                <tr>
                                    <td>{item.titleId}</td>
                                    <td>{item.title}</td>
                                    <td>{item.subject}</td>
                                    <td>{item.questionExam}</td>
                                    <td>{item.selectedExam}</td>
                                    <td><Button>แก้ไข</Button></td>
                                </tr>
                            </>
                        ))}
                        <tr>
                            <td colSpan={6}><Button onClick={() => navigate('/add-exam')}>เพิ่มหัวเรื่องข้อสอบ</Button></td>
                        </tr>
                    </tbody>
                </Table>                                                                                                                                                                                                                                    
            </div>
        </>
    )
}
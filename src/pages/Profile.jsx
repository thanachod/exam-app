import { useEffect, useState } from "react";
import NavigatorBar from "../components/NavigatorBar";
import { Table } from "react-bootstrap";

const Profile = () => {
  var [firstName, setFirstName] = useState("");
  var [lastName, setLastName] = useState("");
  var [email, setEmail] = useState("");
  var [studentID, setStudentID] = useState("");

  const [title, setTitle] = useState(["title1", "title2"]);

  useEffect(() => {
    setFirstName("Ryan");
    setLastName("Lee");
    setEmail("ryan@email.com");
    setStudentID("1919191919");
  }, []);

  return (
    <>
      <NavigatorBar />
      <div>
        <div>profile</div>
        <div>studentId: {studentID}</div>
        <div>email: {email}</div>
        <div>firstName: {firstName}</div>
        <div>lastName: {lastName}</div>
      </div>

      <div>
        <Table striped bordered hover variant="dark">
          <thead>
            <tr>
              <th>#</th>
              <th>Title</th>
              <th>Score</th>
              <th>View</th>
            </tr>
          </thead>
          <tbody>
            {title.map((item) => (
              <>
                <tr>
                  <td>1</td>
                  <td>{item}</td>
                  <td>23</td>
                  <td>
                    <button>view</button>
                  </td>
                </tr>
              </>
            ))}
          </tbody>
        </Table>
      </div>
    </>
  );
};

export default Profile;

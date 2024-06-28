import './App.css';
import {useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import studentData from './data/data.js';
import StudentList from "./components/StudentList";
import {FaPlus,FaFile} from 'react-icons/fa';
import {Button, FormGroup, FormLabel, FormText, ModalFooter} from "react-bootstrap";
import StudentForm from "./components/StudentForm";
function App() {
    const [students, setStudents] = useState(studentData);
    const [showForm, setShowForm] = useState(false);
    const [selectedStudent, setSelectedStudent] = useState(null);
    //
    const handleEdit = (student) => {
       setSelectedStudent(student);
       setShowForm(true);
    };
    const handleDelete = (id) => {
        setStudents(students.filter(student => student.id !== id));
    }
    const handleSave = (student) => {
        if (student.id) {
            setStudents(students.map(emp => emp.id === student.id ? student : emp));
        } else {
            student.id = student.length + 1;
            setStudents([...students, student]);
        }
        setShowForm(false);
    };
  return (
      <div className="container mt-5" >
          <nav className="navbar navbar-expand-lg navbar-light fw-bold " style={{backgroundColor:"#0077b6"}}>
              <a className="navbar-brand text-white p-3">THUY LOI UNIVERSITY</a>
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02"
                      aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                  <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                      <li className="nav-item active">
                          <a className="nav-link" href="#">Home <span className="sr-only"></span></a>
                      </li>
                      <li className="nav-item active">
                          <a className="nav-link text-white" href="#">Student Management <span className="sr-only"></span></a>
                      </li>
                  </ul>
                  <form className="d-flex form-inline my-2 my-lg-0" style={{marginLeft:"30rem"}}>
                      <input className="form-control mr-sm-2" type="search" placeholder="Search"/>
                      <button className="btn btn-outline-light my-2 my-sm-0 m-2" type="submit">Search</button>
                  </form>
              </div>
          </nav>
          <div className="d-flex justify-content-between mb-3 mt-4">
              <h2>Student Management</h2>
              <div>
                  <Button variant="success" className="me-2" onClick={() => setShowForm(true)}>
                      <FaPlus/> Add New Student
                  </Button>
                  <Button variant="warning">
                      <FaFile/> Export to Excel
                  </Button>
              </div>
          </div>
          <div>
              <StudentList students={students} onEdit={handleEdit} onDelete={handleDelete}></StudentList>
          </div>
          <StudentForm
              show={showForm}
              handleClose={() => setShowForm(false)}
              handleSave={handleSave}
              student={selectedStudent}
          />
          <div className="d-flex justify-content-between mt-3">
              <div>Showing {students.length} out of {studentData.length} entries</div>
              <ul className="pagination">
                  <li className="page-item disabled"><a className="page-link">Previous</a></li>
                  <li className="page-item"><a className="page-link">1</a></li>
                  <li className="page-item"><a className="page-link">2</a></li>
                  <li className="page-item active"><a className="page-link">3</a></li>
                  <li className="page-item"><a className="page-link">4</a></li>
                  <li className="page-item"><a className="page-link">5</a></li>
                  <li className="page-item"><a className="page-link">Next</a></li>
              </ul>
          </div>
          <ModalFooter className="d-flex justify-content-start fs-5 p-3" style={{backgroundColor: "#0077b6"}}>
              <FormGroup className="text-white">
                  <FormLabel className="fw-bold">THUY LOI UNIVERSITY</FormLabel>
                  <FormText>
                      <div className="text-white">Address: 175 Tay Son, Dong Da</div>
                      <div className="text-white">Phone: 0977038592</div>
                      <div className="text-white">Email: 2251172466@e.tlu.edu.vn</div>
                  </FormText>
              </FormGroup>
          </ModalFooter>
      </div>
  );
}

export default App;

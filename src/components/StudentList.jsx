import React from 'react';
import { Table, Button } from 'react-bootstrap';
import { FaCog, FaTimes } from 'react-icons/fa';
function StudentList({students, onEdit, onDelete}) {
    return (
        <div className="table-responsive container mt-5">
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Numerical</th>
                        <th>Name</th>
                        <th>Day Of Brith</th>
                        <th>Position</th>
                        <th>Status</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                {students.map((student) => (
                    <tr key={student.id}>
                        <td>{student.id}</td>
                        <td>{student.name}</td>
                        <td>{student.date}</td>
                        <td>{student.position}</td>
                        <td>{student.status}</td>
                        <td>
                            <Button onClick={() => onEdit(student)} className="me-2">
                                <FaCog></FaCog>
                            </Button>
                            <Button onClick={() => onDelete(student.id)} className="me-2">
                                <FaTimes></FaTimes>
                            </Button>
                        </td>
                    </tr>
                ))}
                </tbody>
            </Table>
        </div>
    );
}

export default StudentList;
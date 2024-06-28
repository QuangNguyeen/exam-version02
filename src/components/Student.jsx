import React from 'react';
import { Button } from 'react-bootstrap';
import { FaCog, FaTimes } from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css';

const Student = ({ student, onEdit, onDelete }) => {
    return (
        <tr key={student.id}>
            <td>{student.id}</td>
            <td>{student.name}</td>
            <td>{student.date}</td>
            <td>{student.position}</td>
            <td>{student.status}</td>
            <td>
                <Button onClick={() => onEdit(student)} title="Edit" >
                    <FaCog />
                </Button>
                <Button onClick={() => onDelete(student.id)} title="Delete">
                    <FaTimes />
                </Button>
            </td>
        </tr>
    );
}

export default Student;

import React from 'react';
import { Button } from 'react-bootstrap';
import { FaCog, FaTimes } from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css';

function Student({ student, onEdit, onDelete }) {
    return (
        <tr>
            <td>{student.id}</td>
            <td>{student.name}</td>
            <td>{student.date}</td>
            <td>{student.position}</td>
            <td>{student.status}</td>
            <td>
                <Button onClick={() => onEdit(student)} title="Edit" style={{backgroundColor:"#0077b6"}}>
                    <FaCog />
                </Button>
                <Button onClick={() => onDelete(student)} title="Delete" style={{backgroundColor:"#0077b6"}}>
                    <FaTimes />
                </Button>
            </td>
        </tr>
    );
}

export default Student;

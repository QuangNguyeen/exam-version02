import React from 'react';
import {useState, useEffect} from 'react'
import {Modal, Button, Form, FormControl, FormGroup, FormLabel, FormSelect} from 'react-bootstrap';
const StudentForm = ({show, handleClose, handleSave, student}) => {
    const [form, setForm] = useState({id:'', name:'', date:'', position:'', status:''});
    const [inputValue, setInputValue] = useState('');
    const [error, setError] = useState('');
    useEffect(() =>{
        if(student){
            setForm(student);
        }else{
            setForm({id:'', name:'', date:'', position:'', status:''});
        }
    }, [student]);

    const handleChange = (e) => {
        const { name, value } = e.target;
         if(name === 'name' && value.length > 50){
            setError("Khong nhap qua 50 ki tu");
        } else{
            setError('');
        }
        setForm({ ...form, [name]: value });
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        if(!error){
            handleSave(form);
        }
    }
    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Information</Modal.Title>
            </Modal.Header>
            <Form onSubmit={handleSubmit}>
                <Modal.Body>
                    <Form.Group controlId="formName">
                        <Form.Label>Name</Form.Label>
                        <FormControl type="text" name="name" value={form.name} onChange={handleChange} required></FormControl>
                        {error && <p style={{ color: 'red' }}>{error}</p>}
                    </Form.Group>
                    <FormGroup>
                        <Form.Label>Day of Birth</Form.Label>
                        <FormControl type="text" name="date" value={form.date} onChange={handleChange} required></FormControl>
                    </FormGroup>
                    <FormGroup>
                        <FormLabel>Position</FormLabel>
                        <FormControl type="text" name="position" value={form.position} onChange={handleChange} required></FormControl>
                    </FormGroup>
                    <FormGroup>
                        <FormLabel>Status</FormLabel>
                        <FormSelect name="status" value={form.status} onChange={handleChange} required>
                            <option value="Active">Active</option>
                            <option value="Inactive">Inactive</option>
                            <option value="Suspended">Suspended</option>
                        </FormSelect>
                    </FormGroup>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Cancel
                    </Button>
                    <Button variant="primary" type="submit">
                        {student ? 'Save Changes' : 'Add Student'}
                    </Button>
                </Modal.Footer>
            </Form>
        </Modal>
    );
}

export default StudentForm;
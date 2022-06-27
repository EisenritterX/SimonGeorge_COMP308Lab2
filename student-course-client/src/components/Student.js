import React, { useState } from 'react';
import axios from 'axios';
import Spinner from 'react-bootstrap/Spinner';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import "./login.css";
//
import { useNavigate } from 'react-router-dom';


function CreateStudent(props) {
  let navigate = useNavigate()
  let myCurrentDate = new Date()
  let date = myCurrentDate.getDate();
  //
  const [student, setStudent] = useState({ _id: '', studentNumber: '', password: '', studentFirstName: '', studentLastName: '', address: '', city: '', studentPhone: '',
                studentEmail: '', studentProgram: '', enrollDate: date, graduationDate: date });
  const [showLoading, setShowLoading] = useState(false);
  const apiUrl = "http://localhost:3000/students";
    //
  const saveStudent = (e) => {
    setShowLoading(true);
    e.preventDefault();
    const data = { studentNumber: student.studentNumber, password: student.password, studentFirstName: student.studentFirstName, studentLastName: student.studentLastName, address: student.address,
        city: student.city, studentPhone: student.studentPhone, studentEmail: student.studentEmail, studentProgram: student.studentProgram, enrollDate: student.enrollDate, 
        graduationDate: student.graduationDate };
      //use promises
      axios.post(apiUrl, data)
      .then((result) => {
        setShowLoading(false);
        navigate('/studentList')
      }).catch((error) => setShowLoading(false));
  };
  // handles onChange event
  const onChange = (e) => {
    e.persist();
    setStudent({...student, [e.target.name]: e.target.value});
  }

  return (
    <div className='login'>
      {showLoading && 
        <Spinner animation="border" role="status">
          <span className="sr-only">Loading...</span>
        </Spinner> 
      } 
      
        <Form onSubmit={saveStudent}>
          <Form.Group>
            <Form.Label> Student Number:</Form.Label>
            <Form.Control type="text" name="studentNumber" id="studentNumber" placeholder="Student Number" value={student.studentNumber} onChange={onChange} />
          </Form.Group>
          <Form.Group>
            <Form.Label> Password:</Form.Label>
            <Form.Control type="text" name="password" id="password" placeholder="Password" value={student.password} onChange={onChange} />
          </Form.Group>
          <Form.Group>
            <Form.Label>First Name:</Form.Label>
            <Form.Control type="text" name="studentFirstName" id="studentFirstName" placeholder="First Name" value={student.studentFirstName} onChange={onChange} />            
          </Form.Group>
          <Form.Group>
            <Form.Label>Last Name:</Form.Label>
            <Form.Control type="text" name="studentLastName" id="studentLastName" placeholder="Last Name" value={student.studentLastName} onChange={onChange} />            
          </Form.Group>
          <Form.Group>
            <Form.Label>Address:</Form.Label>
            <Form.Control type="text" name="address" id="address" placeholder="Address" value={student.address} onChange={onChange} />            
          </Form.Group>
          <Form.Group>
            <Form.Label>City:</Form.Label>
            <Form.Control type="text" name="city" id="city" placeholder="City" value={student.city} onChange={onChange} />            
          </Form.Group>
          <Form.Group>
            <Form.Label>Phone Number:</Form.Label>
            <Form.Control type="text" name="studentPhone" id="studentPhone" placeholder="Phone Number" value={student.studentPhone} onChange={onChange} />            
          </Form.Group>
          <Form.Group>
            <Form.Label>Email:</Form.Label>
            <Form.Control type="text" name="studentEmail" id="studentEmail" placeholder="Email" value={student.studentEmail} onChange={onChange} />            
          </Form.Group>
          <Form.Group>
            <Form.Label>Program Name:</Form.Label>
            <Form.Control type="text" name="studentProgram" id="studentProgram" placeholder="Program Name" value={student.studentProgram} onChange={onChange} />            
          </Form.Group>
          
          <Form.Group>
            <Form.Label>Enroll Date:</Form.Label>
            <Form.Control type="date" name="enrollDate" id="enrollDate" placeholder="Enroll Date" value={student.enrollDate} onChange={onChange} />
          </Form.Group>
          <Form.Group>
            <Form.Label>Graduation Date:</Form.Label>
            <Form.Control type="date" name="graduationDate" id="graduationDate" placeholder="Graduation Date" value={student.graduationDate} onChange={onChange} />
          </Form.Group>
          <Button variant="primary" type="submit">
            Save
          </Button>

        </Form>
    </div>
  );
}

export default CreateStudent;


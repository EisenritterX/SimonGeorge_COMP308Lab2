import React, { useState } from 'react';
import axios from 'axios';
import Spinner from 'react-bootstrap/Spinner';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import "./login.css";
//
import { useNavigate } from 'react-router-dom';


function CreateTask(props) {
  let navigate = useNavigate()
  let myCurrentDate = new Date()
  let date = myCurrentDate.getDate();
  //
  const [task, setTask] = useState({ _id: '', studentNumber: '', password: '', studentFirstName: '', studentLastName: '', address: '', city: '', studentPhone: '',
                studentEmail: '', studentProgram: '', enrollDate: date, graduationDate: date });
  const [showLoading, setShowLoading] = useState(false);
  const apiUrl = "http://localhost:3000/tasks";
    //
  const saveTask = (e) => {
    setShowLoading(true);
    e.preventDefault();
    const data = { studentNumber: task.studentNumber, password: task.password, studentFirstName: task.password, studentLastName: task.studentLastName, address: task.address,
        city: task.city, studentPhone: task.studentPhone, studentEmail: task.studentEmail, studentProgram: task.studentProgram, enrollDate: task.enrollDate, 
        graduationDate: task.graduationDate };
      //use promises
      axios.post(apiUrl, data)
      .then((result) => {
        setShowLoading(false);
        navigate('/list')
      }).catch((error) => setShowLoading(false));
  };
  // handles onChange event
  const onChange = (e) => {
    e.persist();
    setTask({...task, [e.target.name]: e.target.value});
  }

  return (
    <div className='login'>
      {showLoading && 
        <Spinner animation="border" role="status">
          <span className="sr-only">Loading...</span>
        </Spinner> 
      } 
      
        <Form onSubmit={saveTask}>
          <Form.Group>
            <Form.Label> Student Number:</Form.Label>
            <Form.Control type="text" name="studentNumber" id="studentNumber" placeholder="Student Number" value={task.studentNumber} onChange={onChange} />
          </Form.Group>
          <Form.Group>
            <Form.Label> Password:</Form.Label>
            <Form.Control type="text" name="password" id="password" placeholder="Password" value={task.password} onChange={onChange} />
          </Form.Group>
          <Form.Group>
            <Form.Label>First Name:</Form.Label>
            <Form.Control type="text" name="studentFirstName" id="studentFirstName" placeholder="First Name" value={task.studentFirstName} onChange={onChange} />            
          </Form.Group>
          <Form.Group>
            <Form.Label>Last Name:</Form.Label>
            <Form.Control type="text" name="studentLastName" id="studentLastName" placeholder="Last Name" value={task.studentLastName} onChange={onChange} />            
          </Form.Group>
          <Form.Group>
            <Form.Label>Address:</Form.Label>
            <Form.Control type="text" name="address" id="address" placeholder="Address" value={task.address} onChange={onChange} />            
          </Form.Group>
          <Form.Group>
            <Form.Label>City:</Form.Label>
            <Form.Control type="text" name="city" id="city" placeholder="City" value={task.city} onChange={onChange} />            
          </Form.Group>
          <Form.Group>
            <Form.Label>Phone Number:</Form.Label>
            <Form.Control type="text" name="studentPhone" id="studentPhone" placeholder="Phone Number" value={task.studentPhone} onChange={onChange} />            
          </Form.Group>
          <Form.Group>
            <Form.Label>Email:</Form.Label>
            <Form.Control type="text" name="studentEmail" id="studentEmail" placeholder="Email" value={task.studentEmail} onChange={onChange} />            
          </Form.Group>
          <Form.Group>
            <Form.Label>Program Name:</Form.Label>
            <Form.Control type="text" name="studentProgram" id="studentProgram" placeholder="Program Name" value={task.studentProgram} onChange={onChange} />            
          </Form.Group>
          
          <Form.Group>
            <Form.Label>Enroll Date:</Form.Label>
            <Form.Control type="date" name="enrollDate" id="enrollDate" placeholder="Enroll Date" value={task.enrollDate} onChange={onChange} />
          </Form.Group>
          <Form.Group>
            <Form.Label>Graduation Date:</Form.Label>
            <Form.Control type="date" name="graduationDate" id="graduationDate" placeholder="Graduation Date" value={task.graduationDate} onChange={onChange} />
          </Form.Group>
          
          

          <Button variant="primary" type="submit">
            Save
          </Button>

        </Form>
    </div>
  );
}

export default CreateTask;


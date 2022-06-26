import React, { useState } from 'react';
import axios from 'axios';
import Spinner from 'react-bootstrap/Spinner';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import "./login.css";
//
import { useNavigate } from 'react-router-dom';

//
function CreateTask(props) {
  let navigate = useNavigate()
  let myCurrentDate = new Date()
  let date = myCurrentDate.getDate();
    
  const [task, setTask] = useState({ _id: '', courseCode: '', courseName: '', sectionID: '', semester: '' });
  const [showLoading, setShowLoading] = useState(false);
  const apiUrl = "http://localhost:3000/tasks";
    //
  const saveTask = (e) => {
    setShowLoading(true);
    e.preventDefault();
    const data = { courseCode: task.courseCode, courseName: task.courseName, sectionID: task.sectionID, semester: task.semester };
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
            <Form.Label> Course Code:</Form.Label>
            <Form.Control type="text" name="courseCode" id="courseCode" placeholder="Course Code" value={task.courseCode} onChange={onChange} />
          </Form.Group>
          <Form.Group>
            <Form.Label> Course Name:</Form.Label>
            <Form.Control type="text" name="courseName" id="courseName" placeholder="Course Name" value={task.courseName} onChange={onChange} />
          </Form.Group>
          <Form.Group>
            <Form.Label>Section ID:</Form.Label>
            <Form.Control type="text" name="sectionID" id="sectionID" placeholder="Section ID" value={task.sectionID} onChange={onChange} />            
          </Form.Group>
          <Form.Group>
            <Form.Label>Semester:</Form.Label>
            <Form.Control type="text" name="semester" id="semester" placeholder="Semester" value={task.semester} onChange={onChange} />
          </Form.Group>        

          <Button variant="primary" type="submit">
            Save
          </Button>

        </Form>
    </div>
  );
}

export default CreateTask;


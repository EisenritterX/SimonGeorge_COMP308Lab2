
import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  Routes
} from "react-router-dom";
//
// This app requires react-bootstrap and bootstrap installed: 
//    npm install react-bootstrap bootstrap
//

import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import logo from './logo.svg';

import './App.css';
import Home from './components/Home';
import Login from './components/Login';
import Student from './components/Student';
import Course from './components/Course';
import StudentList from './components/StudentList';
import CourseList from './components/CourseList';

function App() {
  return (

        // <h1>
        //   Simon and George's Student Course Database 
        // </h1>

        <Router>
      <Navbar bg="primary" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand href="#home">React Client For Articles App</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link as={Link} to="/home" >Home</Nav.Link>
              <Nav.Link as={Link} to="/login">Login</Nav.Link>
              <Nav.Link as={Link} to="/student">Student</Nav.Link>
              <Nav.Link as={Link} to="/course">Course</Nav.Link>
              <Nav.Link as={Link} to="/studentList">Student List</Nav.Link>
              <Nav.Link as={Link} to="/courseList">Course List</Nav.Link>
              {/*<Nav.Link as={Link} to="/list">List of Users</Nav.Link>
              <Nav.Link as={Link} to="/listarticles">List of Articles</Nav.Link>
              <Nav.Link as={Link} to="/create">Sign Up</Nav.Link> */}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    
      <div>
        <Routes>
          <Route index element={<Home />} />
          <Route path="home" element={<Home />} />         
          <Route path="login" element= {< Login />}  />
          <Route path="student" element= {< Student />}  />
          <Route path="course" element= {< Course />}  />
          <Route path="studentList" element= {< StudentList />}  />
          <Route path="courseList" element= {< CourseList />}  />
          {/* <Route path="create" element ={< CreateUser />} /> */}
          {/* <Route path="showcourse/:id" element= {< Show />}  /> */}
          {/* 
          <Route path="list" element= {< List />}  />
          <Route path="listarticles" element= {< ListArticles />}  />
          <Route path="edit/:id" element= {< EditUser />}  />
          <Route path="show/:id" element= {< ShowUser />}  />
          
          <Route path="editarticle/:id" element= {< EditArticle />}  /> */}

        </Routes>
      </div>

    </Router>


        
  );
}

export default App;

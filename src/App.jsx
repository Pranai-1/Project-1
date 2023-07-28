import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Landing from './components/landing';
import Signup from './components/Signup';
import Login from './components/Login';
import CreateCourses from './components/Createcourses';
import ShowCourses from './components/Showcourses';
import UpdateCourses from './components/UpdateCourses';
import Navbar from './components/navbar';
import { useState } from 'react';

function App() {
    const[logged,setLogged]=useState(false)
    return (
        <Router>
            <Navbar logged={logged} setLogged={setLogged}/>
            <Routes>
                <Route  path="/admin/" element={<Landing logged={logged} setLogged={setLogged}/>} />
                <Route path="/admin/login" element={<Login logged={logged} setLogged={setLogged}/>} />
                <Route path="/admin/signup" element={<Signup logged={logged} setLogged={setLogged}/>} />
                <Route path="/admin/create" element={<CreateCourses logged={logged} setLogged={setLogged}/>} />
                <Route path="/admin/courses" element={<ShowCourses logged={logged} setLogged={setLogged}/>} />
                <Route path="/admin/courses/:id" element={<UpdateCourses logged={logged} setLogged={setLogged}/>} />
                
            </Routes>
        </Router>
    );
}

export default App;
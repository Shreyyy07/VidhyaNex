import React from 'react';
import { BrowserRouter as Router, Routes,Route,Navigate} from 'react-router-dom';
import Signup from './Pages/Signup';
import Login from './Pages/Login';
// import Layout from './Components/Shared/Layout';
import Dashboard from './Pages/Dashboard';
import Panel from './Pages/Panel';

function App() {
    return (
        <Router>
                <Routes>
                    
                    <Route path="/" element={<Navigate to="/signup" />}></Route>
                    <Route path="/signup" element={<Signup />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/panel" element={<Panel />} />
                    {/* <Route path="layout" element={<Layout/>}>  */}
                    <Route path="/dashboard" element={<Dashboard />}/>
                    {/* </Route>
                    </Route> */}
                    

                </Routes>
        </Router>
    );
}

export default App;

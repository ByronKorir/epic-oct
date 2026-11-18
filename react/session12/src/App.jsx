import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './components/HomePage';
import UserList from './components/UserList';
import UserDetails from './components/UserDetails';


function About() {
  return <h1>About Page</h1>;
}

function Contact() {
  return <h1>Contact Page</h1>;
}
 
export default function App() {
  return (
    <BrowserRouter>
      {/* Navigation */}
      <Navbar/>

      {/* Routes */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/users" element={<UserList />} />
        <Route path="/users/:userId" element={<UserDetails />} />
      </Routes>
    </BrowserRouter>
  );
}
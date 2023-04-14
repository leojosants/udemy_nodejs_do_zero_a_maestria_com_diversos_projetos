//   
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

/*  Components/Pages  */
import Login from './components/pages/Auth/Login';
import Register from './components/pages/Auth/Register';
import Home from './components/pages/Home';

/*  Components/Layouts  */
import Navbar from './components/layout/Navbar/Navbar';
import Footer from './components/layout/Footer/Footer';
import Container from './components/layout/Container/Container';

// 
function App() {
  return (

    <Router>
      <Navbar />

      <Container>
        <Routes>
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/' element={<Home />} />
        </Routes>
      </Container>

      <Footer />
    </Router>

  );
};

export default App;
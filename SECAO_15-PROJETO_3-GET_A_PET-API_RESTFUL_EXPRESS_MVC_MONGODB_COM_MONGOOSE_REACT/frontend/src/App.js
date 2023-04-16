//  React   
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

/*  Components/Pages  */
import Login from './components/pages/Auth/Login';
import Register from './components/pages/Auth/Register';
import Home from './components/pages/Home';
import Profile from './components/pages/User/Profile/Profile';
import MyPet from './components/pages/Pet/MyPet/MyPet';
import AddPet from './components/pages/Pet/AddPet/AddPet';

/*  Components/Layouts  */
import Navbar from './components/layout/Navbar/Navbar';
import Footer from './components/layout/Footer/Footer';
import Message from './components/layout/Message/Message';
import Container from './components/layout/Container/Container';

import { UserProvider } from './context/UserContext'; //  Context

// 
function App() {
  return (

    <Router>
      <UserProvider>
        
        <Navbar />
        <Message />

        <Container>
          <Routes>
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
            <Route path='/user/profile' element={<Profile />} />
            <Route path='/pet/MyPets' element={<MyPet />} />
            <Route path='/pet/add' element={<AddPet />} />
            <Route path='/' element={<Home />} />
          </Routes>
        </Container>

        <Footer />
        
      </UserProvider>
    </Router>

  );
};

export default App;
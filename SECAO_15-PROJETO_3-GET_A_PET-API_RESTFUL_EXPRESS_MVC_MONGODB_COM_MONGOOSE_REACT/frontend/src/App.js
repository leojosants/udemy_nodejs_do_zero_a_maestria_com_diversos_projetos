//  React   
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

/*  Components/Pages  */
import Profile from './components/pages/User/Profile/Profile';
import MyPets from './components/pages/Pet/MyPets/MyPets';
import AddPet from './components/pages/Pet/AddPet/AddPet';
import Register from './components/pages/Auth/Register';
import Login from './components/pages/Auth/Login';
import Home from './components/pages/Home';

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
            <Route path='/pet/mypets' element={<MyPets />} />
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
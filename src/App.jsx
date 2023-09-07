import { Route, Routes } from 'react-router-dom';
import GymLandingPage from './pages/GymLandingPage';
import FitnessAppPage from './pages/FitnessAppPage';
import EmptyPage from './pages/EmptyPageGym';

function App() {
  return (
    <Routes>
      <Route path="/" element={<GymLandingPage />} />
      <Route path="/fitness" element={<FitnessAppPage />} />
      <Route path="/empty" element={<EmptyPage />} />
      <Route path='*' element={<div className='text-7xl text-center'>404</div>} />
    </Routes>
  )
}

export default App
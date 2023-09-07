import { Route, Routes } from 'react-router-dom';
import GymLandingPage from './pages/GymLandingPage';
import FitnessAppPage from './pages/FitnessAppPage';
import EmptyPage from './pages/EmptyPageGym';

function App() {
  return (
    <Routes>
      {/* Pind gym page */}
      <Route path="/" element={<GymLandingPage />} />
      {/* another peg. if possible */}
      <Route path="/fitness" element={<FitnessAppPage />} />
      {/*all menu item except Home will directed to this route*/}
      <Route path="/empty" element={<EmptyPage />} />
      {/*if router can't find path, it will appear*/}
      <Route path='*' element={<div className='text-7xl text-center'>404</div>} />
    </Routes>
  )
}
export default App
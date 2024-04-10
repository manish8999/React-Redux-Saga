import {Route, Routes } from 'react-router-dom';
import Score from '../components/score';
import Home from "../components/Home";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path='/score' element={<Score />} />
      <Route path='/' element={<Home />} />

    </Routes>
  );
};
export default AllRoutes;

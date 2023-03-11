import { Route, Routes } from "react-router-dom"

import './App.css';
import Navbar from './Components/Navbar';
import BaicInfo from './Components/Forms/BasicInfo';
// import Preview from './Components/Preview';
import Header from './Components/Header';
import WorkExperience from './Components/Forms/WorkExperience';
import Summary from "./Components/Forms/Summary";
import Others from "./Components/Forms/Others";
import Title from "./Components/Title";
import Achievement from "./Components/Forms/Achievement";
import ResumeFormat1 from "./Components/Resume/ResumeFormat1";
// import Colors from "./Components/Colors";
import Button from "./Components/Buttons/Button";

function App() {
  return (
    <div className="main__container">

      <div className="resumeBuilder__container">
        <Header />
        <Title title="Resume Builder" />
        {/* <Colors/> */}
        <div className="format__button">
          <Button title="Choose Resume Format" />
          <Button title="Download" />
        </div>
        <div className='resume__form__container'>
          <Navbar />
          <Routes>
            <Route exact path="/" element={<BaicInfo />}></Route>
            <Route exact path="*" element={<BaicInfo />}></Route>
            <Route exact path="/work" element={<WorkExperience />}></Route>
            <Route exact path="/summary" element={<Summary />}></Route>
            <Route exact path="/other" element={<Others />}></Route>
            <Route exact path="/achievement" element={<Achievement />}></Route>
          </Routes>
          {/* <Preview /> */}
        </div>
        <Title title="Your Resume" />
        <ResumeFormat1 />
        <div className="down__btn">
          <Button title="Download Your Resume" />
        </div>

      </div>
    </div>
  );
}

export default App;

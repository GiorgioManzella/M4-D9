
import './App.css';
import CustomFooter from './Components/CustomFooter';
import CustomNavBar from './Components/CustomNavbar';
import CustomSideBar from './Components/CustomSideBar';
import MainSection from './Components/MainComponent';

function App() {
  return (
    <div className="App">
      
        <CustomNavBar/>
        <CustomSideBar/>
        <MainSection/>
        <CustomFooter/>
       
      
    </div>
  );
}

export default App;

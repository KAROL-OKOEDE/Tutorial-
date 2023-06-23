import { BrowserRouter, Route, Routes } from 'react-router-dom';
import New from './Components/BioData';
import ReadRecords from './Components/read';
import UpdateForm from "./Components/UpdateForm";
import './App.css';
import HomePage from './Components/Home';



const App = () => {
  return (
    <BrowserRouter>
    <Routes> 
      <Route path= '/read'element={<ReadRecords/>}/>
      <Route path='/' element={<HomePage/>}/>
      <Route path='/create' element={<New/>}/>
      <Route path='/update' element={<UpdateForm id={0} onClose={function (): void {
          throw new Error('Function not implemented.');
        } }/>}/>
       {/* <Route path= '/read'element={<.../>}/>  */}
    </Routes>
    </BrowserRouter>
    
  )

  

}
export default App;

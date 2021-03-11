import {fragment} from 'react'
import './App.css';
import Webcam from "react-webcam";

const WebcamComponent = () => <Webcam />;

function App() {
  return (
      <fragment>
          <WebcamComponent/>
      </fragment>
    
    );
}

export default App;


import './App.css';
import Nav1 from './components/Nav';
import MainHeading from './components/MainHeading';
import Events from './components/Events';
import MainEvent from './components/MainEvent';
import Utube from './components/Utube';
import Footer from './components/Footer';
import { MyComponent } from './components/MyComponent';
import {BrowserRouter as Router,Route, Routes} from 'react-router-dom';
import  EventsPage from './components/EventsPage';
import ImageCoord from './components/ImageCoord';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route exact path="/" element={
            <div>
            <Nav1 />
            <div id='birds'>
            <MyComponent />
            <MainHeading />
            
            <Events ID="Upcoming Events" color="white" />
            </div>
            
            <MainEvent />
            <Events ID="Past Events" color="black" />
            <Utube />
            <Footer />
            </div>
          }>

          </Route>
          <Route exact path="/events" element={
            <div>
            <Nav1 />
            <EventsPage />
            <Footer />
            </div>
          }>

          </Route>
          <Route exact path="/Team" element={
            <div>
            <Nav1 />
            <ImageCoord />
            <Footer />
            </div>
          }>

          </Route>
        </Routes>
      </Router>
   
      
    </div>
  );
}

export default App;

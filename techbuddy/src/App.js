import 'react-chatbot-kit/build/main.css';
import { Route, Routes, Link } from "react-router-dom"
import ChatBot from './chatbot/ChatBot';
import About from './pages/About';
import DashBoard from './pages/DashBoard';
import Home from './pages/Home';
import Grafana from './pages/DashBoard_Grafana';
import "./App.css"
import RateLimit from './pages/DashBoard_Rate_Limit';
import ContactForm from './pages/DashBoard_Contactform';
import TestEnvironment from './pages/DashBoard_Test_Environment';



const App = () => {
  return (
    <div>
      <nav>
        <ul className='app-ul'>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/techbuddy">TechBuddy</Link></li>
          <li><Link to="/dashboard">Admin dashboard</Link></li>
          <li><Link to="/om">Om Techbuddy</Link></li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/techbuddy" element={<ChatBot />} />
        <Route path="/dashboard" element={<DashBoard />}>
          <Route index element={<Grafana />} />
          <Route path="/dashboard/trafik" element={< Grafana />} />
          <Route path="/dashboard/uptime" element={< RateLimit />} />
          <Route path="/dashboard/kontakformular" element={< ContactForm />} />
          <Route path="/dashboard/testmiljø" element={< TestEnvironment />} />
        </Route>
        <Route path="/om" element={<About />} />
      </Routes>
    </div>
  )
};
export default App;


// import { ReactNotifications } from "react-notifications-component";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import { VisionContextProvider } from "./VisionContext";
import Home from "./components/Home";
import Board from "./components/Board";
import "./App.css";
// import "react-notifications/lib/notifications.css";
import Finance1 from "./components/Finance1";
import Goal from "./components/Goal";
import Download from "./components/Download";
import Health from "./components/Health";

import Education from "./components/Education";
import Family from "./components/Family";
import Career from "./components/Career";
// import { ReactNotifications } from "react-notifications-component";

function App() {
  return (
    <VisionContextProvider>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/board" element={<Board />} />
          <Route exact path="/goals" element={<Goal />} />
          <Route exact path="/download" element={<Download />} />
          <Route exact path="/finance1" element={<Finance1 />} />
          <Route exact path="/health" element={<Health />} />
          <Route exact path="/education" element={<Education />} />
          <Route exact path="/family" element={<Family />} />
          <Route exact path="/career" element={<Career />} />
        </Routes>
      </BrowserRouter>
    </VisionContextProvider>
  );
}

export default App;

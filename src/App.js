import { Routes, Route } from "react-router-dom";
import Dashboard from "./Pages/Dashboard/Dashboard";
import Launchpad from "./Pages/LaunchPad/LaunchPad";
import Routered from "./Route/Route";
import Request from "./Pages/Reputation/Request";
import OverView from "./Pages/Reputation/OverView";
import Reputation from "./Pages/Reputation/Reputation";
import Calendars from "./Pages/Calender/Calendar";
import BusinessInfo from "./Pages/Settings/BusinessInfo/BusinessInfo";
import Sites from "./Pages/Sites/Sites";
import Pipelines from "./Pages/Pipelines/Pipelines";

function App() {
  return (
    <Routes>
      <Route path="" element={<Routered />}>
        <Route path="/" element={<Launchpad />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/calendar" element={<Calendars />} />
        <Route path="/sites" element={<Sites />} />
        <Route path="/settings/businessInfo" element={<BusinessInfo />} />
        <Route path="/pipelines" element={<Pipelines />} />
        <Route path="/reputation" element={<Reputation />}>
          <Route path="/reputation" element={<OverView />} />
          <Route path="/reputation/request" element={<Request />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;

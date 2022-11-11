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
import Funnels from "./Pages/Sites/Funnel";
import Pipelines from "./Pages/Pipelines/Pipelines";
import Websites from "./Pages/Sites/Websites";
import Blog from "./Pages/Sites/Blog";
import Wordpress from "./Pages/Sites/Wordpress";
import Review from './Pages/Reputation/Review';
import Conversation from "./Pages/Conversation/Conversation";
import Listing from './Pages/Reputation/Listing';
import Contacts from './Pages/Contacts/Contacts';

function App() {
  return (
    <Routes>
      <Route path="" element={<Routered />}>
        <Route path="/" element={<Launchpad />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/conversation" element={<Conversation />} />
        <Route path="/calendar" element={<Calendars />} />
        <Route path="/contacts" element={<Contacts />} ></Route>
        <Route path="/sites" element={<Sites />}>
          <Route path="/sites/" element={<Funnels />} />
          <Route path="/sites/websites" element={<Websites />} />
          <Route path="/sites/blog" element={<Blog />} />
          <Route path="/sites/wordpress" element={<Wordpress />} />
        </Route>
        <Route path="/settings/businessInfo" element={<BusinessInfo />} />
        <Route path="/pipelines" element={<Pipelines />} />
        <Route path="/reputation" element={<Reputation />}>
          <Route path="/reputation" element={<OverView />} />
          <Route path="/reputation/request" element={<Request />} />
          <Route path="/reputation/review" element={<Review />} />
          <Route path="/reputation/listing" element={<Listing />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;

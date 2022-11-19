import { Routes, Route } from "react-router-dom";
import Dashboard from "./Pages/Dashboard/Dashboard";
import Launchpad from "./Pages/LaunchPad/LaunchPad";
import Routered from "./Route/Route";
import Request from "./Pages/Reputation/Request";
import OverView from "./Pages/Reputation/OverView";
import Reputation from "./Pages/Reputation/Reputation";
import Calendars from "./Pages/Calender/Calendar";
import BusinessInfo from "./Pages/Settings/BusinessInfo/BusinessInfo";
import Pipelines from "./Pages/Settings/pipelines/Pipelines";
import Review from "./Pages/Reputation/Review";
import Conversation from "./Pages/Conversation/Conversation";
import Listing from "./Pages/Reputation/Listing";
import Contacts from "./Pages/Contacts/Contacts";
import Phonenumber from "./Pages/Phonenumbers/Phonenumber";
import Customvalues from "./Pages/Settings/customvalues/Customvalues";
import Profile from "./Pages/Settings/Profile/Profile";
import SmartList from "./Pages/Contacts/SmartList";
import Calendar from "./Pages/Settings/Calender/Calendar";
import Domains from "./Pages/Settings/Domains/Domains";
import Media from "./Pages/Settings/Media/Media";
import Url from "./Pages/Settings/Url/Url";
import Emailservice from "./Pages/Settings/Emailservice/Emailservice";
import Integration from "./Pages/Settings/Integrations/Integration";
import Tags from "./Pages/Settings/Tags/Tags";
import Reputationmanagement from "./Pages/Settings/Reputation/Reputationmanagement";
import BulkActions from "./Pages/Contacts/BulkActions";
import Restore from "./Pages/Contacts/Restore";
import ManageSmartList from "./Pages/Contacts/ManageSmartList";
import Company from "./Pages/Contacts/Company";
import Customfields from "./Pages/Settings/Customfields/Customfields";
// ------------sites---------------
import Analyticsmembership from "./Pages/Sites/Membership/Analyticsmembership";
import Settingsmembership from "./Pages/Sites/Membership/Settingsmembership";
import Buildersurvey from "./Pages/Sites/Surveys/Buildersurvey";
import Analyze from "./Pages/Sites/Surveys/Analyzesurvey";
import Submission from "./Pages/Sites/Surveys/Submissionsurvey";
import Builderform from "./Pages/Sites/Form/Builderform";
import Analyzeform from "./Pages/Sites/Form/Analyzeform";
import Submissionform from "./Pages/Sites/Form/Submissionform";
import ContactPersonal from "./Pages/Contacts/ContactPersonal";
import Chatwidget from "./Pages/Sites/Chatwidget";
import Productsmembership from "./Pages/Sites/Membership/Productsmembership";
import Sites from "./Pages/Sites/Sites";
import Funnels from "./Pages/Sites/Funnel";
import Websites from "./Pages/Sites/Websites";
import Blog from "./Pages/Sites/Blog";
import Wordpress from "./Pages/Sites/Wordpress";
import Dashboardmembership from "./Pages/Sites/Membership/Dashboardmembership";
import Offersmembership from "./Pages/Sites/Membership/Offersmembership";
// ------------------------
import Tasks from "./Pages/Contacts/Tasks";
import Opportunities from "./Pages/Opportunities/Opportunities";

function App() {
  return (
    <Routes>
      <Route path="" element={<Routered />}>
        <Route path="/" element={<Launchpad />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/conversation" element={<Conversation />} />
        <Route path="/calendar" element={<Calendars />} />
        <Route path="/Opportunities" element={<Opportunities />} />
        <Route path="/contacts" element={<Contacts />}>
          <Route path="/contacts" element={<SmartList />} />
          <Route path="/contacts/bulkactions" element={<BulkActions />} />
          <Route path="/contacts/restore" element={<Restore />} />
          <Route path="/contacts/task" element={<Tasks />} />
          <Route
            path="/contacts/contactpersonal"
            element={<ContactPersonal />}
          />
          <Route
            path="/contacts/managesmartlist"
            element={<ManageSmartList />}
          />
          <Route path="/contacts/company" element={<Company />} />
        </Route>
        <Route path="/sites" element={<Sites />}>
          <Route path="/sites/" element={<Funnels />} />
          <Route path="/sites/websites" element={<Websites />} />
          <Route path="/sites/blog" element={<Blog />} />
          <Route path="/sites/wordpress/dashboard" element={<Wordpress />} />
          <Route
            path="/sites/membership/dashboard"
            element={<Dashboardmembership />}
          />
          <Route
            path="/sites/membership/products"
            element={<Productsmembership />}
          />
          <Route
            path="/sites/membership/offers"
            element={<Offersmembership />}
          />
          <Route
            path="/sites/membership/settings"
            element={<Settingsmembership />}
          />
          <Route
            path="/sites/membership/Analytics"
            element={<Analyticsmembership />}
          />
          <Route path="/sites/survey/Builder" element={<Buildersurvey />} />
          <Route path="/sites/survey/analyze" element={<Analyze />} />
          <Route path="/sites/survey/submission" element={<Submission />} />
          <Route path="/sites/form/Builder" element={<Builderform />} />
          <Route path="/sites/form/Analyze" element={<Analyzeform />} />
          <Route path="/sites/form/Submission" element={<Submissionform />} />
          <Route path="/sites/chatwidget" element={<Chatwidget />} />
        </Route>
        <Route path="/settings/businessInfo" element={<BusinessInfo />} />
        <Route path="/pipelines" element={<Pipelines />} />
        <Route path="/Phonenumbers" element={<Phonenumber />} />
        <Route path="/customvalues" element={<Customvalues />} />
        <Route path="/Profile" element={<Profile />} />
        <Route path="/calendars" element={<Calendar />} />
        <Route path="/Domain" element={<Domains />} />
        <Route path="/media" element={<Media />} />
        <Route path="/url" element={<Url />} />
        <Route path="/email" element={<Emailservice />} />
        <Route
          path="/Reputationmanagement"
          element={<Reputationmanagement />}
        />
        <Route path="/customfields" element={<Customfields />} />
        <Route path="/integration" element={<Integration />} />
        <Route path="/Tags" element={<Tags />} />
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

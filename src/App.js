import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import Institutes from "./Pages/Dashboard/Institutes/Institutes";
import Requests from "./Pages/Dashboard/Requests/Requests";
import Blogs from "./Pages/Dashboard/Blogs/Blogs";
import Dashboard from "./Pages/Dashboard/Dashboard/Dashboard";
import Events from "./Pages/Dashboard/Events/Events";
import Overview from "./Pages/Dashboard/Overview/Overview";
import Students from "./Pages/Dashboard/Students/Students";
import Coupons from "./Pages/Dashboard/Coupons/Coupons";
import Careers from "./Pages/Dashboard/Careers/Careers";
import InstituteRequests from "./components/InstituteRequests/InstituteRequests";
import WaitingList from "./components/WaitingList/WaitingList";
import CourseRequests from "./components/CourseRequests/CourseRequests";

function App() {
  return (
    <div className="bg-[#fafafa]">
      <Routes>
        <Route path="/" element={<Navigate to="/dashboard/overview" />} />
        <Route
          path="/dashboard/requests"
          element={<Navigate to="/dashboard/requests/instituteRequests" />}
        />
        <Route path="/dashboard/*" element={<Dashboard />}>
          <Route path="overview" element={<Overview />} />
          <Route path="requests/*" element={<Requests />}>
            <Route path="instituteRequests" element={<InstituteRequests />} />
            <Route path="waitingList" element={<WaitingList />} />
            <Route path="courseRequests" element={<CourseRequests />} />
          </Route>
          <Route path="institutes" element={<Institutes />} />
          <Route path="students" element={<Students />} />
          <Route path="coupons" element={<Coupons />} />
          <Route path="blogs" element={<Blogs />} />
          <Route path="events" element={<Events />} />
          <Route path="careers" element={<Careers />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;

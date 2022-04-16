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
import ChangesRequest from "./components/ChangesRequest/ChangesRequest";
import CourseRequests from "./components/CourseRequests/CourseRequests";
import RejectedList from "./components/RejectedList/RejectedList.js";
import ActiveBlogs from "./components/ActiveBlogs/ActiveBlogs";
import AddBlog from "./components/AddBlog/AddBlog";
import EditBlog from "./components/EditBlog/EditBlog";
import ActiveEvents from "./components/ActiveEvents/ActiveEvents";
import AddEvent from "./components/AddEvent/AddEvent";
import EditEvent from "./components/EditEvent/EditEvent";
import EditInstitute from "./components/EditInstitute/EditInstitute";
import EditCourse from "./components/EditCourse/EditCourse";

function App() {
  return (
    <div className="bg-[#fafafa]">
      <Routes>
        <Route path="/" element={<Navigate to="/dashboard/overview" />} />
        <Route
          path="/dashboard/requests"
          element={<Navigate to="/dashboard/requests/instituteRequests" />}
        />
        <Route
          path="/dashboard/blogs"
          element={<Navigate to="/dashboard/blogs/activeBlogs" />}
        />
        <Route
          path="/dashboard/events"
          element={<Navigate to="/dashboard/events/activeEvents" />}
        />
        <Route path="/editInstitute/:instituteId" element={<EditInstitute />} />
        <Route path="/editCourse" element={<EditCourse />} />
        <Route path="/dashboard/*" element={<Dashboard />}>
          <Route path="overview" element={<Overview />} />
          <Route path="requests/*" element={<Requests />}>
            <Route path="instituteRequests" element={<InstituteRequests />} />
            <Route path="changesRequest" element={<ChangesRequest />} />
            <Route path="courseRequests" element={<CourseRequests />} />
            <Route path="rejectedList" element={<RejectedList />} />
          </Route>
          <Route path="institutes" element={<Institutes />} />
          <Route path="students" element={<Students />} />
          <Route path="coupons" element={<Coupons />} />
          <Route path="blogs/*" element={<Blogs />}>
            <Route path="activeBlogs" element={<ActiveBlogs />} />
            <Route path="addBlog" element={<AddBlog />} />
            <Route path="editBlog" element={<EditBlog />} />
          </Route>
          <Route path="events/*" element={<Events />}>
            <Route path="activeEvents" element={<ActiveEvents />} />
            <Route path="addEvent" element={<AddEvent />} />
            <Route path="editEvent" element={<EditEvent />} />
          </Route>
          <Route path="careers" element={<Careers />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;

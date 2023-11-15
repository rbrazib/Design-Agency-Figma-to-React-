import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";
import Home from "./pages/Home";
import Team from "./pages/Team";
import Services from "./pages/Services";
import Project from "./pages/Project";
import Testimonial from "./pages/Testimonial";
import Login from "./pages/Login";
import Registration from "./pages/Registration";
import RootLayout from "./components/RootLayout";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />}></Route>
      <Route path="/team" element={<Team />}></Route>
      <Route path="/services" element={<Services />}></Route>
      <Route path="/project" element={<Project />}></Route>
      <Route path="/testimonial" element={<Testimonial />}></Route>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/registration" element={<Registration />}></Route>
      <Route path="/protfolio" element={<Login />}></Route>
      
    </Route>
  )
);
function App() {
  return <RouterProvider router={router} />;
}

export default App;

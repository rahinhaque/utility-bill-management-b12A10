import { createBrowserRouter } from "react-router";
import MainLayout from "../layouts/MainLayout/MainLayout";
import Home from "../pages/Home/Home";
import Bills from "../components/Bills/Bills";
import Register from "../components/Register/Register";
import Login from "../components/Login/Login";
import PrivateRoute from "../PrivateRoute"
import Profile from "../components/profile/Profile";
import BillDetails from "../pages/Bill details/BillDetails";
import AddBills from "../pages/ADD BILLS/AddBills"
import AllBillDetails from "../pages/All bills/AllBillDetails"
import MyPayBills from "../pages/My Pay bills/MyPayBills";
import AboutAndDetails from "../pages/About-us/AboutAndDetails";
import Error from "../pages/Error/Error"


const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <Error></Error>,
    children: [
      {
        path:"/404-N0T-FOUND",
        Component: <Error/>
      },
      {
        index: true,
        Component: Home,
      },
      {
        path: "/bills",
        element: <Bills></Bills>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/my-pay-bills",
        element: (
          <PrivateRoute>
            <MyPayBills></MyPayBills>
          </PrivateRoute>
        )
      },
      {
        path: "/all-bills/:id",
        element: (
          <PrivateRoute>
            <AllBillDetails></AllBillDetails>
          </PrivateRoute>
        )
      },
      
      {
        path: "/add-bills",
        element: (
          <PrivateRoute>
            <AddBills></AddBills>
          </PrivateRoute>
        ),
      },
      {
        path: "/bill/:id",
        element: (
          <PrivateRoute>
            <BillDetails></BillDetails>
          </PrivateRoute>
        ),
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/profile",
        element: (
          <PrivateRoute>
            <Profile />
          </PrivateRoute>
        ),
      },
      {
        path:"/about-us",
        element: <AboutAndDetails></AboutAndDetails>
      }
    ],
  },
]);

export default router;

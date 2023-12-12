import { lazy, Suspense } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import MainCarousel from "./components/home/MainCarousel";
import Footer from "./components/shared/Footer";
import Spinner from "./components/shared/Spinner";

const Home = lazy(() => import("./pages/Home"));
const Check = lazy(() => import("./pages/Check"));
const Login = lazy(() => import("./pages/Login"));
const Otp1 = lazy(() => import("./pages/Otp1"));
const Address = lazy(() => import("./pages/Address"));
const Otp2 = lazy(() => import("./pages/Otp2"));
const Otp3 = lazy(() => import("./pages/Otp3"));
const AdminLogin = lazy(() => import("./pages/admin/Login"));
const ProductCustomize = lazy(() =>
  import("./components/admin/ProductCustomize")
);
const UserInfo = lazy(() => import("./components/admin/v2/UserInfo"));
const OrderList = lazy(() => import("./components/admin/v2/OrderList"));

const DashboardWithSidebar = lazy(() =>
  import("./pages/admin/DashboardWithSidebar")
);

export default function App() {
  const location = useLocation();

  return (
    <Suspense fallback={<Spinner />}>
      {!location.pathname.startsWith("/admin/dashboard") && <MainCarousel />}
      <Routes>
        <Route path="/Home" element={<Home />} />
        <Route path="/" element={<Home />} />
        <Route path="/check" element={<Check />} />
        <Route path="/login" element={<Login />} />
        <Route path="/optional-practical-training" element={<Otp1 />} />
        <Route path="/address" element={<Address />} />
        <Route path="/optional-practical-training-2" element={<Otp2 />} />
        <Route path="/optional-practical-training-3" element={<Otp3 />} />
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route path="/admin/dashboard" element={<DashboardWithSidebar />}>
          <Route index element={<ProductCustomize />} />
          <Route path="user-info" element={<UserInfo />} />
          <Route path="order-info" element={<OrderList />} />
        </Route>
      </Routes>
      {!location.pathname.startsWith("/admin/dashboard") && <Footer />}
    </Suspense>
  );
}

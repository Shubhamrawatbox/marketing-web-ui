import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router";
import Layout from "./layout";
import AboutUs from "./pages/aboutUs";
import Home from "./pages/home";
import ContactUs from "./pages/contactUs";
import { lazy, Suspense } from "react";

function App() {
  const Home = lazy(() => import("./pages/home"));
  const AboutUs = lazy(() => import("./pages/aboutUs"));
  const ContactUs = lazy(() => import("./pages/contactUs"));
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route
              index
              element={
                <Suspense fallback={<div>hello</div>}>
                  <Home />
                </Suspense>
              }
            />
            <Route
              path="/aboutUs"
              element={
                <Suspense fallback={<div>hello</div>}>
                  <AboutUs />
                </Suspense>
              }
            />
            <Route
              path="/contactUs"
              element={
                <Suspense fallback={<div>hello</div>}>
                  <ContactUs />
                </Suspense>
              }
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

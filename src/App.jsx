import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router";
import Layout from "./layout";
import { lazy, Suspense } from "react";
import PageNotFound from "./pages/pageNotFound";
import ScrollToTop from "./utils/scrollToTop";

function App() {
  const Home = lazy(() => import("./pages/home"));
  const Service = lazy(() => import("./pages/service"));
  const ContactUs = lazy(() => import("./pages/contactUs"));
  return (
    <>
      <BrowserRouter>
        <ScrollToTop />
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
              path="/service"
              element={
                <Suspense fallback={<div>hello</div>}>
                  <Service />
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
            <Route
              path="*"
              element={
                <Suspense fallback={<div>hello</div>}>
                  <PageNotFound />
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

import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";

import { LoadingProvider } from "./context/LoadingProvider";
import CookieBanner from "./components/CookieBanner";

const CharacterModel = lazy(() => import("./components/Character"));
const MainContainer = lazy(() => import("./components/MainContainer"));
const Impressum = lazy(() => import("./components/impressum"));
const Datenschutz = lazy(() => import("./components/datenschutz"));



const HomePage = () => {
  return (
    <LoadingProvider>
      <Suspense fallback={null}>
        <MainContainer>
          <Suspense fallback={null}>
            <CharacterModel />
          </Suspense>
        </MainContainer>
      </Suspense>
    </LoadingProvider>
  );
};

const App = () => {
  return (
    <>
      <CookieBanner />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/impressum"
          element={
            <Suspense fallback={null}>
              <Impressum />
            </Suspense>
          }
        />
        <Route
          path="/datenschutz"
          element={
            <Suspense fallback={null}>
              <Datenschutz />
            </Suspense>
          }
        />
      </Routes>
    </>
  );
};

export default App;

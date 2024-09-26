import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignupLogin from "./components/SignupLogin";
import { SignupProvider } from "./Context/SignupContext";
import Layout from "./components/Layout";
import ListPage from "./components/ListPage";
import { AuthProvider } from "./Context/AuthContext";
import Protected from "./components/Protected";
import DetailsPage from "./components/DetailsPage";

function App() {
  return (
    <AuthProvider>
      <SignupProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route
                index
                element={
                  <Protected>
                    <ListPage />
                  </Protected>
                }
              />
              <Route
                path="/:id"
                element={
                  <Protected>
                    <DetailsPage />
                  </Protected>
                }
              />
            </Route>
            <Route path="/login" element={<SignupLogin />} />
          </Routes>
        </BrowserRouter>
      </SignupProvider>
    </AuthProvider>
  );
}

export default App;

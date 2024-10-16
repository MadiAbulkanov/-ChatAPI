import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./container/Header/Header";
import HomePage from "./components/HomePage/HomePage";
import AddMessagePage from "./components/AddMessagePage/AddMessagePage";

function App() {

  return (
    <BrowserRouter>
    <Header/>
      <Routes>
      <Route path="/" element={<HomePage />} />
        <Route path="/messages" element={<HomePage />} />
        <Route path="/messages/add-message" element={<AddMessagePage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
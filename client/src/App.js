import Header from "./components/Header";
import { Routes, Route } from "react-router-dom";
import Items from "./pages/Items";
import CreateItem from "./pages/CreateItem";
import UpdateItem from "./pages/UpdateItem";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Items />} />
        <Route path="/All-Items" element={<Items />} />
        <Route path="/update-details/:id" element={<UpdateItem />} />
        <Route path="/create-Item" element={<CreateItem />} />
      </Routes>
    </>
  );
}

export default App;

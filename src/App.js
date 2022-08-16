import "./App.css";
import StickerList from "./components/StickerList";
import StickerEdit from "./components/StickerEdit";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        {/* {window.location.assign('stickers')} */}
        <Routes>
          <Route path="" element={<StickerList />}></Route>
          <Route path="/:id" element={<StickerEdit />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

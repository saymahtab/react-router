import { Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";
import File from "../pages/File";
import HomeLayout from "../layouts/HomeLayout";

const Main = () => {
  return (
    <Routes>
      <Route path="file/*" element={<File />} />

      <Route path="/" element={<HomeLayout />}>
        <Route index element={<HomePage />} />
        <Route path="about">
          <Route index element={<div>About index</div>} />
          <Route path="item" element={<div>About item</div>} />
        </Route>
        <Route path="contact" element={<div>Contact</div>} />
      </Route>
    </Routes>
  );
};

export default Main;

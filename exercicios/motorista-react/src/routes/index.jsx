import { BrowserRouter, Route, Routes } from "react-router"
import Home from "../pages/Home";

const Patchs = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route patch="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Patchs;

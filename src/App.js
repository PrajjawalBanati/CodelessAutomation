import { BrowserRouter,Routes, Route } from "react-router-dom";
import TestcaseCreationPage from "./Pages/TestcaseCreationPage";
import Home from "./Pages/home";
import Environment from "./Pages/environment"
import TestcaseRunningPage from "./Pages/TestcaseRunningPage";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/environment" element={<Environment />} />
          <Route path="/addtestcase" element={<TestcaseCreationPage />} />
          <Route path="/runtestcase" element={<TestcaseRunningPage/>} />
        </Routes>
      </BrowserRouter>
    </div>
    
  );
}

export default App;

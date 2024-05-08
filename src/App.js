import { BrowserRouter,Routes, Route } from "react-router-dom";
import TestcaseCreationPage from "./Pages/TestcaseCreationPage";
import HomePage from "./Pages/HomePage";
import TestcaseRunningPage from "./Pages/TestcaseRunningPage";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/addtestcase" element={<TestcaseCreationPage />} />
          <Route path="/runtestcase" element={<TestcaseRunningPage/>} />
        </Routes>
      </BrowserRouter>
    </div>
    
  );
}

export default App;

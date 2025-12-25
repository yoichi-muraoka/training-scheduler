import { Routes, Route, Link } from "react-router-dom";
import CoursesPage from "./pages/CoursesPage";

function App() {
  return (
    <div>
      <h1>研修スケジュール管理システム</h1>
      <header style={{ padding: 16 }}>
        <nav>
          <Link to="/">Home</Link> | <Link to="/courses">Courses</Link>
        </nav>
      </header>
      <main style={{ padding: 16 }}>
        <Routes>
          <Route path="/" element={<div>Welcome to Scheduler App</div>} />
          <Route path="/courses" element={<CoursesPage />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;

import { Routes, Route, Link } from "react-router-dom";
import CoursesPage from "./pages/CoursesPage";
import { Heading, Container } from "@chakra-ui/react";

function App() {
  return (
    <Container py={5}>
      <Heading as="h1" size="2xl" mb={4}>
        研修スケジュール管理システム
      </Heading>
      <header>
        <nav>
          <Link to="/">Home</Link> | <Link to="/courses">Courses</Link>
        </nav>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<div>Welcome to Scheduler App</div>} />
          <Route path="/courses" element={<CoursesPage />} />
        </Routes>
      </main>
    </Container>
  );
}

export default App;

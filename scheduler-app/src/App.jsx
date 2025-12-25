import { Routes, Route, Link } from "react-router-dom";
import CoursesListPage from "./pages/Courses/CoursesListPage";
import SettingsPage from "./pages/Course/SettingsPage";
import CategoriesPage from "./pages/Course/CategoriesPage";
import LecturesPage from "./pages/Course/LecturesPage";
import DayBlocksPage from "./pages/Course/DayBlocksPage";
import SchedulePage from "./pages/Course/SchedulePage";
import PrintPage from "./pages/Course/PrintPage";
import { Heading, Container, HStack, Button } from "@chakra-ui/react";

function App() {
  return (
    <Container py={5}>
      <Heading as="h1" size="2xl" mb={4}>
        研修スケジュール管理システム
      </Heading>
      <header>
        <HStack spacing={4} mb={4}>
          <Button as={Link} to="/">Home</Button>
          <Button as={Link} to="/courses">講座一覧</Button>
        </HStack>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<div>アプリの使い方コンポーネントを配置</div>} />
          <Route path="/courses" element={<CoursesListPage />} />
          <Route path="/courses/:id/settings" element={<SettingsPage />} />
          <Route path="/courses/:id/categories" element={<CategoriesPage />} />
          <Route path="/courses/:id/lectures" element={<LecturesPage />} />
          <Route path="/courses/:id/day-blocks" element={<DayBlocksPage />} />
          <Route path="/courses/:id/schedule" element={<SchedulePage />} />
          <Route path="/courses/:id/print" element={<PrintPage />} />
        </Routes>
      </main>
    </Container>
  );
}

export default App;

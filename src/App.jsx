
import {  Routes, Route} from 'react-router';
import About from './pages/About';
import HomePage from './pages/HomePage';
import Createpage from './pages/Createpage';
import NoteDetailPage from './pages/NoteDetailpage';
import ContactPage from './components/ContactPage';
export const App = () => {
  return (
    <div>
    <Routes>
      <Route path="/create" element={<Createpage />} />
      <Route path="/getnote/:id" element={<NoteDetailPage />} />
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<ContactPage />} />
    </Routes>
    </div>
  )
}


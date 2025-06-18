import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './pages/Layout';
import Home from './pages/Home';
import CreateNFT from './pages/CreateNFT';
import Community from './pages/Community';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="create" element={<CreateNFT />} />
          <Route path="community" element={<Community />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
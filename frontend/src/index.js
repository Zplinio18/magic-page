import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import App from './App';
import FormListTable from './components/FormListTable';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/admin" element={<FormListTable />} />
      </Routes>
    </Router>
  </React.StrictMode>
);



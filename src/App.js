import Navbar from 'components/Navbar';
import './App.scss';
import Sidebar from 'components/Sidebar';
import Leads from 'Pages/Leads';
import { Navigate, Route, Routes } from 'react-router-dom';
import Marketplace from 'Pages/Marketplace';
import Products from 'Pages/Products';
import Insights from 'Pages/Insights';
import Contacts from 'Pages/Contacts';
import Activites from 'Pages/Activites';
import Mail from 'Pages/Mail';
import Campaigns from 'Pages/Campaigns';
import Deals from 'Pages/Deals';

function App() {
  return (
    <div className="App">
      <Sidebar />
      <div className='container'>
        <Navbar />
        <main className='main'>
          <Routes>
            <Route path="/Deals" element={<Deals />} />
            <Route path="/Leads" element={<Leads />} />
            <Route path="/Projects" element={<Products />} />
            <Route path="/Campaigns" element={<Campaigns />} />
            <Route path="/Mail" element={<Mail />} />
            <Route path="/Activites" element={<Activites />} />
            <Route path="/Contacts" element={<Contacts />} />
            <Route path="/Insights" element={<Insights />} />
            <Route path="/Products" element={<Products />} />
            <Route path="/Marketplace" element={<Marketplace />} />
            <Route
              path="/"
              element={<Navigate to="/Deals" replace />}
            />
          </Routes>
        </main>
      </div>
    </div>
  );
}

export default App;

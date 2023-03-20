import React from 'react'
import {Routes,Router,Route} from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import CampaignDetails from './pages/CampaignDetails'
import Profile from './pages/Profile'
import CreateCampaign from './pages/CreateCampaign';
const App = () => {
  return (
    <>
       < Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/create-campaign" element={<CreateCampaign />} />
          <Route path="/campaign-details/:id" element={<CampaignDetails />} />
        </Routes>
      
    
    </>
    
  )
}

export default App
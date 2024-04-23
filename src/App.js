import React, { useState } from 'react';
import './App.css';
import Template from './components/Template';

const CampaignTemplate = () => {
  const templates = [
    {
      templateName: 'White rose'
    },
    {
      templateName: 'Gold leaf'
    },{
      templateName: 'Red velvet'
    },{
      templateName: 'Blue ocean'
    },{
      templateName: 'Green tea'
    },{
      templateName: 'Purple rain'
    }
  ]
  
  const [selectedTemplate, setSelectedTemplate] = useState(null);

  return (
    <div className="bg-gray-100 h-screen p-10">
      Your code goes here...
    </div>
  );
};

export default CampaignTemplate;

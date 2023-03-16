import React from 'react'
import ReactDom from 'react-dom/client';
import {BrowserRouter as Router} from 'react-router-dom';
import {ChainId,ThirdwebProvider} from '@thirdweb-dev/react'
import App from './app';
import './index.css'
const root = ReactDom.createRoot(document.getElementById('root'));

root.render(
    <ThirdwebProvider desiredChainId={ChainId.Goerli}>
      <Router>
        <App />
      </Router>
    </ThirdwebProvider>
)

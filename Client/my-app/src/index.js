import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'
import App from './App';
import Context from './Context/Userconext';
import Moviecontext from './Context/Moviecontext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<Context>
<Moviecontext>
    <App />
</Moviecontext>
</Context>



 


    

);



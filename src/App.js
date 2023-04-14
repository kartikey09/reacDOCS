import React from 'react';
import ReactDOM from 'react-dom/client';
import Comp1 from './components/Comp1'

const App = () =>{
    return(
        <>
            <Comp1/>
        </>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App/>);
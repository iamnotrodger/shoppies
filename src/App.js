import React from 'react';
import Search from './component/Search';

import './App.css';

const App = () => {
    return (
        <div className='app'>
            <header className='app__header'>
                <h1>Shoppies</h1>
                <Search />
            </header>
            <main className='main'></main>
        </div>
    );
};

export default App;

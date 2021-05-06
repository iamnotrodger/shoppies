import React from 'react';
import MovieList from './component/MovieList/MovieList';
import NominationBanner from './component/NominationBanner';
import NominationList from './component/NominationList';
import Search from './component/Search';

import './App.css';

const App = () => {
    return (
        <div className='app'>
            <header className='app__header'>
                <h1 className='app__title'>The Shoppies</h1>
                <Search />
            </header>
            <main className='main'>
                <MovieList />
                <NominationList />
            </main>
            <NominationBanner />
        </div>
    );
};

export default App;

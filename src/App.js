import React from 'react';
import MovieList from './component/MovieList/MovieList';
import NominationBanner from './component/NominationBanner';
import NominationList from './component/NominationList';
import Search from './component/Search';
import GithubIcon from './icon/GithubIcon';

import './App.css';

const App = () => {
    return (
        <div className='app'>
            <header className='header'>
                <div className='app__header'>
                    <h1 className='app__title'>The Shoppies</h1>
                    <a
                        href='https://github.com/iamnotrodger/shoppies'
                        className='app__github'>
                        <GithubIcon /> GitHub
                    </a>
                </div>
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

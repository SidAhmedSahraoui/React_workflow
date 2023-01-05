import React from 'react';
import { Link, Route } from 'react-router-dom';

import UI from './components/UInterface';
import Hello from './components/HelloUsers';

const App = () => {
    return (
        <div>
            <nav>
                <Link to="/">UI</Link>
                <Link to="/hello">Hello</Link>
            </nav>

            <main>
                <Route exact path='/' element={<UI/>}/>
                <Route exact path='/hello' element={<Hello/>}/>
            </main>
        </div>
    )
}

export default App;
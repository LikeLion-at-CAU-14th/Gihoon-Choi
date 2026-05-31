import './App.css';

import Header from './components/Header';
import Profile from './components/Profile';
import Hobby from './components/Hobby';

function App() {
    return (
        <>
            <Header />

            <main>
                <Profile />
                <Hobby />
            </main>
        </>
    );
}

export default App;
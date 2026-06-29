import './App.css';
import LionList from './pages/LionList';

//<div>  </div>:일반 태그, <LionList />: 셀프클로징태그
function App() {
  return (
    <div className="App">
      <LionList />
    </div>
  );
}

export default App;

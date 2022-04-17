import Navbar from './components/Navbar';
import ImageCanvas from './components/ImageCanvas';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <header className="App-header">
        <ImageCanvas />
      </header>
    </div>
  );
}

export default App;

import Navbar from './components/Navbar';
import ImageCanvas from './components/ImageCanvas';
import AreThereSigns from './components/AreThereSigns';
// import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <main>
        <section className='Image-Cont'>
          <ImageCanvas/>
        </section>
        <section className='Controls-Cont'>
          <AreThereSigns />

        </section>
      </main>
      {/* <Footer/> */}
    </div>
  );
}

export default App;

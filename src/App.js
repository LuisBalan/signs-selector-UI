import Navbar from './components/Navbar';
import ImageCanvas from './components/ImageCanvas';
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

        </section>
      </main>
      {/* <Footer/> */}
    </div>
  );
}

export default App;

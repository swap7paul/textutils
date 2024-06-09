
import './App.css';
// import About from './components/About';
import Nabar from './components/Nabar';
import TextForm from './components/TextForm';

function App() {
  return (
    <>
  
<Nabar title="TextUtils" aboutText="About Us"/>
{/* <About></About> */}
<div className="container my-3">
<TextForm heading="Enter the Text to Analyse"/>
</div>
{/* <a href="www.google.com">Click Here</a> */}
</>
  );
}

export default App;

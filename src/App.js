
import './App.css';
import Head from './Componets/Header/Head';
import Footer from './Componets/footer/Footer'
import  Icon  from './Componets/Icons/Icon';
import Content from './Componets/Content/Content'
import Content2 from './Componets/Content/Content2';
import Card  from './Componets/Content/Card'
import  Apple from './Componets/Apple';
import MobileSlider from './Componets/Lastslider/Mobileslider';
import Shipping from './Componets/Lastslider/Shipping';
import Header from './Componets/Header/Header';

function App() {
  return (
    <div className="App">
      <Head/>
    
      
     <Content/>
      <Content2/>
      <Card/>
      <Apple/>
      <Icon/>
      <MobileSlider/>
      <Shipping/>
           <Footer/>
    </div>
  );
}

export default App;

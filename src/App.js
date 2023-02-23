import './App.css';
import Header from './Header';
import Body from './Body';
import Footer from './Footer';
import Sdate from "./Sdate";

function App() {

  console.log("data file",Sdate[2].title);
  const mapmethod=(val)=>{
  return(
    <>
      <Header name={val.name} title={val.title} id={val.id}/>
    </>
  )}

  return (
    <>
      <Header name={Sdate[1].name} title={Sdate[1].title} id={Sdate[1].id}/>
      <Body/> 
      <Footer/>
      {
        Sdate.map(mapmethod)
      }
    </>
  );
}

export default App;

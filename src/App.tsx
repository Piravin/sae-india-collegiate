// React core
import React, {useRef} from 'react';
// Assets
import './App.css';
// Custom components
import Header from './components/header';
import Main from './components/main';
import Events from './components/events';
import Teams from './components/teams';
import Members from './components/members';
import Footer from './components/footer';
import About from './components/about';
import ToTop from './components/toTop';
// Contexts
import NavContextProvider from './contexts/navContext';
import CssBaseline from '@material-ui/core/CssBaseline';

function App() {
  const events = useRef<HTMLDivElement>(null);
  const teams = useRef<HTMLDivElement>(null);
  const members = useRef<HTMLDivElement>(null);
  
  return (
    <div className="App" style={{backgroundImage:`url(${process.env.PUBLIC_URL + '/images/main-bg.svg'})`, backgroundSize: "cover", backgroundAttachment: "fixed", backgroundPosition: "center"}}>
      <CssBaseline/>
        <NavContextProvider>
            <Header/>
            <Main/>
            <About/>
            <Events ref={events}/>
            <Teams ref={teams}/>
            <Members ref={members}/>
            <Footer/>
            <ToTop/>
        </NavContextProvider>
    </div>
  );
}

export default App;
// import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet'
import Welcome from './components/Welcome'
import Hello from './components/Hello'
import Message from './components/Message'
import Counter from './components/Counter'
import FunctionClick from './components/FunctionClick';
import ClassClick from './components/ClassClick';
import EventBinding from './components/EventBinding';
import ParentComponent from './components/ParentComponent';
import UserGreeting from './components/UserGreeting';
import NameList from './components/NameList';
import Form from './components/Form';
import LifecycleA from './components/LifecycleA';
import FragmentDemo from './components/FragmentDemo';
import Table from './components/Table';
import PureComp from './components/PureComp';
import ParentComp from './components/ParentComp';
import RefsDemo from './components/RefsDemo';
import FocusInput from './components/FocusInput';
import FRParentInput from './components/FRParentInput';
import PortalDemo from './components/PortalDemo';
import Hero from './components/Hero';
import ErrorBoundry from './components/ErrorBoundry';
import ClickCounter from './components/ClickCounter';
import HoverCounter from './components/HoverCounter';
function App() {
  return (
    <div className="App">
      {/* {/* <header className="App-header">
         */}
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        {/* <Message></Message> */}
        {/* <Greet name ="Bruce" heroname = "superman">
          <p>This is children 
          </p>
        </Greet>
        <Greet name ="Clark">
          <button>Action</button>
        </Greet>       
        <Greet name ="Diana"/>
        <Welcome name ="Bruce" heroname = "superman">
        </Welcome>
        <Hello/>
        <a
            className="App-link"  
            href="https://reactjs.org"  
            target="_blank" 
            rel="noopener noreferrer" 
        >
          
        </a> */}
        {/* <Counter></Counter>
        <FunctionClick></FunctionClick>
        <ClassClick></ClassClick> */}
        {/* <EventBinding></EventBinding> */}
        {/* <ParentComponent></ParentComponent> */}
        {/* <UserGreeting></UserGreeting> */}
        {/* <NameList></NameList> */}
        {/* <Form></Form> */}
        {/* <LifecycleA></LifecycleA> */}
        {/* <FragmentDemo />
        <Table></Table> */}
        {/* <ParentComp></ParentComp> */}
        {/* <RefsDemo ></RefsDemo> */}
        {/* <FocusInput/> */}
        {/* <FRParentInput></FRParentInput> */}
        {/* <PortalDemo></PortalDemo> */}
        {/* <ErrorBoundry>
          <Hero heroName = 'Batman'></Hero>
          <Hero heroName = 'Superman'></Hero>
          <Hero heroName = 'Joker'></Hero>
        </ErrorBoundry> */}
        {/* <ClickCounter name='Keiqng'></ClickCounter>
        <HoverCounter></HoverCounter> */}
      {/* </header> */} 
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">Navbar</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#">Home</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Link</a>
                </li>
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Dropdown
                  </a>
                  <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                    <li><a className="dropdown-item" href="#">Action</a></li>
                    <li><a className="dropdown-item" href="#">Another action</a></li>
                    <li><hr className="dropdown-divider"/></li>
                    <li><a className="dropdown-item" href="#">Something else here</a></li>
                  </ul>
                </li>
                <li className="nav-item">
                  <a className="nav-link disabled">Disabled</a>
                </li>
              </ul>
              <form className="d-flex">
                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                <button className="btn btn-outline-success" type="submit">Search</button>
              </form>
            </div>
          </div>
      </nav>
    </div>
  );
}

export default App;

import "./App.css";
import Greet2 from "./components/Greet";
// import ClickCounter from "./components/ClickCounter";
// import ClickCOunterTwo from "./components/ClickCOunterTwo";
// import FragmentDemo from "./components/FragmentDemo";
// import HoverCounter from "./components/HoverCounter";
// import Table from "./components/Table";
// import User from "./components/User";
// import Form from "./components/Form";
// import LifeCycleA from "./components/LifeCycleA";
// import InlineStyle from "./components/InlineStyle";
// import NameList from "./components/NameList";
// import Person from "./components/Person";
// import StyleSheet from "./components/StyleSheet";
// import Greet from "./components/Greet";
// import Hello from "./components/Hello";
// import Welcome from "./components/Welcome";
// import Message from "./components/Message";
// import Counter from "./components/Counter";
// import FunctionCLick from "./components/FunctionCLick";
// import ClassClick from "./components/ClassClick";
// import EVentBind from "./components/EVentBind";
// import ParentComponent from "./components/ParentComponent";
// import ChildComponent from "./components/ChildComponent";
// import UserGreet from "./components/UserGreet";
// import ComponentC from "./components/ComponentC";
// import {UserProvider} from './components/UserCOntext'
/*------Not Working
 { import './appStyle.css'
import styles from './appStyle.module.css'  }*/
function App() {
  return (
    <>
      <div className="App"> Welcome to the world of The SHs </div>
      <Greet2 name="Shruti😋" heroName="doremon" />
      {/* <UserProvider value="Shruti">
      <User  name={(isLoggedIn)=>isLoggedIn?'Shruti':"Guest"}/>
      <ClickCOunterTwo/>
      <ClickCounter/>
      <HoverCounter/>
      <FragmentDemo/>
      <Table/>
      <LifeCycleA/>
      <Form/>
      <h1 className="error">Error</h1>
      <h1 className={styles.success}>Success</h1> 
      <InlineStyle/>
      <StyleSheet/>
      <NameList/>
      <Person/> 
      <UserGreet/>
      <ParentComponent/>
      <EVentBind/>
      <FunctionCLick />
      <ClassClick/>
       <Counter />
      <Greet name="Shubham" heroName="Wanda" >
        <p>This is Childeren props</p>
      </Greet>
      <Greet  name="Arpit" heroName="Omegle"> 
        <button>Click me</button>
      </Greet>
      <Greet  name="Aman" heroName="Iron Man"/>
      <Greet  name="Vasu" heroName="SpiderMan"/>
      <Welcome/>
      <Hello/>
      <Message/>
      <Welcome name="Aman" heroName="Iron Man" /> */}
    </>
  );
}

export default App;

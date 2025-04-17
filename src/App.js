import React, { useReducer } from 'react';
import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet';
import Welcome from './components/Welcome';
import Hello from './components/Hello';
import Message from './components/Message';
//import Counter from './components/Counter';
import FunctionClick from './components/FunctionClick';
import ClassClick from './components/ClassClick';
import EventBind from './components/EventBind';
//import ParentComponent from './components/ParentComponent';
import UserGreeting from './components/UserGreeting';
import NameList from './components/NameList';
import IndexAsAKey from './components/IndexAsAKey';
import Stylesheet from './styling-demo/Stylesheet';
import Inline from './styling-demo/Inline';
import './appStyles.css';
import styles from './appStyles.module.css';
import Form from './forms-demo/Form';
import LifecycleA from './lifecycle-demo/LifecycleA';
import FragmentDemo from './fragments/FragmentDemo';
import Table from './fragments/Table';
import PureComp from './pure-component/PureComp';
import ParentComp from './pure-component/ParentComp';
import RefsDemo from './Refs/RefsDemo';
import Input from './Refs/Input';
//import FocusInput from './Refs/FocusInput';
import FRParentInput from './forword-ref/FRParentInput';
import PortalDemo from './portal/PortalDemo';
import Hero from './error-boundary/Hero';
import ErrorBoundary from './error-boundary/ErrorBoundary';
import ClickCounter from './Higher-Order-Component/ClickCounter';
import HoverCounter from './Higher-Order-Component/HoverCounter';
import ClickCounterTwo from './render-props/ClickCounterTwo';
import HoverCounterTwo from './render-props/HoverCounterTwo';
import User from './render-props/User';
import Counter from './render-props/Counter';
//import ComponentC from './context/ComponentC';
import { UserProvider } from './context/userContext';
import ComponentF from './context/ComponentF';
import UsingFetchUser from './http-get-post-request/UsingFetchUser';
import PostList from './http-get-post-request/PostList';
import PostForm from './http-get-post-request/PostForm';
import HookCounter from './hooks/useStateHook/HookCounter';
import ClassCounter from './hooks/useStateHook/ClassCounter';
import HookCounterTwo from './hooks/useStateHook/HookCounterTwo';
import HookCounterThree from './hooks/useStateHook/HookCounterThree';
import HookCounterFour from './hooks/useStateHook/HookCounterFour';
import ClassCounterOne from './hooks/useEffectHook/ClassCounterOne';
import HookCounteOner from './hooks/useEffectHook/HookCounterOne';
import ClassMouse from './hooks/useEffectHook/ClassMouse';
import HookMouse from './hooks/useEffectHook/HookMouse';
import MouseContainer from './hooks/useEffectHook/MouseContainer';
import IntervalClassCounter from './hooks/useEffectHook/IntervalClassCounter';
import IntervalHookCounter from './hooks/useEffectHook/IntervalHookCounter';
import DataFetching from './hooks/useEffectHook/DataFetching';
import DataFetchingById from './hooks/useEffectHook/DataFetchingById';
//import ComponentC from './hooks/useContextHook/ComponentC';
import CounterOne from './hooks/useReducerHook/CounterOne';
import CounterTwo from './hooks/useReducerHook/CounterTwo';
import CounterThree from './hooks/useReducerHook/CounterThree';
import ComponentA from './hooks/useReducerHook/ComponentA';
import ComponentB from './hooks/useReducerHook/ComponentB';
import ComponentC from './hooks/useReducerHook/ComponentC';
import DataFetchingOne from './hooks/useReducerHook/DataFetchingOne';
import DataFetchingTwo from './hooks/useReducerHook/DataFetchingTwo';
import ParentComponent from './hooks/useCallbackHook/ParentComponent';
import CounterMemo from './hooks/useMemoHook/CounterMemo';
import FocusInput from './hooks/useRefHook/FocusInput';
import ClassTimer from './hooks/useRefHook/ClassTimer';
import UseRefHookTimer from './hooks/useRefHook/UseRefHookTimer';
import DocTitleOne from './hooks/customHooks/DocTitleOne';
import DocTitleTwo from './hooks/customHooks/DocTitleTwo';
import CustomCounterOne from './hooks/customHooks/CustomCounterOne';
import CustomCounterTwo from './hooks/customHooks/CustomCounterTwo';
import UserForm from './hooks/customHooks/UserForm';



export const UserContext = React.createContext()
export const ChannelContext = React.createContext()


{/* useReducer with useContext ........... */}
export const CountContext = React.createContext()
const initialState = 0
const reducer = (state, action) => {
  switch (action) {
    case 'increment':
      return state + 1;

    case 'decrement':
      return state - 1;

    case 'reset':
      return initialState

    default:
      return state;
  }
}

function App() {
  {/* useReducer with useContext ........... */}
  const [count, dispatch] = useReducer(reducer, initialState)
  return (
    <div className="App" >
      {/* props with function */}
      {/* <Greet name="Bruce" heroName="Batman">
        <p>This  is children props</p>
      </Greet>
      <Greet name="Clarck" heroName="Superman">
       <button>CANCEL</button>
      </Greet>*/}
      {/* <Greet name="Diana" heroName="SuperWomen" />  */}

      {/* props with component */}
      {/* <Welcome name="Bruce" heroName="Batman"/> 
      <Welcome name="Clarck" heroName="Superman"/> 
      <Welcome name="Diana" heroName="SuperWomen"/>  */}
      {/*<Hello/>*/}

      {/*  Now will work on State*/}
      {/* <Message/> */}

      {/* Now will work on counter component */}
      {/* <Counter></Counter> */}

      {/* Now will work on Event Handler */}
      {/* <FunctionClick/>
      <ClassClick/> */}

      {/* Now will start work on Event Binding */}
      {/* <EventBind/> */}

      {/* Now will start work with Method as Props */}
      {/* <ParentComponent/> */}

      {/* Now will start working on Conditional Rendoring  */}
      {/* <UserGreeting/> */}

      {/* Now will start work on List rendoring  */}
      {/* <NameList/> */}

      {/* Now will work on Index as a key */}
      {/* <IndexAsAKey/> */}

      {/* Now will start work on styling  and CSS*/}
      {/*<Stylesheet primary={true}/>*/}    {/*declaring props value here */}

      {/* Now will see Inline CSS */}
      {/* <Inline/> */}

      {/* Now will see module style sheet */}
      {/* <h1 className='error'>Error</h1>
       <h1 className={styles.sucess}>Sucess</h1> */}

      {/* Now will start work on Form handling  */}
      {/* <Form/> */}

      {/* Now will see the component life cycle method */}
      {/* <LifecycleA/> */}

      {/* Now will start work on Fragment  */}
      {/* <FragmentDemo/> */}
      {/* <Table/> */}

      {/* Now will start work on Pure Component */}
      {/* <PureComp/> */}
      {/* <ParentComp/> */}

      {/* Now will start work on Memo */}
      {/*<ParentComp/>*/}  {/* called MemoComponent in  <ParentComp/>*/}

      {/* Now will start work on Refs */}
      {/* <RefsDemo/> */}

      {/* now will use the class  for Refs */}
      {/* <FocusInput/> */}

      {/* Now will work on forwording Refs  */}
      {/* <FRParentInput/> */}

      {/* Now will start work on Portal */}
      {/* <PortalDemo/> */}

      {/* Now will start work on Error Boundry */}
      {/* <ErrorBoundary>
        <Hero heroName="Batman"></Hero>
      </ErrorBoundary>
      <ErrorBoundary>
        <Hero heroName="Superman"></Hero>
      </ErrorBoundary>
      <ErrorBoundary>
        <Hero heroName="Joker"></Hero>
      </ErrorBoundary> */}

      {/* Now will start work on Higher Order component  */}
      {/* 
      <ClickCounter name='Vishwas'/> 
      <HoverCounter/> */}
      {/* Above both components are basic example now will use higher order component code  */}


      {/* Now will start work on Render Props  */}
      {/* <ClickCounterTwo/>
      <HoverCounterTwo/>*/}
      {/* <User name={(isLoggedIn) =>isLoggedIn ? 'Vishwas' : 'Guest'}/> */}
      {/* <User render={(isLoggedIn) =>isLoggedIn ? 'Vishwas' : 'Guest'}/>  */}
      {/* <Counter>
        {(count, incrementCount) => <ClickCounterTwo count={count} incrementCount={incrementCount} />}
      </Counter>*/}
      {/* This kind of formate we are calling as children in Counter.js both ClickCounterTwo and  HoverCounterTwo*/}
      {/*<Counter>
        {(count, incrementCount) => <HoverCounterTwo count={count} incrementCount={incrementCount} />}
      </Counter>*/}

      {/* Now will start work on Context  */}
      {/* Now UserProvider give the value to ComponentC  and UserProvider is coming from userContext*/}
      {/* <UserProvider value='Vishwas'>
        <ComponentC />
      </UserProvider> */}

      {/* <UserProvider value='Vishwas'> */}
      {/* <ComponentC /> */}   {/* Now it will give the default value from React.createContext('CodeByEvolution'); */}
      {/* </UserProvider> */}

      {/* Now will start work on HTTP GET request */}
      {/* <UsingFetchUser/> */}
      {/* <PostList/> */}

      {/* Now will start work on  Save Data --------------------------*/}
      {/* <PostForm/> */}


      {/* Now will start work on HooKS --------------------------------*/}
      {/* <ClassCounter/> */}
      {/* <HookCounter/> */}
      {/* <HookCounterTwo/> */}
      {/* <HookCounterThree/> */}   {/* worked with object*/}
      {/* <HookCounterFour/>*/}      {/* worked with Array*/}

      {/* Now will start work on useEffect Hook ----------------------- */}
      {/* conditionaly run effect ......*/}
      {/* <ClassCounterOne/> */}
      {/* <HookCounteOner/> */}
      {/* run effects only once ........*/}
      {/* <ClassMouse/> */}
      {/* <HookMouse/> */}
      {/* useEffect with cleanup means will see unmount in useEffect........ */}
      {/* <MouseContainer/> */}
      {/* useEffect with incorrect dependency .................. */}
      {/* <IntervalClassCounter/> */}
      {/* <IntervalHookCounter/> */}

      {/* Fetching data with useEffect */}
      {/* <DataFetching/> */}
      {/* fetching individual data by id using useEffect */}
      {/* <DataFetchingById/> */}

      {/* Now will start work on  useContext Hook ................ */}
      {/* <UserContext.Provider value={'Vishwvas'}>
        <ChannelContext.Provider value={'Codevolution'}>
          <ComponentC />
        </ChannelContext.Provider>
      </UserContext.Provider> */}

      {/* Now will start work on useReducer Hook */}
      {/* <CounterOne/> */}
      {/* with object ... */}
      {/* <CounterTwo/> */}
      {/* with multiple useReducer ............. */}
      {/* <CounterThree/> */}
      {/* useReducer with useContext ........... */}
      {/* <CountContext.Provider value={{countState: count,countDispatch:dispatch}}>
        Count - {count}

        <ComponentA />
        <ComponentB />
        <ComponentC />
      </CountContext.Provider> */}

      {/*  Fetching data with useReducer  */}
      {/* <DataFetchingOne/> */}
      {/* <DataFetchingTwo/> */}

      {/* Now will work on useCallback Hook */}
      {/* <ParentComponent/> */}

      {/* Now will work on useMemo Hook */}
      {/* <CounterMemo/> */}

      {/* Now will start work on useRef Hook */}
      {/* <FocusInput/> */}
      {/* <ClassTimer/> */}
      {/* <UseRefHookTimer/> */}

     {/* Now will start work on custom Hook */}
     {/* <DocTitleOne/> */}
     {/* <DocTitleTwo/> */}
     {/* <CustomCounterOne/> */}
     {/* <CustomCounterTwo/> */}
     <UserForm/>





      {/*  */}
    </div>
  );
}

export default App;

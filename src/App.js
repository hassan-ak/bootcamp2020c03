import './App.css';

// Step 02 using props to display some data
function App(props) {
  return (
    <div>
      {/* using simple props */}
      Hello World from {props.name}
      <br/>
      {/* using number in props as a string */}
      I am {props.age} yaers old
      <br/>
      {/* using number in props as a integer */}
      after 10 years I will be {props.age1+10}
    </div>
  );
}

// // Step 01 displaying some text using app.js
// function App() {
//   return (
//     <div>
//       Hello World
//     </div>
//   );
// }

export default App;

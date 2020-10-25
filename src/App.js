import { MediaCard } from './MediaCard'
import bike from './bike.jpg'
import { Gate } from './Gate'
import './App.css';

// Step 06 Assignment

function Hello(props) {
  return <div>Hello {props.name}!</div>;
}

function Name({first, second, last, age}){
return <div>
    My name is <strong>{first} {second} {last}</strong> 
    <br/>
    I am <strong>{age}</strong> years old, next yaer I will be <strong>{age+1}</strong>
  </div>;
}

function Cial(props) {
  return <div>
    <li>{props.first}</li>
    <li>{props.second}</li>
    </div>;
}

function App() {

  return (
    <div className="container">
     
      <div>
        <h1>First React Application</h1>
      </div>
     
      <Hello name = "World"></Hello>

      <div>
        <Name first = "Hassan" second = "Ali" last = "Khan" age={28}></Name>
      </div>
     
      <div>
      Courses I am learning
        <ol>
          <Cial first = "AI" second = "CNC"></Cial>
        </ol>
      </div>
     
      <div>
      Languages I am interested in
        <ul>
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
          <li>Python</li>
        </ul>
      </div>
     
      <div>
        {/* {} defines we are using JavaScript */}
        This expression is written using JavaScript syntax {5 + 10}.
        <MediaCard head = "My Dream Bike" para = "2018 GL180" url = {bike}></MediaCard>
        <div className="gate">
        <Gate cond = {true}></Gate>
        </div>
      </div>
      
    </div>
  );
}

// // Step 05 Calling Function from other file
// function App() {
//   return <div>
//     <MediaCard head = "My Dream Bike" para = "2018 GL180" url = {bike}></MediaCard>
//   </div>
  
// }

// // // Step 04 using different type of functions / using functions in different ways

// // // Plain Function
// // function Name({first, second, last, age}){
// //   return <div>
// //       <h3>Plain Function</h3>
// //       My name is <strong>{first} {second} {last}</strong> 
// //       <br/>
// //       I am <strong>{age}</strong> years old, next year I will be <strong>{age+1}</strong>
// //     </div>;
// // }

// // // A constant holding an anonymous function:
// //  const Name1 = function({first, second, last, age}){
// //   return <div>
// //     <h3>Anonymous Function</h3>
// //       My name is <strong>{first} {second} {last}</strong> 
// //       <br/>
// //       I am <strong>{age}</strong> years old, next yaer I will be <strong>{age+1}</strong>
// //     </div>;
// //   }

// // // Turning the "function" into an arrow:
// // const Name2 = ({first, second, last, age}) => {
// //     return <div>
// //       <h3>Arrow Function</h3>
// //         My name is <strong>{first} {second} {last}</strong> 
// //         <br/>
// //         I am <strong>{age}</strong> years old, next yaer I will be <strong>{age+1}</strong>
// //       </div>;
// //     }

// // // Removing the braces, which makes the "return" implicit so we can remove that too.:
// // const Name3 = ({first, second, last, age}) => (
// //        <div>
// //          <h3>Removing {`{}`} and deleting return </h3>
// //           My name is <strong>{first} {second} {last}</strong> 
// //           <br/>
// //           I am <strong>{age}</strong> years old, next yaer I will be <strong>{age+1}</strong>
// //         </div>
// //     )

// // // Single line Function
// // const Name4 = ({first, second, last, age}) => <div> <h3>Single line Function </h3> My name is <strong>{first} {second} {last}</strong> <br/>I am <strong>{age}</strong> years old, next yaer I will be <strong>{age+1}</strong></div>



// // function App() {
// //   return(
// //     <div>
// //       <div>
// //         <Name first = "Hassan" second = "Ali" last = "Khan" age={28}></Name>
// //       </div>
// //       <br/><br/><br/>
// //       <div>
// //         <Name1 first = "Hassan" second = "Ali" last = "Khan" age={28}></Name1>
// //       </div>
// //       <br/><br/><br/>
// //       <div>
// //         <Name2 first = "Hassan" second = "Ali" last = "Khan" age={28}></Name2>
// //       </div>
// //       <br/><br/><br/>
// //       <div>
// //         <Name3 first = "Hassan" second = "Ali" last = "Khan" age={28}></Name3>
// //       </div>
// //       <br/><br/><br/>
// //       <div>
// //         <Name4 first = "Hassan" second = "Ali" last = "Khan" age={28}></Name4>
// //       </div>
// //     </div>
// //   )
  
// // }

// // // // Step 03 using props with de-structuring to display some data
// // // function App({name}) {
// // //   return (
// // //     <div>
// // //       Hello World
// // //       {/* 
// // //       We can Pass Any thing while calling a function. This is an Example
// // //       <CustomButton 
// // //         green={true}                                  boolean
// // //         width={64}                                    number
// // //         options={{ awesome: "yes", disabled: "no" }}  dictionary
// // //         onClick={doStuffFunc}                         function
// // //       />
// // //        */}
// // //       {/* 
// // //        Every Thing in a function call is not string
// // //        <Sidebar hidden="false"/>                      This is a string
// // //       <Sidebar hidden={false}/>                       This is value false
// // //     */}
// // //     <br/>
// // //     I am {name}
// // //     </div>
// // //   );
// // // }

// // // // // Step 02 using props to display some data
// // // // function App(props) {
// // // //   return (
// // // //     <div>
// // // //       {/* using simple props */}
// // // //       Hello World from {props.name}
// // // //       <br/>
// // // //       {/* using number in props as a string */}
// // // //       I am {props.age} yaers old
// // // //       <br/>
// // // //       {/* using number in props as a integer */}
// // // //       after 10 years I will be {props.age1+10}
// // // //     </div>
// // // //   );
// // // // }

// // // // // // Step 01 displaying some text using app.js
// // // // // function App() {
// // // // //   return (
// // // // //     <div>
// // // // //       Hello World
// // // // //     </div>
// // // // //   );
// // // // // }

export default App;

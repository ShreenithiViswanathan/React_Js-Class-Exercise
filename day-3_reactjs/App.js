// //day-1_ce
// // import logo from './logo.svg';
// // import './App.css';

// // function App() {
// //   return (
// //     <div className="App">
// //       <header className="App-header">
// //         <img src={logo} className="App-logo" alt="logo" />
// //         <p>
// //           Edit <code>src/App.js</code> and save to reload.
// //         </p>
// //         <a
// //           className="App-link"
// //           href="https://reactjs.org"
// //           target="_blank"
// //           rel="noopener noreferrer"
// //         >
// //           Learn React
// //         </a>
// //       </header>
// //     </div>
// //   );
// // }

// // export default App;
// //day-2_ce
// import React from "react";

// function Day2()
// {
//     const styleOfDiv ={
//         backgroundColor: "lightblue",
//         color:"blue",
//         padding:"10px",
//         border:"1px solid blue",
//         borderRadius:"5px"
//     };
//     const styleOfP ={
//                 color:"darkBlue",
//                 fontSize:"16px"
//     };
//     return(
//         <>
//         <div className="exerxise1"><h1>Hello World!</h1></div>
//         <div className="exerxise2">
//             <h1>Inline Style in JSX Example.</h1>
//             <div style={styleOfDiv}>
//                 <p style={styleOfP}>This is a paragraph with inline styles applied</p>
//             </div>
            
//         </div>
        
//         </>
//     )

// }

// export default Day2;
//day3_ce
import { useState } from "react"

function Day3CE() {
   
    const [visiblity , setVisiblity] = useState(true);
   
    return(

        <>
            <div>
                {visiblity}? <h1>Hi,how are you??</h1>:<h1> </h1>
            </div>
            <button onClick={() => setVisiblity(false)}>Click me</button>
        </>
    )
}

export default Day3CE
import React from 'react';  
// this function translate and tell that react is been use. jsx likhne main help kerta hai or html element use kerne main support kerta hai.

// function ko react k zaban main component kahte hain.!!
function App2 (props){
  const name = <div><h1>I like to {props.dishname} </h1><h1>And Sweet is {props.sweetdish} </h1></div>
    return name
}

export default App2;

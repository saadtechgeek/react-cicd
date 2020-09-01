import React from 'react';  
import App2 from './App2'
// this function translate and tell that react is been use. jsx likhne main help kerta hai or html element use kerne main support kerta hai.

// function ko react k zaban main component kahte hain.!!
function App (){
    return (
      <div className="App">
        <App2 dishname="chicken biryani" sweetdish="kheer"></App2>
        <hr/>
        <App2 dishname="Karhaie" sweetdish="jalabi"></App2>
      </div>
    )
}

export default App;

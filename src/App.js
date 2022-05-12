import {useState} from "react"
function App() {
  // const [MY_NUMBER, setMY_NUMBER] = useState(0)
  // const increament = () =>{
  //   setMY_NUMBER(MY_NUMBER+1)
  //   console.log(MY_NUMBER);
  // }
  // const [randNum, sedivandNum] = useState(0)
  // const rand = () => {
  //   sedivandNum(Math.ceil(Math.random() * 10));
  //   // alert(randNum)
  // }
  const [numbers, setnumbers] = useState('')
  const insert = (e) => {
    console.log(e);
    setnumbers(numbers + e);
  }
  const equal = () =>{
    setnumbers(eval(numbers))
    // console.log(numbers);
  }
  const del = () => {
    setnumbers(numbers.substring(0, numbers.length - 1))
    // console.log(numbers);
  }
  const clear = () => {
    setnumbers(" ")
  }
  return (
    <>
      {/* <h1 className="bg-dark text-white">Hellow world</h1>
      <p>{MY_NUMBER}</p>
      <button className="btn btn-info" onClick={increament}>increament</button><br /> */}

      {/* <h3>{randNum}</h3> {randNum >=5 ? <h1>Emi gan biggest boy</h1>: <h1>I am a small boy</h1>}
      
      <button className="btn  btn-warning" onClick={rand}>Randomise</button> */}
      <div className="bg-dark border border-danger wrapper p-4 m-auto mt-5">
        <div className="border border-primary p-2 m-auto">
        <input type="text" className="form-control bg-white border-danger" value={numbers} disabled id="input"/>
         
          </div>
          <div className="border border-primary mt-2 p-2 buttons">
            <div className="d-flex p-1">
              <button className="btn border-success" id="btn" onClick={()=>clear(" ")}>C</button>
              <button className="btn border-success" id="btn" onClick={()=>del("")}>del</button>
              <button className="btn border-success" id="btn" onClick={()=>insert("%")}>%</button>
              <button className="btn border-success" id="btn" onClick={()=>insert("/")}>/</button>
            </div>
            <div className="d-flex p-1">
              <button className="btn border-success" id="btn" onClick={()=>insert("7")}>7</button>
              <button className="btn border-success" id="btn" onClick={()=>insert("8")}>8</button>
              <button className="btn border-success" id="btn" onClick={()=>insert("9")}>9</button>
              <button className="btn border-success" id="btn" onClick={()=>insert("*")}>x</button>
            </div>
            <div className="d-flex p-1">
              <button className="btn border-success" id="btn" onClick={()=>insert("4")}>4</button>
              <button className="btn border-success" id="btn" onClick={()=>insert("5")}>5</button>
              <button className="btn border-success" id="btn" onClick={()=>insert("6")}>6</button>
              <button className="btn border-success" id="btn" onClick={()=>insert("-")}>-</button>
            </div>
            <div className="d-flex p-1">
              <button className="btn border-success" id="btn" onClick={()=>insert("1")}>1</button>
              <button className="btn border-success" id="btn" onClick={()=>insert("2")}>2</button>
              <button className="btn border-success" id="btn" onClick={()=>insert("3")}>3</button>
              <button className="btn border-success" id="btn" onClick={()=>insert("+")}>+</button>
            </div>
            <div className="d-flex p-1">
              <button className="btn border-success equal" onClick={()=>insert("0")}>0</button>
              <button className="btn border-success equal ms-1" onClick={()=>insert(".")}>.</button>
              <button className="btn border-success ms-1" id="btn" onClick={()=>equal("")}>=</button>
            </div>
        </div>
      </div>
    </>
  );
}

export default App;

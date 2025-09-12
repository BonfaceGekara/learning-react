import { useState } from 'react';
import { BrowserRouter, Routes , Route , Link } from 'react-router-dom';

import './App.css';

function Son(props) {
  return(
    <div style={{background : 'orange'}}>
      <h1>I am the Son</h1>
      <div>{props.children}</div>
    </div>
  );
}

function Daughter(props) {
  return(
    <div style={{background : 'blue'}}>
      <h1>I am the Daughter</h1>
      <div>{props.children}</div>
    </div>
  )
}

function Football(){
  const shoot = () => {
    alert("Great shoot!");
  }
  return(
    <div>
      <button onClick={shoot}>Take a Shoot!</button>
    </div>
  )
}

const persons = [{id:1 , name:'Bonface', age:20},
  {id:2 , name:'Naomi', age:21},
  {id:3 , name:'John', age:22}
];

function List(){
  return(
    <ol type="i">
      {persons.map(person => 
        <li>{person.name} is {person.age} years old.</li>
      )}
    </ol>
  );
}

function MadeGoal () {
  return(
    <div className="scored">
      Gooooooooooaaaal!
    </div>
  );
}

function MissedGoal () {
  return(
    <div className="missed">
      Goal Missed!
    </div>
  );
}

function Goal(props) {

  const isGoal = props.isGoal;
  return(
    <div>
      {isGoal ? <MadeGoal /> : <MissedGoal />}
    </div>
  )
}

function MyForm () {

  const [name, setName] = useState("John");
  const [car, setCar] = useState("Select");

  const handleChange = (e) => {
    setName(e.target.value);
  }

  const handleCar = (e) => {
    setCar(e.target.value);
  }

  return(
    <form style={{paddingTop : '10px' }}>
      <label for="name">
        Enter Your name:
        <input type="text" value={name} onChange={handleChange}/>
      </label>
      <p>Your name is : { name }</p>
      <select name="selectedCar" value = {car} onChange={ handleCar }>
        <option value="Ford">Ford</option>
        <option value="BMW">BMW</option>
        <option value="Volvo">Volvo</option>
      </select>
    </form>
  );
}

export default function App() {
  return(
    <>

    <BrowserRouter>
      { /* navigation */}
      <nav>
        <Link to='/'>Football</Link> | {" "}
        <Link to='/goal'>Goal</Link> | {" "}
        <Link to='/list'>List</Link> | {" "}
        <Link to='/form'>Form</Link> | {" "}
        <Link to='/son'>Son</Link> | {" "}
        <Link to='/daughter'>Daughter</Link> 
      </nav>
      
      { /* Routes */}
      <Routes>
        <Route path='/' element= {<Football />} />
        <Route path='/goal' element= {<Goal isGoal = {1} />} />
        <Route path='/list' element= {<List /> } />
        <Route path='/form' element= {<MyForm />} />
        <Route path='/son' element= {<Son><h2>I love my parents</h2></Son>} />
        <Route path='/daughter' element= {<Daughter><h2>I love my parents</h2></Daughter>} />
      </Routes>

    </BrowserRouter>

    </>
  );
}
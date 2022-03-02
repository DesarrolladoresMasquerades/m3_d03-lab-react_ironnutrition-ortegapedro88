// src/App.js
import { useState } from "react";
import "./App.css";
import FoodBox from "./components/FoodBox";
import foodsDB from "./foods.json";
import AddFoodForm from './components/AddFoodForm'
import SearchFood from "./components/Search";


function App() {
  const [foodsData, setFoodsData] = useState(foodsDB)
  const [foods, setFoods] = useState(foodsDB)

 function addFoodForm(newFood){
 // setFoodsData(foodsData.concat(newFood))
  setFoods([].concat(newFood,foods) )
  setFoodsData([].concat(newFood,foodsData) )
  console.log(foods)
 }
 function filterFoodList(foodSearch){
   const foodLength = foodSearch.length
  setFoods(foodsData.slice().filter((elem)=>{return elem.name.slice(0,foodLength).toLowerCase() === foodSearch.slice(0,foodLength).toLowerCase()}))
 }

 function deleteFood(foodDelete){
  //console.log(foodDelete)
  if(foods.includes(foodDelete)){setFoods(foods.filter((elem)=>{return elem !== foodDelete}))}
 }

  return (
  <div className="App">
  <SearchFood filterFood={filterFoodList}/>
  <AddFoodForm  addFoodForm={addFoodForm}/>
  {foods.map((food, index)=>(

<FoodBox key={`${food.name} `+ index} food={food} deleteFood={deleteFood} />



  ))}

  </div>)
}
export default App;



/*
<p> {food.name} </p>
<img src={food.image} width="100" alt="food pic" />

*/
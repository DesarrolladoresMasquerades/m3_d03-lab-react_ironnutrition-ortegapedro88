import { useState } from "react";

function SearchFood(props) {

  const [foodSeach, setfoodSeach] = useState("")


  function handleSelect(event){
   const foodSeach = event.target.value
   setfoodSeach(foodSeach)

   props.filterFood(foodSeach)
  }

 
  return (
    <div className="FilterFood">
      <label>Search food:</label>
      <input name="foodName" type="text" value={foodSeach} onChange={handleSelect}/>
    </div>
  );
}

export default SearchFood;

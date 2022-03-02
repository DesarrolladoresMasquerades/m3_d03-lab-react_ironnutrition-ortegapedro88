import { useState } from "react";



function AddFoodForm(props) {

    const [formData, setformData] = useState({
        name: "",
        calories: 0,
        image: "",
        servings: 0
    })

function handleDataChange(event){

 const inputValue = event.target.name
 let value = event.target.value

 setformData({...formData, [inputValue]: value})
}

function handleSubmit(event){
    event.preventDefault()  
    props.addFoodForm(formData)    
    setformData({
        name: "",
        calories: 0,
        image: "",
        servings: 0
  })
  
  }


return(
 <div className="AddFoodForm">
 <h4>Add Food</h4>
 <form onSubmit={handleSubmit}>
   <label>Name:</label>
   <input name="name" type="text" value={formData.name} onChange={handleDataChange} />


   <label>Calories:</label>
   <input name="calories" value={formData.calories} type="number" onChange={handleDataChange} />

   <label>image:</label>
   <input name="image" value={formData.image} type="text" onChange={handleDataChange} />

   <label>Servings:</label>
   <input name="servings" value={formData.servings} type="number" onChange={handleDataChange} />

   <button type="submit">Add Food</button>
 </form>
</div>
)
}

export default AddFoodForm
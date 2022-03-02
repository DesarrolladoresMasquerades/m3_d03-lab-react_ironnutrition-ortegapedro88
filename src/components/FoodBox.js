import { Card, Col, Button } from "antd";
import { useState } from "react";

function FoodBox(prop){

    const [foodToDelete, setFoodToDelete] = useState("")

   function handleDelete(){
    const foodToDelete = (prop.food)
    setFoodToDelete(prop.food)
    prop.deleteFood(foodToDelete)
   }
  
    return(
  <Col>
    <Card
      title={prop.food.name}
      style={{ width: 230, height: 300, margin: 10 }}
    >
      <img src={prop.food.image} height={60} alt="pic" />
      <p>Calories: {prop.food.calories}</p>
      <p>Servings: {prop.food.servings}</p>
      <p>
        <b>Total Calories: {prop.food.calories * prop.food.servings}</b> kcal
      </p>
      <Button type="primary" onClick={handleDelete}> Delete </Button>
    </Card>
  </Col>

    )
}

export default FoodBox
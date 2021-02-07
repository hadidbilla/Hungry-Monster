const getFoodList = () => {
  let searchFood = document.getElementById("input-text").value;
  fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${searchFood}`)
    .then((response) => response.json())
    .then((data) => {
      displayFood(data, searchFood);
    });
};
const displayFood = (data, inputText) => {
  const showFood = document.getElementById("show-food");
  if (
    inputText == null ||
    inputText == 0 ||
    inputText == "" ||
    data.meals == null
  ) {
    let showData = `
      <h1 class="p-5 text-center">
      Please search Valid Meals Name !
      </h1>
        `;
    showFood.innerHTML = showData;
  } else {
    data.meals.forEach((meal) => {
      const foodContainerDiv = document.createElement("div");
      foodContainerDiv.className = "col-4  p-5 item rounded-3";
      const foodInfo = `
      <div onClick="mealsInfo('${meal.idMeal}')" class="card" style="width: 18rem;">
        <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
        <div class="card-body">
            <p class="card-text">${meal.strMeal}</p>
        </div>
    </div>
    
        `;
      foodContainerDiv.innerHTML = foodInfo;
      showFood.appendChild(foodContainerDiv);
    });
  }
};
const mealsInfo = (id) => {
  const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      renderMealInfo(data.meals[0]);
    });
};
const renderMealInfo = (data) => {
  let showFoodsDiv = document.getElementById("single-food");
  showFoodsDiv.style.display = "block";

  document.getElementById("image").src = data.strMealThumb;
  document.getElementById("strArea").innerText = data.strArea;
  document.getElementById("strIngredient1").innerText = data.strIngredient1;
  document.getElementById("strIngredient5").innerText = data.strIngredient5;
  document.getElementById("strMeasure1").innerText = data.strMeasure1;
  document.getElementById("strMeal").innerText = data.strMeal;
};

const getFoodList = () => {
  let searchFood = document.getElementById("input-text").value;
  fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchFood}`)
    .then((response) => response.json())
    .then((data) => {
      displayFood(data, searchFood);
    });
};
const displayFood = (data, inputText) => {
  let showFood = document.getElementById("show-food");
<<<<<<< HEAD
  showFood.innerHTML = "";
=======
>>>>>>> 2f00bd8208dfa7a78527c78a12bb05b6daa9d87d
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
<<<<<<< HEAD
      let foodContainerDiv = document.createElement("div");
      foodContainerDiv.className = "col-4  p-5 item rounded-3";
      const foodInfo = `
      <div onClick="mealsInfo('${meal.idMeal}')" class="card" style="width: 18rem;">
=======
      const foodContainerDiv = document.createElement("div");
      foodContainerDiv.className = "col-4  p-5 rounded-3 items";
      let foodInfo = `
      <div onClick="mealsInfo('${meal.idMeal}')" class="card shadow-lg text-center cd-body" style="width: 18rem; item">
>>>>>>> 2f00bd8208dfa7a78527c78a12bb05b6daa9d87d
        <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
        <div class="card-body text-bg">
            <p class="card-text"><strong>${meal.strMeal}</strong></p>
        </div>
    </div>
    
        `;
      foodContainerDiv.innerHTML = foodInfo;
      showFood.appendChild(foodContainerDiv);
    });
    let searchFood = (document.getElementById("input-text").value = "");
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
  document.getElementById("strMeasure3").innerText = data.strMeasure3;
};

const loadMeals = (search) => {
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
        displayMeals(data.meals)
      });
  };
  
  
  const displayMeals = (meals) => {
    
    const mealContainer = document.getElementById("meals-container");
    mealContainer.innerHTML = "";
    
    meals?.forEach((meal) => {
    const mealDiv = document.createElement("div");
    mealDiv.classList.add("col");
    mealDiv.innerHTML = `
    <div onclick = 'loadMeal(${meal.idMeal})' class="card">
    <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
     <div class="card-body">
    <h5 class="card-title">${meal.strMeal}</h5>
    <p class="card-text">${meal.strInstructions.slice(0, 200)}</p>
    </div>
    </div>`;
    mealContainer.appendChild(mealDiv);
    });
  };
  
  
  const searchFood = () => {
    const searchField = document.getElementById("search-field");
    const searchText = searchField.value;
    loadMeals(searchText);
    searchField.value = "";
  };
  
  
  const loadMeal = (idMeal) => {
    fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`)
      .then((res) => res.json())
      .then((data) => displayMealDetails(data.meals[0]));
  };
  
  
  const displayMealDetails = (meal) => {
    const detailContainer = document.getElementById("detail-container");
    detailContainer.innerHTML = "";
    const createDiv = document.createElement("div");
    createDiv.classList.add("card");
    createDiv.innerHTML = `
      
    <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
    <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
    <a href = "#" class = "btn btn-primary">Go somewhere </a>
    </div>
    `;
    detailContainer.appendChild(createDiv);
  };
  
  loadMeals("");
  
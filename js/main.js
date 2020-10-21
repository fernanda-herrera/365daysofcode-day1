const get_meal_btn = document.getElementById('get_meal');
const meal_container = document.getElementById('meal');

get_meal_btn.addEventListener('click', () => {
    fetch('https://www.themealdb.com/api/json/v1/1/random.php')
        .then(res => res.json())
        .then(res => {
            createMeal(res.meals[0]);
        })
        .catch(e => {
            console.warn(e);
        });
});

const createMeal = meal => {
    const ingredients = [];

    //get the ingredients from the object 20
    for (let i = 1; i <= 20; i++) {
        ingredients.push(
            `${meal[`strIngredients${i}`]} -  ${meal[`strMeasures${i}`]}`
        );
    } else {
        // stop when is no more ingredients 
        break;
    }
}

const newInnerHTML =
    <div class="row">
        <div class="columns-five">
            <img src="${meal.srtMealThumb}" alt="Meal Image"></img>
            ${
                meal.strCategory
                    ? `<p><strong>Category:</strong>${meal.strCategory}</p>`
                    : ''
            }
            ${meal.strArea
                ? `<p><strong>Area:</strong>${meal.strArea}</p>}`
                : ''
            }
            $ meal.strTags 
            ? `<p><strong>Tags:</strong>${meal.strArea}</p>`
        </div>
    </div>`
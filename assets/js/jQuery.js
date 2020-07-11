var map;

myObj = {};
function deleteDishType(myObj, dishType){
  delete myObj[dishType + "1"]
  delete myObj[dishType + "2"]
  delete myObj[dishType + "3"]
}

$( document ).ready(function(){
$("#chineseButton").on("click", function () {
  if ($("#chineseButton").is(":checked")) {
    $.extend(myObj, {
      chineseDish1: {
        title : "Chicken fried Rice",
        ingredients :{
          ingredient1 : "Silver rice",
          ingredient2 : "Chicken",
          ingredient3 : "Something Spicy"
        },
        image : "assets/images/Chicken-rice.png",
        mapsSearch : "Chinese Restaurant",
      },
      chineseDish2: {
        title : "Peking Duck",
        ingredients : {
          ingredient1 : "Duck",
          ingredient2 : "Sauce",
          ingredient3 : "Love"
        },
        image : "assets/images/Peking-duck.png",
        mapsSearch : "Chinese Restaurant"
      },
      chineseDish3: {
        title : "Hotpot",
        ingredients : {
          ingedient1 : "Sliced meat",
          ingedient2 : "Leaf vegetables",
          ingedient3 : "Mushrooms",
          ingedient4 : "Egg",
          ingedient5 : "Sliced Potatoes",
          ingedient6 : "Tofu"
        },
        image : "assets/images/Hotpot.jpg",
        mapsSearch : "Chinese Restaurant"
      }
    });
  } else {
    deleteDishType(myObj, "chineseDish")
  }
});
$("#turkishButton").on("click", function () {
  if ($("#turkishButton").is(":checked")) {
    $.extend(myObj, {
      turkishDish1: {
        title : "Turkish Pizza",
        ingredients : {
          ingedient1 : "Turkish Pizza Dough",
          ingredient2 : "Salad",
          ingredient3 : "Döner",
          ingredient4 : "Cheese",
          ingedient5 : "Tomato",
          ingredient6 : "Sauce of choice(Garlic sause and/or chillypaste recommanded)"
        },
        image : ""      },
      turkishDish2: {
        title : "Döner bun",
        ingredients : {
          ingedient1 : "Döner",
          ingredient2 : "A bun",
          ingredient3 : "Salad",
        },
        image : ""      },
      turkishDish3: {
        title : "Köfte",
        ingredients : {
          ingredient1 : "Meatballs",
          ingredient2 : "Minced meat",
          ingredient3 : "Rice"
        },
        image : ""      }
    });
  } else {
    deleteDishType(myObj, "turkishDish")
  }
});
$("#italianButton").on("click", function () {
  if ($("#italianButton").is(":checked")) {
    $.extend(myObj, {
      italianDish1: {
        title : "Italian Pizza",
        ingredients : {
          ingedient1 : "Dough",
          ingedient2 : "Tomato-sauce",
          ingedient3 : "Cheese",
          ingedient4 : "Other custom ingedients to your liking"
        },
        image : ""      },
      italianDish2: {
        title : "Pasta Bolognese",
        ingredients : {
          ingedient1 : "Pasta",
          ingedient2 : "Tomatoes",
          ingedient3 : "Minced meat"

        },
        image : ""      },
      italianDish3: {
        title : "Pasta Carbonara",
        ingredients : {
          ingedient1 : "Pasta",
          ingedient2 : "Cheese",
          ingedient3 : "Bacon"
        },
        image : ""      }
    });
  } else {
    deleteDishType(myObj, "italianDish")
  }
});
$("#indonesianButton").on("click", function () {
  if ($("#indonesianButton").is(":checked")) {
    $.extend(myObj, {
      indonesianDish1: {
        title : "Bakso",
        ingredients : {
          ingedient1 : "Beef",
          ingedient2 : "Noodles",
          ingedient3 : "Pickle",
          ingedient4 : "Celdery",
          ingedient5 : "Rice Vermicilli",
        },
        image : ""
      },
      indonesianDish2: {
        title : "Nasi Goreng",
        ingredients : {
          ingredient1 : "Rice",
          ingredient2 : "Cabbage",
          ingredient3 : "Eggs",
          ingredient4 : "shallots",
          ingredient5 : "tomato",
          ingredient6 : "Cucumber"
        },
        image : ""
      },
      indonesianDish3: "Nasi padang"
    });
  } else {
    deleteDishType(myObj, "indonesianDish")
  }
});
$("#dutchButton").on("click", function () {
  if ($("#dutchButton").is(":checked")) {
    $.extend(myObj, {
      dutchDish1: "Boerenkool",
      dutchDish2: "Kapsalon",
    });
  } else {
    deleteDishType(myObj, "dutchDish")
  }
});
// this extends a random dish in the object to the page when the submit button is clicked
$("#submitButton").on("click", function () {
  const keys = Object.keys(myObj);
  const randomIndex = Math.floor(Math.random() * keys.length);
  const randomKey = keys[randomIndex];
  const randomDish = myObj[randomKey];
  let keyword = randomDish.mapsSearch;
  if (typeof(randomDish) == "undefined"){
    $(".diner-header, .diner-image, .diner-content").empty()
    $(".diner-header").append(`<h2>Please check a button</h2>`)
  } else {
    $(".diner-header, .diner-image, .diner-content").empty()
    $(".diner-header").append(`<h2>${randomDish.title}</h2>`);
    if (randomDish.image == undefined){
        $(".diner-image").append(`<div class="no-image"><p>Image was not found</p></div>`);
    }
    $(".diner-image").append(`<img src="${randomDish.image}"></img>`);
    $(".diner-content").append(`<h3>Ingredients</h3>`);
    const keys = Object.keys(randomDish)
    let randomDishIngredients = randomDish.ingredients;
    const ingredientsArray = Object.values(randomDishIngredients)
    for (i = 0; i < ingredientsArray.length; i++) {
      $(".diner-content").append(`<li>${ingredientsArray[i]}</li>`);
    }
    let keyword = randomDish.mapsSearch;

    }
});
})

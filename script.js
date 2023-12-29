const restaurants = [
    {
        name: "Bawarchi Restaurant",
        dishes: ["Butter Paneer  ₹200", "Mutter paneer  ₹250", "Kadhayi Paneer  ₹270"]
    },
    {
        name: "Meera Restaurant",
        dishes: ["Chicken 65  ₹200", "Chicken Butter masala  ₹250", "Chicken Do pyaza  ₹270"]
    },
    {
        name: "Kesari lal Dhaba",
        dishes: ["Fish masala  ₹200", "Fish Fry  ₹250", "Fish curry  ₹270"]
    },
];

function searchRestaurant() {
    const searchInput = document.getElementById("restaurant-name").value.toLowerCase();
    const restaurantList = document.getElementById("restaurant-list");
    restaurantList.innerHTML = "";

    const matchingRestaurants = restaurants.filter(restaurant => restaurant.name.toLowerCase().includes(searchInput));

    if (matchingRestaurants.length === 0) {
        restaurantList.innerHTML = "<li>No matching restaurants found.</li>";
    } else {
        matchingRestaurants.forEach(restaurant => {
            const listItem = createRestaurantListItem(restaurant);
            restaurantList.appendChild(listItem);
        });
    }
}

function createRestaurantListItem(restaurant) {
    const listItem = document.createElement("li");
    listItem.textContent = restaurant.name;
    listItem.classList.add("restaurant-item");
    listItem.addEventListener("click", () => displayRestaurantDetails(restaurant));
    return listItem;
}

function displayRestaurantDetails(restaurant) {
    const restaurantDetails = document.getElementById("restaurant-details");
    restaurantDetails.innerHTML = `
        <h2>${restaurant.name}</h2>
        <h3>Dishes Available:</h3>
        <ul>
            ${restaurant.dishes.map(dish => `<li>${dish}</li>`).join("")}
        </ul>
    `;
}

const searchButton = document.getElementById("search-button");
searchButton.addEventListener("click", searchRestaurant);
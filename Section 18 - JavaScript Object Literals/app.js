
const restaurant = {
    name: 'Ichiran Ramen',
    address: `${Math.floor(Math.random() * 100) + 1} Johnson Ave`,
    city: 'Brooklyn',
    state: 'NY',
}

restaurant.zipcode = '11206';


let fullAddress = `${restaurant.address}, ${restaurant.city}, ${restaurant.state}, ${restaurant.zipcode}`;
console.log(fullAddress);
console.log(restaurant);






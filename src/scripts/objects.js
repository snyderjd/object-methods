const allCars = [
    {
        model: "Mustang",
        color: "Midnight Blue",
        year: 1976,
        length: 120,
        width: 62,
        height: 47
    },
    {
        model: "Xterra",
        color: "Forest Green",
        year: 2011,
        length: 144,
        width: 71,
        height: 55
    },
    {
        model: "Thunderbird",
        color: "Red",
        year: 2005,
        length: 115,
        width: 58,
        height: 42
    },
    {
        model: "Suburban",
        color: "Grey",
        year: 2015,
        length: 149,
        width: 73,
        height: 58
    }
];



const reportContainer = document.querySelector(".report__container");

const firstCar = allCars[0];

reportContainer.innerHTML += "<h1>Car List</h1>";

allCars.forEach(car => {
    for (let entry of Object.entries(car)) {
        reportContainer.innerHTML += `<div>${entry[0]}:${entry[1]}</div>`;
    }
});


const dateVisited = "visitDate";
const owed = "amountBilled";
const patient = "patientName";

const doctorBill = {
    "officeName": "Nashville Clinic",
    "streetAddress": "200 West 5th Street",
    "doctorName": "Dr. Smith",
    "patientName": "Joe",
    "visitDate": "08/01/2019",
    "amountBilled": 100,
    "dueDate": "08/30/2019"
};

for (let value of Object.values(doctorBill)) {
    console.log(value);
}

for (let key of Object.keys(doctorBill)) {
    console.log(key);
}

const billContainer = document.querySelector(".doctor__bill");

for (let key of Object.keys(doctorBill)) {
    billContainer.innerHTML += `<span>${key}</span>`;
}

const meal = {
    name: "barbecue",
    mainDish: "beef brisket",
    sideDish: "baked beans",
    size: "1/2 pound",
    price: 17,
    vegetarian: false
};

const foodContainer = document.querySelector(".food");

for (let entry of Object.entries(meal)) {
    foodContainer.innerHTML += `<h4>${entry[0]}: ${entry[1]}`;
}




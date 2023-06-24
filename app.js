const bill = (products, tax) => {
    let total = 0

    for (let i = 0; i < products.length; i++) {
        total += products[i] + products[i] * tax
    }

    return total
}

const result = bill([10, 15, 45], 0.2)
console.log(result);

function calcAge(birthTear, firstName) {
    const age = 2022 - birthTear
    console.log(`${firstName} siz ${age} yoshdasiz`);
    return age
}

const age = calcAge(1988, 'Hayot')

const names = ['hayot', 'yunus', 'yusuf', 'abror']
const newNames = []

names.forEach((name) => {
    const newName = name.charAt().toUpperCase() + name.slice(1).toLowerCase() + 'bek'
    newNames.push(newName)
})

console.log(newNames);

function yih(n) {
    return n * (n + 1) / 2
}
console.log(yih(10));

//
const cars = ['gentra', 'nexia', 'spark', 'damas']
const newCars = []

cars.forEach((name) => {
    const newName = name.charAt().toUpperCase() + name.slice(1).toLowerCase() + ' uz';
    newCars.push(newName)
})
console.log(newCars);

//
const students = ['Khayot', 'Yunus', 'Yusuf', 'Abror']
const newStudents = []

students.forEach((name) => {
    const newName = name.charAt().toLowerCase() + name.slice(1).toUpperCase() + 'bek';
    newStudents.push(newName);
})
console.log(newStudents);


//
const doctors = ['lor', 'cardio']
const newDoctors = []
doctors.forEach((name) => {
    const newName = name.charAt().toUpperCase() + name.slice(1).toLowerCase() + ' doc'
    newDoctors.push(newName)
})

console.log(newDoctors);

const user = {
    name: 'Khayot',
    age: 25,
    email: 'hrazzoqov0002@gmail.com',
    location: 'Fergana',
    langs: ['uzbek', 'russian', 'english'],
    login: function () {
        console.log('Welcome to my site');
    },
    logout: function () {
        console.log('Bye bye');
    },
    speak: function () {
        console.log('I can speak');
        this.langs.forEach((lang) => {
            console.log(lang);
        })
    }

}

user.speak()



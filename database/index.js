const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/bookings', {useNewUrlParser: true});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'Connection Err'));
db.once('open', () => console.log('We are connected'));

let schema = mongoose.Schema({
    room_id: String,
    max_guests: String,
    nightly_price: String,
    cleaning_fee: String,
    taxes: String,
    ratings_count: String,
    ratings_sum: String,
    starting_date: String,
    used_dates: [String]
});

let Room = mongoose.model('Room', schema);


const random = (min, max, floor) => {
    if (floor) {
        var num = Math.floor(min + (Math.random() * (max - min)));
        return num.toString();
    } else {
       var num =  min + (Math.random() * (max - min));
    }
}

const generateDate = () => {
    var month = random(1, 12, true);
    if (month.length < 2) {
        month = '0' + month;
    }
    var day = random(1, 31, true);
    if (day.length < 2) {
        day = '0' + day;
    }
    var year = parseInt(day) % 2 === 0 ? '2020' : '2021';
    var final = month + day + year;
    return final;
}

const generateUsedDates = () => {
    var result = [];
    var length = random(10, 43, true);
    for (var i = 0; i < parseInt(length); i++) {
        var final = generateDate();
        result.push(final);
    }
    return result;
}

const generateSeedData = () => {
    var results = [];
    let j = 1;
    for (var i = 0; i < 100; i++) {
        let obj = {};
        let room_id = j;
        j++;
        let max_guests = random(3, 6, true);
        let nightly_price = random(65, 420, true);
        nightly_price = nightly_price + '.' + random(1, 99, true);
        let cleaning_fee = random(16, 34, true);
        cleaning_fee = cleaning_fee + '.' + random(1, 99, true);
        let taxes = random(1, 12, true);
        taxes = taxes + '.' + random(1, 99, true);
        let ratings_count = random(22, 167, true);
        let ratings_sum = random(1, 5, true);
        ratings_sum = ratings_sum + '.' + random(1, 99, true);
        let starting_date = generateDate();
        let used_dates = generateUsedDates();
        obj['room_id'] = room_id;
        obj['max_guests'] = max_guests;
        obj['nightly_price'] = nightly_price;
        obj['cleaning_fee'] = cleaning_fee;
        obj['taxes'] = taxes;
        obj['ratings_count'] = ratings_count;
        obj['ratings_sum'] = ratings_sum;
        obj['starting_date'] = starting_date;
        obj['used_dates'] = used_dates;
        results.push(obj);
    }
    return results;
}


const seed = () => {
    var arr = generateSeedData();
    Room.insertMany(arr, (err, docs) => {
        if (err) {
            console.log(`Error @ [ seed - Room.insertMany ] ::: ${err}`);
            // callback(err);
        } else {
            console.log(`Seeding complete`);
            // callback(err, docs);
        }
    });
}


// seed();

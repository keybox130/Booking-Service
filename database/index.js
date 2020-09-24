const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:3000/bookings', {useNewUrlParser: true});

let schema = mongoose.Schema({
    room_id: Number,
    max_guests: Number,
    nightly_price: Number,
    cleaning_fee: Number,
    taxes: Number,
    ratings_count: Number,
    ratings_sum: Number,
    starting_date: Number,
    used_dates: [Number]
});

let Room = mongoose.model('Room', schema);


const random = (min, max, floor) => {
    if (floor === true) {
        return Math.floor(min + Math.random() * (max - min));
    } else {
        return min + (Math.random() * (max - min));
    }
}


const generateDate = () => {
    var month = random(1, 12, true);
    var day = random(1, 31, true);
    var year = day % 2 === 0 ? 2020 : 2021;
    var final = month + day + year;
    return final;
}

const generateUsedDates = () => {
    var result = [];
    var length = random(0, 43, true);
    for (var i = 0; i < length; i++) {
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
        let nightly_price = random(65, 420, false);
        let cleaning_fee = random(16, 34, false);
        let taxes =  4 + random(1, 12, false);
        let ratings_count = random(22, 167, true);
        let ratings_sum = random(1, 5, false);
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


const seed = (arr, callback) => {
    Room.insertMany(arr, (err, docs) => {
        if (err) {
            console.log(`Error @ [ seed - Room.insertMany ] ::: ${err}`);
            callback(err);
        } else {
            console.log(`Seeding complete`);
            callback(err, docs);
        }
    });
}


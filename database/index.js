const mongoose = require('mongoose');

mongoose.connect('mongodb://172.17.0.2:27017/bookings', { useNewUrlParser: true });

const db = mongoose.connection;

const schema = mongoose.Schema({
  room_id: String,
  ratings_count: String,
  ratings_sum: String,
  max_guests: String,
  min_days: String,
  service_fee: String,
  base_nightly_price: String,
  starting_date: Date,
  weekly_discount: Object,
  monthly_discount: Object,
  already_booked: [],
  taxes_fees: String,
  additional_person_tax: String,
});

const Room = mongoose.model('Room', schema);

// seed stuff

const random = (min, max) => {
  const num = min + Math.floor(Math.random() * (max - min));
  return num.toString();
};

const randomBool = () => {
  const i = random(1, 10);
  if (i % 2 === 0) {
    return true;
  }
  return false;
};

const generateSeedData = () => {
  let roomId = 1;
  const result = [];
  for (let i = 0; i < 100; i += 1) {
    const obj = {};
    const ratingsCount = random(15, 460);
    const ratingsSum = `${random(1, 5)}.${random(1, 99)}`;
    const maxGuests = random(3, 6);
    const minDays = random(1, 30);
    const serviceFee = `${random(3, 5)}.${random(1, 99)}`;
    const baseNightlyPrice = `${random(41, 556)}.${random(1, 99)}`;
    const startingDate = new Date();
    const weeklyDiscount = { discount: randomBool(), percentage: random(5, 25) };
    const monthlyDiscount = { discount: randomBool(), percentage: random(5, 25) };
    const alreadyBooked = [];
    const taxesFees = random(3, 9);
    const additionalPersonTax = random(3, 9);
    obj.room_id = roomId;
    roomId += 1;
    obj.ratings_count = ratingsCount;
    obj.ratings_sum = ratingsSum;
    obj.max_guests = maxGuests;
    obj.min_days = minDays;
    obj.service_fee = serviceFee;
    obj.base_nightly_price = baseNightlyPrice;
    obj.starting_date = startingDate;
    obj.weekly_discount = weeklyDiscount;
    obj.monthly_discount = monthlyDiscount;
    obj.already_booked = alreadyBooked;
    obj.taxes_fees = taxesFees;
    obj.additional_person_tax = additionalPersonTax;
    result.push(obj);
  }
  return result;
};

const seed = () => {
  const arr = generateSeedData();
  Room.insertMany(arr, (err, docs) => {
    if (err) {
      console.log(`Err @ [seed - insertMany ] ::: ${err}`);
    } else {
      console.log(`Seeding complete ::: ${docs}`);
    }
  });
};

db.on('error', console.error.bind(console, 'Connection Err'));
db.once('open', () => seed());



const getRoomData = (data, callback) => {
  const obj = { room_id: data };
  Room.find(obj, (err, docs) => {
    if (err) {
      console.log(`Err @ [ getRoomData ] ::: ${err}`);
      callback(err);
    } else {
      console.log('Fetch @ [ getRoomData ] Sucessfull');
      callback(err, docs);
    }
  });
};

module.exports.getRoomData = getRoomData;
module.exports.Room = Room;
// Run the script.
// seed();

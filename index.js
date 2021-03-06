let driverId = 0;
let passengerId = 0;
let tripId = 0;
let store = {drivers: [], passengers: [], trips: []};

class Driver {
  constructor(name) {
    this.name = name;
    this.id = ++driverId;
    store.drivers.push(this);
  }

  trips() {
    return store.trips.filter((trip) => trip.driverId === this.id)
  }
  passengers() {
    let pId = this.trips().map(t => t.passengerId);
    return store.passengers.filter((passenger) => pId.includes(passenger.id))
  }
}

class Passenger {
  constructor(name) {
    this.name = name;
    this.id = ++passengerId;
    store.passengers.push(this);
  }
  trips() {
    return store.trips.filter((trip) => trip.passengerId === this.id)
  }
  drivers() {
    let dId = this.trips().map(t => t.driverId);
    return store.drivers.filter((driver) => dId.includes(driver.id))
  }
}


class Trip {
  constructor(driver, passenger) {
    this.driverId = driver.id;
    this.passengerId = passenger.id;
    this.id = ++tripId;
    store.trips.push(this);
  }

  driver() {
    return store.drivers.find((driver) => driver.id === this.driverId );
  }
  passenger() {
    return store.passengers.find((passenger) => passenger.id === this.passengerId );
  }
}

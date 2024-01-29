// Code your solution in this file!
function distanceFromHqInBlocks(pickup) {
    if (pickup > 42) {
        return pickup - 42;
    } else if (pickup < 42) {
        return 42 - pickup;
    } else {
        return 0;
    }
}
function distanceFromHqInFeet(pickup) {
    let blocks = distanceFromHqInBlocks(pickup);
    return blocks * 264;
}
function distanceTravelledInFeet(pickup, dropoff) {
    let feet = pickup >= dropoff ? pickup - dropoff : dropoff - pickup;
    return feet * 264;
}
function calculatesFarePrice(pickup, dropoff) {
    let distance = distanceTravelledInFeet(pickup, dropoff);
    if (distance < 400) {
        return 0;
    } else {
        if (distance <= 2000) {
            return (distance - 400) * .02;
        } else { 
            if (distance <= 2500) {
                return 25;
            } else {
                return "cannot travel that far";
            }
        }
    }
}
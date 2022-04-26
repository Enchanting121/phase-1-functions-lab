const hq = 42

function distanceFromHqInBlocks(someNumber) {
    let result

    result = someNumber - hq;

    if (result <= 0) {
        return -(result);
    }
    return (result);

}

function distanceFromHqInFeet(someNumber) {
    distanceFromHqInBlocks(someNumber);
    return distanceFromHqInBlocks(someNumber) * 264;
}

function distanceTravelledInFeet(start, destination) {
    let result = (destination - start) * 264;

    if (result <= 0) {
        return -(result);
    }
    return result;
}

function calculatesFarePrice(start, destination) {
    let result = distanceTravelledInFeet(start, destination);
    let price
    let cents = .02

    if (result < 400) {
        price = 0;
    } else if (result > 400 && result < 2000) {
        price = (result - 400) * .02;
    } else if (result > 2000 && result < 2500) {
        price = 25;
    } else if (result >= 2500) {
        price = "cannot travel that far";
    }
    return price;

}
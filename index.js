function distanceFromHqInBlocks(pickUp){
   return Math.abs(42-pickUp);
}

function distanceFromHqInFeet(pickUp) {
    return distanceFromHqInBlocks(pickUp)*264;
    }

function distanceTravelledInFeet(start, destination){
    if (start < destination){
        return (destination-start)*264
    }else {
        return (start-destination)*264}
}

function calculatesFarePrice(start, destination){
    let rideDistance = (Math.abs(start-destination)*264)
    
    if (rideDistance <= 400) {
        return 0
    }
    else if (rideDistance >400 && rideDistance<2000){
        let farePrice = 0.02*(rideDistance-400)
        return farePrice
    }
    else if (rideDistance>2000 && rideDistance<=2500){
        return 25
    }
    else if (rideDistance>2500){
        return ('cannot travel that far');
    }
}



function minPlanes(fuelUnitofEachPlane , totalAirports) {
    // If there is only 1 airport then we have reached the last airport
    if (totalAirports <= 1) 
        return 0;
    // If the first airport's plane has no fuel then we cant reach to next airport
    if (fuelUnitofEachPlane[0] == 0)
        return -1;
 
    // Contain the airport number where we can reach from current airport
    var maxReachableAirport = fuelUnitofEachPlane[0];
    // Contain the fuel units from current index
    var fuelUnits = fuelUnitofEachPlane[0];
    // Contain the number of planes used 
    var planes = 1;
 
    for (var i = 1; i < totalAirports; i++) {
        // Return the number of planes used for journey
        if (i == totalAirports - 1) 
            return planes;

        // Update the airport numberthat can be reached with the current plane
        maxReachableAirport = Math.max(maxReachableAirport, i + fuelUnitofEachPlane[i]); 
        // Decrement the fuel unit that can be taken from the current plane
        fuelUnits--; 
                 
        // If no fuel is left in current plane
        if (fuelUnits == 0) {
            // then we need to take another plane
            planes++;

            // If the maxReachableAirport is not the end then we can't go further, because there is no fuel remaining
            if (i >= maxReachableAirport) 
                return -1;

            // Update the fuel unit that can be used in current plane
            fuelUnits = maxReachableAirport - i;
        }
        
    }
    return -1; // If we haven't reached the end of the
    }
 

var fuelUnitofEachPlane = [ 1,2,3,4,5,6,1,1,1 ];
 
console.log('Min Num of planes used : ', minPlanes(fuelUnitofEachPlane, fuelUnitofEachPlane.length));
 
const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// Using reduce() to sum up the total batteries
const totalBatteries = batteryBatches.reduce((total, batch) => total + batch, 0);

// Example test call (optional, for checking functionality)
console.log(totalBatteries); // Output: 31

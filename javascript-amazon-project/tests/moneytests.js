// Automated Testing

import formatCurrency from "../scripts/utils/money.js";

console.log("Test suite: format currency");
//This is a basic test case
console.log("converts cents into dollars string");
if (formatCurrency(2095) === "20.95") {
  console.log("formatCurrency test passed");
} else {
  console.log("formatCurrency test failed");
}

//this is an example of an edge test case
if (formatCurrency(0) === "0.00") {
  console.log("formatCurrency string passed");
} else {
  console.log("formatCurrency string failed");
}
console.log("rounds cents to nearest cent");

if (formatCurrency(2000.5) === "20.01") {
  console.log("formatCurrency rounding test passed");
} else {
  console.log("failed");
}
console.log("rounds cents to nearest cent");

if (formatCurrency(2000.4) === "20.00") {
  console.log("Passed");
} else {
  console.log("Failed");
}
console.log("handles negative cents");

//Disadvantages of manual testing approach:
//1. Time-consuming: Manual testing can be time-consuming, especially for larger applications with many features and test cases. It requires human effort to execute each test case, which can lead to delays in the testing process.
//2. Prone to human error: Manual testing relies on human testers, and there is a possibility of making mistakes while executing test cases. Testers may overlook certain scenarios or make errors in data entry, leading to inaccurate test results.
//3. Limited coverage: Manual testing may not cover all possible scenarios and edge cases due to time constraints and human limitations in identifying all potential issues. This can result in missed bugs and reduced overall test coverage.

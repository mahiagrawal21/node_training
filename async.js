function waitForDelay(delay) {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve();
      }, delay);
    });
  }
  
  async function asyncFunction() {
    console.log("Start");
    await waitForDelay(2000); // Wait for 2 seconds asynchronously
    console.log("After 2 seconds");
    await waitForDelay(3000); // Wait for another 3 seconds asynchronously
    console.log("After 3 seconds");
    // Additional asynchronous tasks can be performed here
  }
  
  asyncFunction();
  
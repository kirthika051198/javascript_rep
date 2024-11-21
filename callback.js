function task1(x) {
    setTimeout(() => {
      console.log("Task1");
      x();
    }, 3000);
  }
  
  function task2(y) {
    setTimeout(() => {
      console.log("Task2");
      y();
    }, 2000);
  }
  
  function task3(z) {
    setTimeout(() => {
      console.log("Task3");
      z();
    }, 1000);
  }
  
  function task4() {
    setTimeout(() => {
      console.log("Task4");
    }, 500);
  }
  
  task1(() => {
    task2(() => {
      task3(task4);
    });
  });
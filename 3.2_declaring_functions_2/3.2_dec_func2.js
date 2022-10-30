const hello = () => {
    return 'Hello World!';
  };
  
  const power = (a) => a ** 2;
  
  (function (a) {
    return Math.sqrt(a);
  })(4);
  
  (function (a, b) {
    return Math.random() * (a - b) + b;
  })();
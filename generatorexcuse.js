
    const WHO = ['The dog', 'My grandma', 'The mailman', 'My bird'];
    const ACTION = ['ate', 'peed', 'crushed', 'broke'];
    const WHAT = ['my homework', 'my phone', 'the car'];
    const WHEN = ['before the class', 'when I was sleeping', 'while I was exercising', 'during my lunch', 'while I was praying'];
  
    let frase ="";
  
    function aleatorio(arr){
      return Math.floor(Math.random() * arr.length);
    };
    
      frase += `${WHO[aleatorio(WHO)]} ${ACTION[aleatorio(ACTION)]} ${WHAT[aleatorio(WHAT)]} ${WHEN[aleatorio(WHEN)]}`;
    
      console.log(frase);
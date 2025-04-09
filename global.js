const PRONOUN = ['the', 'our'];
const ADJ = ['great', 'big'];
const NOUN = ['jogger', 'racoon'];
const EXTENSION = [".com", ".net", ".us", ".io"];



const domain = () => {
    const combination = []
    PRONOUN.forEach(function(p) {
        ADJ.forEach(function(a) {
          NOUN.forEach(function(n) {
            EXTENSION.forEach(function(e) {
              
             combination.push (`${p}${a}${n}${e}`)
            });
          });
        });
      });
      return combination
  }
  
  const WHO = ['The dog', 'My grandma', 'The mailman', 'My bird'];
  const ACTION = ['ate', 'peed', 'crushed', 'broke'];
  const WHAT = ['my homework', 'my phone', 'the car'];
  const WHEN = ['before the class', 'when I was sleeping', 'while I was exercising', 'during my lunch', 'while I was praying'];

  function multi(arr){
    return Math.floor(Math.random() * arr.length);
  };
  const excuse = () => {
     return `${WHO[multi(WHO)]} ${ACTION[multi(ACTION)]} ${WHAT[multi(WHAT)]} ${WHEN[multi(WHEN)]}`;
  };


  
const domainOrExcuse = (type) => {

    if (type === "domain") return domain();
    if (type === "excuse") return excuse();

}
console.log(domainOrExcuse("excuse"))
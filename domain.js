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
  
  console.log(domain());

// const domain = () => {
//     const combination = [];
    
//     PRONOUN.forEach(pronouns => {
//     ADJ.forEach(adjs => {
//         NOUN.forEach(nouns => {
//             EXTENSION.forEach(extensions => {
//                 combination.push( `${PRONOUN}${ADJ}${NOUN}${EXTENSION}`);
//             });
//         });
//     });
// });
//     return combination
// };

// console.log(domain());
const arr = ["Peter Jackson","Paulino Leokadia","Soraya Sachin","Lys Gohar","Jayesh Enok","Xandinho Xanthi","Aodhagán Hanna","Neirin Quintino","Nicolao Dawa","Simona Walentyna","Atalanta Frane","Anita Meurig","Lurdes Suman","Gavrilo Gautselin","Aamina Vulferam","Kumari Leonard","Kent Sosruko","Lughaidh Ramesha","Marie Facundus","Elena Ignatiy","Aparna Anita","Iakobos Nethanel"]


search = (arr, word) => arr.filter(el => el.includes(word));


/* console.log(search(arr, "Ata"));  */  

module.exports = search 
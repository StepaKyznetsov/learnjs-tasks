function unique(arr) {

  let uniqueValue = [];
  
  for (let value of arr) {
	  if (!uniqueValue.includes(value)) 
		  uniqueValue.push(value);
  }
  return uniqueValue;
}

let strings = ["кришна", "кришна", "харе", "харе",
  "харе", "харе", "кришна", "кришна", ":-O"
];

alert(unique(strings));
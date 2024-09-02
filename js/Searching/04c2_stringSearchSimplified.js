function stringSearch(longstring, stringSearched){
  let count = 0;
  for (let i=0; i<longstring.length;i++){    
    for(let j=0;j<=stringSearched.length;j++){
      // console.log(stringSearched[j], longstring[j+i])
      if(stringSearched[j] !== longstring[j+i]) break;
      if(j===stringSearched.length -1){       
        count++;
        break;
      }      
    }    
  }
  return count;
}
console.log(stringSearch('loried loled', 'lol'));
console.log(stringSearch('loried loledloled', 'lol'));
  
 
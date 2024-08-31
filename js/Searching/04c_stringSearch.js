function stringSearch(longstring, stringSearched){
  let longstringLength = longstring.length;
  let stringSearchedLength =  stringSearched.length;
  let count = 0, temp = 0, iTemp = 0;
  let tempA, tempB;

  if( longstringLength< stringSearchedLength) return -1;

  for ( let i = 0 ; i< longstringLength; i++){
    iTemp = i;
    for (let j = 0; j< stringSearchedLength; j++){
      tempA = longstring[iTemp];
      tempB = stringSearched[j];
      if(longstring[iTemp] == stringSearched[j] && iTemp< longstringLength){
        temp += 1;
        iTemp += 1;
      }else{
        break;
      }
    }
    if(temp == stringSearchedLength ) {
      count++;
      i += temp - 1;
    }
    temp = 0;
  }

  return count;

}


stringSearch("wowomgzomg","omg")
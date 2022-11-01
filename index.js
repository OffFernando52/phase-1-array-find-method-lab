const record = [
    { year: "2015", result: "W"},
    { year: "2014", result: "N/A"},
    { year: "2013", result: "L"},
    //...
  ]
function superbowlWin(winRecord){
    const found = winRecord.find(({result}) => result === "W");
    if(found){
        return found.year;
    }else 
    return undefined;;
}
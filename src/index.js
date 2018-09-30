module.exports = function check(str, bracketsConfig) {
  var ster = "";
  for(i = 0; i < str.length;i++){
    for(j = 0; j < bracketsConfig.length;j++){
      if(str[i] == bracketsConfig[j][0])ster+=j;
      if(str[i] == bracketsConfig[j][1]){
        if(ster[ster.length-1] == j)
          ster = ster.substring(0,ster.length-1);
        /*else if(bracketsConfig[j][0] == bracketsConfig[j][1])
          return false;*/
      }
    }
  }
  if(ster != "" || ster.length != 0)return false;
  return true;
}

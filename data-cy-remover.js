module.exports = function dataCyLoader(source) {
  console.log("CyLoader")
  var dataAttr= 'data-cy=\"([^"]*)\"';
  if(source.match(dataAttr)){
    console.log("Removing data-cy")
    source = source.replace(new RegExp(dataAttr, 'g'), '');
  }
  return source;
}
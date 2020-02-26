
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if (!Array.isArray(matrix)) {
    return [];
  }
  
  return matrix.reduce((arr,item, index) => {
    (index%2) ? arr.push(...item.reverse()):
                arr.push(...item);
     return arr; 
    },[]);
  
}

/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
// your implementation
var count = 0;
for(let i = 0; i < preferences.length; i++)
{
  let firstLover = preferences[i];
  let secondLover = preferences[firstLover];
  let thirdLover = preferences[secondLover];
  if (thirdLover == i) 
  {
    count++;
  }
}
return count / 3;
};

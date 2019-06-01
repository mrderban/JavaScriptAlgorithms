function addBorder(picture) {
  var lengthOfWall = picture[0].length + 2;
  var wall = "";

  for (var i = 0; i < lengthOfWall; i++) {
    wall = wall.concat("*");
  }
  picture.unshift(wall);
  picture.push(wall);

  for (var j = 1; j < picture.length - 1; j++) {
    picture[j] = "*".concat(picture[j], "*");
  }

  return picture;
}

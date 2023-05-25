class Character {
  constructor(id, top, bottom, left, right) {
    this.id = id;
    this.top = top;
    this.left = left;
    this.right = right;
    this.bottom = bottom;
    this.isFound = false;
  }

  isCharacterFound(x, y) {
    if (y >= this.left && y <= this.right && x >= this.top && x <= this.bottom) {
      this.isFound = true;
      console.log(this.isFound);
      return true;
    } else {
      return false;
    }
  }
}
export default Character;

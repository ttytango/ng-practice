export class Post {
  constructor(
    public id: string,
    public title: string,
    public content: string
  ) { }

  /*
  Generate random, unique id strings based on input array.
  Can be moved to a shared utils class
*/
  static generateId(inputArray): string {
    let tempId: string = Math.random().toString(36).substring(2, 7);
    if (inputArray.length === 0) {
      return tempId;
    }
    return Array.from(inputArray.id).find(item => item === tempId) ?  this.generateId(inputArray) : tempId;
  }
}



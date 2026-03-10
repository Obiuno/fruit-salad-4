const fruitsArray = require("../fruits.json");

class FruitModel {
  constructor(fruit) {
    this.genus = fruit.genus;
    this.name = fruit.name;
    this.id = fruit.id;
    this.family = fruit.family;
    this.order = fruit.order;
    this.nutritions = fruit.nutritions;
  }

  static showAllFruits() {
    return fruitsArray.map((f) => new FruitModel(f));
  }

  static showFruit(name) {
    const fruits = fruitsArray.find((fruit) =>
      fruit.name.toLowerCase().startsWith(name.toLowerCase()),
    );
    if (fruits) {
      return new FruitModel(fruits);
    } else {
      //lots ideas of how to handle, if in doubt just throw an error
      throw "No fruits found with that name";
    }
  } //end up with an array of fruit objects

  static create(data) {
    const newFruit = data;
    console.log(newFruit); //for debug

    newFruit["id"] = Math.max(...fruitsArray.map((f) => f.id)) + 1;
    fruitsArray.push(newFruit);

    return new FruitModel(newFruit);
  }

  //updating a function, not static
  update(data) {
    //find a fruit by ID
    //return back an object
    //look for name property and change it
    //return back the object
    //check that name has been made

    const updateFruit = fruitsArray.find(
      (fruit) => fruit.name.toLowerCase() === this.name.toLowerCase(),
    );
    if (updateFruit) {
      updateFruit.name = data.name;
      return new FruitModel(updateFruit);
    } else {
      throw "Fruit not found";
    }
  }

  destroy() {
    const deletedFruit = fruitsArray.find(
      (fruit) => fruit.name.toLowerCase() === this.name.toLowerCase(),
    );

    if (deletedFruit) {
      const index = fruitsArray.indexOf(deletedFruit);
      fruitsArray.splice(index, 1);
    } else {
      throw "Quote not found";
    }
  }
}

module.exports = FruitModel;

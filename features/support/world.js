const { setWorldConstructor } = require('cucumber');

class CustomWorld {
  constructor() {
    this.context = {};
  }
}

setWorldConstructor(CustomWorld);

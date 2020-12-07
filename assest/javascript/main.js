const header = document.createElement("h1");
const body = document.querySelector("body");

header.innerHTML = "Coin Object Assessment";
body.append(header);

let coin = {
  state: 0,
  flip: function () {
    /* 1. Randomly set your coin object's "state" property to be either 
           0 or 1: use "this.state" to access the "state" property on this object.*/

    if (Math.random() > 0.5) {
      this.state = 1;
    } else {
      this.state = 0;
    }
  },
  toString: function () {
    if (this.state === 0) {
      return "Heads";
    } else {
      return "Tails";
    }

    /* 2. Return the string "Heads" or "Tails", depending on whether
           "this.state" is 0 or 1. */
  },

  toHTML: function () {
    let image = document.createElement("img");
    if (this.state === 0) {
      image.src = "./assest/image/heads.jpg";
    } else {
      image.src = "./assest/image/Tails.jpg";
    }
    /* 3. Set the properties of this image element to show either face-up
           or face-down, depending on whether this.state is 0 or 1.*/
    return image;
  },
};

const display20Images = function () {
  for (let i = 0; i < 20; i++) {
    coin.flip();
    const image = coin.toHTML();
    body.append(image);
  }
};

display20Images();

const display20Flips = function () {
  for (let i = 0; i < 20; i++) {
    const newElement = document.createElement("h4");
    coin.flip();
    newElement.innerHTML = coin.toString();
    body.append(newElement);
  }
};

var stuff = [
  "cars",
  "blankets",
  "sunflowers",
  "sky",
  "yellow",
  "code",
  "perfume",
  "coffee",
  "books"
];

// Log out even index items
stuff.forEacg(function (item, index) {
  // log out items with even index
  if (index % 2 === 0) {
    console.log(item);
  }
});

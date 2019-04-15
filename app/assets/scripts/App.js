function person(name, favColor) {
  console.log(
    " Hello my name is " + name + " and my favorite color is " + favColor + "."
  );
}

var john = {
  name: "John Doe",
  favColor: "Green"
};

person(john.name, john.favColor);
person("Frank Telin", "Brown");

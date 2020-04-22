const myPet = {
	name: "Stella",
	species: "dog",
	nicknames: ["Stella Belle", "Stelly"],
	age: 4,
	favoriteToys: [],
	play: function (toy) {
		if (toy === "rope bone") {
			this.favoriteToys.push(toy);
		} else {
			window.alert("Nope");
		}
	},
	bark: function () {},
	whine: function () {
		console.log("meh");
	},
	pant: function () {
		console.log("le tired");
	},
};

myPet.bark();
myPet.whine();
myPet.pant();
myPet.play("rope bone");
console.log(myPet.favoriteToys);

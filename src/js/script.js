function myFirstApp(name, age) {

	alert("Привет, меня зовут " + name + " и это моя первая программа!");

	function showSkills() {
		let skills = ['html', 'css', 'English'];

		for (let i = 0; i < skills.length; i++) {
			document.write("Я знаком с " + skills[i] + "<br>") 
		}
	}

	showSkills();

	function checkAge() {
		if (age > 18) {
			console.log(age + " лет - отличный возраст для веб-разработки!")
		} else {
			console.log(age + " лет - наверное еще рановато...(")
		}
	}

	checkAge();

	function calcPow(num) {
		let quad = num*num;
		console.log("Квадрат числа " + num + " равен " + quad);
	}

	calcPow(4);


}

myFirstApp("Dima", 29);
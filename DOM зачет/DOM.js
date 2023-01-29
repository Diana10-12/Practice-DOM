// №1 Дан инпут и абзац. По потери фокуса в инпуте запишите значение инпута в конец текста абзаца.
// let num = document.querySelector('#num');
// let result = document.querySelector('.result');

// num.addEventListener('blur',function(){
//     console.log(result);
//     result.textContent = result.textContent + ' '+ num.value;
// });

// №2 Дано несколько инпутов, абзац и кнопка. По нажатию на кнопку получите числа, стоящие в этих инпутах и запишите их сумму в абзац.
// document.querySelector('.btn').onclick = () => {
// 	const poleOne = document.querySelector('#poleOne');
// 	const poleTwoo = document.querySelector('#poleTwoo');
// 	const sum = +poleOne.value + +poleTwoo.value;
// 	document.querySelector('.result').innerHTML = sum;
//   }



// №3 Дан инпут. В него вводится число. По потери фокуса найдите сумму цифр этого числа.
// let elem = document.getElementById('num');
// elem.addEventListener('blur', func);
// function func() {
// 	let sum = 0;
// 	let str = elem.value;
// 	let arr = str.split('');
//   	for (let i = 0; i < arr.length; i++) {
// 		sum += +arr[i];
// 	}
// 	let newElem = document.getElementById('result');
// 	newElem.innerHTML = sum;
// }    



// №4 Дан инпут. В него вводятся числа через запятую. По потери фокуса найдите среднее арифметическое этих чисел (сумма делить на количество).
// let elem  = document.getElementById('num');
// elem.addEventListener('blur', func);
// function func() {
// 	let sum = 0;
// 	let str = elem.value;
// 	let arr = str.split(',');
// 	for (let i = 0; i < arr.length; i++){
// 		sum += +arr[i];
// 	}
// 	let nevElem = document.getElementById('result');
// 	nevElem.innerHTML = sum/arr.length;
// }



// №5 Даны 4 инпута. В первый инпут вводится ФИО через пробел. По потери фокуса запишите фамилию, имя и отчество в остальные 3 инпута.
// let elem = document.getElementById('input');
// elem.addEventListener('focus', func);
// elem.addEventListener('blur', func2);
  
// function func() {
// 	elem.placeholder = '';
// }

// function func2() {
// 	let elem = document.getElementById('input');
// 	let elems = document.getElementsByClassName('name');
// 	if (elem.value !== 0) {
// 		let str = elem.value;
// 		let arr = str.split(' ');
// 		for (let i = 0; i < arr.length; i++) {
// 			elems[i].value = arr[i];
// 		}
// 	}
// 	if (elem.value == 0) {
// 		elem.placeholder = 'Введите Ваши ФИО';
// 		for (let i = 0; i < elems.length; i++) {
// 			elems[i].value = '';
// 		}
// 	}
// }    



// №6 Дан инпут. В него вводится ФИО через пробел. ФИО вводится с маленькой буквы. Сделайте так, чтобы по потери фокуса инпутом, введенные фамилия, имя и отчество автоматически стали записанными с большой буквы (в этом же инпуте).
// let elem = document.getElementById('input');
//  elem.addEventListener('blur', bigLetter);

// function uswords(str) {
// 	let arr = str.split(' ');
// 	for (let i = 0; i < arr.length; i++) {
// 		arr[i] = arr[i].split('');
// 		arr[i][0] = arr[i][0].toUpperCase();
// 		arr[i] = arr[i].join('');
// 	}
// 	str = arr.join(' ');
// 	return str;
// }

// function bigLetter() {
// 	elem.value = uswords(elem.value);
// }  



// №7 Дан инпут. В него вводится текст. По потери фокуса узнайте количество слов в этом тексте.
// let elem = document.getElementById('num');
// elem.addEventListener('blur', func);
// function func() {
// 	let num = 0;
// 	let str = elem.value;
// 	let arr = str.split(' ');
// 	for (let i = 0; i < arr.length; i++) {
// 		num += 1;
//  	}
// 	let p = document.getElementById('result');
// 	p.innerHTML = num;
// }    



// №8 Дан инпут. В него вводится дата в формате 31.12.2016. По потери фокуса в этом же инпуте поставьте эту дату в формате 2016-12-31.
// let elem = document.getElementById('num');
// elem.addEventListener('blur', func);
// function func() {
// 	let arr2 = [];
// 	let str = elem.value;
// 	let arr = str.split('.');
// 	arr2 = arr.reverse();
// 	let str1 = arr2.join('-');
// 	elem.value = str1;
// } 



// №9 Дан инпут. В него вводится слово. По нажатию на кнопку проверьте то, что это слово читается с начала и с конца одинаково (например, мадам).
// let elem = document.getElementById('num');
// let btn = document.getElementById('but');
// btn.addEventListener('click', func);

// function func() {
// 	let str = elem.value;
// 	let arr = str.split('');
// 	let arr2 = str.split('').reverse();
// 	for(let i = 0; i < arr.length; i++) {
// 		if(arr[i]!== arr2[i]) { 
// 			alert('false');
// 			return;
// 		}
//   	}
// 	alert('true');
// 	return;
// }



// №10 Дан инпут. В него вводится число. Проверьте по потери фокуса, что это число содержит внутри себя цифру 3.
// let elem = document.getElementById('num');
// elem.addEventListener('blur', func);
// function func() {
// 	let str = elem.value;
// 	let arr = str.split('');
// 	for (let i = 0; i < arr.length; i++) {
// 		if (arr[i] == 3) {
// 			alert('это число содержит 3');
// 			return;
//   		}
// 	}
// 	alert('это число не содержит 3');
// 	return;
// }



// №11 Даны несколько абзацев и кнопка. По нажатию на кнопку запишите в конец каждого абзаца его порядковый номер.
// let elem = document.getElementsByTagName('p');
// let btn= document.getElementById('btn');
// btn.addEventListener('click', func);

// function func() {
// 	for (let i = 0; i< elem.length; i++) {
// 		elem[i].innerHTML = elem[i].innerHTML+' '+(i + 1);
// 	}
//  }   



// №12 Даны ссылки. Добавьте в конец каждой ссылки ее href в круглых скобках.
// let elem = document.getElementsByTagName('a');

// function start() {
//   for (let i = 0; i < elem.length; i++) {
//     elem[i].innerHTML = elem[i].innerHTML + '(' +elem[i].href+')';
//   }
//  }
//  start(); 



// №13 Даны ссылки. Если ссылка начинается с http://, то добавьте ей в конец стрелку → (делается так: &rarr;).
// let elem = document.getElementsByTagName('a');
// 	for (let i = 0; i < elem.length; i++) {
// 		if (elem[i].href.indexOf('http://') === 0) {
//             let arrow='→';
//  			elem[i].append(arrow)
// 		}
// 	}
  



// №14 Даны несколько абзацев с числами. По нажатию на любой абзац запишите в него квадрат числа, которое в нем находится.
// document.querySelectorAll('p').forEach(p => {
// 	p.onclick = () => (p.innerText = Math.pow(+p.innerText, 2));
//   });



// №15 Дан инпут. В него вводится дата в формате 31.12.2016. По потери фокуса узнайте день недели (словом), который приходится на эту дату.
// let elem = document.getElementById('num');
// elem.addEventListener('blur', func);

// function func() {
// 	let dayWeak = ['вс', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб'];
// 	let str = elem.value;
// 	let arr = str.split('.');
// 	let arr2 = arr.reverse();
// 	let str1 = arr2.join(',')
// 	let date = new Date(str1);
// 	let day = date.getDay();
// 	let p = document.getElementById('text');
// 	p.innerHTML = dayWeak[day];
// }



// №16 Дан инпут. Реализуйте кнопочки +1, -1, которые будут увеличивать или уменьшать на 1 значение инпута. Сделайте так, чтобы это значение не могло стать меньше нуля.
// let getInp22 = document.querySelector('.inp22');
// let getInpPlus = document.querySelector('.Plus');
// let getMinus = document.querySelector('.Minus');
// getInpPlus.addEventListener('click', func221);
// getMinus.addEventListener('click', func222);
// function func221() {
//     getInp22.value = +getInp22.value + 1;
// };

// function func222() {
//     if (+getInp22.value > 0)
//         getInp22.value = +getInp22.value - 1;
// };



// №17 Дан инпут. Даны абзацы. Пусть в этот инпут записывается суммарное количество нажатий по этим абзацам.
// let inp = document.getElementById('result');
// let p = document.getElementsByTagName('p');
// for (let i = 0; i < p.length; i++) {
// 	p[i].addEventListener('click', func);
//  }

//  let count = 0;
// function func() {
// 	count++;
// 	inp.value = count;
// } 



// №18 На странице есть дивы. В них есть текст. Обойдите все дивы и обрежьте тот текст, который в них стоит так, чтобы он стал длиной 10 символов. И добавьте троеточие в конец обрезанного текста
// let btn = document.querySelector('button');
// btn.addEventListener('click', func);
// let elems = document.getElementsByTagName('div');
// let str = '';

// function func () {
// 	for(let i = 0; i < elems.length; i++) {
// 		str = elems[i].innerHTML.slice(0, 10)+'...';
// 		elems[i].innerHTML = str;
// 	}
// }



// №19 Дан инпут. В него вводится число. По потери фокуса проверьте, что в нем лежит число от 1 до 100. Если это так - покрасьте инпут в зеленый цвет, а если не так - в красный.
// let inp = document.querySelector('input');
// inp.addEventListener('blur', func);

// function func() {
// 	let content = inp.value;
// 	if (content > 0 && content < 101){
// 		inp.style.background = 'green';
// 	} else {
// 		inp.style.background = 'red';
// 	}
// }   



// №20 Дан инпут и кнопка. По нажатию на кнопку сгенерируйте случайную строку из 8-ми символов и запишите в инпут.
// let inp = document.querySelector('input');
// let btn = document.querySelector('button');
// btn.addEventListener('click', func);

// function func() {
// 	let str = '';
// 	let symbols = '0123456789qwertyuiopasdfghjklzxcvbnm';
// 	for(let i = 0; i < 8; i++){
// 		str += symbols.charAt(Math.floor(Math.random() * symbols.length));
// 		inp.value = str;
// 	}
// } 


// №21 Дан инпут и кнопка. Пользователь вводит в инпут какую-то строку. По нажатию на кнопку перемешайте введенные символы случайным образом и запишите ее обратно в инпут.
// let elem = document.querySelector("#elem")
// let button = document.querySelector("button")
// button.addEventListener("click",func)
// function func(){ 
//     let a = "" 
//     let b = elem.value
//     for(let i = 0; i<b.length; i++){
//         a += b.charAt(Math.floor(Math.random() * b.length)) 
//     } 
//         elem.value = a
//     }


// №22 Дан инпут, кнопка и абзац. В инпут вводится температура в градусах Фаренгейта. По клику на кнопку выведите в абзац температуру в градусах Цельсия.
// let elem = document.querySelector("#elem")
// let button = document.querySelector("button")
// let p = document.querySelector("#p")
// button.addEventListener("click",func)
// function func(){
//   p.textContent = (elem.value - 32) * 5/9
// }


// №23 Дан инпут, кнопка и абзац. В инпут вводится число. По нажатию на кнопку выведите в абзац факториал этого числа.
// let elem = document.querySelector("#elem")
// let button = document.querySelector("button")
// let p = document.querySelector("#p")

// button.addEventListener("click",func)
// function func() {
//     let a = elem.value
//     for (let i = a - 1; i >= 1; i--) {
//       a= a * i; 
//     }
//     p.textContent = a
//   }




// №24 Даны 3 инпута, кнопка и абзац. В инпуты вводятся коэффициенты квадратного уравнения. По нажатию на кнопку найдите корни этого уравнения и выведите их в абзац.
// let elem1 = document.querySelector("#elem1")
// let elem2 = document.querySelector("#elem2")
// let elem3 = document.querySelector("#elem3")
// let button = document.querySelector("button")
// let p = document.querySelector("#p")
// button.addEventListener("click",func)
// function func(){
//     let a = elem1.value
//     let b = elem2.value
//     let c = elem3.value

//     let x = b**2-4*a*c
//     if (x<0){
//         x1 = "нет корней"
//         x2 = "нет корней"
//     }
//     else if (x===0){
//         x1=-b/(2*a)
//         x2=x1
//     }
//     else {
//         x1=(-b+Math.sqrt(x))/(2*a)
//         x2=(-b-Math.sqrt(x))/(2*a)

//     }
//     p.textContent = x1+" "+x2
// }

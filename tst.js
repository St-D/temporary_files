"use_strict;"

$(document).ready(function() {
    console.log( "ready!" );


console.log('start');

// var user_ar = new Array(true, 7, 'index_2', NaN, 'last_elements', 5, '3');
var user_ar = new Array(true, 7, 'index_2', 'last_elements', 5, '3');

console.log('\n методом for..in');
for (let key in user_ar) // так делать не нужно
    {
        console.log('key : ', key, ' \t  value : ', user_ar[key]);
    }


console.log('\n методом for');
for (let i = 0; i < user_ar.length; i++)
    {
        console.log(user_ar[i])
    }


var f_index = user_ar.indexOf(7);
if (f_index)
    {
        console.log(f_index);
        user_ar.splice(f_index, 1);  // удаление, указать индекс, указать кол-во элементов для удаления
        console.log(user_ar);
    }

console.log('\n методом forEach');
user_ar.forEach(function (value, i) {console.log(i, ' -- ', value)});


var ar_after_filter = user_ar.filter(function (val) {return +val});
console.log('\n после filter, новый массив чисел : ', ar_after_filter);

var ar_after_mao = user_ar.map(function (val) {return isNaN(+val)? null : +val});
console.log('\n после map, новый массив чисел : ', ar_after_mao);


console.log(user_ar.every(function (val) {return val}))

var num_ar = [4, 5, 6, 7, 112, 45, ];
var res = num_ar.reduce(function short(cur, sum) {return cur + sum});
console.log(res);


console.log('\n JSON');
var json_1 = new Object();
json_1.name = 'Vasa';
json_1.age = 30;

var json_2 = new Object();
json_2.name = 'Petja';
json_2.age = 32;
console.log(json_1, json_2);

console.log(JSON.stringify(json_1) + JSON.stringify(json_2) );


var json_str1 = JSON.stringify(json_1);

console.log(JSON.parse(json_str1));

try{

    console.log(d);
    d = 23;
    }
catch (e) {console.log(e.name + e.message + e.stack)
    }

console.log("OK");

// обработчик Enter для документа:

    $(document).keypress(function (key) {if(key.which == 13){alert('нажата Enter')};

    });
//********************************


// добавить новый элемнт в DOM
// document.write('<h2> добавлен элемент в DOM </h2>')

// или
var new_div = document.createElement('div');
new_div.innerHTML = '<h3> добавлен ещё один элемент</h3>';
document.body.appendChild(new_div);
//********************************

    // event.preventDefault()
// $('#btn').click(function () {
//     alert('одинарный КЛИК')
//     });

console.log('из выборки', $('#btn').html())
console.log('из выборки', $('button').innerHTML)
console.log('из выборки', $('button').innerText)
$('#btn').click(function(){
  alert(this.innerHTML);
});

$('#url_click').click(function(){
  alert('нет переадресации');
  return false;
});

console.log(new Date());
var d = new Date();
console.log('+3 дня', d.setDate(d.getDate() + 3));
console.log('+3 дня', d);
// console.log('+3 дня', window.d);

console.log(d);

console.log('День недели : ', new Date().getDay());
console.log(new Date(3600*24*1000));

console.log(new Date(2018, 0, 10));
console.log('в миллисекундах', new Date(2018, 5, 5).getTime());
console.log(new Date().getTime());
console.log('в миллисекундах', Date.now());


    // window.a = 5;
    // alert( a ); // 5

// события
//     function hide() {
//         var event = new Event("hide", {
//             cancelable: true
//         });
//         if (!rabbit.dispatchEvent(event)) {
//             alert( 'действие отменено обработчиком' );
//         } else {
//             rabbit.hidden = true;
//         }
//     }
//
//
//


    // слушатель события
    url_click.addEventListener('click', function(event) {
                    alert('слушает событие');
                    event.preventDefault();
                    url_click.clc();

    });



});
"use strict";

$(document).ready(function()
    {
            var start_date = Date.now();
    console.log('Начало отсчета', start_date)

        console.log('Документ готов!');
        console.log('arayy')
        console.log(+'5')
        console.log(+undefined)

        // alert('здрасти')
        // prompt('how are you', 'very nice')
        // confirm('you are very nice?')

        // alert(String(null))
        // alert(null)

            // for(var i=0; i<3; i++)
        // {
        //     alert(i);
        // }

        var ar_u = new Array(3, 'ty', 7, true, NaN, Infinity);
        var user_string = 'qwertyuiop';
        var user_num = 3.1415926535897

        // ar_d = [5, 6, "rty"]
        // alert(ar_d);
        // alert(ar_d[2]);
        // alert(ar_u);




        console.log('первый символ:' + user_string[1])
        console.log('длина строки:' + user_string.length)
        console.log('срез:' + user_string.slice(0,5))
        var str_to_ar = user_string.split('')
        console.log('на массив:' + user_string.split(''))

        // if ('we' in user_string)
        // {
        //     console.log('входит')
        // }
        // else
        //     {
        //         console.log('не входит')
        //     }

        console.log('UP: ' + user_string.toUpperCase())
        console.log('lower: ' + user_string.toLowerCase())
        console.log('TransformToInt: ' + Number(ar_u))
        console.log('match_to_str: ' + user_string.match('7'))
        console.log('includes: ' + user_string.includes('op'))
        console.log('indexOf: ' + user_string.indexOf('7'))
        console.log('indexOf: ' + '5' + -'2') //5-2
        console.log('Array len: ' + ar_u.length)
        console.log('Array: ' + ar_u)
        console.log('String len: ' + user_string.length)
        console.log('num_fixed: ' + user_num.toFixed(4))// обрез до 4-х знаков
        console.log('math_floor: ' + Math.floor(user_num))// округляет вниз
        console.log('math_ceil: ' + Math.ceil(user_num))// округляет верх
        console.log('math_round: ' + Math.round(user_num))// до ближайшего целого
        // console.log(window)//  глобальный объект

        const NAME = ' Mari '

        // function showMessage(from, text) { // параметры from, text
        //     text = text || 'текст не передан';
        //     alert(from + ': ' + text + NAME + n);
        //     }
        //
        // console.log(text)
        //
        // showMessage('Маша');
        // showMessage('Маша', 'Как дела?');
        // // // alert(showMessage)

        var user_dict = new Object();
        // user_dict = {}
        user_dict.name = 'vasa';
        user_dict.age = 25;
        user_dict.city = 'taganrog';
        user_dict.country = 'rus';
        user_dict.country = 'usa';
        user_dict['street adress'] = 'lenina';

        console.log('Object_len: ', Object.keys(user_dict).length)
        console.log('Object: ', user_dict)
        delete user_dict.country
        console.log('Object / del prop: ', user_dict)
        // console.log('Object []: ', user_dict['street adress'])
        if ('city' in user_dict)
            {
                console.log(user_dict.city)
            }

        for (var k in user_dict)
            {
                console.log(k + '__' + user_dict[k])
            }

        ar_u.push(user_dict)
        console.log('Array with OBJ: ', ar_u)

        // for (let i in ar_u)
        // {
        //     alert(ar_u[i])
        // };

        console.log('~~~~', ar_u.indexOf('ty'))
        console.log('~~~~', ar_u.indexOf(user_dict))

        // console.log('^' + str_to_ar.split(','))
        console.log('строка из массва: ', ar_u.join(', ') )

        ar_u.forEach(function (value) {
            console.log(value)
        })

        var user_cur_date = new Date();
        console.log('текущая дата: ', user_cur_date);

        var user_cur_date_ms = new Date(3600 * 24 * 1000);
        console.log('текущая дата ms: ', user_cur_date_ms);
        console.log('текущая дата: ', user_cur_date_ms.getTime());
        console.log('текущая дата Date.now(): ', Date.now());
        console.log('текущая дата Date.now() + 10.5: ', Date.now() + 10.5 * 1000);
        var d_10 = new Date(Date.now() + 10.5*1000)
        console.log('текущая дата Date.now() + 10.5: ', d_10);

        var user = '{ "name": "Вася", "age": 35, "isAdmin": false, "friends": [0,1,2,3] }';

        user = JSON.parse(user);

        // alert( user.friends ); // 1
        // alert( user); // 1


        // $(document).keypress(function (e) {
        //     if (e.which == 13) {
        //     alert(document.getElementsByTagName('h1'))
        //     }
        // });

        alert(window.location.toString())


    }
    ) ;



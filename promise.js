"use strict;"


let promise = new Promise(function (resolve, reject) {
    // В ней можно делать любые асинхронные операции,
    // А когда они завершатся — нужно вызвать одно из:
    // resolve(результат) при успешном выполнении
    // reject(ошибка) при ошибке

    // console.log('Start Promise function');
    // console.log(resolve("result"));

    // setTimeout(() => {
    //     // переведёт промис в состояние fulfilled с результатом "result"
    //     resolve("result");
    // }, 1000);


    // отработет первая , с наименьшим временем....
    setTimeout(function() {reject(new Error("ignored"));}, 2000);

    setTimeout(function () {resolve("резултат без ошибок");}, 1000);

    }); //запускается автоматически


promise
    .then(
        // promise  переведен в состояние fulfilled, поскольку код завершился без ошибки.
        // запускается функция ниже.
        function(result) {
            alert("Fulfilled: " + result);
            console.log(promise);
            console.log(promise['<resolved>'])
         })

    // если функция в блоке promise завершилась с ошибкой, то вызывается функция ниже:
    .catch(
        function (error) {
            alert("Rejected: " + error);
        }
    );

console.log(promise);

//************************************************************************************************//

function httpGetUrl(url) {
    return new Promise(function (resolve, reject) {


        let req = new XMLHttpRequest();
        req.timeout = 5000;
        req.open('GET', url, true);

        // console.log(this.status + '______' + url);


        req.onload = function () {
            console.log(this.status + '______' + url);

            if (this.status == 200) {
                resolve(this.response);
            }
            else {
                let error = new Error(this.statusText);
                error.code = this.status;
                reject(error);
            }
            };
        
        req.onerror = function () {
            reject(new Error('network error'));
            };

        req.send();
        });

}


// httpGetUrl("https://learn.javascript.ru/promise")

// httpGetUrl("for_Css.css")
//     .then(
//         response => alert(`Fulfilled: ${response}`),
//
//
//         error => alert(`Rejected: ${error}`)
//         );

// httpGetUrl("tsconfig.json")
// // httpGetUrl("https://learn.javascript.ru/promise")
//
//     .then(
//         // function(response){alert(`Fulfilled: ${response}`)})
//         function(response){
//             console.log(response);
//             // console.log((JSON.parse(response)).user);
//             alert(`Fulfilled: в консоли`)
//             }
//         )
//
//     .catch(
//         function (error) {alert(`Rejected: ${error}`)});

//************************************************************************************************//

httpGetUrl('tsconfig.json')
    .then(function (response) {
        let userId = (JSON.parse(response))['user'];
        // console.log(userId);

        return userId;
        }
        )
    .then(function (userId) {
        console.log('user : ' + userId);
        console.log(`https://api.github.com/users/${userId}`);
        let gitReq = httpGetUrl(`https://api.github.com/users/${userId}`);
        return gitReq;
        }
        )
    .then(function (gitReq) {
        let githubUser = JSON.parse(gitReq);

        console.log(githubUser);
        // githubUser = JSON.parse(githubUser);
        let img = new Image();
        img.src = githubUser['avatar_url'];

        img.className = "promise-avatar-example";
        document.body.appendChild(img);
        setTimeout(() => img.remove(), 3000); // (*)
        
         }
         )
    .catch(function (error) {alert(`Rejected: ${error}`)}

        );


let urlList = ['https://api.github.com/users/St-D',];

Promise.all(urlList.map(httpGetUrl))
    .then(function(result){alert((JSON.parse(result))['avatar_url'])}

        )
    .catch(function (er) {alert(er)}
        );
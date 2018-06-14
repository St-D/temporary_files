"use strict;"

let headers = new Headers();
headers.append("Content-Type", "application/json; charset=utf-8");
fetch('https://api.github.com/users/St-D', {headers: headers, method: "GET"})
    .then(function (response)
            {
        console.log(response.headers.get('Content-Type'));
        console.log(response.status);
        console.log(response.json());

        return response.json();

            }
            )
    .then(function (j_obj) {j_obj.forEach(function (item) {console.log(item)})}
        )
    .catch(function(err){alert(err)});

// import axios from axios
function getMovies(title) {
    axios
    .get(`https://www.omdbapi.com/?apikey=7a75fcd7&s=${title}`)
    .then((response) => {
            console.log(response)
            const results = document.getElementById('results');
            results.innerHTML = '';

            if(response.data.Search && response.data.Search.length > 0){
                const movies = response.data.Search.slice(0, 10);
                movies.forEach((movie) => {
                    const movieEl = document.querySelector('div');
                    const h1El = document.querySelector('h1');
                    const imgEl = document.querySelector('img');
                    const yearEl = document.getElementById('p');
                    const typeEl = document.getElementById('p');

            h1El.textContent = movie.Title;
            imgEl.src = movie.Poster;
            h1El.textContent = movie.Year;
            h1El.textContent = movie.Type;

            movieEl.appendChild(h1El);
            movieEl.appendChild(imgEl);
            movieEl.appendChild(yearEl);
            movieEl.appendChild(typeEl);
            results.appendChild(movieEl);

                });
            }else{
                alert('No results found')
            }
        })
    }
    getMovies();
    document.getElementById('searchButton').addEventListener('click', () => {
        const searchInput = document.getElementById('searchInput').value;
        if(searchInput.trim() !== ''){
            getMovies(searchInput);
        }else{
            alert('영화 제목을 입력해주세요!')
        }
    })

// import _ from 'lodash'
// // import cube from './modules.js'
// import * as R from './modules.js'
// import myData from './myData.json'

// console.log(myData)
// const user = {
//     name: "mingss",
//     age: 20,
//     emails: [
//         '222@gmail.com',
//         '111@gmail.com',
//     ]

// }

// const str = JSON.stringify(user);
// console.log(str)

// const obj = JSON.parse(str);
// console.log(obj)
// console.log(R.arrs);
// console.log(getName())
// const user ={
//     name: 'mingss',
//     age: 22,
//     email: ['designmj2105#gmail.com']
// }

// const copyUser = user;
// console.log(copyUser === user);

// user.age = 22;
// console.log('user', user);
// console.log('copyUser', copyUser);

// const copyUser = Object.assign({}, user);
// console.log(user === copyUser);

// user.age = 20;
// console.log(user);
// console.log(copyUser);

// const copyUser = {...user};
// console.log(copyUser === user);
// user.age =20;
// console.log(user);
// console.log(copyUser);

// user.email.push('0101010@gmail.com')
// console.log(user.email === copyUser.email);
// console.log(user);
// console.log(copyUser);

// const copyUser = _.cloneDeep(user);
// console.log(copyUser === user);

// user.age = 20;
// console.log(user);
// console.log(cioyUser);

// user.email.push('kim@email.com');
// console.log(user.email === copyUser.email)
// console.log(user);
// console.log(copyUser);

// const userA = [
//     {userID: '1', name: 'mingss'},
//     {userID: '2', name: 'Kim'},
// ]
// const userB = [
//     {userID: '3', name: 'mingss'},
//     {userID: '4', name: 'Lee'},
// ]
//  const userC = userA.concat(userB);
// console.log(_.uniqBy(userC,'userId'));

// const userD = _.unionBy(userA, userB, 'userId');
// console.log(userD);

// const users = [
//     {userId:'1', name: 'mings'},
//     {userId:'2', name: 'kim'},
//     {userId:'3', name: 'lee'},
//     {userId:'4', name: 'park'},
// ]

// const foundUser= _.find(users, {name: 'lee'});
// console.log(foundUser);
// const foundUserIndex = _.findIndex(users, {name: 'lee'});
// console.log(foundUserIndex);
// _.remove(users, {name: 'mings'});
// console.log(users);

// let array = [1,2,3,4];
// let events = _.remove(array, function(n){
//     return n % 2 == 0
// })
// console.log(array);
// console.log(events);

// let myFriend = [
//     {name: 'kim', active: true},
//     {name: 'lee', active: false},
//     // {name: 'kim', active: false},
// ]
// console.log(_.every(myFriend, {name: 'kim', active: false})); // 요소가 모두 같아야 true 값이 나옴
// console.log(_.every(myFriend, ['active', false]));
// console.log(_.every(myFriend, 'active')); // active가 모두 true인 것이 확인되면 true 반환

// let mySister = [
//     {name: 'kim', age: 22, city: 'Seoul'},
//     {name: 'Lee', age: 22, city: 'Daegu'},
//     {name: 'Lee', age: 23, city: 'Busan'},
//     {name: 'Park', age: 24, city: 'Seoul'},
// ]

// console.log(_.filter(mySister , {age: 22, name: 'kim'}));
// console.log(_.filter(mySister, sister => sister.age === 22));


// var objects = [{'a' : 1}, {'b': 2}];

// var deep = _.cloneDeep(objects);
// console.log(deep[0] === objects[0]);








//****************************************************************************/







// const API_KEY = '4f6d596b596a6e793132374b6e5a6356';
// async function getData(){
//     const url = `http://openapi.seoul.go.kr:8088/${API_KEY}/json/bikeList/1/5/`
//     try{
//     const response = await fetch(url);
//     const data = await response.json();
//     const locations = data.rentBikeStatus.row.map(spot => [spot.stationName, spot.stationLatitude, spot.stationLongitude, spot.parkingBikeTotCnt]);

//     console.log(data);
//     console.log("locations", locations)
//     drawMap(locations);
// }catch (error) {
//         console.error('Error fetching data:', error);
//     }

// }
// getData();

// function drawMap(locations){
//     const map = new google.maps.Map(document.getElementById('map'),{
//         zoom: 13,
//         center: new google.maps.LatLng(locations[0][1], locations[0][2]),
//         mapTypeId: google.maps.MapTypeId.ROADMAP,
//     });

//     const infowindow = new google.maps.InfoWindow();
//     locations.forEach((location, i) => {
//         const marker = new google.maps.Marker({
//             position: new google.maps.LatLng(location[1], location[2]),
//             map: map,
//             title: location[0]
//         });

//         marker.addListener('click', () => {
//             infowindow.setContent(location[3]);
//             infowindow.open(map, marker);
//         })
//     })
// }

// window.onload = getData;
import 'whatwg-fetch';
import data from './data';


const photoID = document.querySelector('.user-image__image');
photoID.src = data.results[0].picture.large;

const userName = document.querySelector('.name');
userName.innerText = data.results[0].name.first;

const userMail = document.querySelector('.email');
userMail.innerText = data.results[0].email;

const userPhone = document.querySelector('.phone');
userPhone.innerText = data.results[0].cell;

const userLocation = document.querySelector('.location');
userLocation.innerText = data.results[0].location.city;

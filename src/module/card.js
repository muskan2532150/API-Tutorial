import create from './ceateElement.js';
import {
  home, arr, overLay, pop,
} from './Import.js';
import { counterItem } from './counter.js';
import Structure from './structure.js';

const url = 'https://tenor.googleapis.com/v2/search?q=shinchan&key=AIzaSyBMhX1M1ga91r9K5ReHDNf_3Qvx6_q43Qc&client_key=my_test_app&limit=20';

const createcard = (data) => {
  const mainDiv = create('div', undefined, home);
  [...data].forEach((el, index) => {
    if (el.media_formats.tinygif?.url) {
      console.log(el);
      arr[index] = 0;
      Structure.cardStruct(el, mainDiv, index);
      const mainDivpop = create('div', ['main-pop'], pop);
      mainDivpop.id = index + 90;
      Structure.popStruct(el, index, mainDivpop);
    }
    // Scroll Js
    ScrollReveal().reveal('.cards',{ delay: 500 });
  });

  // count no. of cards and display with Home
  const link = document.querySelectorAll('.link');
  link[0].innerHTML = `Home(${counterItem(arr)})`;

  const mainPop = document.querySelectorAll('.main-pop');

  // pop-up Display Event
  const btnComment = document.querySelectorAll('.card-img');
  [...btnComment].forEach((btn) => {
    btn.addEventListener('click', (e) => {
      overLay.style.display = 'flex';
      const commentId = e.target.parentNode.parentNode.id;
      mainPop[commentId].style.display = 'flex';
      document.body.style.overflow = 'hidden';
    });
  });

  // Close pop-up event
  const closeBtn = document.querySelectorAll('.fa-xmark');
  [...closeBtn].forEach((close) => {
    close.addEventListener('click', (e) => {
      overLay.style.display = 'none';
      mainPop[(e.target.parentNode.id) - 90].style.display = 'none';
      document.body.style.overflow = 'visible';
    });
  });
};

const getData = async () => {
  await fetch(url)
    .then((response) => response.json())
    .then((data) => {
      createcard(data.results);
    });
};

export default getData;

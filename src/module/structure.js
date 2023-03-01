import Comment from './popup.js';
import create from './ceateElement.js';

const Structure = class{
// Create structure for Cards in Home page
 static cardStruct = (el, mainDiv, index) => {
  const cards = create('div', ['cards'], mainDiv);
  cards.id = index;
  const img = create('img', ['card-img'], cards);
  img.src = el.media_formats.tinygifpreview.url;
  img.alt = 'shinchan';
  // const cardBody = create('div', undefined, cards);
  // create('i', ['fa-solid', 'fa-heart'], cardBody);
  // const buttonText = create('button', ['btncomment'], cardBody);
  // buttonText.append('share');
  // buttonText.type = 'button';
};

// Create structure for Pop up window
 static popStruct = (el, index, mainDivpop) => {
  create('i', ['fa-solid', 'fa-xmark'], mainDivpop);
  const imgDiv = create('div', ['img-head'], mainDivpop);
  const img = create('img', undefined, imgDiv);
  img.src = el.media_formats.gif['url'];
  img.alt = 'shinchan';
  const h3 = create('h3', ['popupHeader'], imgDiv);
  h3.append('shinchan');
  const itemDiv = create('div', ['item-info'], mainDivpop);
  const span = create('span', ['timecont'], itemDiv);
  const p1 = create('p', undefined, span);
  p1.append(`Dimension ${el.dims}`);
  const p2 = create('p', undefined, span);
  p2.append(`Size ${el.size}`);
  const button = create('button', undefined, mainDivpop);
  button.type = 'share';
  button.name = 'Share';
  button.append('Share');
};

};




export default Structure;

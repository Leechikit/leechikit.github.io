import './html/index.html';
import './sass/index.scss';
import code from './js/code';

code.init();

// var itemList = $('.row-top5 .item');
// var MAXLEN = itemList.length
// var views = [];
// for(let i = 0; i<MAXLEN ;i++){
//     let $item = $(itemList[i]);
//     views.push(`{
//         "name": "${$item.find('.info h3 a').attr('title')}",
//         "summary": "${$item.find('.info p').text()}",
//         "link": "${location.protocol + "//" + location.host + $item.find('.info h3 a').attr('href')}",
//         "image": "${$item.find('.pic .large img').attr('src')}"
//     }`);
// }
// console.log(views.join(','));
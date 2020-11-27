let pages = 4;
let pageActive = 1;

let i = 1;
let $pagenav = document.querySelector('.page-navigation');

function createElem(num, act){
  let page = document.createElement('div');
  page.classList.add('page');
  if(num === act){
    page.classList.add('active');
  }
 
  page.innerText = num;
  return page;
}

while(i <= pages){
	$pagenav.append(createElem(i++, pageActive));
}
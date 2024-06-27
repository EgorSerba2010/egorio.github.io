let dark_div = document.querySelector('#dark_div');
let header = document.querySelector('header');
let footer = document.querySelector('footer');
let body = document.querySelector('body');
let main = document.querySelector('main');
let aside = document.querySelector('aside');
let header_list = document.querySelector('.header_list');
let h1 = document.querySelector('h1');


dark_div.addEventListener('click', ()=> {
    if (dark_div.style.borderColor === 'rgb(133, 68, 66)') {
        dark_div.style.borderColor = 'rgb(133, 68, 65)';
        header.style.color = 'rgb(75, 56, 50)';
        header.style.backgroundColor = 'rgb(190, 155, 123)';
        h1.style.textShadow = '2px 2px 4px rgb(60, 47, 47)'
        footer.style.color = 'rgb(75, 56, 50)';
        footer.style.backgroundColor = 'rgb(190, 155, 123)';
        footer.style.textShadow = '2px 2px 4px rgb(60, 47, 47)';
        body.style.backgroundColor = 'rgb(60, 47, 47)';
        main.style.color = 'rgb(255, 244, 230)';
        aside.style.color = 'rgb(255, 244, 230)';
        aside.style.backgroundColor = 'rgb(100, 56, 50)';
        header_list.style.backgroundColor = 'rgb(75, 56, 50)';
        header_list.style.color = 'rgb(255, 244, 230)';
    }
    else if (dark_div.style.borderColor === 'rgb(133, 68, 65)') {
        dark_div.style.borderColor = 'rgb(133, 68, 66)';
        header.style.color = 'rgb(255, 244, 230)';
        header.style.backgroundColor = 'rgb(75, 56, 50)';
        h1.style.textShadow = '2px 2px 4px rgb(190, 155, 123)'
        footer.style.color = 'rgb(255, 244, 230)';
        footer.style.backgroundColor = 'rgb(75, 56, 50)';
        body.style.backgroundColor = 'rgb(255, 244, 230)';
        main.style.color = 'rgb(75, 56, 50)';
        aside.style.backgroundColor = 'rgb(190, 155, 123)';
        aside.style.color = 'rgb(75, 56, 50)';
        header_list.style.backgroundColor = 'rgb(255, 244, 230)';
        header_list.style.color = 'rgb(60, 47, 47)';
    }
});
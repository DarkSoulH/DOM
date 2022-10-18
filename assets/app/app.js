const games = [
  {
      id: '0',
      title: 'Гра престолів',
      img: './assets/icon/game_of_thrones.jpg',
      publisher: 'Hobby World',
      type: 'стратегічна війна на просторах земель Вестеросу',
      mailgame: 'https://desktopgames.com.ua/ua/agot-2-ed-rus.html',
      rules: "настільна гра «Гра Престолів (A Game of Thrones)» була видана за мотивами книги відомого письменника і автора твору «Пісня льоду та полум'я» Джорджа Р.Р. Мартіна. Її було видано компанією Fantasy Flight Games в 2002 році вслід за своїм попередником, колекційною картковою грою."
  },
  {
      id: '1',
      title: 'Тераформування Марсу',
      img: './assets/icon/terra_mars2.png',
      publisher: 'Kilogames',
      type: 'стратегія',
      mailgame: 'https://desktopgames.com.ua/ua/terraforming-mars-ukr.html',
      rules: "Марс... Червона пустельна планета. Розріджена атмосфера, а також високий вміст оксиду заліза роблять її непридатною для життя. Вчені розглядають її як найближчу планету для потенційної колонізації. Якщо все вийде, то люди постійно будуть піддаватися дії космічної радіації і іншим небезпекам, на допомогу  приходить терраформування, процес який може змінити склад грунту, атмосферу і зробити Марс придатним для життя."
  },
  {
      id: '2',
      title: 'Кімната 25',
      img: './assets/icon/room_comps2.png',
      publisher: 'Asmodee',
      type: 'кооперативна, фантастика, виживання',
      mailgame: 'https://desktopgames.com.ua/ua/room-25-ultimate-ua.html',
      rules: "настільна гра «Кімната 25» — це як гра в кальмара на мінімалках. Захопливий трилер із загадковою кімнатою 25. За вами спостерігають мільйони людей. Ви більше не граєте в настільну гру, а стали учасником ток-шоу. Від одного до восьми в’язнів шукають вихід в комплексі з пастками. У всіх є спільна мета — вибратися, знайти кімнату 25. Усі ви маєте скооперуватися та діяти разом."
  },
  {
      id: '3',
      title: 'Дюна',
      img: './assets/icon/duna2.png',
      publisher: 'Gale Force Nine',
      type: 'науково-фантастична стратегія',
      mailgame: 'https://desktopgames.com.ua/ua/dune.html',
      rules: "битва за піски Аракісу, що приховують спайс, ніколи не припиниться. Весь осяжний всесвіт залежить від цієї унікальної речовини, здатної пересувати кораблі між планетами і відкривати нові горизонти людського розуму. Той, хто править Аракісом, той володіє спайсом, а хто володіє спайсом, той володіє всесвітом..."
  },
  {
      id: '4',
      title: 'Тапестрі',
      img: './assets/icon/tapestry2.png',
      publisher: 'Stonemaier Games',
      type: 'євро-стратегія на розвиток цивілізації',
      mailgame: 'https://desktopgames.com.ua/ua/tapestry.html',
      rules: "нитка за ниткою, стібок за стібком лягає шлях цивілізації на гобелен історії. Від самого початку до розквіту і розкриття всіх великих діянь нації. До моменту, коли її величність засяє, подібно найпрекраснішій завершеній картині. У грі Tapestry (Епохи) вам теж належить виткати гобелен вашої цивілізації, повільно, крок за кроком прокладаючи її віхи в історії."
  }
];

const mainContent = document.querySelector('.main_content');
const navMenu = document.querySelector('.nav_menu');
const buttonActiveMenu = document.getElementById('button');
const nuvToggleButton = document.querySelector('.nav_toggle_button');

// added Li elements and main content
window.addEventListener('DOMContentLoaded', initPage(games));

function initPage(tables) {
    tables.forEach(addLi);    
    tables.forEach(addRules);
}; 


// active menu
navMenu.addEventListener('click', sideMenu);
// active button menu
buttonActiveMenu.addEventListener('click', buttonMenu);

// Add listGame
function addLi(game) {
    // create new li element
    const li = document.createElement('li');
    // add class
    li.className = 'nav_menu_game';
    // add id
    li.id = game.id;
    // add content
    li.insertAdjacentHTML('afterbegin', `
        <a href="#" class="nav_menu_game_li" id="${game.id}">${game.title}</a>
    `);
    // append li to list
    navMenu.appendChild(li);
};

// Add main content for game
function addRules(game) {
    // create new div element
    const oneboardGame = document.createElement('div');
    // add class
    oneboardGame.className = 'main_content_board_game';
    // add id
    oneboardGame.id = game.id;
    // add content
    oneboardGame.insertAdjacentHTML('afterbegin', `
        <img class="main_content_img" src="${game.img}" alt="${game.title}">
        <div class="main_content_description">
            <h2 class="main_content_title"><a href="${game.mailgame}" target='_blank'>${game.title}</a></h2>
            <div class="main_content_publisher">Видавець: <a>${game.publisher}.</a></div>
            <div class="main_content_type">Тип гри: <span>${game.type}.</span></div>
            <div class="main_content_rules">Про гру: <span>${game.rules}</span></div>
        </div>
    `);
    // append div to main
    mainContent.appendChild(oneboardGame);
}

// active menu
function sideMenu(e) {
    // get id for Li
    const idshka = e.target.id;
    // add function active button
    buttonMenu();
    // get main content
    const main = document.getElementsByClassName('main_content_board_game');
    // convert divCollection to an array
    Array.from(main).forEach(function (item) {
        if (item.id === idshka) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
      })
}

// active button menu
function buttonMenu() {
    if (nuvToggleButton.classList.contains('active')) {
        nuvToggleButton.classList.remove('active');
        navMenu.classList.remove('active');
    } else {
        nuvToggleButton.classList.add('active');
        navMenu.classList.add('active');
    }
}



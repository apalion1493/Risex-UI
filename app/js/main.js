let menuActive       = document.querySelector('.header-burger');
let menuClose        = document.querySelector('.right-menu__close');

menuActive.onclick = function() {
    document.querySelector('.right-menu').classList.toggle('active');
    document.querySelector('.milk-shadow').classList.toggle('active');
};

menuClose.onclick = function() {
    document.querySelector('.right-menu').classList.remove('active');
    document.querySelector('.milk-shadow').classList.remove('active');
};


// var elem = document.getElementById("textarea-text");
// // elem.innerHTML = "sadasd";
//
//  elem.onblur = function() {
//      if (elem.innerHTML === "") {
//          elem.innerHTML = "Напишите сообщение...";
//      }
// };
//
// elem.onfocus = function() {
//     if (elem.innerHTML === "" || elem.innerHTML === "Напишите сообщение...") {
//         elem.innerHTML = "";
//     }
//
// };

//
// function select(element) {
//     var value = element.getAttribute("data-value"); // Считываем значение выбранного элемента
//     var nodes = element.parentNode.childNodes; // Получаем все остальные элементы
//     for (var i = 0; i < nodes.length; i++) {
//         /* Отфильтровываем посторонние элементы text и input */
//         if (nodes[i] instanceof HTMLParagraphElement) {
//             /* Добавляем active у выбранного элемента, стирая данный класс у всех остальных */
//             if (value == nodes[i].getAttribute("data-value")) nodes[i].className = "active";
//             else nodes[i].className = "";
//         }
//     }
//     document.getElementById("my_select").value = value; // Устанавливаем в hidden-поле выбранное значение
// }

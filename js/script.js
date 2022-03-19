// создаю массив с изображениями

let dogBreeds = ['https://zooqi.by/social/cache/image_attachment_preview_large/attachment-image/131/3339_15335599796393.jpg?1636646680' ,'https://tvoidrug.com/wp-content/uploads/2017/07/foto_2_10_300.jpg', 'https://terra.vet/wp-content/uploads/2021/10/47.jpeg', 'https://terra.vet/wp-content/uploads/2021/10/444.jpg', 'https://klike.net/uploads/posts/2020-03/1584259330_3.jpg', 'https://img.freepik.com/free-photo/dog-looks-directly-into-the-camera-golden-retriever-labrador-near-his-house-outdoor-outside-copy-space_228441-210.jpg', 'https://i.pinimg.com/736x/3d/51/cd/3d51cdfffb0a5cfb03f9454a6b153cac.jpg', 'https://st.depositphotos.com/1654654/4714/i/950/depositphotos_47147313-stock-photo-head-of-staffordshire-bull-terrier.jpg', 'https://upload.wikimedia.org/wikipedia/commons/b/b7/Boxer_%28dog%29.jpg','https://www.purinaone.ru/dog/sites/default/files/2021-10/%D0%A8%D0%BF%D0%B8%D1%86%20OG_1.jpg', 'https://www.purinaone.ru/dog/sites/default/files/2021-10/%D0%A7%D0%B0%D1%83-%D1%87%D0%B0%D1%83%20%28506%D1%85379%29_1.jpg', 'https://www.purinaone.ru/dog/sites/default/files/2021-08/%D0%93%D1%80%D0%B5%D0%B9%D1%85%D0%B0%D1%83%D0%BD%D0%B4%206%20OG_1.jpg', 'https://www.purinaone.ru/dog/sites/default/files/2021-04/%D0%A0%D0%BE%D1%82%D0%B2%D0%B5%D0%B8%CC%86%D0%BB%D0%B5%D1%80%20%28506%D1%85379%29_2.jpg', 'https://www.purinaone.ru/dog/sites/default/files/2020-09/dlinnosherstnaya-taksa-t_0.jpg','https://www.purinaone.ru/dog/sites/default/files/2020-07/francuzskij-buldog-mobile_3.jpg', 'https://hidogs.ru/wp-content/uploads/2020/06/img17-4-800x800.jpg', 'https://zoo-dom.com.ua/upload/breed/ru/0_80271400_1522829157.jpg','https://static.wikia.nocookie.net/dogopedyrussian/images/4/4c/Orig.jpeg/revision/latest?cb=20181001163325&path-prefix=ru','https://4lapy.ru/upload/medialibrary/478/478139b8f965522a3149f05cf4f080b9.jpg','https://image.jimcdn.com/app/cms/image/transf/none/path/sf197681969203c4d/image/i0f13bfba95bd115b/version/1337165266/image.jpg','https://www.rutat.ru/upload/medialibrary/5c4/13.1_1.jpg','https://lapkins.ru/upload/iblock/aca/aca1fbe6e1ee766fc4fe2c0df3c0ae30.jpg'];

// прикрепляю кнопку

let pugButton = document.getElementById('pug-button')

let button = document.getElementById('breed-button');
// прикрепил картинку 
let dogImage = document.getElementById('breed-image');
// убрал пустую картинку со стартовой страницы
dogImage.style.display = 'none';
// добавил курсор
button.style.cursor = 'pointer';
pugButton.style.cursor = 'pointer';

pugButton.style.display = 'none';


// функция - 1. выбирает рандомное число умноженное на длину массива. 2 - находим через айди картинку с пустым src, в аттрибут вписываем рандомный путь из масива. 3. - изображение появляется как блок. 4. - надпись кнопки меняется

let randomDog = function() {
    let random = Math.floor(Math.random() * dogBreeds.length);
    document.getElementById('breed-image').src = dogBreeds[random];
    dogImage.style.display = 'block';
    pugButton.style.display = 'block';
    button.innerHTML = 'Random it';
}
// функция для кнопки мопса - 1. выбирает первый элемент из массива и вставляет в значение src. 2. появляется изображение

let showPug = function() {
    document.getElementById('breed-image').src = dogBreeds[0];
    dogImage.style.display = 'block';
};

// прикрепляем событие к кнопке

button.addEventListener('click', randomDog);
pugButton.addEventListener('click', showPug);
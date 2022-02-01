//#region Исходные параметны

//Список языков
const languages = [['Ru', 'Русский язык'], ['Or', 'Орочий язык']]

//Массив русского алфавита (без 'ь' и 'ъ')
const arrRu = ['а', 'б', 'в', 'г', 'д', 'е', 'ё', 'ж', 'з', 'и', 'й', 'к', 'л', 'м', 'н', 'о', 'п', 'р', 'с', 'т', 'у', 'ф', 'х', 'ц', 'ч', 'ш', 'щ', 'ы', 'э', 'ю', 'я'];

//Слово шифрования
const wordChwick = 'чвика' 

//Массив русского алфавита
const arrFullRu = ['а', 'б', 'в', 'г', 'д', 'е', 'ё', 'ж', 'з', 'и', 'й', 'к', 'л', 'м', 'н', 'о', 'п', 'р', 'с', 'т', 'у', 'ф', 'х', 'ц', 'ч', 'ш', 'щ', 'ъ', 'ы', 'ь', 'э', 'ю', 'я'];
//Слово полного шифрования
const wordChwickta = 'чвикта' 
//Массив азбуки Чвикта
let arrFullOr = new Array();
for(let i = 0; i < 36; i++){
  let arrayElement = (i).toString(6);
  arrayElement = '00'.substr(0, 2 - arrayElement.length) + arrayElement; 
  (arrayElement[0] != arrayElement[1]) ? arrFullOr.push(wordChwickta[+arrayElement[0]] + wordChwickta[+arrayElement[1]]):{};
}
arrFullOr.push('вв', 'ии', 'аа')

arrFullRu.push('э', 'ю', 'я')
arrFullOr.push('чч', 'кк', 'тт')

console.log(arrFullRu);
console.log(arrFullOr);
console.log(arrRu);
strrrr=[33]
for (pos = 0; pos<33; pos++){
  let bin = (pos + 1).toString(2); //Пеоеводим позицию символа в строке алфавита в бинарный вид
  bin = '00000'.substr(0, 5 - bin.length) + bin; //Добавляем необхобимое количество 0 в бинарную строку (до длины строки равной 5)
  let letterOr = ''; //Буква, закодированная в Орочий
  for (let i = 0; i < 5; i++) //Цикл по бинарной строке
    letterOr += (bin[i] === '1' ? wordChwick[i]: '');
    strrrr[pos] = letterOr
}
console.log(strrrr);
//Текущий режим перевода
let currentMode = 'RuToOr'

//Алгоритм перевода
let translationAlgorithm = "2"; 

//#endregion

//#region Файл cookie
//Очистка всех cookie 
function showAllCookies() {
  var cookies = document.cookie.split(";");
  for (var i = 0; i < cookies.length; i++) 
    console.log(cookies[i]);
}

function deleteAllCookies() {
  var cookies = document.cookie.split(";");
  for (var i = 0; i < cookies.length; i++) {
    var cookie = cookies[i];
    var eqPos = cookie.indexOf("=");
    var name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
    document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT";
  }
}

//Функция для установки файла cookie
function setCookie(cname, cvalue, exdays) {
  var d = new Date();
  d.setTime(d.getTime() + (exdays*24*60*60*1000));
  var expires = "expires="+ d.toUTCString();

  document.cookie = `${cname}=${cvalue};${expires};path=/`
}

//Функция для получения файла cookie
function getCookie(cname) {
  var name = cname + "=";
  var decodedCookie = decodeURIComponent(document.cookie);
  var ca = decodedCookie.split(';');
  for(var i = 0; i <ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') 
      c = c.substring(1);
    if (c.indexOf(name) == 0) 
      return c.substring(name.length, c.length);
  }
  return "";
}

//Функция для проверки файла cookie
function checkCookie(nameCookie, defaultValue) {
  var parameter = getCookie(nameCookie);
  if (parameter != "") {
    //
  }
  else {
    setCookie(nameCookie, defaultValue, 365);
  }
  return parameter;
}

currentMode = checkCookie("currentMode", currentMode);
translationAlgorithm = checkCookie("translationAlgorithm", translationAlgorithm);
//#endregion


//#region Блок навигации

// Наименование переводимого языка
const translatableLanguage = document.querySelector('#translatableLanguage')
translatableLanguage.value = languages[0][1]

// Наименование переведённого языка
const translatedLanguage = document.querySelector('#translatedLanguage')
translatedLanguage.value = languages[1][1]

//Поле ввода переводимого текста
const textTranslatable = document.querySelector('#textTranslatable')

//Поле переведённого текста
const textTranslated = document.querySelector('#textTranslated')

// Кнопка смены языка
const refIco = document.querySelector('#refIco')

// Кнопка копирования текста 
const butCopy = document.querySelector('#butCopy')

// Кнопка "Поделиться"
const butShare = document.querySelector('#butShare')

//Поле ввода переводимого текста
const cBTranslationAlgorithm = document.querySelector('#translationAlgorithm')

//Кнопка ссылки на проект Github
const linkToGithub = document.querySelector('#linkToGithub')
let linkToGithubDefaultStyle = linkToGithub.style.display
linkToGithub.style.display = "none";

//#endregion

//Событие нажатия клавиши
document.addEventListener('keydown', (event) => {
  const keyName = event.key;

  if (keyName === 'Control') {
    return;
  }

  if (event.ctrlKey) {
    if (keyName == "Shift"){
      linkToGithub.style.display = linkToGithubDefaultStyle
    }
  } 
}, false);

//Событие отжатия клавиши
document.addEventListener('keyup', (event) => {
  const keyName = event.key;
  linkToGithub.style.display = "none"
}, false);

//Событие нажатия на кнопку "Проект Github"
linkToGithub.onclick = () => {
  window.open("https://github.com/Makishimu25050/ChwickTranslatot", "_blank");
}

//Загрузка среды
loadingEnvironment();
function loadingEnvironment(){
  if (currentMode === `${languages[0][0]}To${languages[1][0]}`){
    translatableLanguage.value = languages[0][1]
    translatedLanguage.value = languages[1][1]
  }
  else if (currentMode === `${languages[1][0]}To${languages[0][0]}`){
    translatableLanguage.value = languages[1][1]
    translatedLanguage.value = languages[0][1]
  }
  cBTranslationAlgorithm.value = translationAlgorithm;
}

//Событие клика по refIco
refIco.onclick = () => {
  if (translatedLanguage.value === languages[0][1])
    currentMode = `${languages[0][0]}To${languages[1][0]}`
  else
    currentMode = `${languages[1][0]}To${languages[0][0]}`
  setCookie("currentMode", currentMode, 365);
  loadingEnvironment();
  const buf = textTranslatable.value
  textTranslatable.value = textTranslated.value
  textTranslated.value = buf
}

//Событие изменения алгоритма
cBTranslationAlgorithm.addEventListener('change', () => {
  translationAlgorithm = cBTranslationAlgorithm.value
  setCookie("translationAlgorithm", translationAlgorithm, 365);
  textTranslatableChange();
})

function textTranslatableChange(){
  let result = ''; //Строка с результатом
  let str = textTranslatable.value; //Исходная строка
  switch (currentMode) {
    case 'RuToOr':
      if (translationAlgorithm === "1"){
        for (let ind in str){
          const pos = arrRu.indexOf(str[ind].toLowerCase());  //Позиция символа в строке алфавита
          if (pos >= 0){ //Если такой символ есть в строке алфовита
            let bin = (pos + 1).toString(2); //Пеоеводим позицию символа в строке алфавита в бинарный вид
            bin = '00000'.substr(0, 5 - bin.length) + bin; //Добавляем необхобимое количество 0 в бинарную строку (до длины строки равной 5)
            let letterOr = ''; //Буква, закодированная в Орочий
            for (let i = 0; i < 5; i++) //Цикл по бинарной строке
              letterOr += (bin[i] === '1' ? wordChwick[i]: ''); //Если символ в бинарной строке равен 1, то подставляем соответствующий символ из орочей кодировки
            if (str[ind] === str[ind].toUpperCase()) //Если первый символ слова в верхнем регистре
              letterOr = letterOr[0].toUpperCase() + letterOr.substring(1); //Переводим первую букву слова в верхний регистр
            result += letterOr; //Записываем закодированную букву в результат
          }
          else //Иначе
            result += str[ind]; //В результат пишем искомый символ без изменений
        }
      }
      else if (translationAlgorithm === "2"){
        for (let ind in str){
            const pos = arrFullRu.indexOf(str[ind].toLowerCase());  //Позиция символа в строке алфавита
            if (pos >= 0){ //Если такой символ есть в строке алфовита
              let letterOr = arrFullOr[pos]
              if ((letterOr[0] === letterOr[1]) && 
                  ((+ind + 1 === str.length) || (arrFullRu.indexOf(str[+ind + 1].toLowerCase()) < 0)))
                letterOr = letterOr[0]
              if (str[ind] === str[ind].toUpperCase()) //Если первый символ слова в верхнем регистре
                letterOr = letterOr[0].toUpperCase() + letterOr.substring(1); //Переводим первую букву слова в верхний регистр
              result += letterOr
            }
            else //Иначе
              result += str[ind]; //В результат пишем искомый символ без изменений
          }
      }
      break;
    case 'OrToRu':
      if (translationAlgorithm === "1"){
        str += "|"; //Добавляем к строке любой символ (для корректной работы перевода)
        let wordOr = ''; //Создаём строку Орочего слова
  
        for (let c in str) //Цикл по тексту
        {
          if (wordChwick.includes(str[c].toLowerCase())) //если такой символ есть в строке кодировки орочего языка
            wordOr += str[c]; //Записываем символ в строку Орочего слова
          else
          {
            let wordRu = ''; //Создаём строку переведённого (русского) слова
            while (wordOr.length > 0) //Пока в строке орочего слова есть символы
            {
              let letterRu = ''; //Создаём строку русской буквы
              let letterOr = ''; //Создаём строку орочей (кодированной) буквы
              let i = 32; //Создаём переменную индекса
              while (--i > 0 && letterRu.length === 0) //Пока индекс больше 0 и символ не расшифрован
              {
                let bin = i.toString(2); //Получаем бинарную строку
                bin = '00000'.substr(0, 5 - bin.length) + bin; //Добавляем необхобимое количество 0 в бинарную строку (до длины строки равной 5)
                letterOr = ''; //Обнуляем строку орочей (кодированной) буквы
                for (let j = 0; j < 5; j++) //Цикл по бинарной строке
                  letterOr += (bin[j] === '1' ? wordChwick[j] : ''); //Если символ в бинарной строке равен 1, то подставляем соответствующий символ из орочей кодировки
                if (letterOr.length <= wordOr.length) //Если в орочем слове достаточно символов
                  letterRu = (letterOr === wordOr.toLowerCase().substr(0, letterOr.length) ? arrRu[i - 1] : ''); //Если символ в орочей кодировке соответствует найденому символу, то раскодируем "орочью букву"
              }
              wordRu += letterRu; //Записываем раскодированную букву в результат
              if (wordOr[0] === wordOr[0].toUpperCase()) //Если первый символ слова в верхнем регистре
                wordRu = wordRu[0].toUpperCase() + wordRu.substring(1); //Переводим первую букву слова в верхний регистр
              wordOr = wordOr.substring(letterOr.length); //Удаляем раскодированную часть
            }
  
            result += wordRu; //Записываем в строку результата переведённое слово
            result += str[c]; //Записываем в строку результата непереводимый символ
            wordOr = ''; //Обнуляем "орочье слово"
          }
        }
        if (result[result.length - 1] === "|")
          result = result.substring(0, result.length - 1); //Удаляем последний символ
      }
      else if (translationAlgorithm === "2"){
        str += "|"; //Добавляем к строке любой символ (для корректной работы перевода)
        let wordOr = ''; //Создаём строку Орочего слова
  
        for (let c in str){ //Цикл по тексту
          if (wordChwickta.includes(str[+c].toLowerCase())) //если такой символ есть в строке кодировки орочего языка
            wordOr += str[+c]; //Записываем символ в строку Орочего слова
          else{
            let wordRu = ''; //Создаём строку переведённого (русского) слова
            while (wordOr.length > 0){ //Пока в строке орочего слова есть символы
              const letterOr = wordOr.length < 2 ? wordOr.repeat(2) : wordOr.substr(0, 2); //Создаём строку орочей (кодированной) буквы
              wordRu += arrFullRu[arrFullOr.indexOf(letterOr.toLowerCase())]; //Записываем в строку результата переведённое слово
              wordOr = wordOr.substring(letterOr.length); //Удаляем раскодированную часть
            }
            result += wordRu; //Записываем в строку результата переведённое слово
            result += str[+c]; //Записываем в строку результата непереводимый символ
          }
        }
        if (result[result.length - 1] === "|")
          result = result.substring(0, result.length - 1); //Удаляем последний символ
      }
      break;
    default:
      alert('not');
  }
  textTranslated.value = result
}

//Событие изменения текста в поле textTranslatable
textTranslatable.addEventListener('input', () => {
  textTranslatableChange();
})

//Событие клика по butCopy
butCopy.onclick = () => {
  navigator.clipboard.writeText(textTranslated.value);
}


const resultPara = document.querySelector('.result'),
      thisUrl = window.location.href,
      thisTitle = document.title,
      shareObj = {
                   title: thisTitle,
                   url: thisUrl,
                 }

// Must be triggered some kind of "user activation"
butShare.addEventListener('click', async () => {
  try {
    await navigator.share(shareObj)
    resultPara.textContent = 'MDN shared successfully'
  } catch(err) {
    resultPara.textContent = 'Error: ' + err
  }
});

if (sessionStorage.getItem('visited')) {
  alert("qwe")
}

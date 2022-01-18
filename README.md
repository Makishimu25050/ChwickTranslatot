# ChwickTranslatot
<a href="https://makishimu25050.github.io/ChwickTranslatot/main.html">ChwickTranslatot</a> translates (encodes) text from Russian into Oroch and vice versa
***
# Chwick переводчик
<a href="https://makishimu25050.github.io/ChwickTranslatot/main.html">Chwick переводчик</a> переводит (кодирует) текст с Русского языка на Орочий и обратно

  Алгоритм 1. Производит кодировку русского текста в двоичный код в размерности 5 бит (таким образом, с исключением знаков ‘ъ’ и ‘ь’, выходит: ‘a’=”00001”, ‘б’=”00010”, ‘в’=”00011”, …, ‘я’=”11111”). При этом, каждой позиции двоичного кода соответствует символ из заданного ключевого слова “чвика”, где ‘ч’ – старший разряд двоичного числа, а ‘а' – младший (соответственно ‘a’=”а”, ‘б’=”к”, ‘в’=”ка”, …, ‘я’=”чвика”). Далее, при нахождении символа кириллицы в тексте, алгоритм заменяет символ на соответствующую «орочью букву» (так «Привет» = «Чачквккаикчи»). Полное таблица соответствия приведена ниже:
<table>
  <tr>
    <td>[0: "а"; 1: "б"; 2: "в"; 3: "г"; 4: "д"; 5: "е"; 6: "ё"; 7: "ж"; 8: "з"; 9: "и"; 10: "й"; 11: "к"; 12: "л"; 13: "м"; 14: "н"; 15: "о"; 16: "п"; 17: "р"; 18: "с"; 19: "т"; 20: "у"; 21: "ф"; 22: "х"; 23: "ц"; 24: "ч"; 25: "ш"; 26: "щ"; 27: "ы"; 28: "э"; 29: "ю"; 30: "я"]</td>
    <td>[0: "а"; 1: "к"; 2: "ка"; 3: "и"; 4: "иа"; 5: "ик"; 6: "ика"; 7: "в"; 8: "ва"; 9: "вк"; 10: "вка"; 11: "ви"; 12: "виа"; 13: "вик"; 14: "вика"; 15: "ч"; 16: "ча"; 17: "чк"; 18: "чка"; 19: "чи"; 20: "чиа"; 21: "чик"; 22: "чика"; 23: "чв"; 24: "чва"; 25: "чвк"; 26: "чвка"; 27: "чви"; 28: "чвиа"; 29: "чвик"; 30: "чвика"]</td>
  </tr>
</table>

  Алгоритм 2. Буквы русского алфавита переводится (кодируются) в парные символы орочьего языка по ключевому слову «чвикта». При этом порядковый номер буквы в таблице соответствует паре символов из ключевого слова. Так, 1 символ соответствует паре 1,2 ключевого слова; 2 символ паре 1,3; третий символ паре 1,4; и т.д. Последние три символ алфавита (‘э’, ’ю’, ‘я’) могут быть закодированы парными символами «близнецами» (1,1; 2,2; 3,3; 4,4; 5,5; 6,6). Таким образом, ‘a’=”чв”, ‘б’=”чи”, ‘в’=”чк”, …, ‘ь’=”ат”, ‘э’=”вв”/”чч”, ‘ю’=”ии”/”кк”,‘я’=”аа”/”тт”. Если орочье слово оканчивается на символ «близнец», то он может быть заменён на единичный символ ("вв" = "в", "аа" = "а" и т.д.). Полная таблица соответствия приведена ниже: 
<table>
  <tr>
    <td>[0: "а"; 1: "б"; 2: "в"; 3: "г"; 4: "д"; 5: "е"; 6: "ё"; 7: "ж"; 8: "з"; 9: "и"; 10: "й"; 11: "к"; 12: "л"; 13: "м"; 14: "н"; 15: "о"; 16: "п"; 17: "р"; 18: "с"; 19: "т"; 20: "у"; 21: "ф"; 22: "х"; 23: "ц"; 24: "ч"; 25: "ш"; 26: "щ"; 27: "ъ"; 28: "ы"; 29: "ь"; 30: "э"; 31: "ю"; 32: "я"; 33: "э"; 34: "ю"; 35: "я"]</td>
    <td>[0: "чв"; 1: "чи"; 2: "чк"; 3: "чт"; 4: "ча"; 5: "вч"; 6: "ви"; 7: "вк"; 8: "вт"; 9: "ва"; 10: "ич"; 11: "ив"; 12: "ик"; 13: "ит"; 14: "иа"; 15: "кч"; 16: "кв"; 17: "ки"; 18: "кт"; 19: "ка"; 20: "тч"; 21: "тв"; 22: "ти"; 23: "тк"; 24: "та"; 25: "ач"; 26: "ав"; 27: "аи"; 28: "ак"; 29: "ат"; 30: "вв"; 31: "ии"; 32: "аа"; 33: "чч"; 34: "кк"; 35: "тт"]</td>
  </tr>
</table>

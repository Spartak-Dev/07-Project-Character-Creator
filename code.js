 //Проєкт: "Створення Персонажа для Гри"
 
 //Підготовка:
 let isCharacterCreationCancelled = false;
 let characterName;
 let characterClass;
 let strengthPoints;
 let agilityPoints;
 const TOTAL_SKILL_POINTS = 10; 
//Крок 1: Вибір Імені (цикл while + прапорець)
while (true) {
  let askUserNameCharacter = prompt('Ведіть ім\'я вашого героя');
  if (askUserNameCharacter === null) {
    isCharacterCreationCancelled = true;
    break
  } else if (askUserNameCharacter === '') {
    alert('введіть будь ласка імя вашаго героя');continue;
  }
   if (askUserNameCharacter.trim() !== '') {
    characterName = askUserNameCharacter;
    break
  }
}
//Крок 2: Вибір Класу (цикл while + прапорець)
if (!isCharacterCreationCancelled) {
  while (true) {
    let askUserCharacterClass = prompt('Оберіть клас для героя: Воїн, Лучник, Маг ', '');
    if (askUserCharacterClass === null) {
      isCharacterCreationCancelled = true;
      break;
    } else if (askUserCharacterClass === '' ) {
      alert('введіть данні про клас персонажа')
    }
    const normolizedUserCharacterClass = askUserCharacterClass.trim().toLowerCase()
    if (normolizedUserCharacterClass === 'воїн' || normolizedUserCharacterClass === 'лучник' || normolizedUserCharacterClass === 'маг') {
      characterClass = normolizedUserCharacterClass;
      break;
    }
  }
}
//Крок 3: Розподіл Очок 

if (!isCharacterCreationCancelled) {
let remainingPoints = TOTAL_SKILL_POINTS;
 while (true) {
    let askUserWantsSpendPointsForCharacter = prompt(`Розподіліть очки навичок. Всього у вас ${remainingPoints}. Скільки вкласти в СИЛУ?`);
     if (askUserWantsSpendPointsForCharacter === null){
      isCharacterCreationCancelled = true;
      alert('Опервція скасована');
      break;
     }
    const POINTS_NUMBER = Number(askUserWantsSpendPointsForCharacter);
     if (!isNaN(POINTS_NUMBER) && POINTS_NUMBER >= 0 && POINTS_NUMBER <= remainingPoints) {
      strengthPoints = POINTS_NUMBER;
      agilityPoints = remainingPoints - strengthPoints;
      break;
     } 
     alert(`Будь ласка, введіть число від 0 до ${remainingPoints}.`);
    }

    } 
    
  

if (isCharacterCreationCancelled) {
  alert('Створення персонажа скасовано.');
} else {
  alert(
    `--- Ваш Персонаж ---\n` +
    `Ім'я: ${characterName}\n` +
    `Клас: ${characterClass}\n` +
    `Сила: ${strengthPoints}\n` +
    `Спритність: ${agilityPoints}`
  );
}

// function calculate() {
//   // Получаем данные нивелировки
//   const upperA = parseFloat(document.getElementById('upperA').value);
//   const lowerA = parseFloat(document.getElementById('lowerA').value);
//   const upperB = parseFloat(document.getElementById('upperB').value);
//   const lowerB = parseFloat(document.getElementById('lowerB').value);
//   const upperC = parseFloat(document.getElementById('upperC').value);
//   const lowerC = parseFloat(document.getElementById('lowerC').value);
//   const upperD = parseFloat(document.getElementById('upperD').value);
//   const lowerD = parseFloat(document.getElementById('lowerD').value);
//   const upperE = parseFloat(document.getElementById('upperE').value);
//   const lowerE = parseFloat(document.getElementById('lowerE').value);
//   const upperF = parseFloat(document.getElementById('upperF').value);
//   const lowerF = parseFloat(document.getElementById('lowerF').value);

//   // Проверяем, что все данные нивелировки введены
//   if (isNaN(upperA) || isNaN(lowerA) || isNaN(upperB) || isNaN(lowerB) ||
//     isNaN(upperC) || isNaN(lowerC) || isNaN(upperD) || isNaN(lowerD) ||
//     isNaN(upperE) || isNaN(lowerE) || isNaN(upperF) || isNaN(lowerF)) {
//     document.getElementById('result').innerHTML = "Пожалуйста, заполните все поля нивелировки.";
//     return;
//   }

//   // Рассчитываем глубины
//   const depthA = upperA - lowerA;
//   const depthB = upperB - lowerB;
//   const depthC = upperC - lowerC;
//   const depthD = upperD - lowerD;
//   const depthE = upperE - lowerE;
//   const depthF = upperF - lowerF;

//   // Средняя глубина
//   const averageDepth = (depthA + depthB + depthC + depthD + depthE + depthF) / 6;

//   // Получаем площадь и количество человек
//   const area = parseFloat(document.getElementById('area').value);
//   const people = parseFloat(document.getElementById('people').value);

//   // Выводим результат
//   let resultText = `Средняя глубина: ${averageDepth.toFixed(3)} м<br>`;

//   // Рассчитываем кубатуру, если площадь указана
//   if (!isNaN(area) && area > 0) {
//     const volume = area * averageDepth;
//     resultText += `Кубатура: ${volume.toFixed(3)} м³<br>`;

//     // Рассчитываем кубатуру на человека, если количество человек указано
//     if (!isNaN(people) && people > 0) {
//       const volumePerPerson = volume / people;
//       resultText += `Кубатура на человека: ${volumePerPerson.toFixed(3)} м³`;
//     }
//   }

//   document.getElementById('result').innerHTML = resultText;
// }
function calculate() {
    // Собираем данные нивелировки
    const points = [
        { upper: 'upperA', lower: 'lowerA' },
        { upper: 'upperB', lower: 'lowerB' },
        { upper: 'upperC', lower: 'lowerC' },
        { upper: 'upperD', lower: 'lowerD' },
        { upper: 'upperE', lower: 'lowerE' },
        { upper: 'upperF', lower: 'lowerF' }
    ];

    let totalDepth = 0;
    let validPoints = 0;

    // Проходим по всем точкам
    points.forEach(point => {
        const upper = parseFloat(document.getElementById(point.upper).value);
        const lower = parseFloat(document.getElementById(point.lower).value);

        // Если оба значения заполнены, учитываем точку
        if (!isNaN(upper) && !isNaN(lower)) {
            // Складываем верхнее и нижнее значения
            totalDepth += (upper + lower);
            validPoints++;
        }
    });

    // Проверяем, что хотя бы одна точка заполнена
    if (validPoints === 0) {
        document.getElementById('result').innerHTML = "Пожалуйста, заполните хотя бы одну точку нивелировки.";
        return;
    }

    // Средняя глубина
    const averageDepth = totalDepth / validPoints;

    // Получаем площадь и количество человек
    const area = parseFloat(document.getElementById('area').value);
    const people = parseFloat(document.getElementById('people').value);

    // Выводим результат
    let resultText = `Средняя глубина: ${averageDepth.toFixed(3)} м<br>`;

    // Рассчитываем кубатуру, если площадь указана
    if (!isNaN(area) && area > 0) {
        const volume = area * averageDepth;
        resultText += `Кубатура: ${volume.toFixed(3)} м³<br>`;

        // Рассчитываем кубатуру на человека, если количество человек указано
        if (!isNaN(people) && people > 0) {
            const volumePerPerson = volume / people;
            resultText += `Кубатура на человека: ${volumePerPerson.toFixed(3)} м³`;
        }
    }

    document.getElementById('result').innerHTML = resultText;
}
function reset() {
  // Очищаем все поля ввода
  const inputs = document.querySelectorAll('input');
  inputs.forEach(input => input.value = '');

  // Очищаем результат
  document.getElementById('result').innerHTML = '';
}

function calculate() {
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

  points.forEach(point => {
    const upper = parseFloat(document.getElementById(point.upper).value);
    const lower = parseFloat(document.getElementById(point.lower).value);

    if (!isNaN(upper) && !isNaN(lower)) {
      totalDepth += (upper + lower);
      validPoints++;
    }
  });

  if (validPoints === 0) {
    document.getElementById('result').innerHTML = "Пожалуйста, заполните хотя бы одну точку нивелировки.";
    return;
  }

  const averageDepth = totalDepth / validPoints;
  const area = parseFloat(document.getElementById('area').value);
  const people = parseFloat(document.getElementById('people').value);

  let resultText = `Средняя глубина: ${averageDepth.toFixed(3)} м<br>`;

  if (!isNaN(area) && area > 0) {
    const volume = area * averageDepth;
    resultText += `Кубатура: ${volume.toFixed(3)} м³<br>`;

    if (!isNaN(people) && people > 0) {
      const volumePerPerson = volume / people;
      resultText += `Кубатура на человека: ${volumePerPerson.toFixed(3)} м³`;
    }
  }

  document.getElementById('result').innerHTML = resultText;
}

function resetForm() {
  document.querySelectorAll('input').forEach(input => {
    input.value = '';
  });
  document.getElementById('result').innerHTML = '';
}

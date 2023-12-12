function showQuestion2() {
    document.getElementById('question1').style.display = 'none';
    document.getElementById('question2').style.display = 'block';
  }
  
  function calculateScore() {
    let q1Answer = document.querySelector('input[name="q1"]:checked');
    let q2Answer = document.querySelector('input[name="q2"]:checked');
  
    if (q1Answer && q2Answer) {
      let q1Value = q1Answer.value;
      let q2Value = q2Answer.value;
  
      let q1Score = calculateIndividualScore(q1Value);
      let q2Score = calculateIndividualScore(q2Value);
  
      let totalScore = q1Score + q2Score;
  
      document.getElementById('totalScore').textContent = totalScore;
      document.getElementById('result').style.display = 'block';
    } else {
      alert('Please answer both questions.');
    }
  }
  
  function calculateIndividualScore(value) {
    switch (value) {
      case '10':
        return 10;
      case '5':
        return 5;
      case '2':
        return 2;
      default:
        return 0;
    }
  }
  
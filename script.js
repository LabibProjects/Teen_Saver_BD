function showNextQuestion(nextQuestionId) {
  const currentQuestion = document.getElementById(nextQuestionId).previousElementSibling;
  const nextQuestion = document.getElementById(nextQuestionId);

  if (currentQuestion && nextQuestion) {
    currentQuestion.style.display = 'none';
    nextQuestion.style.display = 'block';
  }
}

function calculateScore() {
  const totalQuestions = 10; // Total number of questions
  let totalScore = 0;
  let allQuestionsAnswered = true;

  // Check for unanswered questions
  for (let i = 1; i <= totalQuestions; i++) {
    const selectedOption = document.querySelector(`input[name=q${i}]:checked`);
    if (selectedOption) {
      totalScore += parseInt(selectedOption.value);
    } else {
      allQuestionsAnswered = false;
      alert(`Please answer Question ${i} before submitting.`);
      break;
    }
  }

  // Display different messages based on score range
  if (allQuestionsAnswered) {
    let resultMessage = '';
    if (totalScore < 40) {
      resultMessage = 'আপনার মানসিক স্বাস্থ ভালো না 😔';
    } else if (totalScore >= 40 && totalScore < 80) {
      resultMessage = 'আপনার মানসিক স্বাস্থ মোটামুটি 😊';
    } else {
      resultMessage = 'আপনার মানসিক স্বাস্থ ভালো 😍';
    }

    if (totalScore >= 40) {
      document.getElementById('result').style.display = 'block';
      document.getElementById('totalScore').textContent = totalScore;
    }
    
    alert(resultMessage);
  }
}

// Rest of your existing code remains unchanged.

const questions = [
  "গত সপ্তাহে আপনি আপনার তাণ্ডব্য স্তরটি কতটুকু রেট করতে চান, 1 থেকে 10 স্কেলে?",
  "সাধারণভাবে আপনার ঘুমের নিম্নমান এবং ঘুমের মান আপনি কিভাবে বর্ণনা করবেন?",
  "আপনি কি বর্তমানে কাজে বা পাঠ্যক্রমে কেন্দ্রীভূত হতে চাইতেছেন?",
  "পরিবার এবং বন্ধুদের সাথে আপনার সম্পর্কের মান আপনি কিভাবে বর্ণনা করবেন, অথবা যদি প্রযোজ্য হয়, গুরুত্বপূর্ণ অন্যকে?",
  "আপনি কি এমন একটি অভিজ্ঞতা পেয়েছেন যা আপনার মনে শাশ্বতিকালের জন্য প্রভাব ফেলেছে এবং আপনার জীবনযাপনে পরিবর্তন আনেছে?",
  "আপনি কি আপনার অনাহার বা খাদ্য অভ্যন্তরীণ পরিবর্তনের অভিজ্ঞতা অনুভব করেছেন?",
  "আপনি কি সাধারণভাবে আনন্দ অনুভব করেন কিন্তু সর্বত্র সাম্রাজ্যিক আবেগ হারিয়ে ফেলেছেন?",
  "আপনার মোট স্ব-প্রতিষ্ঠান আপনি কিভাবে বর্ণনা করতে চান?",
  "আপনার কি কারো সাথে যোগাযোগ করার জন্য আরাম অনুভব করা যায় এমন কাউকে সমর্থন সিস্টেম আছে?",
  "আপনি মনে করেন আপনি কীভাবে বর্তমানে আপনার জীবনের চ্যালেঞ্জ এবং চাপের সঙ্গে যথেষ্ট সম্মোহন করছেন?",
];

const form = document.getElementById('questionnaireForm');
questions.forEach((question, index) => {
  const questionNumber = index + 1;
  const div = document.createElement('div');
  div.classList.add('question');
  div.id = `question${questionNumber}`;

  div.innerHTML = `
    <h2>${questionNumber}. ${question}</h2>
    <input type="radio" name="q${questionNumber}" value="10"> হাঁ <br>
    <input type="radio" name="q${questionNumber}" value="5"> হতে পারে<br>
    <input type="radio" name="q${questionNumber}" value="0"> না<br>
    ${
      questionNumber !== 1
        ? `<button type="button" onclick="showPreviousQuestion('question${questionNumber - 1}')">পূর্ববর্তী</button>`
        : ''
    }
    ${questionNumber !== questions.length
      ? `<button type="button" onclick="showNextQuestion('question${questionNumber + 1}')">পরবর্তী</button>`
      : `<button type="button" onclick="calculateScore()">সাবমিট করুন</button>`}
  `;

  if (questionNumber !== 1) {
    div.style.display = 'none';
  }

  form.appendChild(div);
});

function showPreviousQuestion(prevQuestionId) {
  const currentQuestion = document.getElementById(prevQuestionId).nextElementSibling;
  const prevQuestion = document.getElementById(prevQuestionId);

  if (currentQuestion && prevQuestion) {
    currentQuestion.style.display = 'none';
    prevQuestion.style.display = 'block';
  }
}

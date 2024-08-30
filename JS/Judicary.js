const questions = [
    {
        question: "What does Article 127 of the Indian Constitution pertain to regarding the appointment of retired judges?",
        riddle: "In times of judicial need, I enable retired judges to step in temporarily. Though they’ve hung up their robes, they may wear them again. Which article am I?",
        options: ["Article 126", "Article 127", "Article 128", "Article 129"],
        answer: "Article 127"
    },
    {
        question: "Which article provides for the Supreme Court to resolve disputes between the Central Government and State Governments?",
        riddle: "When disputes arise between the ruling center and the states, I step in to adjudicate. Acting as the final arbitrator in these matters, which article am I?",
        options: ["Article 130", "Article 131", "Article 132", "Article 133"],
        answer: "Article 131"
    },
    {
        question: "Which article of the Indian Constitution gives the Supreme Court the authority to grant special leave to appeal in any case?",
        riddle: "Granting a chance to revisit judgments beyond ordinary appeal, I serve as the Supreme Court's tool for exceptional cases. What article am I?",
        options: ["Article 135", "Article 136", "Article 137", "Article 138"],
        answer: "Article 136"
    },
    {
        question: "What does Article 145 of the Indian Constitution specify about the rules for the Supreme Court?",
        riddle: "I lay down the rules and procedures for the Supreme Court’s operations and proceedings. Governing how justice is administered, what article am I?",
        options: ["Article 144", "Article 145", "Article 146", "Article 147"],
        answer: "Article 145"
    },
    {
        question: "Which article empowers High Courts to issue writs for enforcing fundamental rights and other legal matters?",
        riddle: "Empowering High Courts to issue writs and protect fundamental rights, I am a crucial article for state-level justice enforcement. What article am I?",
        options: ["Article 225", "Article 226", "Article 227", "Article 228"],
        answer: "Article 226"
    },
    {
        question: "Which article ensures that the Supreme Court can issue directions for the enforcement of fundamental rights?",
        riddle: "When fundamental rights need to be enforced and the courts are approached, I help the Supreme Court issue directions. Which article is this?",
        options: ["Article 129", "Article 130", "Article 131", "Article 226"],
        answer: "Article 226"
    },
    {
        question: "Which article provides the procedure for the appointment of judges to the Supreme Court?",
        riddle: "To fill the prestigious positions in the Supreme Court, this article lays down the procedure. Which article covers this appointment process?",
        options: ["Article 124", "Article 125", "Article 126", "Article 127"],
        answer: "Article 124"
    },
    {
        question: "Which article describes the tenure and conditions of service of High Court judges?",
        riddle: "To understand how long High Court judges serve and their conditions, you look at this article. What is it?",
        options: ["Article 214", "Article 215", "Article 216", "Article 217"],
        answer: "Article 217"
    },
    {
        question: "Which article outlines the powers of the Supreme Court to hear appeals in civil and criminal matters?",
        riddle: "For hearing appeals in various civil and criminal cases, this article details the Supreme Court’s powers. What is this article?",
        options: ["Article 134", "Article 135", "Article 136", "Article 137"],
        answer: "Article 136"
    },
    {
        question: "Which article allows the Supreme Court to interpret the Constitution and settle constitutional questions?",
        riddle: "Interpreting the Constitution and resolving constitutional issues falls under this article’s domain. What article provides this power?",
        options: ["Article 131", "Article 132", "Article 133", "Article 134"],
        answer: "Article 132"
    }
];

let currentQuestionIndex = 0;

function displayQuestion(index) {
const questionContainer = document.getElementById('question-container');
const riddleContainer = document.getElementById('riddle-container');
const optionsContainer = document.getElementById('options-container');
const feedback = document.getElementById('feedback');
const submitBtn = document.getElementById('submit-btn');
const nextBtn = document.getElementById('next-btn');

const questionData = questions[index];
questionContainer.innerHTML = `
<div class="question">${questionData.question}</div>
`;
riddleContainer.innerHTML = `
<div class="riddle">${questionData.riddle}</div>
`;
optionsContainer.innerHTML = `
${questionData.options.map(option => `<label class="option"><input type="radio" name="option" value="${option}"> ${option}</label>`).join('')}
`;
feedback.className = 'feedback hidden'; // Hide feedback initially
submitBtn.disabled = false; // Enable submit button
nextBtn.disabled = true; // Disable next button initially
}

document.getElementById('submit-btn').addEventListener('click', () => {
const selectedOption = document.querySelector('input[name="option"]:checked');
const feedback = document.getElementById('feedback');
const submitBtn = document.getElementById('submit-btn');
const nextBtn = document.getElementById('next-btn');

if (selectedOption) {
const answer = questions[currentQuestionIndex].answer;
if (selectedOption.value === answer) {
    feedback.textContent = 'Correct! Well done.';
    feedback.className = 'feedback';
} else {
    feedback.textContent = `Incorrect. The correct answer is ${answer}.`;
    feedback.className = 'feedback incorrect';
}
submitBtn.disabled = true; // Disable submit button after submission
nextBtn.disabled = false; // Enable next button
} else {
feedback.textContent = 'Please select an option.';
feedback.className = 'feedback incorrect';
}
});

document.getElementById('next-btn').addEventListener('click', () => {
currentQuestionIndex = (currentQuestionIndex + 1) % questions.length;
displayQuestion(currentQuestionIndex);
});

displayQuestion(currentQuestionIndex);

document.addEventListener('scroll', function() {
const scrollWatcher = document.getElementById('scroll-watcher');
const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
const scrollPos = window.scrollY;

// Calculate the percentage of how far you have scrolled
const scrollPercent = Math.min(1, scrollPos / maxScroll);

// Calculate the new width based on scroll percentage
// Width grows from 0 to cover the entire viewport width
const newWidth = window.innerWidth * scrollPercent;

// Update the scroll watcher element's width
scrollWatcher.style.width = `${newWidth}px`;
});
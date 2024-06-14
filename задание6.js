let username = localStorage.getItem('username');

if (username) {
    document.getElementById('username').textContent = `Привет, ${username}!`;
}

document.addEventListener('DOMContentLoaded', function () {
    const navLinks = document.querySelectorAll('nav a');

    navLinks.forEach(function (link) {
        link.addEventListener('click', function (event) {
            event.preventDefault();
            const taskNumber = link.getAttribute('data-task');
            showTask(taskNumber);
        });
    });
});

function showTask(taskNumber) {
    const taskContainer = document.getElementById('main');
    taskContainer.innerHTML = '';

    switch (taskNumber) {
        case '0':
            greetUser();
            break;
        case '1':
            calculateTriangleArea();
            break;
        case '2':
            compareStrings();
            break;
        case '3':
            findMinAndMaxInArray();
            break;
        case '4':
            startTimer();
            break;
        case '5':
            startTest();
            break;
        case '6':
            showSplashScreen();
            break;
    }
}

function greetUser() {
    const taskContainer = document.getElementById('main');
    taskContainer.innerHTML = `
        <h2>Представьтесь</h2>
        <p>Введите ваше имя:</p>
        <input type="text" id="username-input">
        <button id="greet-button">Приветствовать</button>
    `;

    const usernameInput = document.getElementById('username-input');
    const greetButton = document.getElementById('greet-button');

    greetButton.addEventListener('click', function () {
        const username = usernameInput.value;
        localStorage.setItem('username', username);
        document.getElementById('username').textContent = `Привет, ${username}!`;
    });
}

function calculateTriangleArea() {
    let base = prompt("Введите основание треугольника:");
    let height = prompt("Введите высоту треугольника:");
    if (base && height) {
        let area = (base * height) / 2;
        alert(`Площадь треугольника: ${area}`);
    }
}
function compareStrings() {
    let str1 = prompt("Введите первую строку:");
    let str2 = prompt("Введите вторую строку:");
    if (str1 && str2) {
        let result = str1.length === str2.length;
        alert(`Результат: ${result}`);
    }
}
function findMinAndMaxInArray() {
    let arr = [];
    for (let i = 0; i < 5; i++) {
        arr.push(prompt(`Введите элемент ${i + 1}:`));
    }
    let min = Math.min(...arr);
    let max = Math.max(...arr);
    alert(`Минимальное значение: ${min}, Максимальное значение: ${max}`);
}
let timer;
let startTime;
let elapsedTime = 0;
let isRunning = false;

function startTimer() {
    if (!isRunning) {
      startTime = Date.now() - elapsedTime;
      timer = setInterval(function() {
        elapsedTime = Date.now() - startTime;
        displayTime(elapsedTime);
      }, 1000);
      isRunning = true;
    }
}
  
function stopTimer() {
    clearInterval(timer);
    isRunning = false;
}
  
function displayTime(elapsedTime) {
    const seconds = Math.floor((elapsedTime / 1000) % 60);
    const minutes = Math.floor((elapsedTime / 1000 / 60) % 60);
    const hours = Math.floor(elapsedTime / 1000 / 60 / 60);
  
    const timeString = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    
    const result = confirm(`Прошедшее время: ${timeString} \n\n Нажмите "OK", чтобы продолжить запущенный таймер \n "Отмена" - чтобы остановить таймер`)
  
    if (!result) {
      stopTimer();
    }
}



function showPopup() {
    const buttonStart = document.createElement('button');
    buttonStart.innerHTML = 'Запустить таймер';
    buttonStart.addEventListener('click', startTimer);
  
    const buttonStop = document.createElement('button');
    buttonStop.innerHTML = 'Остановить таймер';
    buttonStop.addEventListener('click', stopTimer);
  
    const popup = document.createElement('div');
    popup.appendChild(buttonStart);
    popup.appendChild(buttonStop);
  
    alert("Нажмите кнопку, чтобы начать таймер");
  
    return popup;
}

const questions = [
    {
        question: 'Что такое JavaScript?',
        answers: {
            a: 'Язык программирования',
            b: 'Фрукт',
            c: 'Кулинарный рецепт',
        },
        correctAnswer: 'a',
    },
    {
        question: 'Что такое DOM в JavaScript?',
        answers: {
            a: 'Document Object Model',
            b: 'Data Object Model',
            c: 'igital Object Model',
        },
        correctAnswer: 'a',
    },
    {
        question: 'Как объявить переменную в JavaScript?',
        answers: {
            a: 'let myVar;',
            b: 'const myVar = 10',
            c: 'var myVar',
        },
        correctAnswer: 'c',
    },
    {
        question: 'Что такое условный оператор "if"?',
        answers: {
            a: 'Цикл',
            b: 'Условие',
            c: 'Функция',
        },
        correctAnswer: 'b',
    },
    {
        question: 'Что такое метод массива "map"?',
        answers: {
            a: 'Изменяет оригинальный массив',
            b: 'Создает новый массив из результатов вызова функции для каждого элемента в массиве',
            c: 'Удаляет элементы из массива',
        },
        correctAnswer: 'b',
    },
    {
        question: 'Как объявить функцию в JavaScript?',
        answers: {
            a: 'function myFunction() {}',
            b: 'const myFunction = () => {}',
            c: 'let myFunction = function() {}',
        },
        correctAnswer: 'a',
    },
    {
        question: 'Что такое замыкание (closure) в JavaScript?',
        answers: {
            a: 'Это способность функции запоминать и иметь доступ к своей лексической области видимости, даже когда функция вызвана вне этой области',
            b: 'Это способность функции работать с другими замыканиями',
            c: 'Это способность функции быть замкнутой для изменений',
        },
        correctAnswer: 'a',
    },
    {
        question: 'Что делает оператор "===" в JavaScript?',
        answers: {
            a: 'Сравнивает на равенство, не приводя операнды к одному типу данных',
            b: 'Сравнивает на равенство, приводя операнды к одному типу данных ',
            c: 'Присваивает значение',
        },
        correctAnswer: 'b',
    },
    {
        question: 'Что такое AJAX?',
        answers: {
            a: 'Метод стилизации элементов интерфейса',
            b: 'Технология асинхронного обмена данными между браузером и сервером без перезагрузки страницы',
            c: 'Специальный язык программирования',
        },
        correctAnswer: 'b',
    },
    {
        question: 'Каким образом можно добавить обработчик события к элементу в JavaScript?',
        answers: {
            a: 'document.addEventListener(click, myFunction);',
            b: 'element.onClick = myFunction;',
            c: 'element.addEventListener(click, myFunction);',
        },
        correctAnswer: 'c',
    }
];


function startTest() {
    let score = 0;
    let testContainer = document.getElementById('test-container');

    questions.forEach((question, index) => {
      let questionDiv = document.createElement('div');
      questionDiv.classList.add('question');
      questionDiv.innerHTML = `<p>${index + 1}. ${question.question}</p>`;

      for (const [key, value] of Object.entries(question.answers)) {
        let radioBtn = document.createElement('input');
        radioBtn.type = 'radio';
        radioBtn.name = `question${index}`;
        radioBtn.value = key;
        let label = document.createElement('label');
        label.innerHTML = `${value}<br>`;
        questionDiv.appendChild(radioBtn);
        questionDiv.appendChild(label);
      }

      testContainer.appendChild(questionDiv);
    });

    let submitBtn = document.createElement('button');
    submitBtn.textContent = 'Проверить результат';
    submitBtn.addEventListener('click', () => {
      questions.forEach((question, index) => {
        const selectedAnswer = document.querySelector(`input[name="question${index}"]:checked`);
        if (selectedAnswer && selectedAnswer.value === question.correctAnswer) {
          score++;
        }
      });
      alert(`Вы ответили верно на ${score} из ${questions.length} вопросов`);
    });

    testContainer.appendChild(submitBtn);
}

function showSplashScreen() {
    const overlay = document.getElementById('overlay');
    const dateElement = document.getElementById('date');

    const currentDate = new Date().toLocaleDateString();
  
    dateElement.textContent = currentDate;
    document.getElementById('username1').textContent = `Привет, ${username}!`;
  
    overlay.style.display = 'block';
    overlay.addEventListener('click', hideOverlay);
}
  
function hideOverlay() {
    const overlay = document.getElementById('overlay');
    overlay.style.display = 'none';
}

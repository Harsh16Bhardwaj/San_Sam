    let argumentCounter = 0;
    let currentArgument = 0;
    let userScore = 0;
    const totalPoints = 10 * 5; // 5 arguments, each best choice worth 10 points

    // Scores for each choice: [best, second best, worst]
    const choiceScores = [
        [10, 5, 0], // Scores for the first argument
        [5, 10, 0], // Scores for the second argument
        [0, 5, 10], // Scores for the third argument
        [10, 5, 0], // Scores for the fourth argument
        [5, 10, 0]  // Scores for the fifth argument
    ];

    function startSimulation() {
        document.querySelector('.landing-page').style.display = 'none';
        document.querySelector('#case-simulation').style.display = 'block';
        nextCase();
    }

    function selectChoice(choice) {
        const choiceIndex = Array.from(document.querySelectorAll('.choices button')).findIndex(btn => btn.textContent === choice);
        
        // Calculate and add the score based on the choice
        userScore += choiceScores[currentArgument][choiceIndex];
        
        // Create a new div for the selected choice and insert it above the choices
        const choiceDiv = document.createElement('div');
        choiceDiv.innerHTML = `<p>${choice}</p>`;
        document.querySelector('.your-side').insertBefore(choiceDiv, document.querySelector('.choices'));

        // Hide choices temporarily
        document.querySelector('.choices').style.display = 'none';

        // Increase argument counter for the next round
        currentArgument++;

        // Generate the next argument or conclude the case
        setTimeout(generateNextArgument, 1000);
    }

    function generateNextArgument() {
        const arguments = [
            "The State counters by stating there is no expectation of privacy in public spaces.",
            "The State introduces statistics showing a decrease in crime rates since the installation of cameras.",
            "The State claims that Rajesh Kumar's petition does not reflect the opinion of the majority who might support surveillance.",
            "The State argues that it has provided sufficient legal oversight to prevent misuse of surveillance data."
        ];

        if (argumentCounter < arguments.length) {
            const oppositionDiv = document.createElement('div');
            oppositionDiv.className = 'opposition-argument';
            oppositionDiv.innerHTML = `<p>${arguments[argumentCounter]}</p>`;
            document.querySelector('.opposition').appendChild(oppositionDiv);

            // Reveal new choices for the user
            document.querySelector('.choices').style.display = 'flex';

            argumentCounter++;
        } else {
            showJudgment();
        }
    }

    function showJudgment() {
        const overlay = document.createElement('div');
        overlay.className = 'overlay';

        // Calculate the percentage score
        const percentageScore = (userScore / totalPoints) * 100;
        let outcome;

        if (percentageScore >= 90) {
            outcome = {
                message: "Congratulations! You have won the case!",
                color: "green",
                sound: "win-sound.mp3"
            };
        } else {
            outcome = {
                message: "You have lost the case. Better luck next time!",
                color: "red",
                sound: "lose-sound.mp3"
            };
        }

        overlay.style.backgroundColor = outcome.color;
        overlay.textContent = outcome.message;
        document.getElementById('win-sound').src = outcome.sound; // Update sound source
        document.getElementById('win-sound').play(); // Play the appropriate sound

        overlay.style.display = 'flex';
        overlay.onclick = () => {
            overlay.style.display = 'none';
            document.querySelector('#next-case-btn').style.display = 'block';
        };
        document.body.appendChild(overlay);
    }

    function nextCase() {
        // Reset everything for the next case
        document.querySelector('.opposition').innerHTML = '';
        document.querySelector('.your-side').innerHTML = '<h3>Your Argument</h3><div class="choices">' +
            '<button onclick="selectChoice(\'Option 1: Argue state overstepped its authority.\')">Option 1</button>' +
            '<button onclick="selectChoice(\'Option 2: Argue for a fair balance between privacy and safety.\')">Option 2</button>' +
            '<button onclick="selectChoice(\'Option 3: Argue cameras could be discriminatory.\')">Option 3</button></div>';
        
        document.querySelector('#judgment-btn').style.display = 'none';
        document.querySelector('#next-case-btn').style.display = 'none';

        argumentCounter = 0;
        currentArgument = 0;
        userScore = 0;

        // Start the next case by resetting the first argument
        const initialArgument = document.createElement('div');
        initialArgument.className = 'opposition-argument';
        initialArgument.innerHTML = `<p>The State argues that surveillance cameras are essential for maintaining public safety.</p>`;
        document.querySelector('.opposition').appendChild(initialArgument);
    }

    // Array of cases
    const cases = [
        {
            title: "Right to Privacy vs. Public Safety",
            scenario: "Rajesh Kumar is challenging the installation of CCTV cameras in a public park, arguing it violates his right to privacy under Article 21 of the Indian Constitution.",
            arguments: [
                {
                    opposition: "The State argues that surveillance cameras are essential for maintaining public safety.",
                    choices: [
                        { title: "Argue that the state's action oversteps personal privacy boundaries.", score: 10 },
                        { title: "Argue that the cameras could lead to an increase in discriminatory practices.", score: 5 },
                        { title: "Argue that the cameras' effectiveness in crime prevention is unproven.", score: 0 }
                    ],
                    bestChoice: 0
                },
                {
                    opposition: "The State counters by stating there is no expectation of privacy in public spaces.",
                    choices: [
                        { title: "Argue that privacy extends to behavior, even in public spaces.", score: 5 },
                        { title: "Point out that constant surveillance creates a chilling effect on freedom.", score: 10 },
                        { title: "Argue that people should be informed about being under surveillance.", score: 0 }
                    ],
                    bestChoice: 1
                },
                {
                    opposition: "The State introduces statistics showing a decrease in crime rates since the installation of cameras.",
                    choices: [
                        { title: "Argue that the reduction in crime is not directly attributable to surveillance cameras.", score: 0 },
                        { title: "Highlight cases where surveillance led to misuse of footage.", score: 5 },
                        { title: "Emphasize that rights cannot be compromised solely for statistical gain.", score: 10 }
                    ],
                    bestChoice: 2
                },
                {
                    opposition: "The State claims that Rajesh Kumar's petition does not reflect the opinion of the majority who might support surveillance.",
                    choices: [
                        { title: "Argue that fundamental rights protect minorities against majority opinion.", score: 10 },
                        { title: "Suggest conducting a survey to gather more opinions.", score: 5 },
                        { title: "Argue that the opinion of the majority does not matter in legal decisions.", score: 0 }
                    ],
                    bestChoice: 0
                },
                {
                    opposition: "The State argues that it has provided sufficient legal oversight to prevent misuse of surveillance data.",
                    choices: [
                        { title: "Argue that oversight does not eliminate the threat to personal privacy.", score: 10 },
                        { title: "Propose tighter regulations and more transparency.", score: 5 },
                        { title: "Argue that data protection laws are insufficient in the current digital age.", score: 0 }
                    ],
                    bestChoice: 0
                }
            ]
        },
        // Additional cases below
        {
            title: "Environmental Regulations vs. Economic Growth",
            scenario: "A company is challenging new environmental regulations that it argues will hinder its economic growth.",
            arguments: [
                {
                    opposition: "The government argues that regulations are necessary to protect natural resources.",
                    choices: [
                        { title: "Argue that the regulations are too stringent and stifle economic development.", score: 10 },
                        { title: "Suggest that economic incentives should be introduced to offset the costs.", score: 5 },
                        { title: "Point out that the regulations are beneficial in the long term for sustainability.", score: 0 }
                    ],
                    bestChoice: 0
                },
                {
                    opposition: "The government provides evidence that the regulations will prevent long-term environmental damage.",
                    choices: [
                        { title: "Argue that the short-term economic impact outweighs the long-term benefits.", score: 5 },
                        { title: "Highlight examples where similar regulations have led to economic growth.", score: 10 },
                        { title: "State that more research is needed to understand the regulations' impact.", score: 0 }
                    ],
                    bestChoice: 1
                },
                {
                    opposition: "The government argues that failing to enforce regulations could lead to international sanctions.",
                    choices: [
                        { title: "Argue that international relations should not dictate domestic policy.", score: 0 },
                        { title: "Emphasize the importance of complying with global standards.", score: 10 },
                        { title: "Point out that sanctions could harm the country's economy.", score: 5 }
                    ],
                    bestChoice: 1
                },
                {
                    opposition: "The government claims that companies in other countries are adapting to similar regulations successfully.",
                    choices: [
                        { title: "Argue that local economic conditions are different and need tailored solutions.", score: 10 },
                        { title: "Suggest a phased implementation to allow companies to adapt.", score: 5 },
                        { title: "Highlight that adaptation is a part of business evolution.", score: 0 }
                    ],
                    bestChoice: 0
                },
                {
                    opposition: "The government argues that environmental protection is a shared responsibility of all sectors.",
                    choices: [
                        { title: "Argue that the financial burden should be shared more equitably across sectors.", score: 5 },
                        { title: "Emphasize that businesses should lead by example in environmental protection.", score: 0 },
                        { title: "Point out that strict regulations might lead to job losses.", score: 10 }
                    ],
                    bestChoice: 2
                }
            ]
        },
        {
            title: "Public Health vs. Individual Freedom",
            scenario: "A public health mandate requires all citizens to get vaccinated, sparking debates about individual freedom.",
            arguments: [
                {
                    opposition: "The government argues that vaccination is crucial for public health and safety.",
                    choices: [
                        { title: "Argue that individual freedoms should be prioritized over public mandates.", score: 10 },
                        { title: "Propose alternatives such as educational campaigns instead of mandates.", score: 5 },
                        { title: "Emphasize the importance of collective immunity for public safety.", score: 0 }
                    ],
                    bestChoice: 2
                },
                {
                    opposition: "The government presents data showing that vaccinations prevent widespread disease outbreaks.",
                    choices: [
                        { title: "Argue that the data does not account for individual health variations.", score: 5 },
                        { title: "Highlight that personal choice is a fundamental right.", score: 0 },
                        { title: "Support the use of vaccinations based on the public health data.", score: 10 }
                    ],
                    bestChoice: 2
                },
                {
                    opposition: "The government argues that similar mandates have been successful in other countries.",
                    choices: [
                        { title: "Argue that each country has unique socio-cultural dynamics.", score: 0 },
                        { title: "Suggest that mandates should be adapted to local conditions.", score: 5 },
                        { title: "Emphasize the effectiveness of global health measures.", score: 10 }
                    ],
                    bestChoice: 2
                },
                {
                    opposition: "The government claims that exemptions to the mandate could lead to lower vaccination rates.",
                    choices: [
                        { title: "Argue that exemptions are necessary to respect individual medical conditions.", score: 10 },
                        { title: "Suggest stricter criteria for exemptions.", score: 5 },
                        { title: "Point out that a blanket mandate might be more effective.", score: 0 }
                    ],
                    bestChoice: 0
                },
                {
                    opposition: "The government argues that vaccination is a moral obligation to protect vulnerable populations.",
                    choices: [
                        { title: "Argue that moral obligations should not be enforced through legal mandates.", score: 5 },
                        { title: "Support the moral imperative of protecting public health.", score: 10 },
                        { title: "Emphasize personal choice and autonomy over moral obligations.", score: 0 }
                    ],
                    bestChoice: 1
                }
            ]
        },
        {
            title: "Corporate Responsibility vs. Consumer Choice",
            scenario: "A corporation is accused of misleading advertising, raising issues about corporate responsibility and consumer rights.",
            arguments: [
                {
                    opposition: "The corporation argues that advertising practices were within legal bounds.",
                    choices: [
                        { title: "Argue that ethical standards should guide advertising practices beyond legality.", score: 10 },
                        { title: "Suggest that consumer protection laws need to be stricter.", score: 5 },
                        { title: "Highlight that consumers have the responsibility to verify information.", score: 0 }
                    ],
                    bestChoice: 0
                },
                {
                    opposition: "The corporation presents data showing that their advertising has led to positive consumer outcomes.",
                    choices: [
                        { title: "Argue that positive outcomes do not justify misleading practices.", score: 10 },
                        { title: "Point out that data may not fully reflect consumer experiences.", score: 5 },
                        { title: "Emphasize the need for transparency in advertising.", score: 0 }
                    ],
                    bestChoice: 0
                },
                {
                    opposition: "The corporation claims that their advertising strategies are similar to industry standards.",
                    choices: [
                        { title: "Argue that industry standards are not always ethical or consumer-friendly.", score: 10 },
                        { title: "Suggest that companies should exceed industry standards.", score: 5 },
                        { title: "Highlight that following standards does not absolve responsibility.", score: 0 }
                    ],
                    bestChoice: 0
                },
                {
                    opposition: "The corporation argues that consumers have access to all necessary information to make informed choices.",
                    choices: [
                        { title: "Argue that not all consumers are equally informed.", score: 10 },
                        { title: "Point out that marketing tactics can manipulate consumer perceptions.", score: 5 },
                        { title: "Emphasize that it is the consumer's duty to research products.", score: 0 }
                    ],
                    bestChoice: 0
                },
                {
                    opposition: "The corporation claims that the legal system adequately addresses misleading advertising.",
                    choices: [
                        { title: "Argue that legal measures are insufficient for ensuring ethical practices.", score: 10 },
                        { title: "Suggest improvements to the legal framework for consumer protection.", score: 5 },
                        { title: "Point out that legal compliance does not guarantee ethical behavior.", score: 0 }
                    ],
                    bestChoice: 0
                }
            ]
        },
        {
            title: "Education Reform vs. Traditional Methods",
            scenario: "A proposal for educational reform is challenged by proponents of traditional teaching methods.",
            arguments: [
                {
                    opposition: "The reform advocates argue that new teaching methods improve student engagement and outcomes.",
                    choices: [
                        { title: "Argue that traditional methods are proven and effective.", score: 10 },
                        { title: "Support the adoption of new methods with proper evaluation.", score: 5 },
                        { title: "Suggest a balanced approach integrating both methods.", score: 0 }
                    ],
                    bestChoice: 0
                },
                {
                    opposition: "The reform presents evidence showing better performance in schools that adopted new methods.",
                    choices: [
                        { title: "Argue that evidence may be biased or incomplete.", score: 5 },
                        { title: "Support the new methods based on performance data.", score: 10 },
                        { title: "Point out that individual student needs should guide teaching methods.", score: 0 }
                    ],
                    bestChoice: 1
                },
                {
                    opposition: "The reform argues that traditional methods do not address the needs of diverse learners.",
                    choices: [
                        { title: "Argue that traditional methods can be adapted for diverse needs.", score: 10 },
                        { title: "Support reforms that address diverse learning styles.", score: 5 },
                        { title: "Highlight the importance of flexibility in teaching approaches.", score: 0 }
                    ],
                    bestChoice: 1
                },
                {
                    opposition: "The reform advocates claim that modern technology supports new teaching methods.",
                    choices: [
                        { title: "Argue that technology can be a distraction if not properly managed.", score: 5 },
                        { title: "Support the use of technology in education.", score: 0 },
                        { title: "Suggest integrating technology with traditional methods.", score: 10 }
                    ],
                    bestChoice: 2
                },
                {
                    opposition: "The reform claims that traditional methods are outdated and do not prepare students for the future.",
                    choices: [
                        { title: "Argue that traditional methods still hold value in modern education.", score: 10 },
                        { title: "Support reform efforts to modernize education.", score: 5 },
                        { title: "Emphasize the importance of updating curricula to meet future needs.", score: 0 }
                    ],
                    bestChoice: 0
                }
            ]
        }
    ];

    // Select a random case
    let currentCaseIndex;
    let currentCase;

    // Elements
    const titleElement = document.getElementById("case-title");
    const scenarioElement = document.getElementById("case-scenario");
    const oppositionElement = document.getElementById("opposition");
    const choicesElement = document.getElementById("choices");
    const yourArgumentsElement = document.getElementById("your-arguments");
    const seeJudgmentButton = document.getElementById("see-judgment");
    const resultOverlay = document.getElementById("result-overlay");
    const resultMessage = document.getElementById("result-message");

    // Initialize case
    function initializeCase() {
    currentCaseIndex = Math.floor(Math.random() * cases.length);
    currentCase = cases[currentCaseIndex];
    displayCase();
    }

    // Display the case
    function displayCase() {
    if (!currentCase) return;
    
    titleElement.textContent = currentCase.title;
    scenarioElement.textContent = currentCase.scenario;
    updateArgumentsAndChoices();
    }

    function updateArgumentsAndChoices() {
        if (currentCase.arguments.length === 0) return;

        const currentArgument = currentCase.arguments[0];
        oppositionElement.textContent = currentArgument.opposition;
        choicesElement.innerHTML = "";

        currentArgument.choices.forEach((choice, index) => {
            const button = document.createElement("button");
            button.textContent = choice.title;
            button.addEventListener("click", () => handleChoice(index));
            choicesElement.appendChild(button);
        });
    }

    function handleChoice(choiceIndex) {
        if (currentCase.arguments.length === 0) return;

        const currentArgument = currentCase.arguments.shift();
        yourArgumentsElement.innerHTML += `<div>${currentArgument.choices[choiceIndex].title}</div>`;
        
        // Calculate and add the score based on the choice
        userScore += choiceScores[currentArgumentIndex][choiceIndex];
        
        if (currentCase.arguments.length === 0) {
            showFinalVerdict();
            return;
        }

        updateArgumentsAndChoices();
    }

    function showFinalVerdict() {
    const outcome = determineVerdict();
    resultMessage.textContent = outcome.message;
    resultOverlay.style.backgroundColor = outcome.color;
    resultOverlay.style.display = "flex";

    // Play sound based on verdict
    const audio = new Audio(outcome.sound);
    audio.play();

    seeJudgmentButton.style.display = "block";
    }

    function determineVerdict() {
    // Calculate the percentage score
    const percentageScore = (userScore / totalPoints) * 100;
    let outcome;

    if (percentageScore >= 90) {
        outcome = {
<<<<<<< Updated upstream
            message: "Congratulations! You have won the case!",
            color: "green",
            sound: "./assets/SFX/win.wav"
        };
    } else {
        outcome = {
            message: "You have lost the case. Better luck next time!",
            color: "red",
            sound: "./assets/SFX/lose.wav"
        };
    }

    overlay.style.backgroundColor = outcome.color;
    overlay.textContent = outcome.message;
    document.getElementById('sound').src = outcome.sound; // Update sound source
    document.getElementById('sound').play(); // Play the appropriate sound

    overlay.style.display = 'flex';
    overlay.onclick = () => {
        overlay.style.display = 'none';
        document.querySelector('#next-case-btn').style.display = 'block';
    };
    document.body.appendChild(overlay);
}

function nextCase() {
    // Reset everything for the next case
    document.querySelector('.opposition').innerHTML = '';
    document.querySelector('.your-side').innerHTML = '<h3>Your Argument</h3><div class="choices">' +
        '<button onclick="selectChoice(\'Option 1: Argue state overstepped its authority.\')">Option 1</button>' +
        '<button onclick="selectChoice(\'Option 2: Argue for a fair balance between privacy and safety.\')">Option 2</button>' +
        '<button onclick="selectChoice(\'Option 3: Argue cameras could be discriminatory.\')">Option 3</button></div>';
    
    document.querySelector('#judgment-btn').style.display = 'none';
    document.querySelector('#next-case-btn').style.display = 'none';

    argumentCounter = 0;
    currentArgument = 0;
    userScore = 0;

    // Start the next case by resetting the first argument
    const initialArgument = document.createElement('div');
    initialArgument.className = 'opposition-argument';
    initialArgument.innerHTML = `<p>The State argues that surveillance cameras are essential for maintaining public safety.</p>`;
    document.querySelector('.opposition').appendChild(initialArgument);
}

// Array of cases
const cases = [
    {
        title: "Right to Privacy vs. Public Safety",
        scenario: "Rajesh Kumar is challenging the installation of CCTV cameras in a public park, arguing it violates his right to privacy under Article 21 of the Indian Constitution.",
        arguments: [
            {
                opposition: "The State argues that surveillance cameras are essential for maintaining public safety.",
                choices: [
                    { title: "Argue that the state's action oversteps personal privacy boundaries.", score: 10 },
                    { title: "Argue that the cameras could lead to an increase in discriminatory practices.", score: 5 },
                    { title: "Argue that the cameras' effectiveness in crime prevention is unproven.", score: 0 }
                ],
                bestChoice: 0
            },
            {
                opposition: "The State counters by stating there is no expectation of privacy in public spaces.",
                choices: [
                    { title: "Argue that privacy extends to behavior, even in public spaces.", score: 5 },
                    { title: "Point out that constant surveillance creates a chilling effect on freedom.", score: 10 },
                    { title: "Argue that people should be informed about being under surveillance.", score: 0 }
                ],
                bestChoice: 1
            },
            {
                opposition: "The State introduces statistics showing a decrease in crime rates since the installation of cameras.",
                choices: [
                    { title: "Argue that the reduction in crime is not directly attributable to surveillance cameras.", score: 0 },
                    { title: "Highlight cases where surveillance led to misuse of footage.", score: 5 },
                    { title: "Emphasize that rights cannot be compromised solely for statistical gain.", score: 10 }
                ],
                bestChoice: 2
            },
            {
                opposition: "The State claims that Rajesh Kumar's petition does not reflect the opinion of the majority who might support surveillance.",
                choices: [
                    { title: "Argue that fundamental rights protect minorities against majority opinion.", score: 10 },
                    { title: "Suggest conducting a survey to gather more opinions.", score: 5 },
                    { title: "Argue that the opinion of the majority does not matter in legal decisions.", score: 0 }
                ],
                bestChoice: 0
            },
            {
                opposition: "The State argues that it has provided sufficient legal oversight to prevent misuse of surveillance data.",
                choices: [
                    { title: "Argue that oversight does not eliminate the threat to personal privacy.", score: 10 },
                    { title: "Propose tighter regulations and more transparency.", score: 5 },
                    { title: "Argue that data protection laws are insufficient in the current digital age.", score: 0 }
                ],
                bestChoice: 0
            }
        ]
    },
    // Additional cases below
    {
        title: "Environmental Regulations vs. Economic Growth",
        scenario: "A company is challenging new environmental regulations that it argues will hinder its economic growth.",
        arguments: [
            {
                opposition: "The government argues that regulations are necessary to protect natural resources.",
                choices: [
                    { title: "Argue that the regulations are too stringent and stifle economic development.", score: 10 },
                    { title: "Suggest that economic incentives should be introduced to offset the costs.", score: 5 },
                    { title: "Point out that the regulations are beneficial in the long term for sustainability.", score: 0 }
                ],
                bestChoice: 0
            },
            {
                opposition: "The government provides evidence that the regulations will prevent long-term environmental damage.",
                choices: [
                    { title: "Argue that the short-term economic impact outweighs the long-term benefits.", score: 5 },
                    { title: "Highlight examples where similar regulations have led to economic growth.", score: 10 },
                    { title: "State that more research is needed to understand the regulations' impact.", score: 0 }
                ],
                bestChoice: 1
            },
            {
                opposition: "The government argues that failing to enforce regulations could lead to international sanctions.",
                choices: [
                    { title: "Argue that international relations should not dictate domestic policy.", score: 0 },
                    { title: "Emphasize the importance of complying with global standards.", score: 10 },
                    { title: "Point out that sanctions could harm the country's economy.", score: 5 }
                ],
                bestChoice: 1
            },
            {
                opposition: "The government claims that companies in other countries are adapting to similar regulations successfully.",
                choices: [
                    { title: "Argue that local economic conditions are different and need tailored solutions.", score: 10 },
                    { title: "Suggest a phased implementation to allow companies to adapt.", score: 5 },
                    { title: "Highlight that adaptation is a part of business evolution.", score: 0 }
                ],
                bestChoice: 0
            },
            {
                opposition: "The government argues that environmental protection is a shared responsibility of all sectors.",
                choices: [
                    { title: "Argue that the financial burden should be shared more equitably across sectors.", score: 5 },
                    { title: "Emphasize that businesses should lead by example in environmental protection.", score: 0 },
                    { title: "Point out that strict regulations might lead to job losses.", score: 10 }
                ],
                bestChoice: 2
            }
        ]
    },
    {
        title: "Public Health vs. Individual Freedom",
        scenario: "A public health mandate requires all citizens to get vaccinated, sparking debates about individual freedom.",
        arguments: [
            {
                opposition: "The government argues that vaccination is crucial for public health and safety.",
                choices: [
                    { title: "Argue that individual freedoms should be prioritized over public mandates.", score: 10 },
                    { title: "Propose alternatives such as educational campaigns instead of mandates.", score: 5 },
                    { title: "Emphasize the importance of collective immunity for public safety.", score: 0 }
                ],
                bestChoice: 2
            },
            {
                opposition: "The government presents data showing that vaccinations prevent widespread disease outbreaks.",
                choices: [
                    { title: "Argue that the data does not account for individual health variations.", score: 5 },
                    { title: "Highlight that personal choice is a fundamental right.", score: 0 },
                    { title: "Support the use of vaccinations based on the public health data.", score: 10 }
                ],
                bestChoice: 2
            },
            {
                opposition: "The government argues that similar mandates have been successful in other countries.",
                choices: [
                    { title: "Argue that each country has unique socio-cultural dynamics.", score: 0 },
                    { title: "Suggest that mandates should be adapted to local conditions.", score: 5 },
                    { title: "Emphasize the effectiveness of global health measures.", score: 10 }
                ],
                bestChoice: 2
            },
            {
                opposition: "The government claims that exemptions to the mandate could lead to lower vaccination rates.",
                choices: [
                    { title: "Argue that exemptions are necessary to respect individual medical conditions.", score: 10 },
                    { title: "Suggest stricter criteria for exemptions.", score: 5 },
                    { title: "Point out that a blanket mandate might be more effective.", score: 0 }
                ],
                bestChoice: 0
            },
            {
                opposition: "The government argues that vaccination is a moral obligation to protect vulnerable populations.",
                choices: [
                    { title: "Argue that moral obligations should not be enforced through legal mandates.", score: 5 },
                    { title: "Support the moral imperative of protecting public health.", score: 10 },
                    { title: "Emphasize personal choice and autonomy over moral obligations.", score: 0 }
                ],
                bestChoice: 1
            }
        ]
    },
    {
        title: "Corporate Responsibility vs. Consumer Choice",
        scenario: "A corporation is accused of misleading advertising, raising issues about corporate responsibility and consumer rights.",
        arguments: [
            {
                opposition: "The corporation argues that advertising practices were within legal bounds.",
                choices: [
                    { title: "Argue that ethical standards should guide advertising practices beyond legality.", score: 10 },
                    { title: "Suggest that consumer protection laws need to be stricter.", score: 5 },
                    { title: "Highlight that consumers have the responsibility to verify information.", score: 0 }
                ],
                bestChoice: 0
            },
            {
                opposition: "The corporation presents data showing that their advertising has led to positive consumer outcomes.",
                choices: [
                    { title: "Argue that positive outcomes do not justify misleading practices.", score: 10 },
                    { title: "Point out that data may not fully reflect consumer experiences.", score: 5 },
                    { title: "Emphasize the need for transparency in advertising.", score: 0 }
                ],
                bestChoice: 0
            },
            {
                opposition: "The corporation claims that their advertising strategies are similar to industry standards.",
                choices: [
                    { title: "Argue that industry standards are not always ethical or consumer-friendly.", score: 10 },
                    { title: "Suggest that companies should exceed industry standards.", score: 5 },
                    { title: "Highlight that following standards does not absolve responsibility.", score: 0 }
                ],
                bestChoice: 0
            },
            {
                opposition: "The corporation argues that consumers have access to all necessary information to make informed choices.",
                choices: [
                    { title: "Argue that not all consumers are equally informed.", score: 10 },
                    { title: "Point out that marketing tactics can manipulate consumer perceptions.", score: 5 },
                    { title: "Emphasize that it is the consumer's duty to research products.", score: 0 }
                ],
                bestChoice: 0
            },
            {
                opposition: "The corporation claims that the legal system adequately addresses misleading advertising.",
                choices: [
                    { title: "Argue that legal measures are insufficient for ensuring ethical practices.", score: 10 },
                    { title: "Suggest improvements to the legal framework for consumer protection.", score: 5 },
                    { title: "Point out that legal compliance does not guarantee ethical behavior.", score: 0 }
                ],
                bestChoice: 0
            }
        ]
    },
    {
        title: "Education Reform vs. Traditional Methods",
        scenario: "A proposal for educational reform is challenged by proponents of traditional teaching methods.",
        arguments: [
            {
                opposition: "The reform advocates argue that new teaching methods improve student engagement and outcomes.",
                choices: [
                    { title: "Argue that traditional methods are proven and effective.", score: 10 },
                    { title: "Support the adoption of new methods with proper evaluation.", score: 5 },
                    { title: "Suggest a balanced approach integrating both methods.", score: 0 }
                ],
                bestChoice: 0
            },
            {
                opposition: "The reform presents evidence showing better performance in schools that adopted new methods.",
                choices: [
                    { title: "Argue that evidence may be biased or incomplete.", score: 5 },
                    { title: "Support the new methods based on performance data.", score: 10 },
                    { title: "Point out that individual student needs should guide teaching methods.", score: 0 }
                ],
                bestChoice: 1
            },
            {
                opposition: "The reform argues that traditional methods do not address the needs of diverse learners.",
                choices: [
                    { title: "Argue that traditional methods can be adapted for diverse needs.", score: 10 },
                    { title: "Support reforms that address diverse learning styles.", score: 5 },
                    { title: "Highlight the importance of flexibility in teaching approaches.", score: 0 }
                ],
                bestChoice: 1
            },
            {
                opposition: "The reform advocates claim that modern technology supports new teaching methods.",
                choices: [
                    { title: "Argue that technology can be a distraction if not properly managed.", score: 5 },
                    { title: "Support the use of technology in education.", score: 0 },
                    { title: "Suggest integrating technology with traditional methods.", score: 10 }
                ],
                bestChoice: 2
            },
            {
                opposition: "The reform claims that traditional methods are outdated and do not prepare students for the future.",
                choices: [
                    { title: "Argue that traditional methods still hold value in modern education.", score: 10 },
                    { title: "Support reform efforts to modernize education.", score: 5 },
                    { title: "Emphasize the importance of updating curricula to meet future needs.", score: 0 }
                ],
                bestChoice: 0
            }
        ]
=======
        message: "Congratulations! You have won the case!",
        color: "green",
        sound: "win-sound.mp3"
        };
    } else {
        outcome = {
        message: "You have lost the case. Better luck next time!",
        color: "red",
        sound: "lose-sound.mp3"
        };
    }

    return outcome;
>>>>>>> Stashed changes
    }

    // Event listeners
    document.getElementById("start-case").addEventListener("click", () => {
    initializeCase();
    });

    seeJudgmentButton.addEventListener("click", () => {
    resultOverlay.style.display = "none";
    document.getElementById("generate-next-case").style.display = "block";
    });

    document.getElementById("generate-next-case").addEventListener("click", () => {
    initializeCase();
    yourArgumentsElement.innerHTML = "<p>Your argument:</p>";
    choicesElement.innerHTML = "";
    seeJudgmentButton.style.display = "none";
    document.getElementById("generate-next-case").style.display = "none";
    });

    // Initialize
    initializeCase();


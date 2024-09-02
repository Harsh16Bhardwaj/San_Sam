const scenarios = [
    {
        title: 'Land Acquisition Disputes',
        description: 'In recent years, disputes have escalated concerning land acquisition processes across various regions. The current laws are causing significant conflicts and dissatisfaction among affected communities. Your task is to evaluate these laws and select the optimal forms to resolve the ongoing disputes effectively.',
        laws: [
            { id: 1, name: 'Right to Fair Compensation and Transparency in Land Acquisition, Rehabilitation and Resettlement Act, 2013', description: 'Ensures fair compensation and transparency in land acquisition. Aims to provide better rehabilitation and resettlement options.', form: 'Form B: Partial transparency with basic compensation.' },
            { id: 2, name: 'The Land Acquisition (Amendment) Act, 2015', description: 'Amends provisions of land acquisition to expedite the process, focusing on benefits for industrial development while addressing certain procedural delays.', form: 'Form C: Limited transparency and inadequate compensation.' },
            { id: 3, name: 'The Urban Land (Ceiling and Regulation) Act, 1976', description: 'Regulates the ceiling on urban land holdings to control excessive land accumulation and ensure equitable distribution.', form: 'Form A: Complete transparency and fair compensation.' },
            { id: 4, name: 'The National Rehabilitation and Resettlement Policy, 2007', description: 'Provides guidelines for the rehabilitation and resettlement of persons displaced by land acquisition, aiming to offer support and improve living conditions.', form: 'Form C: Limited support and compensation.' },
            { id: 5, name: 'Land Acquisition Act, 1894', description: 'Provides the procedure for acquiring land for public purposes. Includes provisions for compensation, but may lack modern protections.', form: 'Form B: Basic protections with outdated methods.' }
        ],
        alternatives: {
            1: [
                { form: 'Form A', label: 'Complete transparency and fair compensation.' },
                { form: 'Form C', label: 'Limited transparency and inadequate compensation.' }
            ],
            2: [
                { form: 'Form A', label: 'Complete transparency and fair compensation.' },
                { form: 'Form B', label: 'Partial transparency with basic compensation.' }
            ],
            3: [
                { form: 'Form A', label: 'Partial transparency with basic compensation.' },
                { form: 'Form B', label: 'Limited transparency and inadequate compensation.' }
            ],
            4: [
                { form: 'Form A', label: 'Extensive support and modern protections.' },
                { form: 'Form B', label: 'Basic support and moderate protections.' }
            ],
            5: [
                { form: 'Form A', label: 'Modern protections with updated methods.' },
                { form: 'Form C', label: 'Limited protections and outdated methods.' }
            ]
        },
        correctForms: {
            1: 'Form A',
            2: 'Form A',
            3: 'Form A',
            4: 'Form A',
            5: 'Form A'
        }
    },
    {
        title: 'Environmental Regulation Crisis',
        description: 'Environmental degradation has reached alarming levels due to inadequate regulation and enforcement of environmental laws. The current constitution has resulted in severe pollution, deforestation, and biodiversity loss. Your task is to review the existing laws and select the optimal forms to address this crisis effectively.',
        laws: [
            { id: 1, name: 'The Environment Protection Act, 1986', description: 'Provides a framework for the protection and improvement of the environment. Includes measures for the prevention of hazards to humans, other living creatures, plants, and property.', form: 'Form B: Moderate enforcement with limited penalties.' },
            { id: 2, name: 'The Forest Conservation Act, 1980', description: 'Regulates the diversion of forest lands for non-forest purposes and emphasizes the need for afforestation and conservation of biodiversity.', form: 'Form C: Weak enforcement and high deforestation rates.' },
            { id: 3, name: 'The Water (Prevention and Control of Pollution) Act, 1974', description: 'Establishes regulatory bodies to control water pollution and promote the sustainable use of water resources.', form: 'Form A: Strict enforcement with effective pollution control.' },
            { id: 4, name: 'The Air (Prevention and Control of Pollution) Act, 1981', description: 'Provides for the prevention, control, and abatement of air pollution, setting standards for emissions and air quality.', form: 'Form C: Minimal regulation with widespread pollution.' },
            { id: 5, name: 'The National Green Tribunal Act, 2010', description: 'Establishes a special tribunal to handle environmental disputes and enforce compliance with environmental laws.', form: 'Form A: Efficient and quick resolution with high compliance.' }
        ],
        alternatives: {
            1: [
                { form: 'Form A', label: 'Strict enforcement with heavy penalties.' },
                { form: 'Form C', label: 'Weak enforcement with minimal penalties.' }
            ],
            2: [
                { form: 'Form A', label: 'Strong enforcement with significant conservation efforts.' },
                { form: 'Form B', label: 'Moderate enforcement with some conservation efforts.' }
            ],
            3: [
                { form: 'Form B', label: 'Moderate enforcement with partial pollution control.' },
                { form: 'Form C', label: 'Weak enforcement with ineffective pollution control.' }
            ],
            4: [
                { form: 'Form A', label: 'Comprehensive regulation with minimal pollution.' },
                { form: 'Form B', label: 'Partial regulation with moderate pollution.' }
            ],
            5: [
                { form: 'Form B', label: 'Moderate efficiency with occasional delays.' },
                { form: 'Form C', label: 'Inefficient resolution with frequent non-compliance.' }
            ]
        },
        correctForms: {
            1: 'Form A',
            2: 'Form A',
            3: 'Form A',
            4: 'Form A',
            5: 'Form A'
        }
    },
    {
        title: 'Economic Inequality and Labor Rights',
        description: 'Economic inequality has worsened due to inadequate labor rights and uneven wealth distribution. The current laws are contributing to exploitation and poor working conditions. Your task is to review these laws and choose the optimal forms to address this issue.',
        laws: [
            { id: 1, name: 'The Minimum Wages Act, 1948', description: 'Sets minimum wage standards to ensure fair pay for workers across various sectors.', form: 'Form B: Inconsistent enforcement with low wage rates.' },
            { id: 2, name: 'The Industrial Disputes Act, 1947', description: 'Provides for the investigation and settlement of industrial disputes, aiming to maintain industrial harmony.', form: 'Form C: Limited dispute resolution with frequent strikes.' },
            { id: 3, name: 'The Equal Remuneration Act, 1976', description: 'Mandates equal pay for equal work regardless of gender, promoting gender equality in the workplace.', form: 'Form A: Strong enforcement with comprehensive coverage.' },
            { id: 4, name: 'The Employees’ Provident Funds and Miscellaneous Provisions Act, 1952', description: 'Establishes a provident fund system for employees, ensuring financial security after retirement.', form: 'Form C: Limited coverage with inadequate benefits.' },
            { id: 5, name: 'The Payment of Bonus Act, 1965', description: 'Regulates the payment of bonuses to employees based on profit-sharing, ensuring workers receive a fair share of profits.', form: 'Form A: Full coverage with regular bonuses.' }
        ],
        alternatives: {
            1: [
                { form: 'Form A', label: 'Strong enforcement with high wage rates.' },
                { form: 'Form C', label: 'Weak enforcement with very low wage rates.' }
            ],
            2: [
                { form: 'Form A', label: 'Effective resolution with minimal disruptions.' },
                { form: 'Form B', label: 'Moderate resolution with occasional disruptions.' }
            ],
            3: [
                { form: 'Form B', label: 'Partial enforcement with some gender gaps.' },
                { form: 'Form C', label: 'Weak enforcement with significant gender gaps.' }
            ],
            4: [
                { form: 'Form A', label: 'Comprehensive coverage with substantial benefits.' },
                { form: 'Form B', label: 'Moderate coverage with basic benefits.' }
            ],
            5: [
                { form: 'Form A', label: 'Full coverage with regular bonuses.' },
                { form: 'Form C', label: 'Limited coverage with irregular bonuses.' }
            ]
        },
        correctForms: {
            1: 'Form A',
            2: 'Form A',
            3: 'Form A',
            4: 'Form A',
            5: 'Form A'
        }
    },
    {
        title: 'Public Health System Failures',
        description: 'Public health systems are under strain due to outdated laws and insufficient regulations, leading to inadequate healthcare services. The task is to review these laws and select the optimal forms to improve the public health system.',
        laws: [
            { id: 1, name: 'The Epidemic Diseases Act, 1897', description: 'Provides measures to control and manage outbreaks of infectious diseases.', form: 'Form C: Outdated measures with limited scope.' },
            { id: 2, name: 'The National Health Bill, 2009', description: 'Aims to provide comprehensive healthcare services to all citizens, focusing on improving accessibility and quality.', form: 'Form B: Moderate enforcement with gaps in implementation.' },
            { id: 3, name: 'The Drugs and Cosmetics Act, 1940', description: 'Regulates the quality and safety of drugs and cosmetics, ensuring consumer protection.', form: 'Form A: Strong regulation with effective control measures.' },
            { id: 4, name: 'The Clinical Establishments Act, 2010', description: 'Establishes standards for clinical establishments to ensure quality healthcare services.', form: 'Form C: Weak compliance with minimal oversight.' },
            { id: 5, name: 'The Food Safety and Standards Act, 2006', description: 'Regulates food safety and standards to ensure safe food consumption.', form: 'Form A: Comprehensive regulations with strong enforcement.' }
        ],
        alternatives: {
            1: [
                { form: 'Form A', label: 'Modern measures with extensive scope.' },
                { form: 'Form B', label: 'Moderate measures with partial scope.' }
            ],
            2: [
                { form: 'Form A', label: 'Comprehensive implementation with full coverage.' },
                { form: 'Form C', label: 'Minimal implementation with significant gaps.' }
            ],
            3: [
                { form: 'Form B', label: 'Moderate regulation with some control measures.' },
                { form: 'Form C', label: 'Basic regulation with minimal control measures.' }
            ],
            4: [
                { form: 'Form A', label: 'Strong compliance with effective oversight.' },
                { form: 'Form B', label: 'Moderate compliance with some oversight.' }
            ],
            5: [
                { form: 'Form B', label: 'Moderate regulation with some enforcement.' },
                { form: 'Form C', label: 'Weak regulation with minimal enforcement.' }
            ]
        },
        correctForms: {
            1: 'Form A',
            2: 'Form A',
            3: 'Form A',
            4: 'Form A',
            5: 'Form A'
        }
    },
    {
        title: 'Corruption in Public Procurement',
        description: 'Corruption is affecting public procurement processes, leading to inefficiencies and poor quality in public projects. Review the existing laws and select the optimal forms to address corruption effectively.',
        laws: [
            { id: 1, name: 'The Public Procurement Bill, 2012', description: 'Regulates public procurement processes to enhance transparency and accountability.', form: 'Form B: Moderate transparency with basic accountability.' },
            { id: 2, name: 'The Prevention of Corruption Act, 1988', description: 'Provides measures to prevent corruption and ensure accountability in public services.', form: 'Form C: Weak enforcement with frequent corruption cases.' },
            { id: 3, name: 'The Central Vigilance Commission Act, 2003', description: 'Establishes the Central Vigilance Commission to oversee and curb corruption in government departments.', form: 'Form A: Strong oversight with strict penalties.' },
            { id: 4, name: 'The Lokpal and Lokayuktas Act, 2013', description: 'Provides for the appointment of Lokpal and Lokayuktas to investigate and address corruption in public offices.', form: 'Form B: Limited effectiveness with delayed responses.' },
            { id: 5, name: 'The Right to Information Act, 2005', description: 'Empowers citizens to obtain information from public authorities, enhancing transparency and accountability.', form: 'Form A: High transparency with effective information access.' }
        ],
        alternatives: {
            1: [
                { form: 'Form A', label: 'High transparency with robust accountability.' },
                { form: 'Form C', label: 'Low transparency with minimal accountability.' }
            ],
            2: [
                { form: 'Form A', label: 'Strong enforcement with zero tolerance for corruption.' },
                { form: 'Form B', label: 'Moderate enforcement with some corruption cases.' }
            ],
            3: [
                { form: 'Form B', label: 'Moderate oversight with some penalties.' },
                { form: 'Form C', label: 'Limited oversight with weak penalties.' }
            ],
            4: [
                { form: 'Form A', label: 'Effective investigation with quick responses.' },
                { form: 'Form C', label: 'Ineffective investigation with slow responses.' }
            ],
            5: [
                { form: 'Form B', label: 'Moderate transparency with partial information access.' },
                { form: 'Form C', label: 'Low transparency with restricted information access.' }
            ]
        },
        correctForms: {
            1: 'Form A',
            2: 'Form A',
            3: 'Form A',
            4: 'Form A',
            5: 'Form A'
        }
    },
    {
        title: 'Financial Fraud and Market Manipulation',
        description: 'Financial markets are experiencing instability due to fraud and manipulation. Analyze the existing laws and choose the optimal forms to combat financial crimes effectively.',
        laws: [
            { id: 1, name: 'The Securities and Exchange Board of India Act, 1992', description: 'Establishes the Securities and Exchange Board of India (SEBI) to regulate and supervise securities markets.', form: 'Form B: Moderate regulation with occasional lapses.' },
            { id: 2, name: 'The Prevention of Money Laundering Act, 2002', description: 'Provides measures to prevent money laundering and terrorist financing, and establishes enforcement authorities.', form: 'Form C: Weak enforcement with frequent laundering cases.' },
            { id: 3, name: 'The Companies Act, 2013', description: 'Regulates corporate governance and compliance to ensure transparency and accountability in companies.', form: 'Form A: Strong governance with stringent compliance requirements.' },
            { id: 4, name: 'The Insolvency and Bankruptcy Code, 2016', description: 'Provides a framework for insolvency resolution and bankruptcy proceedings, focusing on faster resolution of financial distress.', form: 'Form B: Moderate efficiency with some delays.' },
            { id: 5, name: 'The Foreign Exchange Management Act, 1999', description: 'Regulates foreign exchange transactions and aims to facilitate external trade and payments.', form: 'Form C: Weak regulation with frequent violations.' }
        ],
        alternatives: {
            1: [
                { form: 'Form A', label: 'Strong regulation with no lapses.' },
                { form: 'Form C', label: 'Weak regulation with frequent lapses.' }
            ],
            2: [
                { form: 'Form A', label: 'Strong enforcement with zero laundering cases.' },
                { form: 'Form B', label: 'Moderate enforcement with some laundering cases.' }
            ],
            3: [
                { form: 'Form B', label: 'Moderate governance with some compliance issues.' },
                { form: 'Form C', label: 'Weak governance with significant compliance issues.' }
            ],
            4: [
                { form: 'Form A', label: 'High efficiency with no delays.' },
                { form: 'Form C', label: 'Low efficiency with frequent delays.' }
            ],
            5: [
                { form: 'Form B', label: 'Moderate regulation with some violations.' },
                { form: 'Form C', label: 'Weak regulation with frequent violations.' }
            ]
        },
        correctForms: {
            1: 'Form A',
            2: 'Form A',
            3: 'Form A',
            4: 'Form A',
            5: 'Form A'
        }
    },
    {
        title: 'Cybersecurity and Data Privacy Breaches',
        description: 'Cybersecurity threats and data privacy breaches are escalating due to insufficient laws and regulations. Review the existing laws and select the optimal forms to enhance cybersecurity and protect data privacy.',
        laws: [
            { id: 1, name: 'The Information Technology Act, 2000', description: 'Regulates electronic transactions and provides measures to combat cybercrime and protect data.', form: 'Form C: Basic protections with significant loopholes.' },
            { id: 2, name: 'The Personal Data Protection Bill, 2019', description: 'Aims to protect personal data and privacy, establishing a framework for data processing and protection.', form: 'Form B: Moderate protection with some gaps.' },
            { id: 3, name: 'The Cybersecurity Framework Guidelines, 2013', description: 'Provides guidelines for cybersecurity measures and best practices to safeguard information systems.', form: 'Form A: Comprehensive protection with stringent standards.' },
            { id: 4, name: 'The Aadhaar (Targeted Delivery of Financial and Other Subsidies, Benefits, and Services) Act, 2016', description: 'Regulates the use of Aadhaar for targeted delivery of subsidies and services, addressing privacy concerns.', form: 'Form C: Limited privacy safeguards with frequent breaches.' },
            { id: 5, name: 'The National Cyber Security Policy, 2013', description: 'Sets out the strategic direction for enhancing national cybersecurity, focusing on protecting information infrastructure.', form: 'Form A: Strong security measures with proactive policies.' }
        ],
        alternatives: {
            1: [
                { form: 'Form A', label: 'Comprehensive protection with no loopholes.' },
                { form: 'Form B', label: 'Moderate protection with some loopholes.' }
            ],
            2: [
                { form: 'Form A', label: 'High protection with full coverage.' },
                { form: 'Form C', label: 'Basic protection with significant gaps.' }
            ],
            3: [
                { form: 'Form B', label: 'Moderate protection with some standards.' },
                { form: 'Form C', label: 'Basic protection with minimal standards.' }
            ],
            4: [
                { form: 'Form A', label: 'High privacy safeguards with no breaches.' },
                { form: 'Form B', label: 'Moderate privacy safeguards with some breaches.' }
            ],
            5: [
                { form: 'Form B', label: 'Moderate security measures with some policies.' },
                { form: 'Form C', label: 'Basic security measures with limited policies.' }
            ]
        },
        correctForms: {
            1: 'Form A',
            2: 'Form A',
            3: 'Form A',
            4: 'Form A',
            5: 'Form A'
        }
    }
];


// HTML elements
const scenarioTitle = document.getElementById('scenario-title');
const scenarioDescription = document.getElementById('scenario-description');
const lawsContainer = document.getElementById('laws-container');
const counterpartsContainer = document.getElementById('counterparts-container');
const analyzeBtn = document.getElementById('analyze-btn');
const startSimulationBtn = document.getElementById('start-simulation-btn');
const scenarioSelect = document.getElementById('scenario-select');
const simulationContainer = document.getElementById('simulation-container');
const resultMessage = document.getElementById('result-message');
const win = new Audio("./assets/SFX/win.wav");
const lose = new Audio("./assets/SFX/lose.wav");
let attemptCount = 0;
const maxAttempts = 3;

// Utility function to create clickable input options
function createClickableOption(name, value, label) {
    const optionContainer = document.createElement('label');
    optionContainer.className = 'option-item';

    // Create the input element (radio button)
    const inputElement = document.createElement('input');
    inputElement.type = 'radio';
    inputElement.name = name;
    inputElement.value = value;
    
    // Add the label text
    const textNode = document.createTextNode(label);

    // Append the input and label text to the label container
    optionContainer.appendChild(inputElement);
    optionContainer.appendChild(textNode);

    // Event listener for the label to highlight selected option
    optionContainer.addEventListener('click', () => {
        const options = optionContainer.parentElement.querySelectorAll(`label.option-item`);
        options.forEach(opt => opt.classList.remove('selected'));
        
        if (inputElement.checked) {
            optionContainer.classList.add('selected');
        }
    });

    return optionContainer;
}


// Populate scenario select dropdown
function populateScenarioSelect() {
    scenarios.forEach((scenario, index) => {
        const option = document.createElement('option');
        option.value = index;
        option.textContent = scenario.title;
        scenarioSelect.appendChild(option);
    });
}

// Render a scenario
function renderScenario(scenarioIndex) {
    const scenario = scenarios[scenarioIndex];
    scenarioTitle.textContent = scenario.title;
    scenarioDescription.textContent = scenario.description;

    // Clear previous content
    lawsContainer.innerHTML = '';
    counterpartsContainer.innerHTML = '';
    resultMessage.style.display = 'none';

    // Render laws
    scenario.laws.forEach((law) => {
        const lawContainer = document.createElement('div');
        lawContainer.className = 'law-item';
        lawContainer.textContent = law.name;

        const description = document.createElement('div');
        description.className = 'law-description';
        description.textContent = law.description;

        lawContainer.appendChild(description);
        lawsContainer.appendChild(lawContainer);

        // Render counterpart options
        const counterpartContainer = document.createElement('div');
        counterpartContainer.className = 'counterpart-item';
        const alternatives = scenario.alternatives[law.id];
        alternatives.forEach((alt) => {
            const option = createClickableOption(`law-${law.id}`, alt.form, alt.label);
            counterpartContainer.appendChild(option);
        });
        counterpartsContainer.appendChild(counterpartContainer);
    });
}

// Analyze situation
function analyzeSituation(scenarioIndex) {
    const scenario = scenarios[scenarioIndex];
    let allCorrect = true;

    scenario.laws.forEach((law) => {
        const selectedForm = document.querySelector(`input[name="law-${law.id}"]:checked`);
        const lawElement = lawsContainer.children[law.id - 1];

        if (selectedForm && selectedForm.value === scenario.correctForms[law.id]) {
            lawElement.style.backgroundColor = 'lightgreen'; // Correct
            lawElement.classList.add('correct');

        } else {
            lawElement.style.backgroundColor = 'lightcoral'; // Incorrect
            lawElement.classList.add('incorrect');
            allCorrect = false;
        }
    });

    if (allCorrect) {
        resultMessage.style.display = 'block';
        resultMessage.textContent = 'Crisis resolved successfully!';
        resultMessage.className = 'correct';
        win.play();
        
    } else {
        
            resultMessage.style.display = 'block';
            resultMessage.textContent = `Some laws are not in their optimal forms. Please review the selected forms. `;
            resultMessage.className = 'info';
            lose.play();
    }
}

// Reveal solution
function revealSolution(scenarioIndex) {
    const scenario = scenarios[scenarioIndex];
    
    scenario.laws.forEach((law, index) => {
        const lawElement = lawsContainer.children[index]; // Accessing the correct element based on index
        const correctForm = scenario.correctForms[law.id]; // Retrieve the correct answer for the law by its ID
        console.log(correctForm);
        console.log(lawElement);
        if (lawElement) {
            // Highlight the correct answer in green if it matches the selected option
            if (document.querySelector(`input[name="law-${law.id}"]:checked`)?.value === correctForm) {
                lawElement.style.backgroundColor = 'lightgreen';
                lawElement.classList.add('correct');
            } else {
                lawElement.style.backgroundColor = 'lightcoral'; // Highlight the incorrect answer
                lawElement.classList.add('incorrect');
                lawElement.textContent += ` (Correct Answer: ${correctForm})`; // Display the correct answer
            }
        }
    });
}

// Event listeners
startSimulationBtn.addEventListener('click', () => {
    const selectedScenarioIndex = parseInt(scenarioSelect.value);
    simulationContainer.style.display = 'block';
    renderScenario(selectedScenarioIndex);
    attemptCount = 0; // Reset attempt count
});

analyzeBtn.addEventListener('click', () => {
    const selectedScenarioIndex = parseInt(scenarioSelect.value);
    analyzeSituation(selectedScenarioIndex);
});

// Initial setup
populateScenarioSelect();
renderScenario(0);

document.addEventListener('DOMContentLoaded', () => {
    const optionItems = document.querySelectorAll('.option-item');

    optionItems.forEach(item => {
        item.addEventListener('click', () => {
            optionItems.forEach(opt => opt.classList.remove('alternate')); // Remove from all
            item.classList.add('alternate'); // Add to the clicked item
        });
    });
});


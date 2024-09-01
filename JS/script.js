// script.js
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
function googleTranslateElementInit() {
    new google.translate.TranslateElement({
        pageLanguage: 'en',
        autoDisplay: false
    }, 'google_translate_element');
}

document.getElementById('begin-button').addEventListener('click', function() {
    document.getElementById('language-overlay').style.display = 'none';
    document.getElementById('main-content').classList.remove('hidden');
});






// Assuming the facts array is already defined elsewhere in your code
const facts = [
    { title: "Preamble's Core Values", description: "The Preamble to the Constitution sets the stage for the entire document, outlining the core values and principles that guide the nation." },
    { title: "World’s Longest Constitution", description: "India's Constitution is the longest in the world, reflecting its detailed approach to governance and law." },
    { title: "President's Ceremonial Role", description: "The President of India acts as the ceremonial head of state, while real executive power rests with the Prime Minister and the Council of Ministers." },
    { title: "Independent Judiciary's Role", description: "The judiciary in India is independent and has the power to interpret the Constitution and review the constitutionality of laws." },
    { title: "Directive Principles Explained", description: "These principles are non-justiciable guidelines for the state to follow in framing policies and laws, aimed at achieving socio-economic justice." },
    { title: "Fundamental Rights Enforced", description: "Fundamental Rights ensure the protection of individual liberties and are enforceable by the courts, providing a basis for judicial review." },
    { title: "Vice President’s Duties", description: "The Vice President of India is the ex-officio Chairman of the Rajya Sabha and performs duties in the absence of the President." },
    { title: "Federal Structure of India", description: "India's Constitution establishes a federal structure with a division of powers between the central and state governments." },
    { title: "Amendment Procedures", description: "The Constitution can be amended through a detailed procedure, ensuring flexibility while preserving its core principles." },
    { title: "Secularism Defined", description: "Secularism in India means equal respect for all religions, with no state religion, and ensures freedom of religion for all citizens." },
    { title: "Emergency Provisions", description: "The Constitution includes provisions for declaring emergencies to address national, state, and financial crises, with specific procedures and limitations." },
    { title: "Prime Minister’s Role", description: "The Prime Minister is the head of government, responsible for running the executive branch and formulating policies." },
    { title: "National Symbols", description: "The Constitution recognizes various national symbols like the National Flag, Anthem, and Emblem, symbolizing the unity and integrity of India." },
    { title: "Amendment History", description: "The Constitution has been amended multiple times to address changing needs and circumstances, reflecting its adaptability." },
    { title: "Attorney General’s Role", description: "The Attorney General of India is the chief legal advisor to the government and represents it in legal matters." },
    { title: "Social Justice Aims", description: "The Constitution aims to provide social justice by ensuring equitable distribution of resources and opportunities." },
    { title: "Comptroller and Auditor", description: "The Comptroller and Auditor General (CAG) is responsible for auditing government accounts and ensuring financial accountability." },
    { title: "Fundamental Duties", description: "Fundamental Duties are enshrined in the Constitution to promote civic responsibility and ethical conduct among citizens." },
    { title: "Popular Sovereignty", description: "Popular sovereignty asserts that the power of government derives from the people and their consent." },
    { title: "Election Commission’s Role", description: "The Election Commission of India oversees the conduct of elections and ensures fair and free electoral processes." },
    { title: "National Language Provision", description: "The Constitution recognizes Hindi as the official language of the central government while allowing states to use their own official languages." },
    { title: "Lok Sabha Overview", description: "The Lok Sabha, or House of the People, is the lower house of Parliament, directly elected by the people." },
    { title: "Rajya Sabha’s Role", description: "The Rajya Sabha reviews and revises legislation proposed by the Lok Sabha, ensuring thorough examination of laws." },
    { title: "Constitutional Morality", description: "Constitutional morality refers to adherence to the values and principles enshrined in the Constitution, essential for rule of law." },
    { title: "Reserved Seats Concept", description: "The Constitution mandates reserved seats for Scheduled Castes and Scheduled Tribes in both the Lok Sabha and Rajya Sabha." },
    { title: "Prime Minister’s Foreign Policy", description: "The Prime Minister shapes and implements India’s foreign policy, representing the country internationally." },
    { title: "Right to Remedies", description: "Article 32 guarantees the right to approach the Supreme Court for the enforcement of Fundamental Rights." },
    { title: "Public Interest Litigation", description: "Public Interest Litigation allows petitions on behalf of the public, addressing issues of social justice and constitutional violations." },
    { title: "Pluralism in India", description: "The Constitution promotes pluralism, celebrating India’s diverse cultures, religions, and languages." },
    { title: "Lok Sabha Speaker", description: "The Speaker of the Lok Sabha presides over its sessions, maintaining order and ensuring parliamentary procedures are followed." },
    { title: "Directive Principles", description: "Directive Principles guide state policy towards social and economic welfare, though they are not justiciable." },
    { title: "High Courts’ Role", description: "High Courts are the highest courts at the state level, with jurisdiction over state matters and original jurisdiction in certain cases." },
    { title: "Single Citizenship Concept", description: "India provides for single citizenship, meaning that all Indians are citizens of India irrespective of the state they reside in." },
    { title: "State Governors' Duties", description: "Governors act as the representative of the President in the states, overseeing the executive functions of state governments." },
    { title: "Judicial Review Power", description: "Judicial review allows courts to assess the constitutionality of legislative and executive actions, ensuring they conform to the Constitution." },
    { title: "UPSC’s Role", description: "The UPSC conducts examinations for recruitment to the civil services and ensures the selection of candidates based on merit." },
    { title: "Emergency Fund Allocation", description: "The Constitution allows for special fund allocations during emergencies to address urgent financial needs and challenges." },
    { title: "Reservation in Education", description: "The Constitution provides for reservations in educational institutions for Scheduled Castes, Scheduled Tribes, and Other Backward Classes." },
    { title: "National Human Rights", description: "The NHRC investigates and addresses human rights violations, ensuring the protection of fundamental rights." },
    { title: "Impeachment Procedure", description: "The Constitution outlines a detailed procedure for the impeachment of the President, Vice President, and other high officials." },
    { title: "Rajya Sabha Chairman", description: "The Chairman of the Rajya Sabha, also the Vice President of India, presides over Rajya Sabha sessions and maintains order." },
    { title: "National Integration Goal", description: "The Constitution promotes national integration by fostering unity and harmony among diverse groups and regions in India." },
    { title: "NCERT’s Role", description: "NCERT develops curriculum and textbooks for schools, promoting educational standards and uniformity across the country." },
    { title: "State Emergency Powers", description: "The Constitution grants powers to the central government to intervene and assume control during a state emergency." },
    { title: "Limited Government Concept", description: "The Constitution establishes a limited government by delineating powers and responsibilities between different branches of government." }
];

// Function to get 3 random facts
function getRandomFacts(facts, count) {
    const shuffled = facts.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
}

// Function to display 3 random facts
function displayRandomFacts() {
    const factsContainer = document.getElementById('facts-container');
    const randomFacts = getRandomFacts(facts, 3);

    factsContainer.innerHTML = randomFacts.map(fact => `
        <div class="fact-box">
            <h3>${fact.title}</h3>
            <p>${fact.description}</p>
        </div>
    `).join('');
}

// Display facts on page load
document.addEventListener('DOMContentLoaded', displayRandomFacts);



// Riddhles
const riddles = [
    {
        title: "Republic",
        description: "A system where the people choose, And leaders change by vote, not by bruise. What’s this government type called, Where the public’s voice is enthralled?",
        options: ["Monarchy", "Republic", "Autocracy", "Dictatorship"],
        answer: "Republic"
    },
    {
        title: "Dictatorship",
        description: "In a land where one rules all, With iron fist and never to fall. What’s this government so tight, Where a single leader holds the might?",
        options: ["Democracy", "Oligarchy", "Dictatorship", "Republic"],
        answer: "Dictatorship"
    },
    {
        title: "Oligarchy",
        description: "When a few rule over the rest, And power’s held by the wealthiest. What’s this system where the rich decree, And the masses are not so free?",
        options: ["Oligarchy", "Democracy", "Monarchy", "Anarchy"],
        answer: "Oligarchy"
    },
    {
        title: "Federal Government",
        description: "In a land where powers are shared, Between the center and states, it’s declared. What type of government do we see, Where both central and local are free?",
        options: ["Unitary", "Federal", "Confederate", "Centralized"],
        answer: "Federal"
    },
    {
        title: "Unitary Government",
        description: "In a system where the center reigns supreme, And states have powers that are just a dream. What’s this type of government known to be, Where central authority is the decree?",
        options: ["Federal", "Unitary", "Confederate", "Decentralized"],
        answer: "Unitary"
    },
    {
        title: "Confederate Government",
        description: "When states unite but keep their might, A loose alliance is their guiding light. What’s this government, where central powers are thin, And states have the most say within?",
        options: ["Federal", "Confederate", "Unitary", "Centralized"],
        answer: "Confederate"
    },
    {
        title: "Parliamentary System",
        description: "Where the executive and legislature merge, And the Prime Minister leads with a surge. What’s this system, where the head’s aligned, With the majority’s will combined?",
        options: ["Presidential System", "Parliamentary System", "Monarchical System", "Judicial System"],
        answer: "Parliamentary System"
    },
    {
        title: "Presidential System",
        description: "In this setup, the President stands alone, With powers distinct from a legislature’s tone. What’s this system where the head’s distinct, From the law-making body, in its link?",
        options: ["Parliamentary System", "Presidential System", "Confederal System", "Federal System"],
        answer: "Presidential System"
    },
    {
        title: "Monarchy",
        description: "When a king or queen rules the land, By hereditary right and royal command. What’s this system where the crown’s the key, And power flows from royalty?",
        options: ["Republic", "Democracy", "Monarchy", "Dictatorship"],
        answer: "Monarchy"
    },
    {
        title: "Democracy",
        description: "In a system where people’s voices reign, And choices are made without disdain. What’s this government where all have a say, And the people lead the democratic way?",
        options: ["Autocracy", "Monarchy", "Democracy", "Oligarchy"],
        answer: "Democracy"
    },
    {
        title: "Article 79: Parliament Formation",
        description: "A house with members all in place, Where laws are made for the entire space. A two-house chamber’s what you need, What’s this structure for the legislative deed?",
        options: ["State Assembly", "National Assembly", "Parliament Formation", "Legislative House"],
        answer: "Parliament Formation"
    },
    {
        title: "Article 80: Rajya Sabha Members",
        description: "In the house where the states have their say, Members join from each state’s array. How’s this council named with grace, Where states have their representation space?",
        options: ["Rajya Sabha", "Lok Sabha", "Council of States", "State Assembly"],
        answer: "Rajya Sabha"
    },
    {
        title: "Article 81: Lok Sabha Members",
        description: "Directly elected, representing all, In this house, members heed the call. What’s the name of this lower chamber’s class, Where people’s voices come to pass?",
        options: ["Rajya Sabha", "Lok Sabha", "State Assembly", "Council of Ministers"],
        answer: "Lok Sabha"
    },
    {
        title: "Article 107: Bill Passage",
        description: "For a law to pass and make its mark, It must go through the chambers, not just the dark. Which article guides the bill’s long way, From one house to the other’s sway?",
        options: ["Legislative Process", "Bill Passage", "Law Enactment", "Drafting Bills"],
        answer: "Bill Passage"
    },
    {
        title: "Article 83: Term of Lok Sabha",
        description: "This house has a term set clear, Where elections come, and members cheer. What’s the length of this Lok Sabha’s phase, Before its members face new elections’ gaze?",
        options: ["Five Years", "Seven Years", "Four Years", "Six Years"],
        answer: "Five Years"
    },
    {
        title: "Article 84: Qualification for Lok Sabha",
        description: "To join the house where laws are made, Certain qualifications must be laid. Who must you be to have a seat, In this chamber where representatives meet?",
        options: ["Citizen Age", "Educational Requirements", "Professional Background", "Legal Status"],
        answer: "Citizen Age"
    },
    {
        title: "Article 123: Ordinance Power",
        description: "When the house isn’t in session’s light, A power exists to make laws just right. What’s this article’s name for rules to pass, When the legislature’s absent en masse?",
        options: ["Emergency Powers", "Ordinance Power", "Legislative Authority", "Executive Orders"],
        answer: "Ordinance Power"
    },
    {
        title: "Article 124: Supreme Court Establishment",
        description: "At the top of justice's grand scheme, Where judges preside and cases gleam. Which article sets the highest court’s stage, To judge and rule from a lofty page?",
        options: ["High Court", "Supreme Court", "Lower Courts", "Appellate Court"],
        answer: "Supreme Court"
    },
    {
        title: "Article 125: Salary of Supreme Court Judges",
        description: "To keep the judges fair and bright, Their salaries are set just right. Which article ensures their pay, For justice served every day?",
        options: ["Judicial Salaries", "Supreme Pay", "Judge Compensation", "Salary of Judges"],
        answer: "Salary of Judges"
    },
    {
        title: "Article 126: Acting Chief Justice",
        description: "When the top judge takes a rest, Who fills in and does the best? Which article says who’ll stand in line, When the chief’s away for a time?",
        options: ["Acting Chief Justice", "Interim Judge", "Temporary Chief", "Chief Justice Replacement"],
        answer: "Acting Chief Justice"
    },
    {
        title: "Article 137: Review of Judgments",
        description: "If a past decision’s thought to be flawed, This article lets the judges applaud. What’s this power to review and amend, A judgment that needs to transcend?",
        options: ["Judicial Review", "Case Reassessment", "Judgment Review", "Appeal Process"],
        answer: "Judgment Review"
    },
    {
        title: "Article 226: High Court Power",
        description: "For writs and powers to correct the wrong, This court stands strong and long. Which article grants this High Court’s might, To issue orders that set things right?",
        options: ["Writ Jurisdiction", "High Court Authority", "Judicial Review", "Constitutional Remedies"],
        answer: "Writ Jurisdiction"
    },
    {
        title: "Article 227: Superintendence by High Court",
        description: "To oversee the lower courts’ fate, This article gives power to regulate. Which article’s task is to supervise, Ensuring justice across all eyes?",
        options: ["Court Supervision", "High Court Oversight", "Judicial Control", "Court Administration"],
        answer: "High Court Oversight"
    },
    {
        title: "Article 245: Jurisdiction of High Courts",
        description: "In each state, a court stands tall, To handle cases within its call. Which article sets these courts’ range, To decide and handle, without change?",
        options: ["State Jurisdiction", "High Court Jurisdiction", "Judicial Authority", "Regional Courts"],
        answer: "High Court Jurisdiction"
    },
    {
        title: "Article 52: President of India",
        description: "At the helm of the nation's pride, This leader's role cannot be denied. Which article names the head of state, Who represents the nation’s fate?",
        options: ["President", "Prime Minister", "Head of State", "Commander-in-Chief"],
        answer: "President"
    },
    {
        title: "Article 74: Council of Ministers",
        description: "To guide the head of state on matters grand, A council exists with wisdom at hand. Which article forms this advisory crew, To aid in governance and lead through?",
        options: ["Council of Ministers", "Cabinet Ministers", "Executive Council", "Prime Minister’s Office"],
        answer: "Council of Ministers"
    },
    {
        title: "Article 53: Executive Power",
        description: "In the hands of one who represents the nation, Lies power for its administration. Which article grants this power to lead, To execute laws and fulfill the nation’s need?",
        options: ["Legislative Power", "Executive Power", "Judicial Power", "Administrative Power"],
        answer: "Executive Power"
    },
    {
        title: "Lok Sabha (House of the People)",
        description: "Elected by the people’s voice, In this house, they make the choice. The lower chamber of India’s halls, Where the nation’s will truly calls.",
        options: ["Rajya Sabha", "Vidhan Sabha", "Lok Sabha", "Supreme Court"],
        answer: "Lok Sabha"
    },
    {
        title: "Rajya Sabha (Council of States)",
        description: "A house that stands to represent, States’ interests are what it’s meant. It’s not elected by the mass, But by those in legislative class.",
        options: ["Lok Sabha", "Vidhan Parishad", "Rajya Sabha", "High Court"],
        answer: "Rajya Sabha"
    },
    {
        title: "Joint Session of Parliament",
        description: "When laws are stuck and won’t progress, Both houses meet to end the mess. What’s this session called, my friend, Where both combine to find an end?",
        options: ["Combined Sitting", "Constitutional Assembly", "Joint Session", "Special Meeting"],
        answer: "Joint Session"
    },
    {
        title: "Judicial Review",
        description: "When laws are passed but may be flawed, This power makes sure they’re rightly awed. It checks if rules follow the Constitution’s grace, What’s this power that keeps laws in place?",
        options: ["Judicial Activism", "Judicial Review", "Legislative Power", "Executive Power"],
        answer: "Judicial Review"
    },
    {
        title: "Public Interest Litigation (PIL)",
        description: "For the common good, a case is brought, Even if by one, for all it’s sought. What’s this legal move, for public’s sake, Where anyone can bring a justice wake?",
        options: ["Class Action Suit", "Judicial Review", "Public Interest Litigation", "Writ Petition"],
        answer: "Public Interest Litigation (PIL)"
    },
    {
        title: "High Court",
        description: "In every state, it stands so tall, To uphold justice within its wall. It’s not the top, but still holds might, What’s this court, where many fight?",
        options: ["Supreme Court", "District Court", "High Court", "Tribunal"],
        answer: "High Court"
    },
    {
        title: "President of India",
        description: "The highest seat in this vast land, Not just a figurehead, but command. He signs the bills into the law, What’s this office, with duties in awe?",
        options: ["Prime Minister", "Governor", "President", "Chief Justice"],
        answer: "President"
    },
    {
        title: "Prime Minister of India",
        description: "He leads the nation with a guiding hand, Chosen by the people’s command. He’s the head of the council of ministers too, Who’s this leader that we look to?",
        options: ["President", "Governor", "Prime Minister", "Chief Justice"],
        answer: "Prime Minister"
    },
    {
        title: "Cabinet Ministers",
        description: "A group that aids in running the state, With different portfolios on their plate. They advise the leader in every way, Who are these ministers, by the way?",
        options: ["Members of Parliament", "Cabinet Ministers", "Chief Ministers", "Judges"],
        answer: "Cabinet Ministers"
    },
    {
        title: "Republic",
        description: "Where the head of state’s elected, And monarchy’s power is rejected. What’s this system where people choose, Their own leader, win or lose?",
        options: ["Monarchy", "Republic", "Oligarchy", "Dictatorship"],
        answer: "Republic"
    },
    {
        title: "Oligarchy",
        description: "When few hold power, the rest follow, Their influence is deep, the gap is shallow. What’s this government, where few reign high, And the majority’s will is nigh?",
        options: ["Democracy", "Autocracy", "Oligarchy", "Monarchy"],
        answer: "Oligarchy"
    },
    {
        title: "Dictatorship",
        description: "One person rules without consent, All powers in his hand are spent. What’s this rule, where voices are hushed, And freedom’s hopes are often crushed?",
        options: ["Democracy", "Monarchy", "Oligarchy", "Dictatorship"],
        answer: "Dictatorship"
    },
    {
        title: "Lok Sabha (House of the People)",
        description: "Elected by the people’s voice, In this house, they make the choice. The lower chamber of India’s halls, Where the nation’s will truly calls.",
        options: ["Rajya Sabha", "Vidhan Sabha", "Lok Sabha", "Supreme Court"],
        answer: "Lok Sabha"
    },
    {
        title: "Rajya Sabha (Council of States)",
        description: "A house that stands to represent, States’ interests are what it’s meant. It’s not elected by the mass, But by those in legislative class.",
        options: ["Lok Sabha", "Vidhan Parishad", "Rajya Sabha", "High Court"],
        answer: "Rajya Sabha"
    },
    {
        title: "Joint Session of Parliament",
        description: "When laws are stuck and won’t progress, Both houses meet to end the mess. What’s this session called, my friend, Where both combine to find an end?",
        options: ["Combined Sitting", "Constitutional Assembly", "Joint Session", "Special Meeting"],
        answer: "Joint Session"
    },
    {
        title: "Judicial Review",
        description: "When laws are passed but may be flawed, This power makes sure they’re rightly awed. It checks if rules follow the Constitution’s grace, What’s this power that keeps laws in place?",
        options: ["Judicial Activism", "Judicial Review", "Legislative Power", "Executive Power"],
        answer: "Judicial Review"
    },
    {
        title: "Public Interest Litigation (PIL)",
        description: "For the common good, a case is brought, Even if by one, for all it’s sought. What’s this legal move, for public’s sake, Where anyone can bring a justice wake?",
        options: ["Class Action Suit", "Judicial Review", "Public Interest Litigation", "Writ Petition"],
        answer: "Public Interest Litigation (PIL)"
    },
    {
        title: "High Court",
        description: "In every state, it stands so tall, To uphold justice within its wall. It’s not the top, but still holds might, What’s this court, where many fight?",
        options: ["Supreme Court", "District Court", "High Court", "Tribunal"],
        answer: "High Court"
    },
    {
        title: "President of India",
        description: "The highest seat in this vast land, Not just a figurehead, but command. He signs the bills into the law, What’s this office, with duties in awe?",
        options: ["Prime Minister", "Governor", "President", "Chief Justice"],
        answer: "President"
    },
    {
        title: "Prime Minister of India",
        description: "He leads the nation with a guiding hand, Chosen by the people’s command. He’s the head of the council of ministers too, Who’s this leader that we look to?",
        options: ["President", "Governor", "Prime Minister", "Chief Justice"],
        answer: "Prime Minister"
    },
    {
        title: "Cabinet Ministers",
        description: "A group that aids in running the state, With different portfolios on their plate. They advise the leader in every way, Who are these ministers, by the way?",
        options: ["Members of Parliament", "Cabinet Ministers", "Chief Ministers", "Judges"],
        answer: "Cabinet Ministers"
    },
    {
        title: "Republic",
        description: "Where the head of state’s elected, And monarchy’s power is rejected. What’s this system where people choose, Their own leader, win or lose?",
        options: ["Monarchy", "Republic", "Oligarchy", "Dictatorship"],
        answer: "Republic"
    },
    {
        title: "Oligarchy",
        description: "When few hold power, the rest follow, Their influence is deep, the gap is shallow. What’s this government, where few reign high, And the majority’s will is nigh?",
        options: ["Democracy", "Autocracy", "Oligarchy", "Monarchy"],
        answer: "Oligarchy"
    },
    {
        title: "Dictatorship",
        description: "One person rules without consent, All powers in his hand are spent. What’s this rule, where voices are hushed, And freedom’s hopes are often crushed?",
        options: ["Democracy", "Monarchy", "Oligarchy", "Dictatorship"],
        answer: "Dictatorship"
    },
];






let currentRiddleIndex = -1; // Initialize with -1 so the first riddle will be loaded on the first call

function getRandomRiddle() {
    const randomIndex = Math.floor(Math.random() * riddles.length);
    return riddles[randomIndex];
}

function displayRiddle() {
    const riddle = getRandomRiddle();
    document.getElementById('riddleTitle').textContent = riddle.title;
    document.getElementById('riddleDescription').innerHTML = riddle.description;

    const optionsList = document.getElementById('optionsList');
    optionsList.innerHTML = ''; // Clear previous options

    riddle.options.forEach(option => {
        const li = document.createElement('li');
        const button = document.createElement('button');
        button.textContent = option;
        button.addEventListener('click', function () {
            if (option === riddle.answer) {
                button.classList.add('correct');
                button.textContent = 'Correct!';
            } else {
                button.classList.add('incorrect');
                button.textContent = 'Wrong! Correct answer is: ' + riddle.answer;
            }
            button.classList.add('no-hover'); // Disable hover effect
            Array.from(optionsList.querySelectorAll('button')).forEach(btn => {
                btn.disabled = true; // Disable all buttons after an answer is selected
            });
        });
        li.appendChild(button);
        optionsList.appendChild(li);
    });
}

function showNextRiddle() {
    // Increment the riddle index and wrap around if necessary
    currentRiddleIndex = (currentRiddleIndex + 1) % riddles.length;
    displayRiddle();
}

// Load a riddle on page load
window.onload = displayRiddle;

// Set up the button click event for the "Next" button
document.getElementById('next-btn').addEventListener('click', showNextRiddle);








// Array of case studies
const caseStudiesData  = [
    {
        title: "GST Implementation (Various States)",
        description: "In India, the introduction of the Goods and Services Tax (GST) led to disputes between the central government and several state governments. States like Kerala and West Bengal argued that the new tax system deprived them of important revenue and shifted the financial burden onto them, while the central government maintained that GST was designed to streamline the tax structure and boost economic growth. The conflict centered around the distribution of GST revenue and compensation for states that experienced revenue shortfalls. States requested adjustments to the formula used to calculate their share of GST revenue. The GST Council, which includes representatives from both the central and state governments, reviewed and modified the compensation mechanism. The Supreme Court upheld the Council's decisions, emphasizing the need for fair distribution and compensation.",
        choices: [
            { label: "Central Government", value: "Central Government" },
            { label: "State Governments", value: "State Governments" }
        ],
        answer: "Central Government was partially at fault for the initial implementation issues, as states faced unexpected revenue shortfalls."
    },
    {
        title: "Cauvery Water Dispute (Karnataka and Tamil Nadu)",
        description: "The Cauvery River, flowing through Karnataka and Tamil Nadu, sparked a long-standing dispute over water sharing. Tamil Nadu claimed Karnataka was not releasing enough water as per the agreement, affecting agriculture in Tamil Nadu. Karnataka argued it was facing severe drought and could not meet the demand. The dispute went to the Cauvery Water Disputes Tribunal, which recommended a revised water-sharing formula. Tamil Nadu appealed to the Supreme Court, which endorsed the Tribunal’s revised allocation but directed Karnataka to release water as per the updated formula.",
        choices: [
            { label: "Central Government", value: "Central Government" },
            { label: "State Governments", value: "State Governments" }
        ],
        answer: "State Governments were both at fault for not adhering to the agreed water-sharing formula and for failing to adjust to changing conditions."
    },
    {
        title: "Delhi Police Control (Delhi)",
        description: "Delhi, with its unique status, has been a battleground over police control between the central government and the Delhi state government. The central government controls the Delhi Police, while the Delhi government, led by the Aam Aadmi Party, argued for more control over local law enforcement to address local issues effectively. The conflict escalated to the Supreme Court, which ruled that while the central government retains control over the Delhi Police, the Delhi government should have a greater say in local policing matters.",
        choices: [
            { label: "Central Government", value: "Central Government" },
            { label: "State Government", value: "State Government" }
        ],
        answer: "Central Government was at fault for not providing adequate local governance control to the Delhi government."
    },
    {
        title: "National Food Security Act (Various States)",
        description: "The National Food Security Act aimed to provide subsidized food to the poor across India. Some states like Tamil Nadu and Punjab faced issues with the central government’s implementation guidelines, arguing that they did not align with the states’ existing food distribution systems. The states requested modifications to better integrate with their local systems. The central government, following discussions, allowed some flexibility but was initially at fault for not accommodating state-specific needs from the start.",
        choices: [
            { label: "Central Government", value: "Central Government" },
            { label: "State Governments", value: "State Governments" }
        ],
        answer: "Central Government was at fault for not initially accommodating state-specific food distribution needs."
    },
    {
        title: "Forest Conservation (Various States)",
        description: "The central government's stringent forest conservation policies clashed with several states' development plans. States like Jharkhand and Madhya Pradesh argued that the central restrictions hampered their development projects, while the central government insisted on protecting forest cover. The conflict was addressed by the National Green Tribunal, which directed the central government to allow states more flexibility while ensuring forest conservation. The central government’s rigid policies were initially at fault.",
        choices: [
            { label: "Central Government", value: "Central Government" },
            { label: "State Governments", value: "State Governments" }
        ],
        answer: "Central Government was at fault for implementing overly stringent policies without considering state development needs."
    },
    {
        title: "Education Policy (Various States)",
        description: "The central government's introduction of the National Education Policy (NEP) faced opposition from states like West Bengal and Tamil Nadu, which felt the policy imposed undue restrictions and uniformity, overriding local educational needs and practices. The Supreme Court ruled that while the central policy provides a framework, states have the authority to adapt it according to their needs. The central government’s lack of flexibility was initially at fault.",
        choices: [
            { label: "Central Government", value: "Central Government" },
            { label: "State Governments", value: "State Governments" }
        ],
        answer: "Central Government was at fault for imposing a one-size-fits-all approach without accommodating state-specific educational needs."
    },
    {
        title: "Poverty Alleviation Programs (Various States)",
        description: "The central government’s poverty alleviation programs faced criticism from states like Bihar and Uttar Pradesh for inadequate funding and poor implementation. States argued that the central funds were not sufficient and the guidelines were too rigid. The central government was found at fault for not providing adequate funds and flexible guidelines to address the diverse needs of the states.",
        choices: [
            { label: "Central Government", value: "Central Government" },
            { label: "State Governments", value: "State Governments" }
        ],
        answer: "Central Government was at fault for inadequate funding and rigid guidelines."
    },
    {
        title: "Language Policy (Various States)",
        description: "The central government’s policy on official languages led to disputes in states like Tamil Nadu and Karnataka, where the imposition of Hindi as a medium in official documents and examinations was resisted. States argued that their linguistic and cultural identities were being overlooked. The Supreme Court ruled in favor of respecting regional languages and allowed states to continue using their preferred languages in official matters. The central government’s insistence on Hindi was initially at fault.",
        choices: [
            { label: "Central Government", value: "Central Government" },
            { label: "State Governments", value: "State Governments" }
        ],
        answer: "Central Government was at fault for imposing Hindi without considering regional linguistic diversity."
    },
    {
        title: "State Autonomy (Various States)",
        description: "Several states, including Andhra Pradesh and Telangana, have demanded greater autonomy in administration and finance from the central government. They argued that the central government’s control was stifling local development and decision-making. The Supreme Court supported the need for increased autonomy, emphasizing that while the central government plays a crucial role, states should have more control over local matters. The central government’s reluctance to grant more autonomy was at fault.",
        choices: [
            { label: "Central Government", value: "Central Government" },
            { label: "State Governments", value: "State Governments" }
        ],
        answer: "Central Government was at fault for not granting sufficient autonomy to states."
    },
    {
        title: "Electricity Distribution (Various States)",
        description: "Disputes arose between the central government and states like Punjab and Haryana over electricity distribution and pricing. The central government’s policies on pricing and distribution were seen as favoring some states over others. The central government was found at fault for not creating a more balanced approach to electricity distribution and pricing that considered the needs of all states equitably.",
        choices: [
            { label: "Central Government", value: "Central Government" },
            { label: "State Governments", value: "State Governments" }
        ],
        answer: "Central Government was at fault for inequitable electricity distribution policies."
    },
    {
        title: "Health Care Funding (Various States)",
        description: "States such as Uttar Pradesh and Madhya Pradesh faced conflicts with the central government over the allocation of health care funds. The central government’s funding was criticized for being inadequate and not addressing the specific health needs of these states. The central government’s failure to provide sufficient and targeted health care funding led to the states’ challenges. The Supreme Court eventually highlighted the need for more equitable and adequate health care funding.",
        choices: [
            { label: "Central Government", value: "Central Government" },
            { label: "State Governments", value: "State Governments" }
        ],
        answer: "Central Government was at fault for inadequate health care funding."
    },
    {
        title: "Agricultural Subsidies (Punjab)",
        description: "In Punjab, the central government’s policies on agricultural subsidies faced resistance from the state government. Punjab argued that the central subsidies did not account for the state’s unique cropping patterns and the heavy reliance on certain crops, leading to financial strain on local farmers. The conflict reached the Ministry of Agriculture, which eventually agreed to revise the subsidy structure to better fit Punjab's agricultural needs. The central government’s initial failure to tailor policies to state-specific needs was at fault.",
        choices: [
            { label: "Central Government" },
            { label: "State Government" }
        ],
        answer: "Central Government"
    },
    {
        title: "Urban Development Projects (Mumbai)",
        description: "Mumbai faced conflicts with the central government over urban development projects. The central government’s plans for infrastructure development often conflicted with local needs and environmental concerns raised by the Maharashtra state government. The Supreme Court ruled that while central projects are important, they must consider state-specific environmental and urban planning needs. The central government was initially at fault for not aligning its projects with local requirements.",
        choices: [
            { label: "Central Government" },
            { label: "State Government" }
        ],
        answer: "Central Government"
    },
    {
        title: "Healthcare Policy Implementation (Kerala)",
        description: "Kerala's health care system, known for its efficiency, faced conflicts with the central government over the implementation of the National Health Mission. The state government argued that the central guidelines were too rigid and did not fit Kerala’s successful existing model. The National Health Mission had to be adjusted to align better with Kerala’s proven practices. The central government’s imposition of a uniform approach without considering Kerala’s unique success in healthcare was at fault.",
        choices: [
            { label: "Central Government" },
            { label: "State Government" }
        ],
        answer: "Central Government"
    },
    {
        title: "Employment Schemes (Bihar)",
        description: "The central government’s employment schemes, such as the MGNREGA, faced criticism from Bihar for inadequate funding and implementation support. The state government claimed that the central guidelines did not meet Bihar’s high demand for employment opportunities. The central government was found at fault for not providing sufficient resources and flexible guidelines to address Bihar’s needs adequately. The Supreme Court supported more targeted funding for high-need states.",
        choices: [
            { label: "Central Government" },
            { label: "State Government" }
        ],
        answer: "Central Government"
    },
    {
        title: "Public Transport Funding (Delhi)",
        description: "Delhi’s state government sought more control over public transport funding, claiming that the central government’s allocations were insufficient to address the city's growing needs. The central government, managing transport funds centrally, was accused of not considering Delhi's unique public transport demands. The conflict was resolved with increased funding and a more collaborative approach. The central government’s initial control and insufficient funding led to the conflict.",
        choices: [
            { label: "Central Government" },
            { label: "State Government" }
        ],
        answer: "Central Government"
    },
    {
        title: "Environmental Regulations (Goa)",
        description: "Goa’s tourism industry faced issues with central government regulations on environmental protections. The central guidelines were seen as too stringent, affecting the state’s key tourism sector. The Goa state government argued for more balanced regulations that consider economic and environmental needs. The Supreme Court ruled that while environmental protection is crucial, regulations should also account for state-specific economic impacts. The central government’s stringent regulations were initially at fault.",
        choices: [
            { label: "Central Government" },
            { label: "State Government" }
        ],
        answer: "Central Government"
    },
    {
        title: "Industrial Policy (Jharkhand)",
        description: "Jharkhand’s state government clashed with the central government over industrial policies that were seen as favoring established industries in other states. Jharkhand argued that the central policies did not support its emerging industrial sector adequately. The conflict led to a revision of the central industrial policy to include more support for developing states. The central government’s policies were initially at fault for not supporting Jharkhand’s industrial growth adequately.",
        choices: [
            { label: "Central Government" },
            { label: "State Government" }
        ],
        answer: "Central Government"
    },
    {
        title: "Rural Development Schemes (Uttar Pradesh)",
        description: "Uttar Pradesh faced difficulties with the central government’s rural development schemes, arguing that the funds allocated were insufficient and the implementation guidelines were too restrictive. The state government sought more flexibility and increased funding. The Supreme Court mandated more flexible and adequate funding based on state-specific needs. The central government’s initial inflexibility and insufficient funding were at fault.",
        choices: [
            { label: "Central Government" },
            { label: "State Government" }
        ],
        answer: "Central Government"
    },
    {
        title: "Public Health Crisis Management (Madhya Pradesh)",
        description: "During a public health crisis, Madhya Pradesh faced challenges with the central government’s management and resource allocation. The state government argued that the central response was inadequate and delayed, impacting crisis management efforts. The Supreme Court directed the central government to improve coordination and resource allocation. The central government’s slow response and inadequate resource distribution were at fault.",
        choices: [
            { label: "Central Government" },
            { label: "State Government" }
        ],
        answer: "Central Government"
    },
    {
        title: "Disaster Relief Allocation (Assam)",
        description: "Assam faced conflicts with the central government over disaster relief allocations following severe flooding. The state government claimed that the central funds and assistance were insufficient to address the scale of the disaster. The central government was directed to increase and expedite relief efforts. The initial shortfall in assistance and slow response from the central government were at fault.",
        choices: [
            { label: "Central Government" },
            { label: "State Government" }
        ],
        answer: "Central Government"
    }

];


let currentCaseStudyData = null;

function caseGenerateCaseStudy() {
    // Clear previous colors and judgment
    document.querySelector('.case-option.state').classList.remove('correct');
    document.querySelector('.case-option.centre').classList.remove('correct');
    document.querySelector('.case-judgment').innerText = '';

    // Reset button styles
    document.querySelectorAll('.case-option button').forEach(btn => btn.classList.remove('clicked'));

    // Generate a random index to select a case study
    const randomIndex = Math.floor(Math.random() * caseStudiesData.length);
    currentCaseStudyData = caseStudiesData[randomIndex];

    // Display the title and description of the selected case study
    document.querySelector('.case-title').innerText = currentCaseStudyData.title;
    document.querySelector('.case-description').innerText = currentCaseStudyData.description;

    // Update the labels of the case buttons with the options
    const caseButtons = document.querySelectorAll('.case-options-container .case-option button');
    caseButtons[0].innerText = currentCaseStudyData.choices[0].label;
    caseButtons[0].setAttribute("data-value", currentCaseStudyData.choices[0].value);
    caseButtons[1].innerText = currentCaseStudyData.choices[1].label;
    caseButtons[1].setAttribute("data-value", currentCaseStudyData.choices[1].value);
}

function caseSelectOption(button, option) {
    // Disable buttons after selection
    document.querySelectorAll('.case-option button').forEach(btn => btn.classList.add('clicked'));

    // Check the correct answer and apply the background color
    const isCentreGuilty = currentCaseStudyData.answer.includes('Central Government');
    const isStateGuilty = currentCaseStudyData.answer.includes('State Government');

    if (isCentreGuilty && option === 'centre') {
        document.querySelector('.case-option.centre').classList.add('correct');
    } else if (isStateGuilty && option === 'state') {
        document.querySelector('.case-option.state').classList.add('correct');
    }

    // Display the court's judgment
    document.querySelector('.case-judgment').innerText = `Court Judgment: ${currentCaseStudyData.answer}`;
}

// Generate a case study on page load


document.addEventListener('DOMContentLoaded'), () => {
    const agentDisplay = document.getElementById('agentDisplay');
    const agentImage = document.getElementById('agentImage');
    const agentButton = document.getElementById('agentButton');
}

const agents = [
    { name: 'Astra', img: 'images/Astra_icon.webp' },
    { name: 'Breach', img: 'images/Breach_icon.webp' },
    { name: 'Brimstone', img: 'images/Brimstone_icon.webp' },
    { name: 'Chamber', img: 'images/Chamber_icon.webp' },
    { name: 'Clove', img: 'images/Clove_icon.webp'},
    { name: 'Cypher', img: 'images/Cypher_icon.webp' },
    { name: 'Jett', img: 'images/Jett_icon.webp' },
    { name: 'KAY/O', img: 'images/KAYO_icon.webp' },
    { name: 'Killjoy', img: 'images/Killjoy_icon.webp' },
    { name: 'Neon', img: 'images/Neon_icon.webp' },
    { name: 'Omen', img: 'images/Omen_icon.webp' },
    { name: 'Phoenix', img: 'images/Phoenix_icon.webp' },
    { name: 'Raze', img: 'images/Raze_icon.webp' },
    { name: 'Reyna', img: 'images/Reyna_icon.webp' },
    { name: 'Sage', img: 'images/Sage_icon.webp' },
    { name: 'Skye', img: 'images/Skye_icon.webp' },
    { name: 'Sova', img: 'images/Sova_icon.webp' },
    { name: 'Viper', img: 'images/Viper_icon.webp' },
    { name: 'Yoru', img: 'images/Yoru_icon.webp' }
];

agentButton.addEventListener('click', () => {
    const randomAgent = getRandomAgent();
    agentDisplay.textContent = randomAgent.name;
    agentImage.src = randomAgent.img;
    agentImage.alt = '${randomAgent.name} Image';
    agentImage.style.display = 'block';
});

function getRandomAgent() {
    const randomIndex = Math.floor(Math.random() * agents.length);
    return agents[randomIndex];
}

document.getElementById('agentButton').addEventListener('click', function() {
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
    const randomAgent = agents[Math.floor(Math.random() * agents.length)];
    document.getElementById('agentDisplay').textContent = 'Random Agent: ' + randomAgent.name;
});


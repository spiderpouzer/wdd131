// windchill factor
const calculateWindChill = (temp, windSpeed) => 
    13.12 + 0.6215 * temp - 11.37 * Math.pow(windSpeed, 0.16) + 0.3965 * temp * Math.pow(windSpeed, 0.16);

// estatics
const dataValues = [
    { label: "Population", value: "751.300 [2022]" },
    { label: "Area", value: "167,401 km² [2023]" },
    { label: "Altitude", value: "30m" },
    { label: "Fuso", value: "GMT-3" },
    { label: "IDH", value: "0,728" }
];

const weatherValues = [
    { label: "Temperature", value: " 22°C to 31°C" }, // demonstration
    { label: "Humidity", value: "67%" },
    { label: "Wind", value: "16 km/h" }, // demonstration
    { label: "Conditions", value: "Sunny" }
];

// Atualizar footer
document.getElementById('currentyear').textContent = new Date().getFullYear();
document.getElementById('lastModified').textContent = `Última modificação: ${new Date(document.lastModified).toLocaleString()}`;

// Função para criar elementos
function createDynamicElements(containerId, items) {
    const container = document.getElementById(containerId);
    container.innerHTML = '';
    items.forEach(item => {
        const div = document.createElement('div');
        div.innerHTML = `<strong>${item.label}:</strong> ${item.value}`;
        container.appendChild(div);
    });
}

// Configurar dados meteorológicos
function setupWeather() {
    const temp = 28;
    const windSpeed = 15;
    
    if(temp <= 10 && windSpeed > 4.8) {
        const windChill = calculateWindChill(temp, windSpeed);
        weatherValues.push({ label: "Sensação Térmica", value: `${Math.round(windChill)}°C` });
    } else {
        weatherValues.push({ label: "Sensação Térmica", value: "N/A" });
    }
}

// Inicialização
window.addEventListener('DOMContentLoaded', () => {
    setupWeather();
    createDynamicElements('dataContainer', dataValues);
    createDynamicElements('weatherContainer', weatherValues);
});
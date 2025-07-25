
// Educational overlays
document.querySelectorAll('.info-trigger').forEach(trigger => {
    trigger.addEventListener('click', (e) => {
      const sensorType = e.target.closest('.sensor-card').classList[1];
      const content = {
        'sensor-water': `Optimal water levels help plants absorb nutrients. 
                        Too much water can cause root rot. 
                        Ideal range: 40-60% moisture.`,
        'sensor-soil': `Soil pH affects nutrient availability. 
                       Most crops prefer 6.0-7.0 pH. 
                       Add lime to raise pH, sulfur to lower.`,
        'sensor-sun': `Plants need 6-8 hours of sunlight daily. 
                      Too much sun can cause wilting. 
                      Consider shade cloth if >80,000 lux.`
      };
      document.querySelector('.info-content').innerHTML = `
        <h3>${e.target.closest('.sensor-card').querySelector('h3').textContent}</h3>
        <p>${content[sensorType]}</p>
        <button class="close-btn">Close</button>
      `;
      document.querySelector('.sensor-info-overlay').style.display = 'flex';
    });
  });
  
  document.addEventListener('click', (e) => {
    if(e.target.classList.contains('close-btn')) {
      document.querySelector('.sensor-info-overlay').style.display = 'none';
    }
  });
  
  // Update progress bars based on values
  function updateSensorVisuals() {
    const waterValue = parseFloat(document.getElementById('water-value').textContent);
    document.querySelector('.sensor-water .progress-bar').style.width = 
      `${Math.min(100, waterValue)}%`;
  
    // Add similar updates for other sensors
  }
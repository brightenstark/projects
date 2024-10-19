document.getElementById('convertButton').addEventListener('click', function() {
    const temperatureInput = document.getElementById('temperatureInput').value;
    const unit = document.querySelector('input[name="unit"]:checked').value;
    let resultText = '';

    // Validate input
    if (!temperatureInput || isNaN(temperatureInput)) {
        alert('Please enter a valid number.');
        return;
    }

    const temperature = parseFloat(temperatureInput);

    switch (unit) {
        case 'C':
            resultText = `${(temperature * 9/5) + 32} °F`;
            break;
        case 'F':
            resultText = `${(temperature - 32) * 5/9} °C`;
            break;
        case 'K':
            resultText = `${temperature - 273.15} °C`;
            break;
        default:
            break;
    }

    document.getElementById('result').innerText = resultText;
    document.getElementById('result').style.opacity = 1; // Fade in result
});

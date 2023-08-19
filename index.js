var inputCount = 1;
var idList = [0];

function removeFromArr(arr, value) {
    var index = arr.indexOf(value);
    if (index > -1) {
        arr.splice(index, 1);
    }
    return arr;
}

function addInput() {
    var inputContainer = document.getElementById('input-container');
    var newInput = document.createElement('div');
    newInput.className = "input-group";
    newInput.innerHTML = `
        <input id="input-${inputCount}" type="number" class="form-control" placeholder="Enter CPL" aria-label="Centipawn Loss">
        <button class="btn btn-danger" type="button" onclick="removeInput(${inputCount})">Remove</button>
    `;
    inputContainer.appendChild(newInput);
    idList.push(inputCount)
    inputCount++;
}

function removeInput(inputId) {
    var inputContainer = document.getElementById('input-container');
    var inputToRemove = document.getElementById(`input-${inputId}`);
    inputContainer.removeChild(inputToRemove.parentNode);
    removeFromArr(idList, inputId);
}

function calculate() {
    var averageCPL = 0;
    idList.forEach(id => {
        var cplInputElement = document.getElementById(`input-${id}`);
        averageCPL += parseInt(cplInputElement.value);
    });
    averageCPL = averageCPL / idList.length;
    var estimatedElo = 3100 * Math.exp(-0.01 * averageCPL);
    var EstimatedEloText = document.getElementById('output');
    EstimatedEloText.innerText = `Estimated Elo: ${Math.ceil(estimatedElo)}`;
}

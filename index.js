const randomColor = () => {
    return '#' + Math.floor(Math.random() * 16777215).toString(16)
}


var button = document.getElementById('GenerateColor');
var section = document.getElementById('container');
var table = document.getElementById('ColorID')
button.addEventListener('click', function() {
    const label = document.createElement('label');
    const labelColor = document.createElement('label');
    //const tbl = document.createElement('table')
    //const tblBody = document.createElement('tbody')
    const row = document.createElement('tr');
    const cell = document.createElement('td');

    const color = randomColor()
    var match_C = ntc.name(color);
    C_name = match_C[1]
    var cellData = document.createTextNode(`Hex Code: ${color}, Colour Name: ${C_name}`)

    cell.appendChild(cellData)
    row.appendChild(cell);
    //tblBody.appendChild(row)
    table.appendChild(row)
    table.setAttribute('id', 'hexCode')
    section.appendChild(tbl)



})
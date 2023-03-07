let input = document.getElementById('input');
let input1 = document.getElementById('input1');
let eraser = document.getElementById('ers_btn');
function hide()
{
    if(input.value == '' || input1.value == '' || input1.value <= '0' )
    {
        alert("Please enter value");
    }
    else 
    {
    let hidden = document.getElementById('hidden');
    hidden.style.display = "none";
    let show = document.getElementById('show');
    show.style.visibility = "visible";
    }
}
function show()
{
    let pad = document.getElementById("Pad");
    let grids = document.getElementById('table');
    for(let row = 0 ; row <= input.value ; row++)
    {
        const tr = grids.insertRow(row);
        for(let col = 0 ; col <= input1.value ; col++)
        {
            const td = tr.insertCell(col);
            td.classList.add('box');
        }
    }
    pad.appendChild(grids);
}


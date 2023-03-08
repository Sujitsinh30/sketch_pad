let input = document.getElementById('input');
let input1 = document.getElementById('input1');
let eraser = document.getElementById('ers_btn');
let color = document.getElementById('color');
let colorvalue = []; // array of color value
let flag = true;
function hide()
{
    if(input.value == '' || input1.value == '' || input.value <= '0' || input1.value <= '0' )
    {
        alert("Please enter valid value");
    }
    else 
    {
        let hidden = document.getElementById('hidden');
        hidden.style.display = "none";
        let show = document.getElementById('show');
        show.style.visibility = "visible";
        let pad = document.getElementById("Pad");
        let grids = document.getElementById('table');
        for(let row = 0 ; row <= input.value ; row++)
        {
            const tr = grids.insertRow(row);
            for(let col = 0 ; col <= input1.value ; col++)
            {
                const td = tr.insertCell(col);
                td.classList.add('cells');
            }
        }
        pad.appendChild(grids);
        paint();
    }
}
function paint() 
{
    flag = true;
    if (!color == "") 
    {
        let cells = document.querySelectorAll('.cells');
        for (let brush = 0; brush < cells.length; brush++) 
        {
            cells[brush].addEventListener('mouseover', () => { mousehover(cells, brush, flag) });
        }
    }
}
eraser.addEventListener("click", () => { 
    if (eraser.value == "ON") 
    {
        let cells = document.querySelectorAll('.cells');
        colorvalue = [];
        flag = false;
        eraser.style.backgroundColor = "green";
            for (let erase = 0; erase < cells.length; erase++)
            {
                cells[erase].addEventListener('mouseover', () => cells[erase].style.background = "white");
            }
        eraser.value = "OFF";
    }
    else if (eraser.value == "OFF") 
    {
        eraser.style.backgroundColor = "orange";
        eraser.value = "ON";
        flag = true;
        paint();
    }
});
function mousehover(arr, brush, flag) 
{
    if (flag==true) 
    {
        if (colorvalue.length <= 10) 
        {
            arr[brush].style.background = color.value;
            colorvalue.push(brush);
            console.log(colorvalue + " Length :" + colorvalue.length)
            if (colorvalue.length > 10) 
            {
                let uptorten = colorvalue.shift();
                arr[uptorten].style.background = "black";
                arr[brush].style.background = color.value;
            }
        }
    }
}

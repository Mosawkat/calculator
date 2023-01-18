let history = [];
let H = '';
let output;
let prevNum;
let PN;
let currentNum;
let clearNum;
let add, sub, mul, div;
function initialize()
{
    document.getElementById('allNums').innerHTML="0";
}
function resetCurrentNum()
{
    currentNum = undefined;
    CN = document.getElementById("allNums");
    CN.innerHTML = "0";

}

//Need to add all elements to the history array, then when total button is clicked,
//a loop will loop through the array and calculate based on the contents in the array.

function buttonPressed(ID)
{
    CN = document.getElementById("allNums");
    document.getElementById('AC').innerHTML = 'C';
    if (ID=="AC")
    {
        if (typeof currentNum !=='undefined')
        {
            resetCurrentNum();
            CN.innerHTML;
        }
        else if (typeof currentNum=='undefined')
        {
            document.getElementById('AC').innerHTML = 'C';
            document.getElementById('AC').innerHTML = 'AC';
        }

    }
    if (ID=="7")
    {
        currentNum = ID;
        CN.innerHTML= H;
        if (currentNum==prevNum)
        {
            H+=ID;
            prevNum = ID;
            currentNum = parseInt(H, 10);
        }
        else
        {
            H+=ID;
            prevNum = ID;
            currentNum = parseInt(H, 10);
            CN.innerHTML= H;
        }

    }

    if (ID=="8")
    {
        currentNum = ID;
        CN.innerHTML= ID;
        if (currentNum==prevNum)
        {
            H+=ID;
            prevNum = ID;
            currentNum = parseInt(H, 10);
        }
        else
        {
            H+=ID;
            prevNum = ID;
            currentNum = parseInt(H, 10);
            CN.innerHTML= H;
        }
    }
    if (ID=="Multiply")
    {
        mul = true;
    }
    if (ID=="Equal")
    {
        if (mul==true)
        {
            output = currentNum * parseInt(H, 10);
            CN.innerHTML = output;
        }
    }
}
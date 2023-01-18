let history = [];
let output;
let prevNum;
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
        CN.innerHTML = currentNum;
        if (currentNum==prevNum)
        {

        }
        prevNum = ID;
    }
    if (ID=="8")
    {
        currentNum = ID;
        if (currentNum==prevNum)
        {
            currentNum+=10;
            prevNum = ID;
        }
        CN.innerHTML = currentNum;
    }
    if (ID=="Multiply")
    {
        mul = true;
    }
    if (ID=="Equal")
    {
        if (mul==true)
        {
            output = prevNum * currentNum;
            CN.innerHTML = output;
        }
    }
}
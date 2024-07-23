
let arr=["red","blue","green","pink","orange"];
let i=0;
function cl()
{
        document.getElementById('box').style.backgroundColor=arr[i];
        if(arr[i]=="red")
        {
                document.getElementById('con').innerText="Background Color : Red";
        }
        else if(arr[i]=="blue")
        {
                document.getElementById('con').innerText="Background Color : Blue";
        }
        else if(arr[i]=="green")
        {
                document.getElementById('con').innerText="Background Color : Green";
        }
        else if(arr[i]=="pink")
        {
                document.getElementById('con').innerText="Background Color : Pink";
        }
        else if(arr[i]=="orange")
        {
                document.getElementById('con').innerText="Background Color : Orange";
        }  
        
        i=(i+1)%arr.length;
}
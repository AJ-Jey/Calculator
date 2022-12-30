nums = []
clearScreen()
x=0

function finalans(){ //calculates answer based on the numbers inputted on click
    if (nums.length != 0){
        join = nums.join("")
        final = eval(join)
        x=1
    }
}

function display(val){ //displays the numbers clicked (reason for being able to display the answer)
  document.getElementById('result').value += val
  return val
}

function clearScreen(){ //clears the screen therefore also emptying the list
  document.getElementById('result').value = ''
}

function changer(){ //
  if(x==1){
    ans = document.getElementById("result").value
    clearScreen()
    x=0
    nums = []
    nums.push(ans)
    display(ans)
  }  
}

function check(){ //when a number is clicked after answer is produced it'll be eg.added with the answer
  if(x==1){
    x=0
    nums = []
    clearScreen()
  }
}

function del(){
    nums.pop()
    test = nums
    for(i=0;i<nums.length;i++){
        if(test[i] == "*"){
        test[i] = "x"
    }
    else if(test[i] == "/"){
        test[i] = "÷"
    }
}
    join = test.join("")
    clearScreen()
    display(join) 
}
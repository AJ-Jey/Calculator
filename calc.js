nums = []
clearScreen()
x=0
s=0
answer = ""

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

function changer(){  //allows for calculating numbers after pressing equals(operators)
  if(x==1){
    ans = document.getElementById("result").value
    clearScreen()
    x=0
    nums = []
    nums.push(ans)
    display("Ans")
  }  
}

function check(){ //when a number is clicked after answer is produced it'll be eg.added with the answer
  if(x==1){
    x=0
    nums = []
    clearScreen()
  }
}

function del(){ //when del button clicked removes last inputted item
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

function squareroot(){
  if(s==1){
    for(i=0;i<nums.length;i++){
      if(nums[i] == "sqrt"){
        index = nums.indexOf("sqrt");
        console.log(index)
        newreplace = Math.sqrt(nums[index+1])
        nums.splice(index,2, newreplace)
        console.log(nums)
        }
      } 
    }
    s=0
  }

function squareroot(){
  if(s==1){
    for(i=0;i<nums.length;i++){
      if(nums[i] == "sqrt"){
        index = nums.indexOf("sqrt");
        newreplace = Math.sqrt(nums[index+1])
        if(index!=0){
          oper = nums[index-1]
          if(isNaN(parseInt(oper)) == false){
            nums.splice(index,2,"*", newreplace)
          }
          else if(oper != "+" || oper != "-" || oper != "*" || oper != "/"){
            nums.splice(index,2,newreplace)
          }
        }
        else if(index ==0){
          nums.splice(index,2, newreplace)
        }
        else if(oper != "+" || oper != "-" || oper != "*" || oper != "/"){
          nums.splice(index,2,"*", newreplace)
        }
      } 
    }
    }
    s=0
  }

function factorial(){
  console.log(nums)
  for(k=0;k<nums.length;k++){
    nums.join("")
    if(nums[k] == "!"){
      num = nums.slice(k-1,k);
      num = num.join("")
      proplus = 1;
        for(i=2;i<=num;i++){
          proplus = proplus*i;
          nums.splice(k,1);
          nums.pop()
          nums.push(proplus)
        // }
      }
    }
  }
}
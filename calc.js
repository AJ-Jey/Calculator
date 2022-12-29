nums = []
x = 0
y=0
z=0
test = []
function ans(){
  if (nums.length != 0){
    joined = nums.join("")
    final = eval(joined)    
    x=1
  }
}

function check(){
  if(x==1){
    x=0
    nums = []
    clearScreen()
  }
}

function display(val){
  document.getElementById('result').value += val
  return val
}

function clearScreen(){
  document.getElementById('result').value = ''
}

v=""
function answer(){
  if(x==1){
    v = document.getElementById("result").value
    clearScreen()
    x=0
    nums = []
    nums.push(v)
    display('ans')
  }  
}

function del(){
  nums.pop()
  test = nums
  clearScreen() 
  for(i=0;i<nums.length;i++){
    if(test[i] == "*"){
      test[i] = "x"
    }
    else if(test[i] == "/"){
      test[i] = "÷"
    }
  }
  if(z==1 && nums.length <= 1){
    nums = []
    clearScreen()
  }
  join = test.join("")
  display(join)
}
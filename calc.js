nums = []
x = 0
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
  nums = []
}

v=""
function answer(){
  if(x==1){
    x=0
    v = document.getElementById("result").value
    nums.push(v)
  }  
}
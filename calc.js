clearScreen()
nums = []
function del(test){
  
}
function ans(){
    joined = nums.join("")
    final = eval(joined)
    nums = []
}
function display(val){
  document.getElementById('result').value += val
  return val
}
function clearScreen(){
  document.getElementById('result').value = ''
  nums = []
}

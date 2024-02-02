function counter() {
  let inp = document.getElementById("input").value;
  let char = inp.length;
  // console.log(char);
  document.getElementById("chars").innerHTML = char;

  inp = inp.trim().split(" ");
  // console.log(inp);
  let count = 0;

  for (let i = 0; i < inp.length; i++) {
    if (inp[i] != "") {
      count++;
    }
  }
  // console.log(count);
  document.getElementById("word").innerHTML = count;
}


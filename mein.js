let a = ""; //arachi tiv@
let b = ""; //erkrort tiv@
let sign = ""; //gumarum hanum(bolor@)
let finish = false;

const nam = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "."];
const action = ["+", "-", "X", "/"];

//ekran
const out = document.querySelector(".calc_scren p");

function clearAll() {
  a = "";
  b = "";
  sign = "";
  finish = false;
  out.textContent = 0;
}
document.querySelector(".ac").onclick = clearAll;

document.querySelector(".button").onclick = event => {
  //sexmel en voch knopki vra
  if (!event.target.classList.contains("btn")) return;
  //sexmel en knopkin ac
  if (event.target.classList.contains("ac")) return;

  out.textContent = "";

  //stanum enq  sexmvac kochak@
  let key = event.target.textContent;

  //ete sexmac e 0-9 kam .
  if (nam.includes(key)) {
    if (b == "" && sign == "") {
      a += key;
      out.textContent = a;

    } else if (a !== "" && b !== "" && finish) {
      b += key;
      finish = false;
      out.textContent = b;
    } 
    else {
      b += key;
      out.textContent = b;
    }

    return;
  }

  //ete sexmac e +,- X, /
  if (action.includes(key)) {
    sign = key;
    out.textContent = sign;
    console.log(a,b,sign)
    return;

  }

  //ete sexmelenq e =
g
  if (key == "=") {
    switch (sign) {
      case "+":
        a =(+a) + (+b);

        console.log(a,b,sign)
    

        break;
        
      case "-":
        a = a - b;

        break;
      case "X":
        a = a * b;

        break;
      case "/":
          if(b=="0"){
              out.textContent="oshibka";
              a="";
              b="";
              sign="";
              console.log(a,b,sign)
              return;
          }
        a = a / b;

        break;
    }
    finish = true;
    out.textContent = a;
  }
};

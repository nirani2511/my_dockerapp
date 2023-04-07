function calculate() {
  const number = document.getElementById("number").value;
  const result = document.getElementById("result");

  if (!number) {
    result.innerHTML = "";
    return;
  }

  const startTime = new Date().getTime();

  const xhr = new XMLHttpRequest();
  xhr.open("GET", `/square/${number}`, true);
  xhr.onload = function () {
    const endTime = new Date().getTime();
    const responseTime = endTime - startTime;

    if (xhr.status === 200) {
      const square = xhr.responseText;
      result.innerHTML = `<h2>${number} squared is ${square}</h2><p>Response time: ${responseTime} ms</p>`;
    } else {
      result.innerHTML = `<h2>Error: ${xhr.responseText}</h2>`;
    }
  };
  xhr.send();
}

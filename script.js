window.onload = () => {
  //operations
  const plus = document.getElementById('plus');
  const minus = document.getElementById('minus');
  const div = document.getElementById('div');
  const mul = document.getElementById('mul');

  //numbers
  const one = document.getElementById('one');
  const two = document.getElementById('two');
  const three = document.getElementById('three');
  const four = document.getElementById('four');
  const five = document.getElementById('five');
  const six = document.getElementById('six');
  const seven = document.getElementById('seven');
  const eight = document.getElementById('eight');
  const nine = document.getElementById('nine');
  const zero = document.getElementById('zero');

  //actions
  const del = document.getElementById('del');
  const dot = document.getElementById('dot');
  const equal = document.getElementById('equal');
  const reset = document.getElementById('reset');

  //labels
  const res = document.getElementById('res');

  //global vars
  let operations = [];
  let buffer = null;
  const container = document.querySelector('.container');
  const keys = container.querySelectorAll('.calc-button');

  //event listeners
  del.addEventListener('click', e => {
    let length = res.innerHTML.length;
    res.innerHTML = res.innerHTML.slice(0, length - 1);
    buffer = res.innerHTML;
  });

  reset.addEventListener('click', () => {
    res.innerHTML = '0';
    buffer = 0;
    operations = [];
  });

  equal.addEventListener('click', e => {
    switch (operations[1]) {
      case 'plus':
        operations.push(buffer);
        console.log(`added buffer ${buffer} to operations and initialized it`);
        buffer = 0;
        console.log(operations[0], operations[2]);
        res.innerHTML = operations[0] + operations[2];
        console.log(`Result::     ${operations[0] + operations[2]}`);
        break;
      case 'minus':
        operations.push(buffer);
        console.log(`added buffer ${buffer} to operations and initialized it`);
        buffer = 0;
        console.log(operations[0], operations[2]);
        res.innerHTML = operations[0] - operations[2];
        console.log(`Result::     ${operations[0] - operations[2]}`);
        break;
      case 'mul':
        operations.push(buffer);
        console.log(`added buffer ${buffer} to operations and initialized it`);
        buffer = 0;
        res.innerHTML = operations[0] * operations[2];
        console.log(`Result::     ${operations[0] * operations[2]}`);
        break;
      case 'div':
        operations.push(buffer);
        console.log(`added buffer ${buffer} to operations and initialized it`);
        buffer = 0;
        console.log(operations[0], operations[2]);
        res.innerHTML = operations[0] / operations[2];
        console.log(`Result::     ${operations[0] / operations[2]}`);
        break;
    }
  });

  for (let i = 0; i < keys.length; i++) {
    keys[i].addEventListener('click', e => {
      //   console.log(e);
      if (e.target.classList.contains('key-label')) {
        console.log(`Key Pressed::     ${e.target.id}`);
        if (res.innerHTML == '0') res.innerHTML = '';
        switch (e.target.id) {
          case 'one':
            res.innerHTML += 1;
            buffer = parseFloat(res.innerHTML);
            break;

          case 'two':
            res.innerHTML += 2;
            buffer = parseFloat(res.innerHTML);
            break;

          case 'three':
            res.innerHTML += 3;
            buffer = parseFloat(res.innerHTML);
            break;

          case 'four':
            res.innerHTML += 4;
            buffer = parseFloat(res.innerHTML);
            break;

          case 'five':
            res.innerHTML += 5;
            buffer = parseFloat(res.innerHTML);
            break;

          case 'six':
            res.innerHTML += 6;
            buffer = parseFloat(res.innerHTML);
            break;

          case 'seven':
            res.innerHTML += 7;
            buffer = parseFloat(res.innerHTML);
            break;

          case 'eight':
            res.innerHTML += 8;
            buffer = parseFloat(res.innerHTML);
            break;

          case 'nine':
            res.innerHTML += 9;
            buffer = parseFloat(res.innerHTML);
            break;

          case 'zero':
            if (res.innerHTML != '0') {
              res.innerHTML += 0;
              if (buffer < 1) buffer += 0;
              else {
                buffer *= 10;
              }
            }
            break;

          case 'div':
            operations.push(buffer);
            console.log(
              `**  added buffer ${buffer} to operations and initialized it  **`
            );
            res.innerHTML = '';
            buffer = 0;
            operations.push('div');
            console.log('added div to operations');
            break;

          case 'mul':
            operations.push(buffer);
            console.log(
              `**  added buffer ${buffer} to operations and initialized it  **`
            );
            res.innerHTML = '';
            buffer = 0;
            operations.push('mul');
            console.log('added mul to operations');
            break;

          case 'plus':
            operations.push(buffer);
            console.log(
              `**  added buffer ${buffer} to operations and initialized it  **`
            );
            res.innerHTML = '';
            buffer = 0;
            operations.push('plus');
            console.log('added plus to operations');
            break;

          case 'minus':
            operations.push(buffer);
            console.log(
              `**  added buffer ${buffer} to operations and initialized it  **`
            );
            res.innerHTML = '';
            buffer = 0;
            operations.push('minus');
            console.log('added minus to operations');
            break;
          case 'dot':
            let length = res.innerHTML.length;
            if (res.innerHTML.slice(length - 1, length) != '.') {
              res.innerHTML += '.';
              buffer = parseFloat(res.innerHTML);
            }
            break;
        }
        console.log(`Operations array::     ${operations}`);
        console.log(`BUFFER::     ${buffer}`);
      }
    });
  }
};

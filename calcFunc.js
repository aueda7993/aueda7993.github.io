function calc_BMI() {
    let Row = table1.rows[0];
    let height = input1.value,
        weight = input2.value;
    if(height>250 || height <= 100 ) {return false;}
    if(weight>250 || weight <= 10 ) {return false;}

    let BMI = weight / height / height * 10000;
    let BMI_float = parseFloat(BMI).toFixed(1);
    let result_pager = Row.cells[1];
    result_pager.innerHTML = BMI_float ;
    //console.log(BMI_float);
    //console.log(height);
    if (BMI_float < 18.5 ) result_pager.className = 'yellow';
    else if (BMI_float >= 25 ) result_pager.className = 'red';
    else result_pager.className = '';
}

function calc_weight() {
    let height = input0.value;
    //console.log(height.length);
    if(height>250 || height <= 100 ) {return false;}
    let firstRow = table0.rows[0],
        secondRow = table0.rows[1];

    let max = firstRow.children.length -1;
    for (let i=0;i<max;i++) {
        let BMI = i+16;
        setvalue = BMI * height * height / 10000;
        let setvalue_float = parseFloat(setvalue).toFixed(1);
        firstRow.cells[i+1].innerHTML = BMI ;
        secondRow.cells[i+1].innerHTML = setvalue_float + 'kg' ;
        //console.log(setvalue);
    }
    /*
    console.log(firstRow);
    console.log(max);
    console.log(height);
    */
}


//window.onload="calc_BMI()";
let input0,table0,
    input1,table1,input2;
(function() {
    input0 = document.getElementById('height');
    table0 = document.getElementById('result1');
    input1 = document.getElementById('your_height');
    input2 = document.getElementById('your_weight');
    table1 = document.getElementById('result0');
    calc_weight();
    calc_BMI();

    addListenerMulti(input0,"click change", calc_weight);
    addListenerMulti(input1,"click change", calc_BMI);
    addListenerMulti(input2,"click change", calc_BMI);
})();

/* Multi Event-Listener */
function addListenerMulti(element, eventNames, listener) {
  let events = eventNames.split(' ');
  for (let i=0, iLen=events.length; i<iLen; i++) {
    element.addEventListener(events[i], listener, false);
  }
}

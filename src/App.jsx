import './App.css'

function App() {
  return (
    <div className="container">
      <Calculator />
      <CalcShow />
    </div>
  )
}

function Calculator() {


  function CreditCalc() {
    let amountInput = document.querySelector(".amountinput input");
    let rateInput = document.querySelector(".rateinput input");
    let termInput = document.querySelector(".terminput input");
    let kredi = Number(amountInput.value);
    let yfaiz = Number(rateInput.value);
    let afaiz = (yfaiz / 100) / 12;
    let taysayi = Number(termInput.value) * 12;
    console.log(kredi);
    console.log(yfaiz);
    console.log(afaiz);
    console.log(taysayi);



    let aylikOdeme = (kredi * (afaiz) * ((1 + afaiz) ** taysayi)) / (((1 + afaiz) ** taysayi) - 1);

    console.log(aylikOdeme);

    let toplamOdeme = (aylikOdeme * 12) * termInput.value;


    function createShowHtml() {
      return (`
        <div>
          <div class="calcText">
            <h3>Your results</h3>
            <p>Your results are shown below based on the information you provided. To adjust the results, edit the form and click “calculate repayments” again.</p>
          </div>
          <div class="show">
            <h4>Your monthly repayments</h4>
            <h1>£${aylikOdeme.toFixed(2)}</h1>
            <hr />
            <h4>Total you'll repay over the term</h4>
            <h3>£${toplamOdeme.toFixed(2)}</h3>
          </div>
        </div>`
      )

    }
    document.querySelector(".calcShow").innerHTML = createShowHtml();
  }


  function clearAll(){
    
    let inputs = document.querySelectorAll("input");
    for (let i = 0; i < inputs.length; i++) {
      inputs[i].value = "";
      inputs[i].checked = false;
    }
  }




  return (
    <div className="calculator">
      <header>
        <h3>Mortgage Calculator</h3>
        <button onClick={clearAll}>Clear All</button>
      </header>

      <form className="calculatorinput" >

        <div className="amount">
          <p>Mortgage Amount</p>
          <div className="amountinput">
            <p className='label'>£</p>
            <input required type="number" className='numberInput' />
          </div>
        </div>

        <div className="termRate">
          <div className="term">
            <p>Mortgage Term</p>
            <div className="terminput">
              <input required type="number" className='numberInput' />
              <p className='label'>years</p>
            </div>
          </div>
          <div className="rate">
            <p>Interest Rate</p>
            <div className="rateinput">
              <input required type="number" className='numberInput' />
              <p className='label'>%</p>
            </div>
          </div>
        </div>



        <div className="types">
          <p>Mortgage Type</p>
          <div className="typeinput">
            <p className='typeradio'><input required type="radio" name='radio' /> Repayment</p>
            <p className='typeradio'><input required type="radio" name='radio'  /> İnterest Only</p>
          </div>
        </div>

      </form>



      <button className='calcBtn' onClick={CreditCalc}>
        <img src="../images/ph_calculator-fill.png" alt="" />Calculate Repayments</button>



    </div>
  )
}

function CalcShow() {
  return (
    <div className="calcShow">
      <img src="../images/showİmg.svg" alt="" />
      <h3>Results shown here</h3>
      <p>Complete the form and click “calculate repayments” to see what your monthly repayments would be.</p>




    </div>
  )
}
export default App

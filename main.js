class Calculator{
    constructor(previousOperandTextelement, currentOperandTextelement){
        this.previousOperandTextelement = previousOperandTextelement
        this.currentOperandTextelement = currentOperandTextelement
        this.clear()
    }
    clear(){
        this. currentOperand = ''
        this. previousOperand = ''
        this. operation = undefined

    }
    delete(){

    }
    appendNumber(number){
        this.currentOperand = number

    }
    chooseOperation(operation){

    }
    compute(){

    }
    updateDisplay(){
        this.currentOperandTextlement.innerText = this.currentOperandTextelement
    }
}


const numberButtons = document.querySelectorAll(['data-number'])
const operationButtons = document.querySelectorAll(['data-operation'])
const equalsButton = document.querySelector(['data-equals'])
const deleteButton = document.querySelector(['data-clear'])
const allClearButton = document.querySelector(['data-all-clear'])
const previousOperandTextelement = document.querySelector(['data-pervious-operand'])
const currentOperandTextelement = document.querySelector(['data-current-operand'])

const calculator = new Calculator (previousOperandTextelement, currentOperandTextelement)

numberButtons.forEach(button => {
    button.addEventListener('click',() =>{
        calculator.appendNumber(button.innerText)
        calculator.updateDisplay()
    })
})

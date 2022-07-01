const rateNumber = document.querySelectorAll('.rate-number')
const btn = document.querySelector('.btn')
const ratingStar = document.querySelector('.rating-star')
const thankYou = document.querySelector('.thank-you.up')
const numberSelected = document.querySelector('.number-selected')
let numberDisplay


rateNumber.forEach((number,index)=>{
    number.onclick = function(e){
        rateNumber.forEach((a,index) => {
        a.classList.remove('active')
        numberDisplay = e.target.dataset.number
        })
        this.classList.add('active')  
    }
})


btn.onclick = ()=> {
    if (numberDisplay) {
        numberSelected.innerText = numberDisplay
        ratingStar.classList.add('up')
        thankYou.classList.add('down')
    }
    else {
        alert('Please rate us. Thank you!')
    }
       
}

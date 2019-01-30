//Event listener
// 1 write the function
//we actually don't need an element (the document will get the event listener)
// 2 write the function that will happen when we do the thing
const moveDodgerLeft = () => {
  // get the dodger first
  const dodger = document.getElementById('dodger')
  // next thing is change the layout/position of dodger
  // which mean we need some css changes
  const currentLeft = dodger.style.left // '180px'
  let currentLeftNumber = currentLeft.replace('px', '')
  currentLeftNumber = parseInt(currentLeftNumber, 10)
  dodger.style.left = currentLeftNumber - 10 + 'px' //179px
}
const moveDodgerRight = () => {
  // get the dodger first
  const dodger = document.getElementById('dodger')
  // next thing is change the layout/position of dodger
  // which mean we need some css changes
  const currentRight = dodger.style.left // '180px'
  let currentRightNumber = currentRight.replace('px', '')
  currentRightNumber = parseInt(currentRightNumber, 10)
  dodger.style.left = currentRightNumber + 10 + 'px' //179px
}
const moveDodgerUp = () => {
  // get the dodger first
  const dodger = document.getElementById('dodger')
  // next thing is change the layout/position of dodger
  // which mean we need some css changes
  const currentUp = dodger.style.left // '180px'
  let currentRightNumber = currentRight.replace('px', '')
  currentRightNumber = parseInt(currentRightNumber, 10)
  dodger.style.left = currentRightNumber + 10 + 'px' //179px
}

const moveDodgerHelper = (event) => {
  //going to figure out do we moveDodgerLeft of moveDodgerRight
  if (event.keyCode === 37) {
    moveDodgerLeft()
  } if (event.keyCode === 39) {
    moveDodgerRight()
  } if (event.keyCode === 38) {
    moveDodgerUp()
  }
}
// 3 Add event listener
document.addEventListener('keydown', moveDodgerHelper)
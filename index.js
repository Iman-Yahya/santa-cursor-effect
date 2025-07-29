let santa = document.getElementById("santa");

function isTouchDevice() {
  try {
    document.createEvent("TouchEvent");
    return true;
  } catch (e) {
    return false;
  }
}

const moveSanta = (e) => {
  let x, y;
  try {
    x = !isTouchDevice() ? e.pageX : e.touches[0].pageX;
    y = !isTouchDevice() ? e.pageY : e.touches[0].pageY;
  } catch (error) {
    return;
  }

  santa.style.left = x - 50 + "px";
  santa.style.top = y - 50 + "px";
};

// Start by attaching movement
document.addEventListener("mousemove", moveSanta);
document.addEventListener("touchmove", moveSanta);

let isMoving = true;

santa.addEventListener("click", function () {
  if (isMoving) {
// Stop moving
    document.removeEventListener("mousemove", moveSanta);
    document.removeEventListener("touchmove", moveSanta);
    isMoving = false;
  } else {
// Start moving again
    document.addEventListener("mousemove", moveSanta);
    document.addEventListener("touchmove", moveSanta);
    isMoving = true;
  }
});
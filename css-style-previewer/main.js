// Create a const because it is not changing.
/*
Select all - will return a node list.
*/
window.URL = window.URL || window.webkitURL;
const inputs = document.querySelectorAll('.controls input');

const check = document.getElementById('checkbox');
const file = document.getElementById('customimage');
const lwdImg = document.querySelector('body > img');
const backgroundcolor = document.getElementById('form');
const docColor = document.getElementById('body');

/* Create a function.
This will be called when there is a change on
any input, selected above
*/
function handleUpdate() {
  // Select the sizing: px or %; if nothing, ''
  const suffix = this.dataset.sizing || '';

  //   Change the ROOT ELEMENT style, which is the VAR in our css.
  document.documentElement.style.setProperty(
    `--${this.name}`,
    this.value + suffix
  );
}

function renderImage() {
  //   work with the files that are uploaded
  const fileList = this.files;

  // Get a generated URL for the file uploaded
  newSrc = window.URL.createObjectURL(fileList[0]);

  //   Set source of image to newly created URL
  lwdImg.src = newSrc;
}

// Add event listeners, and run handleupdate
inputs.forEach(input => input.addEventListener('change', handleUpdate));

inputs.forEach(input => input.addEventListener('mousemove', handleUpdate));

// Listen for checkbos for full width
check.addEventListener('input', e => {
  lwdImg.classList.toggle('width');
});

// Listen for files being uploaded
file.addEventListener('change', renderImage, false);

// Listen for color typed in
backgroundcolor.addEventListener('submit', e => {
  const newColor = document.getElementById('backgroundcolor').value;
  docColor.style.backgroundColor = newColor;

  e.preventDefault();
});

const root = document.documentElement;

document.addEventListener('change', function(event) {
  console.log(event.target);
  root.style.setProperty(
    `--${event.target.name}`,
    event.target.value +
      (event.target.dataset.suffix ? event.target.dataset.suffix : '')
  );
});

// Get the value
// Set the root to the value.setProperty('--variable)

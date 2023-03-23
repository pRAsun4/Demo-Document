const colorBtn = document.getElementById('color-btn');
const viewBtn = document.getElementById('view-btn');
const navBar = document.getElementById('myNav');
const sideBar = document.getElementById('side-bar');


viewBtn.addEventListener('click', () => {
    if(sideBar.style.display !== 'none'){
        sideBar.style.display = 'none';
        navBar.style.display = 'block';
    }
    else {
        sideBar.style.display = 'block';
        navBar.style.display = 'none';
    }
})


colorBtn.addEventListener('click', () => {
	const colorBox = document.createElement('input');
    colorBox.type = 'color';
	colorBox.addEventListener('input', () => {
		const updateColor = colorPicker.value;
		navBar.style.backgroundColor = updateColor;
		localStorage.setItem("store-color", updateColor);
		
	});
	colorBox.click();
});

window.addEventListener("load", function() {
  const storedColor = localStorage.getItem("store-color");

  if (storedColor) {
    navBar.style.backgroundColor = storedColor;
  }
});
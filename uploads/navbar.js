const navbar = document.createElement('navbar');
template.innerHTML = `

<div class="navbar">
  <a href="https://wolfsmaps.github.io/cattpa/">Home</a>
  <a href="https://wolfsmaps.github.io/cattpa/aboutus">About us</a>
  <div class="dropdown">
    <button class="dropbtn">Citys
      <i class="fa fa-caret-down"></i>
    </button>
    <div class="dropdown-content">
      <a href="#">Link 1</a>
      <a href="#">Link 2</a>
      <a href="#">Link 3</a>
    </div>
  </div>
</div>`

document.body.appendChild(navbar);
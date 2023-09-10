# cats-and-books
This is a personal project about cats and books.

Colors
https://www.w3schools.com/w3css/w3css_colors.asp

Star Icon
https://fontawesome.com/v4/icons/
https://fontawesome.com/v4/icon/star
https://fontawesome.com/v4/icon/star-half-o

Cat Icons
https://www.flaticon.com/
https://www.flaticon.com/free-icon/kitty_763723?term=cats&related_id=763723
https://www.flaticon.com/free-icon/kitty_763781?term=kitty&page=5&position=7&origin=search&related_id=763781




<div class="w3-display-bottomleft w3-white">
        <div class="w3-dropdown-hover w3-white">
          <img src="kitty-book.png" style="width:10%; height:10%">
          <h6 style="display: inline-block;" ><i><b style="color: rgb(148, 21, 120)">INES</b></i></h6>
          <div class="w3-dropdown-content w3-card-4" style="width:500px">
            <div class="w3-container">
              <h6> {{book.reviewInes}}<b style="display: inline-block; color: rgb(148, 21, 120)">&nbsp;&nbsp;{{book.starsInes}}</b> </h6>
            </div>
          </div>
        </div>
        <div class="w3-dropdown-hover">
          <img src="kitty-coffee.png" style="width:10%; height:10%">
          <h6 style="display: inline-block;" ><i><b style="color: rgb(13, 94, 114)">&nbsp;&nbsp;TERESA</b></i></h6>
          <div class="w3-dropdown-content w3-card-4" style="width:500px">
            <div class="w3-container">
              <h6> {{book.reviewTeresa}}<b style="display: inline-block; color: rgb(13, 94, 114)">&nbsp;&nbsp;{{book.starsTeresa}}</b> </h6>
            </div>
          </div>
        </div>
      </div>

      <!DOCTYPE html>
<html>
<head>
<title>W3.CSS Template</title>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css">
<link rel="stylesheet" href="https://www.w3schools.com/lib/w3-theme-black.css">
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.3.0/css/font-awesome.min.css">
</head>
<body>

<!-- Side Navigation -->
<nav class="w3-sidebar w3-bar-block w3-card w3-animate-left w3-center" style="display:none" id="mySidebar">
  <h1 class="w3-xxxlarge w3-text-theme">Side Navigation</h1>
  <button class="w3-bar-item w3-button" onclick="w3_close()">Close <i class="fa fa-remove"></i></button>
  <a href="#" class="w3-bar-item w3-button">Link 1</a>
  <a href="#" class="w3-bar-item w3-button">Link 2</a>
  <a href="#" class="w3-bar-item w3-button">Link 3</a>
  <a href="#" class="w3-bar-item w3-button">Link 4</a>
</nav>

<!-- Header -->
<header class="w3-container w3-theme w3-padding" id="myHeader">
  <i onclick="w3_open()" class="fa fa-bars w3-xlarge w3-button w3-theme"></i> 
  <div class="w3-center">
  <h4>BEAUTIFUL RESPONSIVE WEB SITES</h4>
  <h1 class="w3-xxxlarge w3-animate-bottom">BUILT WITH W3.CSS</h1>
    <div class="w3-padding-32">
      <button class="w3-btn w3-xlarge w3-dark-grey w3-hover-light-grey" onclick="document.getElementById('id01').style.display='block'" style="font-weight:900;">LEARN W3.CSS</button>
    </div>
  </div>
</header>

<!-- Modal -->
<div id="id01" class="w3-modal">
    <div class="w3-modal-content w3-card-4 w3-animate-top">
      <header class="w3-container w3-theme-l1"> 
        <span onclick="document.getElementById('id01').style.display='none'"
        class="w3-button w3-display-topright">×</span>
        <h4>Oh snap! We just showed you a modal..</h4>
        <h5>Because we can <i class="fa fa-smile-o"></i></h5>
      </header>
      <div class="w3-padding">
        <p>Cool huh? Ok, enough teasing around..</p>
        <p>Go to our <a class="w3-btn" href="/w3css/default.asp">W3.CSS Tutorial</a> to learn more!</p>
      </div>
      <footer class="w3-container w3-theme-l1">
        <p>Modal footer</p>
      </footer>
    </div>
</div>

<div class="w3-row-padding w3-center w3-margin-top">
<div class="w3-third">
  <div class="w3-card w3-container" style="min-height:460px">
  <h3>Responsive</h3><br>
  <i class="fa fa-desktop w3-margin-bottom w3-text-theme" style="font-size:120px"></i>
  <p>Built-in responsiveness</p>
  <p>Mobile first fluid grid</p>
  <p>Fits any screen sizes</p>
  <p>PC Tablet and Mobile</p>
  </div>
</div>

<div class="w3-third">
  <div class="w3-card w3-container" style="min-height:460px">
  <h3>Standard CSS</h3><br>
  <i class="fa fa-css3 w3-margin-bottom w3-text-theme" style="font-size:120px"></i>
  <p>Standard CSS only</p>
  <p>Easy to learn</p>
  <p>No need for jQuery</p>
  <p>No JavaScript library</p>
  </div>
</div>

<div class="w3-third">
  <div class="w3-card w3-container" style="min-height:460px">
  <h3>Design</h3><br>
  <i class="fa fa-diamond w3-margin-bottom w3-text-theme" style="font-size:120px"></i>
  <p>Paper like design</p>
  <p>Bold colors and shadows</p>
  <p>Equal across platforms</p>
  <p>Equal across devices</p>
  </div>
</div>
</div>

<div class="w3-container">
<hr>
<div class="w3-center">
  <h2>Color Classes</h2>
</div>

<div class="w3-row">
  <div class="w3-col w3-container m2 w3-red"><p>Red</p></div>
  <div class="w3-col w3-container m2 w3-blue"><p>Blue</p></div>
  <div class="w3-col w3-container m2 w3-blue-grey"><p>Blue Grey</p></div>
  <div class="w3-col w3-container m2 w3-teal"><p>Teal</p></div>
  <div class="w3-col w3-container m2 w3-yellow"><p>Yellow</p></div>
  <div class="w3-col w3-container m2 w3-orange"><p>Orange</p></div>
</div>

<hr>
<div class="w3-center">
  <h2>Built-In Responsiveness</h2>
  <p class="w3-large">Resize the page to see the effect!</p>
</div>
<br>

<div class="w3-row w3-border">
  <div class="w3-half w3-container w3-blue w3-border">
    <h5>w3-half</h5>  
    <p>The w3-half class uses half (50%) of the screen window.</p>
    <p>On small screens (max 600 pixels) it automatically resizes to full screen width.</p>
  </div>
  <div class="w3-half w3-container">
    <h5>w3-half</h5>  
  </div>
</div>
<br>

<div class="w3-row w3-border">
  <div class="w3-third w3-container w3-green">
    <h5>w3-third</h5>  
    <p>The w3-third class uses one third (33.33%) of the screen widow.</p>
    <p>On small screens (max 600 pixels) it automatically resizes to full screen width.</p>
  </div>
  <div class="w3-third w3-container">
    <h5>w3-third</h5>  
  </div>
  <div class="w3-third w3-container">
    <h5>w3-third</h5>  
  </div>
</div>
<br>

<div class="w3-row w3-border">
  <div class="w3-quarter w3-container w3-red">
    <h5>w3-quarter</h5>  
    <p>The w3-quarter class uses one quarter (25%) of the screen window.</p>
    <p>On small screens (max 600 pixels) it automatically resizes to full screen width.</p>
  </div>
  <div class="w3-quarter w3-container">
    <h5>w3-quarter</h5>  
  </div>
  <div class="w3-quarter w3-container">
    <h5>w3-quarter</h5>  
  </div>
  <div class="w3-quarter w3-container">
    <h5>w3-quarter</h5>  
  </div>
</div> 
     
<div class="w3-center">
  <h2>Containers</h2>
  <p>Use containers to create headers, sections and footers.</p>
</div>   

<header class="w3-container w3-blue-grey">
  <h2>Header</h2>
</header>

<div class="w3-padding w3-white w3-display-container">
  <span onclick="this.parentElement.style.display='none'" class="w3-button w3-display-topright"><i class="fa fa-remove"></i></span>
  <h2>London</h2>
  <p>London is the capital city of England. It is the most populous city in the United Kingdom,
  with a metropolitan area of over 13 million inhabitants.</p>
  <p>Standing on the River Thames, London has been a major settlement for two millennia,
  its history going back to its founding by the Romans, who named it Londinium.</p>
  <p>By the way, you can add a close icon to all containers if you want the ability to hide them. Look to your right!</p>
</div>

<footer class="w3-container w3-blue-grey">
  <h5>Footer</h5>
  <p class="w3-opacity">Footer information goes here</p>
</footer>

<hr>
<div class="w3-center">
  <h2>Color Themes</h2>
  <p>The color themes have been designed to work harmoniously with each other.</p>
</div>
</div>

<div class="w3-row-padding">

<div class="w3-half">
<div class="w3-card white">
  <div class="w3-container w3-indigo">
    <h3>Theme Indigo</h3>
  </div>
  <div class="w3-container">
  <h3 class="w3-text-indigo">Movies 2014</h3>
  </div>
  <ul class="w3-ul w3-border-top">
    <li>
      <h3>Frozen</h3>
      <p>The response to the animations was ridiculous</p>
    </li>
    <li>
      <h3>The Fault in Our Stars</h3>
      <p>Touching, gripping and genuinely well made</p>
    </li>
    <li>
      <h3>The Avengers</h3>
      <p>A huge success for Marvel and Disney</p>
    </li>
  </ul>
  <div class="w3-container w3-indigo w3-large"><span class="w3-right">Next</span></div>
</div>
</div>

<div class="w3-half">
<div class="w3-card white">
  <div class="w3-container w3-theme">
    <h3>Theme</h3>
  </div>
  <div class="w3-container">
  <h3 class="w3-text-theme">Movies 2014</h3>
  </div>
  <ul class="w3-ul w3-border-top">
    <li>
      <h3>Frozen</h3>
      <p>The response to the animations was ridiculous</p>
    </li>
    <li>
      <h3>The Fault in Our Stars</h3>
      <p>Touching, gripping and genuinely well made</p>
    </li>
    <li>
      <h3>The Avengers</h3>
      <p>A huge success for Marvel and Disney</p>
    </li>
  </ul>
  <div class="w3-container w3-theme w3-large"><span class="w3-right">Next</span></div>
</div>
</div>
</div>

<div class="w3-container w3-center">
  <hr>
  <h3>Paper-like Cards with Shadows</h3>
</div>

<div class="w3-row-padding"> 

<div class="w3-third">
<div class="w3-card">
  <img src="/w3images/car.jpg" alt="Car" style="width:100%">
  <div class="w3-container">
  <p>w3-card</p>
  </div>
</div>
</div>

<div class="w3-third">
<div class="w3-card-4">
  <img src="/w3images/car.jpg" alt="Car" style="width:100%">
  <div class="w3-container">
  <p>w3-card-4</p>
  </div>
</div>
</div>

<div class="w3-third">
<div class="w3-card-4">
  <img src="/w3images/car.jpg" alt="Car" style="width:100%">
  <div class="w3-container">
  <p>w3-card-4</p>
  </div>
</div>
</div>
</div>

<div class="w3-container">
  <hr>
  <div class="w3-center">
    <h2>Tables</h2>
    <p w3-class="w3-large">Don't worry. W3.CSS takes care of your tables.</p>
  </div>
<div class="w3-responsive w3-card-4">
<table class="w3-table w3-striped w3-bordered">
<thead>
<tr class="w3-theme">
  <th>First Name</th>
  <th>Last Name</th>
  <th>Points</th>
</tr>
</thead>
<tbody>
<tr>
  <td>Jill</td>
  <td>Smith</td>
  <td>50</td>
</tr>
<tr class="w3-white">
  <td>Eve</td>
  <td>Jackson</td>
  <td>94</td>
</tr>
<tr>
  <td>Adam</td>
  <td>Johnson</td>
  <td>67</td>
</tr>
</tbody>
</table>
</div>

<hr>
<h2 class="w3-center">Forms and Lists</h2>
</div>

<div class="w3-row-padding">

<div class="w3-half">
<form class="w3-container w3-card-4">
  <h2>Input Form</h2>
  <div class="w3-section">      
    <input class="w3-input" type="text" required>
    <label>Name</label>
  </div>
  <div class="w3-section">      
    <input class="w3-input" type="text" required>
    <label>Email</label>
  </div>
  <div class="w3-section">      
    <input class="w3-input" type="text" required>
    <label>Subject</label>
  </div>

  <div class="w3-row">
  <div class="w3-half">
    <input id="milk" class="w3-check" type="checkbox" checked="checked">
    <label>Milk</label>
    <br>
    <input id="sugar" class="w3-check" type="checkbox">
    <label>Sugar</label>
    <br>
    <input id="lemon" class="w3-check" type="checkbox" disabled>
    <label>Lemon (Disabled)</label>
    <br><br>
  </div>

  <div class="w3-half">
    <input id="male" class="w3-radio" type="radio" name="gender" value="male" checked>
    <label>Male</label>
    <br>
    <input id="female" class="w3-radio" type="radio" name="gender" value="female">
    <label>Female</label>
    <br>
    <input id="unknown" class="w3-radio" type="radio" name="gender" value="" disabled>
    <label> Don't know (Disabled)</label>
  </div>
  </div>
</form>
</div>
<div class="w3-half">
<div class="w3-card-4 w3-container">
<h2>Lists</h2>
<ul class="w3-ul w3-margin-bottom">




https://covers.openlibrary.org/b/id/10383140-L.jpg
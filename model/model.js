var homeContent = `<div class="hero-image">
<h1>Header goes here</h1>
<h6>Less important text goes here</h6>

<p>
  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat
  aliquid minus nemo sed est.
</p>

<button>Read More</button>
</div>
<div class="image-spacer"></div>
<div class="quote">
<div class="content">
  <h3>
    “Sed ut perspiciatis unde omnis iste natus error sit voluptatem
    accusantium doloremque laudantium totam rem aperiam eaque ipsa quae
    ab illo inventore veritatis et quasi architecto beatae vitae dicta
    sunt explicabo. Iste natus error sit voluptatem accusantium
    doloremque laudantium totam rem aperiam eaque ipsa quae ab illo
    inventore veritatis et quasi architecto beatae vitae dicta sunt
    explicabo”
  </h3>
  <h4>John Smith</h4>
  <p>Corporation CEO, books author.</p>
</div>
</div>
<div class="events-container">
<div class="header">
  <h2>UPCOMING EVENTS:</h2>
  <hr />
</div>
<div class="events">
  <div class="event">
    <div class="date">
      <h4>30</h4>
      <p>JUN</p>
    </div>
    <div class="content">
      <h5>Sed et persipiatis unde omnis iste natus</h5>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Aliquid temporibus quos aspernatur
      </p>
    </div>
  </div>
  <div class="event">
    <div class="date">
      <h4>30</h4>
      <p>JUL</p>
    </div>
    <div class="content">
      <h5>Sed et persipiatis unde omnis iste natus</h5>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Aliquid temporibus quos aspernatur
      </p>
    </div>
  </div>
  <div class="event">
    <div class="date">
      <h4>30</h4>
      <p>AUG</p>
    </div>
    <div class="content">
      <h5>Sed et persipiatis unde omnis iste natus</h5>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Aliquid temporibus quos aspernatur
      </p>
    </div>
  </div>
  <div class="event">
    <div class="date">
      <h4>23</h4>
      <p>NOV</p>
    </div>
    <div class="content">
      <h5>Sed et persipiatis unde omnis iste natus</h5>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Aliquid temporibus quos aspernatur
      </p>
    </div>
  </div>
  <div class="event">
    <div class="date">
      <h4>23</h4>
      <p>DEC</p>
    </div>
    <div class="content">
      <h5>Sed et persipiatis unde omnis iste natus</h5>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Aliquid temporibus quos aspernatur
      </p>
    </div>
  </div>
</div>
</div>`;
var aboutContent = `<h1>ABOUT</h1>`;
var galleryContent = ``;
var blogContent = ``;
var contactContent = ``;


export function modelPageName(pgName){    

    try {
      eval(pgName);  
      $("#app").html(eval(pgName));

    } catch (e) {
      console.log("Hello ", e);
    }

    if(pgName == "homeContent"){
      $("nav").removeClass("black-text").addClass("white-text");
    }else{
      $("nav").removeClass("white-text").addClass("black-text");
    }
}


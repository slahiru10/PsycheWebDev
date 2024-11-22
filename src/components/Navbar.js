import React from 'react';

function Navbar() {
  return (
    <nav class="navbar bg-body-tertiary">
  <div class="container-fluid">
    <button data-mdb-button-init class="navbar-toggler ms-auto" type="button" data-mdb-collapse-init
      data-mdb-target="#navbarToggleExternalContent3" aria-controls="navbarToggleExternalContent3"
      aria-expanded="false" aria-label="Toggle navigation">
      <i class="fas fa-bars"></i>
    </button>
  </div>
</nav>
<div class="collapse" id="navbarToggleExternalContent3">
  <div class="bg-body-tertiary shadow-3 p-4">
    <button data-mdb-button-init data-mdb-ripple-init
      class="btn btn-link btn-block border-bottom m-0">Homepage</button>
    <button data-mdb-button-init data-mdb-ripple-init
      class="btn btn-link btn-block border-bottom m-0">Official Psyche Page</button>
    <button data-mdb-button-init data-mdb-ripple-init
      class="btn btn-link btn-block m-0">Learn More</button>
           <button data-mdb-button-init data-mdb-ripple-init
      class="btn btn-link btn-block m-0">Videos</button>
           <button data-mdb-button-init data-mdb-ripple-init 
      class="btn btn-link btn-block m-0">Credits</button>
  </div>
</div>
  );
}

export default Navbar;

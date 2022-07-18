const header = ` <header class="header">
<div class=logo>
    <ul >
        <li class="logo-col1">Match</li>
        <li class="logo-col2">Match</li>
    </ul>
</div>
<nav class="nav">
<ul >
    <li class= "about-img">
        
    </li>
    <li class ="best-img">
       
    </li>
    <li class ="setting-img">
        
    </li>
    <li class="reg-btn">

    </li>
     <a class="play-btn"></a>
     <a class="stop-btn"></a>
</ul>
</nav>
</header>
<div class="congrats">
<div class="congr-win">
<p class ="congr-text"></p>
<button class="btn btn-ok" >Ok</button>
</div>
</div>
<div id = "mod-wrap" class="modal-wrap">
      <div  class="modal">
          <div class="avatar"></div>
          <div class="modal-align">
          <h3>Register new Player</h3>
          <form>
          <input class = "modal-sub" type="text" placeholder="First Name" required>
          <div class='txt-container'>
  <p class ='formTxt'>length cannot exceed 30 characters</p>
  <p class ='formTxt2'>the name cannot consist of a number or be empty</p>
  <p class ='formTxt3'>symbols cannot be used</p>
  </div>
          <input class = "modal-sub" type="text" placeholder="Second Name" required>
          <div class='txt-container'>
          <p class ='formTxt'>length cannot exceed 30 characters</p>
          <p class ='formTxt2'>the name cannot consist of a number or be empty</p>
          <p class ='formTxt3'>symbols cannot be used</p>
          </div>
          <input class = "modal-sub" type="text" placeholder="example@gmail.com" required>
          <p class = 'form_email'>email incorrect</p>
          <button class="btn fedb-modal" onclick='event.preventDefault()' >Add user</button>
      </form>
      <button class="btn btn-cancel" >Cancel</button>
      </div>
      </div>
  </div>
<div class="main">

</div>`
export default header

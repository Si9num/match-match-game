import './rules.css'

const rules = `<div class ='set-field'>
<div class="setting">
<p>Game cards</p>
<p class="select-type">select game cards type</p>
<div class="arrow"></div>
<div class="rad-btn-cont">
<form class='form-for-btn' >
  <input type="radio"  name="rad" value="animal" >Animals
  <br>
  <input type="radio"  name="rad" value="NBA">NBA
</form>
</div>
</div>
<div class="setting">
<p>Difficulty</p>
<p class="select-type">select game type</p>
<div class ="arrow"></div>
<form class='form-for-btn' >
  <input type="radio"  name="rad" value="easy" >Easy
  <br>
  <input type="radio"  name="rad" value="medium">Medium
  <br>
  <input type="radio"  name="rad" value="hard">Hard
  
</form>
<button class='btn btn-apply'>Apply</button>
</div>
</div>
 `
export default rules

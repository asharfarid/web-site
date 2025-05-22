window.onload = function() {
    const navDiv = document.createElement('div');
    navDiv.className = 'title-buttons';
  
    const statesbutton = document.createElement('button');
    statesbutton.textContent = 'States';
    statesbutton.onclick = () => window.location.href = '../States.html';
  
    const homebutton = document.createElement('a');
    homebutton.textContent = 'Home';
    homebutton.href = '../../index.html';
  
    navDiv.appendChild(statesbutton);
    navDiv.appendChild(homebutton);
  
    document.body.appendChild(navDiv);
  };
  
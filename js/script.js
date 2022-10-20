const grid = document.querySelector('.grid');
const limit = 100;
const dim = Math.sqrt(limit);
const printConsole = (mex) => console.log(mex);
const btn = document.querySelector('.btn');

btn.addEventListener('click', function(){
  grid.classList.remove('d-none');
  initGrid();
});

function initGrid(){
  for(let i=0; i<limit; i++){
    createCell(i);
  }
}

function createCell(index){
  const cell = document.createElement('div');
  cell.style.width = `calc(${100}% / ${dim})`;
  cell.classList.add('cell');
  cell.innerHTML = index + 1;
  cell.id = index + 1;
  grid.appendChild(cell);

  cell.addEventListener('click', function(){
    printConsole(this.id);
    this.classList.add('clicked');
  });
}



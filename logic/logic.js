function createField(size) {
   const field = [];
   for (let i = 0; i < size.y; i++) {
      const subField = [];
      for (let j = 0; j < size.x; j++) {
         subField.push({
            isMine: false,
            isOpen: false,
            isFlag: false,
            number: 0,
            x: j,
            y: i,
         });
      }
      field.push(subField);
   }
   return field;
}

function setRandomMines(field, size, mines) {
   let cells = [];
   for (let y = 0; y < size.y; y++) {
      for (let x = 0; x < size.x; x++) {
         cells.push(field[y][x]);
      }
   }
   for (let i = 0; i < mines; i++) {
      let cell = cells[getRandomInt(cells.length)];
      cell.isMine = true;
      setNumbers(field, cell);
      cells = cells.filter(item => item != cell);
   }
   return field;
}

function getRandomInt(max) {
   return Math.floor(Math.random() * max);
}

function setNumbers(field, cell) {
   let nearCells = getNearCells(field, cell.x, cell.y);
   nearCells.forEach(item => {
      if (!item.isMine) {
         item.number++;
      }
   });
}

export function getNearCells(field, x, y) {
   const nearCells = [];
   for (let i = -1; i <= 1; i++) {
      for (let j = -1; j <= 1; j++) {
         if (i === 0 && j === 0) {
            continue;
         }
         let cell = getSell(field, x + i, y + j);
         if (cell) {
            nearCells.push(cell);
         }
      }
   }
   return nearCells;
}

function getSell(field, x, y) {
   if (!field[y] || !field[y][x]) {
      return false;
   }
   return field[y][x];
}

export function getReadyField(size, mines) {
   let field = createField(size);
   let fieldWithMines = setRandomMines(field, size, mines);

   return fieldWithMines;
}

export function openClearCells(params, field) {
   params.checked = true;

   let process = true;

   while (process) {
      process = false;

      field.forEach(elem => {
         elem.forEach(elem => {
            if (elem.checked && elem.number === 0) {
               let cells = getNearCells(field, elem.x, elem.y);

               cells.forEach(elem => {
                  if (!elem.checked && !elem.isFlag) {
                     elem.checked = true;
                     process = true;
                  }
               });
            }
         });
      });
   }

   field.forEach(elem => {
      elem.forEach(elem => {
         if (elem.checked) {
            elem.isOpen = true;
         }
      });
   });

   return field;
}

export function openAll(field) {
   field.map(elem => {
      elem.map(cell => {
         cell.isOpen = true;
      });
   });
   return field;
}

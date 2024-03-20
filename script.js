// function moveId() {
//     var sourceElement = document.getElementById('category-active');
//     var targetElement = document.querySelector(':not([id])');
  
//     if (sourceElement && targetElement) {
//       var idToMove = sourceElement.id;
//       targetElement.id = idToMove;
//       sourceElement.removeAttribute('id');
//       alert("ID berhasil dipindahkan!");
//     } else {
//       alert("Elemen sumber atau elemen tujuan tidak ditemukan!");
//     }
//   }

document.getElementById('konten1').style.display = 'block';

function switchActive(clickedElement) {
    var kategoris = document.querySelectorAll('.kategori'); 
    kategoris.forEach(function(kategori) {
      if (kategori === clickedElement) { 
        kategori.classList.add('active'); 
      } else {
        kategori.classList.remove('active');
      }
    });
    
    var kontens = document.querySelectorAll('.konten');
  kontens.forEach(function(konten) {
    konten.style.display = 'none';
  });

  // Menampilkan konten sesuai dengan kategori yang dipilih
  var activeKontenId = clickedElement.getAttribute('id').replace('kategori', 'konten');
  var activeKonten = document.getElementById(activeKontenId);
  if (activeKonten) {
    activeKonten.style.display = 'block';
  }

}
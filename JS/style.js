document.addEventListener("DOMContentLoaded", function () {
    var squareSideInput = document.getElementById("squareSide");
    var countButton = document.getElementById("countButton");
    var resetButton = document.getElementById("resetButton");
    var luaspersegi = document.getElementById("luaspersegi");
    var kelilingpersegi = document.getElementById("kelilingpersegi");
    var result = document.getElementById("result");
    var hasil = document.getElementById("hasil");
    
      countButton.addEventListener("click", function () {
      var sisi = parseFloat(squareSideInput.value);
    
    if (!isNaN(sisi) && sisi > 0) {
                var luas = sisi * sisi;
                var keliling = 4 * sisi;
                hasil.textContent = "HASIL :";
                luaspersegi.textContent = "Luas: " + luas;
                kelilingpersegi.textContent = "Keliling: " + keliling;
            } else {
                result.textContent = "*Panjang sisi tidak valid";
                squareSideInput.value = "";
            }
        });
      resetButton.addEventListener("click", function () {
              squareSideInput.value = "";
              luaspersegi.textContent = "";
              kelilingpersegi.textContent = "";
              hasil.textContent = "";
      
          });
    });
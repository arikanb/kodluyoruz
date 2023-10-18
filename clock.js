document.addEventListener("DOMContentLoaded", function () {
    // Sayfa yüklendiğinde çalışacak kodlar
    var myName = prompt("Adınızı girin:"); // Kullanıcıdan ismi al
    var currentDate = new Date(); // Güncel tarih ve saat
    var options = { year: "numeric", month: "long", day: "numeric" };
    var formattedDate = currentDate.toLocaleDateString("tr-TR", options);
  
    // İsim ve tarih bilgisini HTML sayfasına ekle
    var nameElement = document.getElementById("myName");
    nameElement.textContent = myName;
  
    var dateElement = document.getElementById("myClock");
    dateElement.textContent = "tarihinde " + "Kodluyoruz Frontend Web Development Patikası'nın Javascript bölümü 1. Ödevindesiniz.";
  
    // Saati güncellemek için her saniyede bir fonksiyonu çağır
    setInterval(function () {
      var currentTime = new Date();
      var hours = currentTime.getHours();
      var minutes = currentTime.getMinutes();
      var seconds = currentTime.getSeconds();
      dateElement.textContent = formattedDate + " " + hours + ":" + minutes + ":" + seconds;
    }, 1000);
  });
  
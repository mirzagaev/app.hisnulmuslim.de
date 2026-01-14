// beim Laden
if (localStorage.getItem('theme') === 'dark') {
  document.documentElement.classList.add('dark');
}

// beim Umschalten
function toggleDarkMode() {
  document.documentElement.classList.toggle('dark');
  localStorage.setItem('theme',
    document.documentElement.classList.contains('dark') ? 'dark' : 'light'
  );
}

$(document).ready(function() {
    $("#search_open").click(function() {
        $("#hmlogotop").hide();
        $("#mobilemenu_opener").hide();
        $("#search_close").show();
        $("#searchfield").show();
        $("#searchfield").focus();
    });
    $("#search_close").click(function() {
        $("#hmlogotop").show();
        $("#mobilemenu_opener").show();
        $("#search_close").hide();
        $("#searchfield").hide();
    });

    $(".chapterLinks").on("click", function() {
      $("#cart-drawer").removeClass("translate-x-full");
      $("#cart-overlay").removeClass("hidden");
      return false;
    });

    $("#cart-overlay, #closeDrawer-cart").on("click", function() {
      $("#cart-drawer").addClass("translate-x-full");
      $("#cart-overlay").addClass("hidden");
      return false;
    });

    $(".open_transliteration").on("click", function() {
      $("#transliteration-drawer").removeClass("-translate-x-full");
      $("#transliteration-overlay").removeClass("hidden");
      return false;
    });

    $("#transliteration-overlay, #closeDrawer-transliteration").on("click", function() {
      $("#transliteration-drawer").addClass("-translate-x-full");
      $("#transliteration-overlay").addClass("hidden");
      return false;
    });

    $(".copyToClipboardBtns button").click(function() {
      $(this).find("span:first-child").hide();
      $(this).find(".hidden").show();
      $("#toast-simple > .toast-content").text("Link kopiert.");
      $("#toast-simple").fadeIn(500);
    });
});
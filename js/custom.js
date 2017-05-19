<script type="text/javascript">
  window.onload = function() {
    var form = document.querySelector("#search-block-form");
    var persone = form.querySelector("#edit-custom-search-paths-httpwwwunitsitsearchabookindexphpscope-keywherepeople");
    var contenuti = form.querySelector("#edit-custom-search-paths-searchnode-key");
    var key = form.querySelector("#edit-search-block-form--2");
    
    form.onsubmit = function(){				
      if (contenuti.checked && key.value) {
        window.location.href = "https://units.interfase.info/search/node/" + key.value;
      } else if (persone.checked && key.value) {
        window.location.href = "https://www.units.it/search/abook/index.php?scope="+key.value+"&where=people";
      }
      return false;
    }
  }
</script>

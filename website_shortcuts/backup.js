    function store_select_search_button(){
      
      var searchTerm=document.getElementById("store_select_search").value;
      var store_selection=document.getElementById("store_select").value;
      var use_in_store=document.getElementById("store_select_instore_checkbox").checked;
      var in_stores=[];
      var url_to_open="";


      if (store_selection=="homeDepot") {

        if (use_in_store==false) {
          url_to_open="https://www.homedepot.com";
        } else {
          url_to_open="https://www.homedepot.com/b/Pick-Up-Today/N-5yc1vZ1z175a5/Ntk-semanticsearch/Ntt-"+searchTerm+"?NCNI-5&browsestoreoption=1&storeSelection=1258";
          // if () {} else {}
        }

bayshore homedepot https = "www.homedepot.com/b/Pick-Up-Today/N-5yc1vZ1z175a5/Ntk-semanticsearch/Ntt-hose?NCNI-5&browsestoreoption=1&storeSelection=1211"

patchogue homedepot https = " www.homedepot.com/b/Pick-Up-Today/N-5yc1vZ1z175a5/Ntk-semanticsearch/Ntt-hose?NCNI-5&browsestoreoption=1&storeSelection=1258"

home depot map search url https://www.homedepot.com/l/search/1258/full/?lat=40.52497517207139&lng=-72.87931266015623&radius=50


      } else if (store_selection=="walmart") {

        var url_first_part="https://www.walmart.com/search/?cat_id=0&query=";
        var islandia_store_num=2917;
        var commack_store_num=5202;
        var center_reach_num=2286;

        // url_to_open=
      } else {
        url_to_open="";
      }

WALMART
      islandia_url="https://www.walmart.com/search/?cat_id=0&query=hose&stores=2917"
commack_url="https://www.walmart.com/search/?cat_id=0&query=hose&stores=5202";
centerreach_url="https://www.walmart.com/search/?cat_id=0&query=hose&stores=2286";

all_three_url="https://www.walmart.com/search/?cat_id=0&query=hose&stores=2286%2C2917%2C5202";

      window.open(url_to_open, store_selection);
    }




          url_to_open="https://www.homedepot.com/b/Pick-Up-Today/N-5yc1vZ1z175a5/Ntk-semanticsearch/Ntt-"+searchTerm+"?NCNI-5&browsestoreoption=1&storeSelection=1258";
          if () {} else {}

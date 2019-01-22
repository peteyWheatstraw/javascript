            if (selectedStore.multiplePages==false){
              var text_to_add=''
              for (var j = 0; j < selectedLocalStores.length; j++) {
                text_to_add=text_to_add+selectedLocalStores[j].url_text_to_add;
                if (j<selectedLocalStores.length-1) {
                  text_to_add=text_to_add+selectedStore.url_local_stores_breaker;
                }
              }
              urls_to_open[0]=urls_to_open[0]+text_to_add;
            } else {
              for (var j = 0; j < selectedLocalStores.length; j++) {
                urls_to_open[j]=urls_to_open[j]+selectedLocalStores[j].url_text_to_add;
              }
            }



//HTML 


// <!--     <select id="store_select" onchange="show_available_local_stores()">

//     </select>
//     <input type="checkbox" id="store_select_instore_checkbox" checked=true>
//     <label> instore</label>
//     <button onclick="store_select_search_button()">SEARCH</button>
//     <fieldset>
//       <legend id="store_select_local_stores">Choose Which Stores</legend>
//       <div id="local_stores_list">
//         <div><input type="checkbox" class="localStores"> <label>testy</label></div>
//       </div>
//     </fieldset> -->





    function store_select_search_button(){
      
      var searchTerm=document.getElementById("store_select_search").value;
      var store_selection=document.getElementById("store_select").value;
      var use_in_store=document.getElementById("store_select_instore_checkbox").checked;
      var selectedLocalStores=[];
      var urls_to_open=[];
      var url_string="";
      var selectedStore;

            //FIND SPECIFIC STORE OBJECT
      for (var i = 0; i < store_objs.length; i++) {
        if (store_objs[i].storeName==store_selection){
          selectedStore=store_objs[i];
        }
      }


      //generate inStores
      var possibleLocalSelectedStores = document.getElementsByClassName("localStores");
      for (var i = 0; i < possibleLocalSelectedStores.length; i++) {
        if (possibleLocalSelectedStores[i].checked==true){
          for (var j = 0; j < selectedStore.local_stores.length; j++) {
            if (selectedStore.local_stores[j].name==possibleLocalSelectedStores[i].name){
              selectedLocalStores.push(selectedStore.local_stores[j]);
            }
          }
          // selectedLocalStores.push(possibleLocalSelectedStores[i]);
        }
      }

      function updateUrlsToOpen(textStr){

        for (var i = 0; i < urls_to_open.length; i++) {
          urls_to_open[i]=urls_to_open[i]+textStr;
        }
      }



      if (use_in_store==false) {
        urls_to_open.push([selectedStore.basicUrl]);
      } else {

        if (selectedStore.multiplePages==true  && selectedLocalStores.length>0) {
          for (var i = 0; i < selectedLocalStores.length; i++) {
            urls_to_open.push("");
          }
        } else {
            urls_to_open.push("");
        }

        for (var i = 0; i < selectedStore.url_parts.length; i++) {
          
          var this_url_part=selectedStore.url_parts[i];
          
          if (this_url_part=="___selectedLocalStoreText") {
            if (selectedStore.multiplePages==false){
              var text_to_add=''
              for (var j = 0; j < selectedLocalStores.length; j++) {
                text_to_add=text_to_add+selectedLocalStores[j].url_text_to_add;
                if (j<selectedLocalStores.length-1) {
                  text_to_add=text_to_add+selectedStore.url_local_stores_breaker;
                }
              }
              urls_to_open[0]=urls_to_open[0]+text_to_add;
            } else {
              for (var j = 0; j < selectedLocalStores.length; j++) {
                urls_to_open[j]=urls_to_open[j]+selectedLocalStores[j].url_text_to_add;
              }
            }
          }
          else if(this_url_part=="___searchTerm"){
            updateUrlsToOpen(searchTerm);
          } 
          else {
            updateUrlsToOpen(this_url_part);
          }
        }
      }

      console.log('selected store is ', selectedStore);
      console.log('selected local stores are ', selectedLocalStores);
      console.log('urls_to_open is ', urls_to_open);

      for (var i = 0; i < urls_to_open.length; i++) {
        window.open(urls_to_open[i],"whoa"+i);
      }
    
      // window.open(url_to_open, store_selection);
    }

    function show_available_local_stores(){
      var local_stores_list=document.getElementById("local_stores_list");
      var store_selection=document.getElementById("store_select").value;

      //clear the list
      local_stores_list.innerHTML="";

      //construct innerhtml string
      var newInnerhtml="";
      for (var i = store_objs.length - 1; i >= 0; i--) {
        if (store_objs[i].storeName==store_selection) {
          for (var j = 0; j < store_objs[i].local_stores.length; j++) {
            var local_store_name = store_objs[i].local_stores[j].name;
            newInnerhtml=newInnerhtml+"<div><input type='checkbox' class='localStores' name='"+local_store_name+"'> <label>"+local_store_name+"</label></div>";
          }
        }
      }

      local_stores_list.innerHTML=newInnerhtml;
    }



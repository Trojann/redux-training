var store = Redux.createStore(combineReducers, Redux.applyMiddleware(logger, crashReporter, thunk))
function render() {
  var state = store.getState();
  $('#value').text(state.count.result);
  $('#value2').text(state.sum);
  if(state.count.loading){
    $('#status').text("is loading...");
  }else{
    $('#status').text("loaded");
  }
  $('#imagesStatus').text(state.images.loading);
  if(state.images.loading =="loading…"){
    $('#imagesList').text("");
  }
  else if(state.images.loading =="loaded"){
    for(var i=0; i< state.images.data.length; i++){
      $('#imagesList').append(
        "<img src='"  + state.images.data[i].link + "' style='height:200px'>")
    }
  }
};
store.subscribe(render);
render();

var dialog = document.querySelector('dialog');
var btn_show = document.getElementById('show');
var btn_close = document.getElementById('close');
btn_show.addEventListener('click', function() {
  dialog.showModal();
}, false);
btn_close.addEventListener('click', function() {
  dialog.close();
}, false);
dialog.addEventListener('close', function(event){
  console.log('close', event);
});
dialog.addEventListener('cancel', function(event){
  console.log('cancel', event);
});

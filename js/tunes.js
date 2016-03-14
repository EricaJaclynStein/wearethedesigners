/*===================================================
  B A S I C  P L A Y L I S T  W I D G E T
===================================================*/

(function(){
  var widgetIframe = document.getElementById('sc-widget'),
      widget       = SC.Widget(widgetIframe);

  widget.bind(SC.Widget.Events.READY, function(){
    widget.bind(SC.Widget.Events.PLAY, function(){
      widget.getCurrentSound(function(currentSound){
        console.log('sound ' + currentSound.get('') + 'began to play');
      });
    });
    widget.getVolume(function(volume){
      console.log('current volume value is ' + volume);
    });
    widget.setVolume(50);
  });

}());


/*===================================================
  C U S T O M 
===================================================*/

SC.initialize({
  client_id: '08e215def9b3389a28c6d929327c06a3',
});

SC.get('https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/18871735').then(function(tracks){
  alert('Latest track: ' + tracks[0].title);
});

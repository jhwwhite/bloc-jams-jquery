{
  class Helper {
    playPauseAndUpdate(song){
      const totalTime = player.getDuration();
      $('#time-control.totalTime').text(totalTime);
      player.playPause(song);
    }
  }

  const Helper = newHelper();
}

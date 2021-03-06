$(function(){
  // クリックするとMP4を再生して、じゃんけんボタン表示
  var video = $("#im").get(0);
  $("#a2").on("click", function(){
    $("#r9").toggle()
    $("#a2").toggle()
    $("#im").toggle()
    $("#bt").toggle()
    $("#t2").toggle()
    video.play();
  });
  // 画像をクリックすると再度MP4を再生
  $("#im").on("click", function(){
    video.play();
  });
  // じゃんけん
  $("#b1").on("click", function(){
    var comp = Math.floor(Math.random()*3);
          if(comp === 0){
            $("#pc").text("キュアピースは、グー！")
            $("#result").text("あいこだよ！もう1回挑戦しよう！")
            $("#im").toggle()
            $("#r4").toggle()
            $("#bt").toggle()
            $("#re").toggle()
            $("#s1").get(0).play()    
          }else if(comp === 1){
            $("#pc").text("キュアピースは、チョキ！")
            $("#result").text("君の勝ちだよ！おめでとう！！")
            $("#im").toggle()
            $("#r5").toggle()
            $("#bt").toggle()
            $("#re").toggle()
            $("#s1").get(0).play() 
          }else if(comp === 2){
            $("#pc").text("キュアピースは、パー！")
            $("#result").text("負けちゃった。もう1回挑戦しよう！")
            $("#im").toggle()
            $("#par").toggle()
            $("#bt").toggle()   
            $("#re").toggle()
            $("#s1").get(0).play()  
          }
  });
  $("#b2").on("click", function(){
    var comp = Math.floor(Math.random()*3);
    if(comp === 0){
      $("#pc").text("キュアピースは、グー！")
      $("#result").text("負けちゃった。もう1回挑戦しよう！")
      $("#im").toggle()
      $("#goo").toggle()
      $("#bt").toggle()
      $("#re").toggle()   
      $("#s1").get(0).play() 
    }else if(comp === 1){
      $("#pc").text("キュアピースは、チョキ！")
      $("#result").text("あいこだよ！もう1回挑戦しよう！")
      $("#im").toggle()
      $("#r7").toggle()
      $("#bt").toggle()
      $("#re").toggle()
      $("#s1").get(0).play() 
    }else if(comp === 2){
      $("#pc").text("キュアピースは、パー！")
      $("#result").text("君の勝ちだよ！おめでとう！！")
      $("#im").toggle()
      $("#r5").toggle()
      $("#bt").toggle()   
      $("#re").toggle() 
      $("#s1").get(0).play() 
    }
});
$("#b3").on("click", function(){
  var comp = Math.floor(Math.random()*3);
  if(comp === 0){
    $("#pc").text("キュアピースは、グー！")
    $("#result").text("君の勝ちだよ！おめでとう！！")
    $("#im").toggle()
    $("#r2").toggle()
    $("#bt").toggle()
    $("#re").toggle()   
    $("#s1").get(0).play() 
  }else if(comp === 1){
    $("#pc").text("キュアピースは、チョキ！")
    $("#result").text("負けちゃった。もう1回挑戦しよう！")
    $("#im").toggle()
    $("#choki").toggle()
    $("#bt").toggle()
    $("#re").toggle()
    $("#s1").get(0).play() 
  }else if(comp === 2){
    $("#pc").text("キュアピースは、パー！")
    $("#result").text("あいこだよ！もう1回挑戦しよう！")
    $("#im").toggle()
    $("#r8").toggle()
    $("#bt").toggle()   
    $("#re").toggle() 
    $("#s1").get(0).play() 
}
});
// リトライボタン
$('#re').click(function() {
  location.reload();
});
})
// 주소를 변수로 지정
var url = 'https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=PLuQtmaviIuYqxtcFGjtECU_vHQSDRStIj&key=AIzaSyBJ0MaYkFDktW9Hbr-vVvtptbhgZlSXKTw'
// (XMLHttpRequest 객체 이용) 페이지를 전환하지 않고 브라우저한테 몰래 이 주소로 접속해서 정보를 가져오라고 시킴
var req = new XMLHttpRequest();
// 변수로 지정한 url 주소로 접속하라고 요청
req.open('GET', url, true);
// 접속이 끝나고 뭘 해야되는지 정의
req.onreadystatechange = function (aEvt) {
// 접속이 끝나면
  if (req.readyState == 4) {
// 접속이 성공했다면
     if(req.status == 200) {
// 이 코드 실행. JSON.parse로 만든 객체를 result에 저장
		var result = JSON.parse(req.responseText);
		var items = result.items;
    for (var i=0; i<items.length; i++){
      // 비디오아이디를 변수로 지정
      var vid = items[i].snippet.resourceId.videoId;
      // 비디오 아이디 이용 영상 url을 변수로 지정
      var vurl = 'https://www.youtube.com/watch?v='+vid+'&t=2s&index=1&list=PLuQtmaviIuYqxtcFGjtECU_vHQSDRStIj';
      // 영상 제목과 변수로 놓은 url을 쭉 가져옴.
      // '\t': tap 키만큼의 공백
      console.log(items[i].snippet.title+'\t'+vurl);
    }
// 접속이 실패하면 이 코드 실행
     } else {
      alert("Error loading page\n");
     }
  }
};
// 접속 시작
req.send(null);

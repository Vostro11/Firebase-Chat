$(function(){
    $(".chat-list-wrapper, .message-list-wrapper").niceScroll();
})


var thisUser = '123';
 

  // Initialize Firebase
 var config = {
   apiKey: "AIzaSyADIXM8bnS-iVvYKkT-9OWk3WZ3GzDsMO8",
   authDomain: "global-reach-154110.firebaseapp.com",
   databaseURL: "https://global-reach-154110.firebaseio.com",
   storageBucket: "global-reach-154110.appspot.com",
   messagingSenderId: "431701055356"
 };
 firebase.initializeApp(config);

      var left = '<li class="left">';
      left += '<span class="username">Yanique Robinson</span>';
      left += '<small class="timestamp">';
      left += '<i class="fa fa-clock-o"></i>';
      left += '</small>';
      left += '<span class="avatar available tooltips" data-toggle="tooltip " data-placement="right" data-original-title="Yanique Robinson">';
      left += '<img src="https://firebasestorage.googleapis.com/v0/b/chat-6f4f2.appspot.com/o/placeholder%2Fapp%2Fplaceholder.png?alt=media&token=350caebc-7167-48cd-be0b-bf1878b78467" alt="avatar" class="img-circle">';
      left += '</span>';
      left += '<div class="body">';
      left += '<div class="message well well-sm">';
      left += 'message here';
      left += '</div>';
      left += '</div>';
      left += '</li>';
      //left += '<div class="clearfix"></div>';

      var right = '<li class="right">';
      right += '<span class="username">Yanique Robinson</span>';
      right += '<small class="timestamp">';
      right += '<i class="fa fa-clock-o"></i>';
      right += '</small>';
      right += '<span class="avatar available tooltips" data-toggle="tooltip " data-placement="left" data-original-title="Yanique Robinson">';
      right += '<img src="https://firebasestorage.googleapis.com/v0/b/chat-6f4f2.appspot.com/o/placeholder%2Fapp%2Fplaceholder.png?alt=media&token=350caebc-7167-48cd-be0b-bf1878b78467" alt="avatar" class="img-circle">';
      right += '</span>';
      right += '<div class="body">';
      right += '<div class="message well well-sm">';
      right += 'message here';
      right += '</div>';
      right += '</div>';
      right += '</li>';


$(document).ready(function getUser(){
   //get value from firebase and structure them
    var ram
    var ref = firebase.database().ref().child('students').once('value')
      .then(function(snapshot){
        ram = snapshot.val();
        $.each( ram, function( key, value ) {
          var htmldom = '<li class="" id="'+key+'">';
          htmldom += '<span class="avatar available">';
          htmldom += '<img src="https://firebasestorage.googleapis.com/v0/b/chat-6f4f2.appspot.com/o/placeholder%2Fapp%2Fplaceholder.png?alt=media&token=350caebc-7167-48cd-be0b-bf1878b78467" alt="avatar" class="img-circle">';
          htmldom += '</span>';
          htmldom += '<div class="body">' ;
          htmldom += '<div class="header">' ;
          htmldom += '<span class="username">'+value['name']+'</span>' ;
          htmldom += '<small class="timestamp text-muted">' ;
          htmldom += '<i class="fa fa-clock-o"></i>' ;
          htmldom += '</small>' ;
          htmldom += '</div>' ;
          htmldom += '<p> '+value['email']+' </p>' ;
          htmldom += '</div></li>' ;
          $('.chat-list').first().append(htmldom);
        });
	 	});
});

/*function loadUserMessage(thisUser){
      //$('.message-list').empty();
      var message;
      firebase.database().ref().child('messages/'+'chatwith_'+thisUser).once('value')
      .then(function(snapshot){
        message = snapshot.val();
        $.each(message , function(key,value){
          
          if(value['name'] == 'Global Reach'){
            $('.message-list-wrapper .message-list').append(right);
            $('.right .message').last().text(value['message']);
            $('.right span img').attr('src',value['pic']);
          }else{
            $('.message-list-wrapper .message-list').append(left);
            $('.left .message').last().text(value['message']);
            $('.left span img').attr('src',value['pic']);
          }
          $('.message-list-wrapper').scrollTop($('.message-list-wrapper')[0].scrollHeight);
        });
       pageScroll();
      });

    };*/

//load message on click and asigh listner
$(document).ready(function(){
  $(document).on('click','.chat-list li',function(){
    //remove class
        $('.chat-list li').each(function(key,value){
          if($(this).attr('class')!='new'){
            $(this).attr('class','');
          }
        });

        $(this).attr('class','');
        $(this).attr('class','active');

        var i = 0;
        $('.message-list').empty();
        thisUser = $(this).attr('id');

        var user = firebase.database().ref().child('students/'+thisUser).once('value').then(function(snapshot){
          $('#user-name').text(snapshot.val().name);
        });
        var dbRef = firebase.database().ref('messages/'+'chatwith_'+thisUser);
        dbRef.off();
        dbRef.on('child_added',function(snapshot){
          //console.log('getkey='+dbRef.key+'/ currentKey = '+currentKey+'/ thisuser = '+thisUser)
          if(dbRef.key == 'chatwith_'+thisUser){
                  appendMessage(snapshot);
                  pageScroll();
              }    
        });
      
      
    });
});
function appendMessage(snapshot){
  //console.log(snapshot.val())
  if(snapshot.val().name == 'Global Reach'){
            $('.message-list-wrapper .message-list').append(right);
            $('.right .message').last().text(snapshot.val().message);
            $('.right span img').attr('src',snapshot.val().pic);
          }else{
            $('.message-list-wrapper .message-list').append(left);
            $('.left .message').last().text(snapshot.val().message);
            $('.left span img').attr('src',snapshot.val().pic);
      }
}


//when new message arrived
$(document).ready(function(){
  $('<audio id="chatAudio"><source src="tone1.mp3" type="audio/mpeg"></audio>').appendTo('body');

  var newMessageListner = firebase.database().ref().child('messages');
  newMessageListner.off();
  newMessageListner.on('child_changed',function(snapshot){
    //console.log(snapshot.key);
    newMessage(snapshot.key);
  })
})
function newMessage(user){
  //console.log(user)
  //var user = '-KcTCVeRq20hVn3FwDdq';
  $('.chat-list li').each(function(key,value){
    if('chatwith_'+$(this).attr('id') == user){
      if($(this).attr('class') != 'active'){
        $(this).attr('class','new');
        $('#chatAudio')[0].play();
        //console.log($(this).text())
       }
    }
  })
}





function myfunction(){
  var message = $('#message').val();
  $('#message').val('');
  //alert(message);
   firebase.database().ref('messages/chatwith_'+thisUser).push().set({
    id: '',
    name: 'Global Reach',
    message: message,
    pic: 'https://firebasestorage.googleapis.com/v0/b/chat-6f4f2.appspot.com/o/placeholder%2Fapp%2Fic_icon.png?alt=media&token=47089989-ae5b-4e58-adda-76899477f46b'
  });
   //console.log('done');
}
$(document).on('keypress','#message',function (e) {

 var key = e.which;
 //alert(key)
 if(key == 13)  // the enter key code
  {
    if( !e.shiftKey){
      e.preventDefault();
      myfunction();
    }
  }
});

function pageScroll(){
   //$(".message-list-wrapper").hide().fadeIn().delay(0);
    $('.message-list-wrapper').scrollTop($('.message-list-wrapper')[0].scrollHeight);
    
}

$(document).on('click','#submitme',function(){
  var email = $('#loginemail').val();
  var password = $('#loginpassword').val();
  var flag = 0;
  var ram
    var ref = firebase.database().ref().child('students').once('value')
      .then(function(snapshot){
        ram = snapshot.val();
        $.each( ram, function( key, value ) {
          if(email == value['email'] && password == value['password']){
            flag = 1;
          }
         // console.log(value['email']+'='+email+','+value['password']+'='+password);
        });
        if(flag){
          //alert('corret');
          document.getElementById('loginform').submit();
        }else{
          alert('Incorrect Credidentials!');

        }
    });

});
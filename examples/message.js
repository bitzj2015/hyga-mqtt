var Hyga = require('../');

var config = {
  uuid:'9c417707-420d-4ff1-95b5-dfe9171d5cba',
  token:'52435eb0d78a761e1909793a6fdb15d4bf90570a'
}

var hyga = new Hyga(config);

hyga.connect(function(success){

  if(success){
    console.log('已接入超星系!');

    var message = {
      devices: '3e9fd243-2d75-42a4-89b9-a4e70a51b58d',
      payload: '欢迎来到超星系!',
      from: '——超星系全体伙伴.'
    };

    hyga.message(message, function(success, resp){
      if(success){
        console.log('发送成功!');
      }else{
        console.log('发送失败!');
        console.log(resp);
      }
      process.exit();
    });

  }

});
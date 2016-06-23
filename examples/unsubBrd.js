var Hyga = require('../');

var config = {
  uuid:'3e9fd243-2d75-42a4-89b9-a4e70a51b58d',
  token:'31b5ee84aff6e4fb2db70d1d2fe43f6e58e7ec6d'
}

var hyga = new Hyga(config);

var params = {
  uuids: [
    //同一频道中 authority='protect' 的设备
    '9c417707-420d-4ff1-95b5-dfe9171d5cba'
  ]
};

hyga.onBrd(function(message){

  console.log(message);
  console.log('退订广播消息...');

  hyga.unsubBrd(params, function(success, resp){
    if(success){
      console.log('退订成功!');
    }else{
      console.log('退订失败!');
      console.log(resp);
    }
  });

});

hyga.connect(function(){

  console.log('频道已接入超星系!');

  hyga.subBrd(params, function(success, resp){
    if(success){
      console.log('订阅成功!');
    }else{
      console.log('订阅失败');
      console.log(resp);
    }
  });

});
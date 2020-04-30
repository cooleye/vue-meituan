export function getCurPosition(fn) {

    if (navigator.geolocation) {
        
        navigator.geolocation.getCurrentPosition((position)=>{
            console.log("position:",position)
            var map = new BMap.Map("allmap");

            var point = new BMap.Point(position.coords.latitude, position.coords.longitude);
            map.centerAndZoom(point, 12);
        
            function myFun(result) {
                var cityName = result.name;
                map.setCenter(cityName);
                // alert("当前定位城市:"+cityName);
                fn(cityName)
            }
            var myCity = new BMap.LocalCity();
            myCity.get(myFun);

        },onError);
    }
    else {
         console.log('Geolocation is not supported by this browser.') 
    }

}


function onError(error){
    switch(error.code){
         case error.PERMISSION_DENIED:
         alert("用户拒绝对获取地理位置的请求");
         break;

         case error.POSITION_UNAVAILABLE:
         alert("位置信息是不可用的");
         break;

         case error.TIMEOUT:
         alert("请求用户地理位置超时");
         break;

         case error.UNKNOWN_ERROR:
          alert("未知错误");
         break;
     }
}
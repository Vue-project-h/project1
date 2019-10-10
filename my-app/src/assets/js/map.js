



export function MP(ak) {
  return new Promise(function (resolve, reject) {
    console.log(123456789);
    window.onload = function () {
      console.log(BMap);
      resolve(BMap)
    }
   
    // resolve(BMap)
    var script = document.createElement("script");
    script.type = "text/javascript";
    // http://api.map.baidu.com/api?v=2.0&ak=bj0w5aCb5DdUkG7WvKZrupXN7wljczXl
    script.src = "http://api.map.baidu.com/api?v=2.0&ak="+ak+"&callback=init";
    script.onerror = reject;
    document.head.appendChild(script);
    
  })
}
// export function MP(ak) {
//   return new Promise(function (resolve, reject) {
//     window.onload = function () {
//       resolve(BMap)
//     }
//     // resolve(BMap)
//     var script = document.createElement("script");
//     script.type = "text/javascript";
//     // http://api.map.baidu.com/api?v=2.0&ak=bj0w5aCb5DdUkG7WvKZrupXN7wljczXl
//     script.src = "http://api.map.baidu.com/api?v=2.0&ak="+ak+"&callback=init";
//     script.onerror = reject;
//     document.head.appendChild(script);
//   })
// }









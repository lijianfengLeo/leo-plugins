/*
  获取url 参数
*/
function GetURLParam() {
  if (!this instanceof GetURLParam) {
    return new GetURLParam()
  }
  let searchData = location.search.replace(/\?/, '').split('&');
  let obj = {};
  searchData.forEach(function (item, idx) {
    let splitItem = item.split('=');
    splitItem[0] && splitItem[1] && (obj[splitItem[0]] = splitItem[1]);
  })
  return obj;
}
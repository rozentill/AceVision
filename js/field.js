// var field_name = json1.name
//
// for (var au in author) {
//   if (au.hasOwnProperty(variable)) {
//
//   }
// }

var figure_af = new Array(10);
for (var af in affiliation){
  var dic = new Array();
  dic['name'] = af;
  dic['num'] = affiliation[af].Gindex;
  figure_af.push(dic);
}

export function importAll(r) {
    let images = {};
    r.keys().map((item, index) => {
        images[item.replace('./', '').split('.')[0]] = r(item);
    });
    return images;
}

export function resizeCoordinates(areas,orig_width,curr_width,orig_height,curr_height){
    //var width_ratio = orig_width/curr_width;
   // var height_ratio = orig_height/curr_height;

    var width_ratio = curr_width/orig_width;
    console.log(width_ratio)
    var height_ratio = curr_height/orig_height;
    console.log(height_ratio)
    for(var area of areas){
      console.log(area['coord'])
      for (var i =0;i<area['coord'].length;i++){
        area['coord'][i] =Math.round(area['coord'][i] * ((i%2==0)?width_ratio:height_ratio));
      }
      console.log(area['coord']);
    }
    return areas;
  }
  
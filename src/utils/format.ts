export function formatCount(count:number) {
  if(count>100000) {
    return Math.ceil(count/10000)+'万'
  } else {
    return count
  }
}

export function getImageSize(imgUrl:string,width:number,height:number=width) {
  return imgUrl+`?param=${width}x${height}`
}

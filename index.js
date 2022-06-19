//myEach
function myEach(collection, callback){
    Object.values(collection).forEach(callback)
    return collection;
}

//myMap
function myMap(collection, callback) {
    return Object.values(collection).map(callback);
}
     
//myReduce
function myReduce(collection, callback, acc) {
    return Object.values(collection,).reduce(callback, acc);
}

//myFilter
function myFilter(collection, callback){
    return Object.values(collection).filter(callback);
}

//myFind
function myFind(collection, callback){
    return Object.values(collection).find(callback);

}

//mySize
function mySize(collection){
    return Object.values (collection).length};


//myFirst
function myFirst (arr, stop=false) {
    return (stop) ? arr.slice(0, stop) : arr[0];
  }
  
//myLast  
function myLast(arr, start=false) {
    return (start) ? arr.slice(arr.length-start, arr.length) : arr[arr.length-1];
  }


//myKeys
function myKeys (collection){
    return Object.keys(collection);
}


//myvalues
function myValues(collection) {
    return Object.values(collection);
}
    
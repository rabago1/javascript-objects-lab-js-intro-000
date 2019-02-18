<<<<<<< HEAD
 var recipes = {};
function updateObjectWithKeyAndValue (object, key, value)  {
  return Object.assign({}, object, { [key]: value});
}
function destructivelyUpdateObjectWithKeyAndValue (object, key, value) {
   object[key] = value;
   return object
}
function deleteFromObjectByKey(object, key) {
  var clone = Object.assign({}, object);
  delete clone[key];
  return clone
}
function destructivelyDeleteFromObjectByKey(object, key) {
  return newObject = delete object.key;
  return newObject
}
function destructivelyDeleteFromObjectByKey(object, key) {
  delete object[key];
  return object

}
=======
 var recipes = {
   fruit: "apple",
   vegtable: "carrot"
 }
recipes.meat = "beef";
>>>>>>> 6c6ed6ed334d41f0507aa942dd6fcfd0d41e14e0

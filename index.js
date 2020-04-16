var obj = {prop: 1}

function updateObjectWithKeyAndValue(object, key, value){
  obj.prop2 = 2
  return Object.assign({}, obj, {[key]: value})
}

obj.prop2 = 2
function destructivelyUpdateObjectWithKeyAndValue (object, key, value){
  object[key] = value
  return obj
}

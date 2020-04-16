var obj = {prop: 1}

function updateObjectWithKeyAndValue(object, key, value){
  obj.prop2 = 2
  return Object.assign({}, obj, {[key]: value})
}

obj.prop2 = 2
function destructivelyUpdateObjectWithKeyAndValue (objcect, key, value){
  object[prop2] = 2
  return obj
}

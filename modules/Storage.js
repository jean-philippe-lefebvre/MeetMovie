import AsyncStorage from '@react-native-async-storage/async-storage';

export const Storage = {

  /**
   * Set a data
   * @param {string} key
   * @param {object} value
   */
  async storeData (key, value){
    try {
      const jsonValue = JSON.stringify(value)
      await AsyncStorage.setItem(key, jsonValue)
    } catch (e) {
      console.log(e)
    }
  },

  /**
   * Get data
   * @param {string} key
   * @return {object || null}
   */
  async getData(key){
    try {
      const jsonValue = await AsyncStorage.getItem(key)
      const data = jsonValue != null ? JSON.parse(jsonValue) : null;
      return data
    } catch(e) {
      console.log(e)
    }
  },

  /**
   * Set many data in same time
   * @param {array} data, array of array [ [key<string>, value<string>], ... ]
   */
  async multiSet(datas){
    if(typeof datas === 'object'){

      const stringDatas = []
      
      datas.forEach(data => {
        const newValue = deepCopy(data[1])
        stringDatas.push([ data[0], JSON.stringify(newValue) ])
      })

      try {
        await AsyncStorage.multiSet(stringDatas)
      } catch(e) {
      console.log(e)
      }
    } else {
      console.error('Error multiSet : data is not an array')
    }
  },

/**
 * Remove all storage data
 */
  async clear(){
    try {
      await AsyncStorage.clear()
    } catch(e) {
      console.log(e)
    }
  }

}

/**
 * Copy whole object
 * @param {object} inObject
 * @return {object} outObject
 */
const deepCopy = (inObject) => {
  let outObject, value, key

  if (inObject instanceof Date || typeof inObject !== "object" || inObject === null) {
    return inObject // Return the value if inObject is not an object
  }
  // Create an array or object to hold the values
  outObject = Array.isArray(inObject) ? [] : {}

  for (key in inObject) {
    
    if(inObject[key] instanceof Map) value = Array.from(inObject[key].entries())
    else value = inObject[key]

    // Recursively (deep) copy for nested objects, including arrays
    outObject[key] = deepCopy(value)

  }

  return outObject
}

export default function sumPropertyValues(arr, propertyName) {
    return arr.reduce((sum, obj) => {
      // Check if the property exists in the object
      if (obj.hasOwnProperty(propertyName)) {
        return sum + obj[propertyName];
      }
      return sum;
    }, 0);
  }
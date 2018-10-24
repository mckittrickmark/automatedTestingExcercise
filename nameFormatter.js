class NameFormatter {

  invertName(name) {
    const honor = ['Dr.', 'Mr.', 'Ms.', 'Mrs.']

    if (name === undefined) {
      throw Error("ERROR")
    }


    if (name === "") {
      return ""
    }

    let nameArray = name.split(' ')
    nameArray = this.removeSpaces(nameArray)
    console.log(nameArray)
    let nArrayLength = nameArray.length

    if (nArrayLength === 1) {
      if (honor.includes(nameArray[0])) {
        return ""
      }
      return nameArray[0]
    }

    if (honor.includes(nameArray[0])) {
      if (nArrayLength === 2) {
        return nameArray.join(' ')
      }

      let newNameArray = [nameArray[0] + ' ' + nameArray[2], nameArray[1]]
      return newNameArray.join(', ')
    } else {
      return nameArray.reverse().join(', ')
    }

  }

  removeSpaces(array) {

    let returnArray = []
    for (var item of array) {
      if (item.length > 0) {
        returnArray.push(item)
      }
    }
    console.log(returnArray)
    return returnArray
  }





}

module.exports = NameFormatter;
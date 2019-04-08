/**
 * Funcion para obtener un objeto de la clase FormData, partiendo de los datos para la
 * peticion
 *
 * @param {Object} data datos del body, deberia de contener
 * @returns {FormData} objeto de la clase FormData
 */
const getFormDataObject = data => {
  const formData = new FormData()
  for (let [key, value] of Object.entries(data)) {
    if (value && value.rawFile) {
      formData.append(key, value.rawFile)
    } else {
      formData.append(key, value)
    }
  }
  return formData
}

export default getFormDataObject

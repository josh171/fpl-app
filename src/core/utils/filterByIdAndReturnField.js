export const filterByIdAndReturnField = (dataArray, targetId, fieldName) => {
  if (dataArray !== undefined) {
    const filteredObject = dataArray.find((item) => item.id === targetId);
    return filteredObject ? filteredObject[fieldName] : null;
  }
  return null;
};

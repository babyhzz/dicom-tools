/**
 * Parses a PN formatted string into a javascript object with properties for givenName, familyName, middleName, prefix and suffix
 * @param personName a string in the PN VR format
 * @param index
 * @returns {*} javascript object with properties for givenName, familyName, middleName, prefix and suffix or undefined if no element or data
 */
const parsePN = (personName) => {
  if (personName === undefined) {
    return undefined;
  }
  const stringValues = personName.split("^");

  return {
    familyName: stringValues[0],
    givenName: stringValues[1],
    middleName: stringValues[2],
    prefix: stringValues[3],
    suffix: stringValues[4],
  };
};

export default parsePN;

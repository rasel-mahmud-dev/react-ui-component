function chooseUserNameLetter(username: string): string {
    if (!username) {
        return "";
    }
    const letterOne = username[0];
    let letterTwo = "";
    const splitName = username.split(" ");
    if (splitName.length > 1) {
        letterTwo = splitName[1][0];
    }
    return letterOne + letterTwo;
}
export default chooseUserNameLetter
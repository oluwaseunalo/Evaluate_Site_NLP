function checkForName(url) {
    console.log("::: Running checkForName :::", url);
    const regEx = new RegExp(/^(http|https):\/\/[^ "]+$/);
    return regEx.test(url);
}

export { checkForName }

function checkURL(string){
    console.log("::: Running checkForName :::", string);

var res = string.match('^(https?:\\/\\/)?((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|((\\d{1,3}\\.){3}\\d{1,3}))(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // port and path
'(\\?[;&a-z\\d%_.~+=-]*)?(\\#[-a-z\\d_]*)?$',
'i');
return (res !== null)
}


export { checkURL }

var input;
var error;
var pattern;
function ContentValidator(pInput,pErrorContainer,pPattern,onError,onSuccess){
    input=pInput;
    error=pErrorContainer;
    pattern=pPattern;
    var reg=new RegExp(pattern);
    if(reg.test(convertToUnsign(pInput.value))){
        if (onSuccess && typeof(onSuccess) === "function") {
            onSuccess(pInput);
        }
    }else{
        if (onError && typeof(onError) === "function") {
            onError(pInput,error);
        }
    }
}
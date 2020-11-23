function split_char(str){
    var arr=[]
    for(var i=0;i<str.length;i++)
        arr[i]=str[i]
    return arr
}
// check for email's top level domain in the limited list
function checkTld(str){
    // reject single letter tld
    if(str.length<3)
        return false
    // Tld list not exhaustive
    var icannTld=['.com','.in','.co','.gov','.ai','.io','.au','.nl','','.ca','.jp','.edu','.net','.biz','.it','','.ae','.ac','.airbus','.apple','analytics','.org']
    for (var i=0;i<icannTld.length;i++)
        if(str===icannTld[i])
            return true
    return false
}

// check for valid email with given filtering criterias
export const validEmail =(email)=>{
    email=split_char(email)
    var countDot=0, countAt=0,posDot,posAt,tld=''
    for(let i=0;i<email.length;i++){
        // check for whitespace
        if(email[i]!==' '){
            // check for valid character
            if((email[i]>='a' && email[i]<='z') || (email[i]>=0 && email[i]<=9) || email[i]==='-' || email[i]==='_'|| email[i]==='@' || email[i]==='.' ) {
                // console.log('success')
                if(email[i]==='@'){
                    countAt++
                    posAt=i
                    // @ only 1 allowed, not at the start
                    if(countAt>1 || i===0)
                        return false
                }
                if(email[i]==='.'){
                    // . not at the start
                    if(i===0)
                        return false
                    // . cannot be after @
                    if(i===posAt+1)
                        return false
                    countDot++
                    // if . repeats
                    if(countDot>1){
                        // check double dot
                        if(i===posDot+1)
                            return false
                        // check tld - top level domain
                        if(checkTld(tld)===false)
                            return false
                        // tld is checked and reset
                        tld=''
                    }
                    posDot=i
                }
                if(countDot){
                    tld+=email[i]
                }
            }  
            else
                return false
        }
        else 
            return false
    }
    // check last tld
    if(checkTld(tld)===false)
        return false
    // check for @ and .
    if(countDot && countAt)
        return true
    else
        return false
}


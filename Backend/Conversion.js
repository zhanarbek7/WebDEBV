var jack = {
    name : "Jack",
    age : 15,
    degrees : [
        {
            degree : "B.S Computer Science",
            gpa: 3.5
        },
        {
            degree : "M.S Engineering",
            gpa: 4.0
        }
    ]
}


function toJson(object){
    return JSON.stringify(object);
}

function toJSObject(json){
    return JSON.parse(json)
}


function main(){
    console.log("Converting JS object to json and storing it: ")
    let jsonData = toJson(jack);
    console.log(jsonData);

    console.log("Converting JSON data to JS object: ")
    console.log(JSON.parse(jsonData));
}

main();


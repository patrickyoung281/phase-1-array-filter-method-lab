

function findMatching (array, name) {
    let answer = array.filter(drivers => drivers.toUpperCase() === name.toUpperCase() )
    return answer;
}

function fuzzyMatch (array, name) {
    let answer = array.filter(drivers => drivers.indexOf(name, 0) === name.indexOf(name, 0))
    return answer;
    };

function matchName (array, string) {
    let answer = array.filter(drivers => drivers.name === string)
    return answer;
}



















/*
function findMatching (array, name) {
    const answer = array.filter(matchingName => matchingName.toLowerCase() === name.toLowerCase());
    return answer;
};


function fuzzyMatch (array, string) {
    const answer = array.filter(matchingName => matchingName.indexOf(string, 0) === string.indexOf(string, 0));
    return answer;
};


function matchName (array, string) {
    const answer = array.filter(townOrName => townOrName.name === string);
    return answer;
};

*/
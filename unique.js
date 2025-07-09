


//First unique character

// Example 1 :

// Input: programming

// Output : 0

// Explanation : 'p' is the first unique character

let s = " programming";

    let obj = {};

    for (let i = 0; i < s.length; i++)
    {
        if (obj[s[i]])
        {
            obj[s[i]]++;
        } else {
            obj[s[i]]= 1;
        }
    }
    let ans = -1;

    for (let key in obj) {

        if (obj[key] === 1)
        {
            ans = key;
            break;
        }
    }

    let index = s.indexOf(ans);


    console.log(index);
    


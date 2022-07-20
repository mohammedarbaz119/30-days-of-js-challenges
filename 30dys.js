const users = {
    Alex: {
        email: 'alex@alex.com',
        skills: ['HTML', 'CSS', 'JavaScript'],
        age: 20,
        isLoggedIn: false,
        points: 30
    },
    Asab: {
        email: 'asab@asab.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node'],
        age: 25,
        isLoggedIn: false,
        points: 50
    },
    Brook: {
        email: 'daniel@daniel.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
        age: 30,
        isLoggedIn: true,
        points: 50
    },
    Daniel: {
        email: 'daniel@alex.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
        age: 20,
        isLoggedIn: false,
        points: 40
    },
    John: {
        email: 'john@john.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
        age: 20,
        isLoggedIn: true,
        points: 50
    },
    Thomas: {
        email: 'thomas@thomas.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'React'],
        age: 20,
        isLoggedIn: false,
        points: 40
    },
    Paul: {
        email: 'paul@paul.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'],
        age: 20,
        isLoggedIn: false,
        points: 40
    }

};
let count = 0;
let skillss = {}
let i = 0;
// max skills
for (const key in users) {
    skillss[key] = users[key]['skills'].length;


}
const arr = Object.values(skillss)
console.log(Math.max(...arr))
//check if user is loogid in or not
for (const key in users) {
    if (users[key]['isLoggedIn'] == true) {
        count++;
    }
}
console.log(skillss);
const body = document.body
body.append(count)
let c = 0;
for (const key in users) {
    if (users[key]['points'] >= 50) {
        c++;
    }
}
body.append(c);
const lusers = [
    {
        _id: 'ab12ex',
        username: 'Alex',
        email: 'alex@alex.com',
        password: '123123',
        createdAt: '08/01/2020 9:00 AM',
        isLoggedIn: false
    },
    {
        _id: 'fg12cy',
        username: 'Asab',
        email: 'asab@asab.com',
        password: '123456',
        createdAt: '08/01/2020 9:30 AM',
        isLoggedIn: true
    },
    {
        _id: 'zwf8md',
        username: 'Brook',
        email: 'brook@brook.com',
        password: '123111',
        createdAt: '08/01/2020 9:45 AM',
        isLoggedIn: true
    },
    {
        _id: 'eefamr',
        username: 'Martha',
        email: 'martha@martha.com',
        password: '123222',
        createdAt: '08/01/2020 9:50 AM',
        isLoggedIn: false
    },
    {
        _id: 'ghderc',
        username: 'Thomas',
        email: 'thomas@thomas.com',
        password: '123333',
        createdAt: '08/01/2020 10:00 AM',
        isLoggedIn: false
    }
];

const products = [
    {
        _id: 'eedfcf',
        name: 'mobile phone',
        description: 'Huawei Honor',
        price: 200,
        ratings: [
            { userId: 'fg12cy', rate: 5 },
            { userId: 'zwf8md', rate: 4.5 }
        ],
        likes: []
    },
    {
        _id: 'aegfal',
        name: 'Laptop',
        description: 'MacPro: System Darwin',
        price: 2500,
        ratings: [],
        likes: ['fg12cy']
    },
    {
        _id: 'hedfcg',
        name: 'TV',
        description: 'Smart TV:Procaster',
        price: 400,
        ratings: [{ userId: 'fg12cy', rate: 5 }],
        likes: ['fg12cy']
    }
]
lusers.signup = function (id, user, email, pass) {
    const usn = lusers.some(el => el.username === user)
    if (usn) {
        console.log("nakko");
    }
    else {
        lusers.push({
            _id: id,
            username: user,
            email: email,
            password: pass,
            createdAt: new Date(),
            isLoggedIn: false
        })
        console.log(lusers);
    }
}
lusers.signup("wffwefw", 'Thom', "adadad", 'ewfwfwef')
const a = (n) => {
    return n ** 2;
}
function cs(callback, n) {
    return callback(n) * n;

}
console.log(cs(a, 3));

const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const product = [
    { product: 'banana', price: 3 },
    { product: 'mango', price: 6 },
    { product: 'potato', price: ' ' },
    { product: 'avocado', price: 8 },
    { product: 'coffee', price: 10 },
    { product: 'tea', price: '' },
]
//const p = countries.map(e => e.toUpperCase());
//document.body.append(p);
const countries = [
    {
        name: 'Afghanistan',
        capital: 'Kabul',
        languages: ['Pashto', 'Uzbek', 'Turkmen'],
        population: 27657145,
        flag: 'https://restcountries.eu/data/afg.svg',
        currency: 'Afghan afghani'
    },
    {
        name: 'Åland Islands',
        capital: 'Mariehamn',
        languages: ['Swedish'],
        population: 28875,
        flag: 'https://restcountries.eu/data/ala.svg',
        currency: 'Euro'
    },
    {
        name: 'Albania',
        capital: 'Tirana',
        languages: ['Albanian'],
        population: 2886026,
        flag: 'https://restcountries.eu/data/alb.svg',
        currency: 'Albanian lek'
    },
    {
        name: 'Algeria',
        capital: 'Algiers',
        languages: ['Arabic'],
        population: 40400000,
        flag: 'https://restcountries.eu/data/dza.svg',
        currency: 'Algerian dinar'
    },
    {
        name: 'American Samoa',
        capital: 'Pago Pago',
        languages: ['English', 'Samoan'],
        population: 57100,
        flag: 'https://restcountries.eu/data/asm.svg',
        currency: 'United State Dollar'
    },
    {
        name: 'Andorra',
        capital: 'Andorra la Vella',
        languages: ['Catalan'],
        population: 78014,
        flag: 'https://restcountries.eu/data/and.svg',
        currency: 'Euro'
    },
    {
        name: 'Angola',
        capital: 'Luanda',
        languages: ['Portuguese'],
        population: 25868000,
        flag: 'https://restcountries.eu/data/ago.svg',
        currency: 'Angolan kwanza'
    },
    {
        name: 'Anguilla',
        capital: 'The Valley',
        languages: ['English'],
        population: 13452,
        flag: 'https://restcountries.eu/data/aia.svg',
        currency: 'East Caribbean dollar'
    },
    {
        name: 'Antarctica',
        capital: '',
        languages: ['English', 'Russian'],
        population: 1000,
        flag: 'https://restcountries.eu/data/ata.svg',
        currency: 'Australian dollar'
    },
    {
        name: 'Antigua and Barbuda',
        capital: "Saint John's",
        languages: ['English'],
        population: 86295,
        flag: 'https://restcountries.eu/data/atg.svg',
        currency: 'East Caribbean dollar'
    },
    {
        name: 'Argentina',
        capital: 'Buenos Aires',
        languages: ['Spanish', 'Guaraní'],
        population: 43590400,
        flag: 'https://restcountries.eu/data/arg.svg',
        currency: 'Argentine peso'
    },
    {
        name: 'Armenia',
        capital: 'Yerevan',
        languages: ['Armenian', 'Russian'],
        population: 2994400,
        flag: 'https://restcountries.eu/data/arm.svg',
        currency: 'Armenian dram'
    },
    {
        name: 'Aruba',
        capital: 'Oranjestad',
        languages: ['Dutch', '(Eastern) Punjabi'],
        population: 107394,
        flag: 'https://restcountries.eu/data/abw.svg',
        currency: 'Aruban florin'
    },
    {
        name: 'Australia',
        capital: 'Canberra',
        languages: ['English'],
        population: 24117360,
        flag: 'https://restcountries.eu/data/aus.svg',
        currency: 'Australian dollar'
    },
    {
        name: 'Austria',
        capital: 'Vienna',
        languages: ['German'],
        population: 8725931,
        flag: 'https://restcountries.eu/data/aut.svg',
        currency: 'Euro'
    },
    {
        name: 'Azerbaijan',
        capital: 'Baku',
        languages: ['Azerbaijani'],
        population: 9730500,
        flag: 'https://restcountries.eu/data/aze.svg',
        currency: 'Azerbaijani manat'
    },
    {
        name: 'Bahamas',
        capital: 'Nassau',
        languages: ['English'],
        population: 378040,
        flag: 'https://restcountries.eu/data/bhs.svg',
        currency: 'Bahamian dollar'
    },
    {
        name: 'Bahrain',
        capital: 'Manama',
        languages: ['Arabic'],
        population: 1404900,
        flag: 'https://restcountries.eu/data/bhr.svg',
        currency: 'Bahraini dinar'
    },]
/*const f = countries => {
    const occ = countries.reduce((ele, { population }) => {
        const b = population
        ele[b] = population + 1
        return ele
    }, {})
    return Object.keys(occ).sort().map(le => ({ le, count: occ[le] }))
}
console.log(f(countries))*/
const crte = (arr, n) => {
    const ob = arr.reduce((ele, { languages }) => {
        languages.forEach(element => {
            ele[element] = (ele[element] || 0) + 1
        });
        return ele
    }, {})
    return Object.keys(ob).map(countries => ({ countries, count: ob[countries] })).sort((a, b) => {
        if (a.count > b.count) return -1
        if (a.count < b.count) return 1
    }).slice(0, n)

}
console.log(crte(countries, 4))
const ob = countries.reduce((ele, { languages }) => {
    languages.forEach(element => {
        ele[element] = (ele[element] || 0) + 1
    });
    return ele
}, {})
console.log(ob)



const cte = (arr, n) => {
    const ob = arr.reduce((ele, { population, name }) => {
        const e = population
        ele[name] = population
        return ele
    }, {})
    return Object.keys(ob).map(name => ({ name, count: ob[name] })).sort((a, b) => {
        if (a.count > b.count) return -1
        if (a.count < b.count) return 1
    }).slice(0, n)

}
console.log(cte(countries, 6))
const languages = [
    'English',
    'Finnish',
    'English',
    'French',
    'Spanish',
    'English',
    'French',
]
let puch = new Set()
for (let i = 0; i < 10; i++) {
    puch.add(i);
}
console.log(puch)
puch.delete(4);
console.log(puch)
console.log(puch.size);
countries.forEach(l => {
    puch.add(l)
})
console.log(puch)
let puchi = new Map()
countries.forEach(l => {
    puchi.set(l.name, l.name.length)
})
console.log(puchi)
let v = new Set()
countries.forEach(l => {
    l.languages.forEach(n => {
        v.add(n);
    })
})
console.log(v.size)
console.log(v)
const person = {
    firstName: 'Asabeneh',
    lastName: 'Yetayeh',
    age: 250,
    country: 'Finland',
    job: 'Instructor and Developer',
    skills: [
        'HTML',
        'CSS',
        'JavaScript',
        'React',
        'Redux',
        'Node',
        'MongoDB',
        'Python',
        'D3.js'
    ],
    languages: ['Amharic', 'English', 'Suomi(Finnish)']
}
// Let us create a function which give information about the person object without destructuring

const getPersonInfo = obj => {
    const skills = obj.skills
    const formattedSkills = skills.slice(0, -1).join(', ')
    const languages = obj.languages
    const formattedLanguages = languages.slice(0, -1).join(', ')

    personInfo = `${obj.firstName} ${obj.lastName} lives in ${obj.country}. He is  ${obj.age
        } years old. He is an ${obj.job}. He teaches ${formattedSkills} and ${skills[skills.length - 1]
        }. He speaks ${formattedLanguages} and a little bit of ${languages[2]}.`

    return personInfo
}

console.log(getPersonInfo(person))

const constants = [2.72, 3.14, 9.81, 37, 100]
const countrie = ['Finland', 'Estonia', 'Sweden', 'Denmark', 'Norway']
const rectangle = {
    width: 20,
    height: 10,
    area: 200,
    perimeter: 60
}
const user = [
    {
        name: 'Brook',
        scores: 75,
        skills: ['HTM', 'CSS', 'JS'],
        age: 16
    },
    {
        name: 'Alex',
        scores: 80,
        skills: ['HTM', 'CSS', 'JS'],
        age: 18
    },
    {
        name: 'David',
        scores: 75,
        skills: ['HTM', 'CSS'],
        age: 22
    },
    {
        name: 'John',
        scores: 85,
        skills: ['HTML'],
        age: 25
    },
    {
        name: 'Sara',
        scores: 95,
        skills: ['HTM', 'CSS', 'JS'],
        age: 26
    },
    {
        name: 'Martha',
        scores: 80,
        skills: ['HTM', 'CSS', 'JS'],
        age: 18
    },
    {
        name: 'Thomas',
        scores: 90,
        skills: ['HTM', 'CSS', 'JS'],
        age: 20
    }
]
const [e, pi, gravity, humanBodyTemp, waterBoilingTemp] = constants
console.log(e, pi, gravity, humanBodyTemp, waterBoilingTemp)
const [fin, est, sw, den, nor] = countrie
console.log(fin, est, sw, den, nor)
const { width, height, area, perimeter } = rectangle
console.log(width, height, area, perimeter)
for (const { name, scores, skills, age } of user) {
    if (skills.length < 2) {
        console.log(name, scores, skills, age)
    }
}
for (const { name, capital, population, languages } of countries) {
    console.log(name, capital, population, languages);
}
const students = [['David', ['HTM', 'CSS', 'JS', 'React'], [98, 85, 90, 95]],
]
const student = ['David', ['HTM', 'CSS', 'JS', 'React'], [98, 85, 90, 95]]
const [pch, ski, [, , scorejs, scorereact]] = student
console.log(pch, ski, scorejs, scorereact)


const puc = arr => {
    const arrr = []
    arr.forEach(l => {
        const [name, skills, scores] = l
        arrr.push({ name, skills, scores })
    })
    return arrr
}
console.log(puc(students))
const studen = {
    name: 'David',
    age: 25,
    skills: {
        frontEnd: [
            { skill: 'HTML', level: 10 },
            { skill: 'CSS', level: 8 },
            { skill: 'JS', level: 8 },
            { skill: 'React', level: 9 }
        ],
        backEnd: [
            { skill: 'Node', level: 7 },
            { skill: 'GraphQL', level: 8 },
        ],
        dataBase: [
            { skill: 'MongoDB', level: 7.5 },
        ],
        dataScience: ['Python', 'R', 'D3.js']
    }
}
const d = {
    ...studen, skills: {
        frontEnd: [
            { skill: 'HTML', level: 10 },
            { skill: 'CSS', level: 8 },
            { skill: 'JS', level: 8 },
            { skill: 'React', level: 9 },
            { skill: 'boot', level: 8 }
        ],
        backEnd: [
            { skill: 'Node', level: 7 },
            { skill: 'GraphQL', level: 8 },
        ],
        dataBase: [
            { skill: 'MongoDB', level: 7.5 },
        ],
        dataScience: ['Python', 'R', 'D3.js']
    }
}
console.log(d)
let y = "He earns 4000 euro from salary per month, 10000 euro annual bonus, 5500 euro online courses per month";
let pa = /\d+/g;
let pc = y.match(pa);
console.log(pc)
console.log('arbaz')
paragraph = `I love teaching. If you do not love teaching what else can you love. I love Python if you do not love something which can give you all the capabilities to develop an application what else can you love.`
let patte = /[A-Z][a-z]*/gi
const puchet = paragraph.match(patte);
console.log(puchet)
let aad = new Set(puchet);
let ccregex = []
for (const p of aad) {
    const acha = puchet.filter(l => l === p)
    ccregex.push({ language: p, count: acha.length })

}

ccregex.sort((a, b) => {
    return b.count - a.count
})
console.log(ccregex);
sentence = `%I $am@% a %tea@cher%, &and& I lo%#ve %tea@ching%;. There $is nothing; &as& mo@re rewarding as educa@ting &and& @emp%o@wering peo@ple. ;I found tea@ching m%o@re interesting tha@n any other %jo@bs. %Do@es thi%s mo@tivate yo@u to be a tea@cher!?`
const claear = sentence.replace(/%|@|&|[$]|#/g, '');
console.log(claear)
const clear = claear.match(/[A-z][a-z]*/gi)
console.log(clear)

let aaad = new Set(clear);
console.log(aaad)
let ccrege = []
for (const p of aaad) {
    const acha = clear.filter(l => l === p)
    ccrege.push({ language: p, count: acha.length })

}

ccrege.sort((a, b) => {
    return b.count - a.count
})
console.log(ccrege[0], ccrege[1], ccrege[3])
const names = ['Asabeneh', 'Brook', 'David', 'John']
const countriess = [
    ['Finland', 'Helsinki'],
    ['Sweden', 'Stockholm'],
    ['Norway', 'Oslo']
]
const udaser = {
    name: 'Asabeneh',
    title: 'Programmer',
    country: 'Finland',
    city: 'Helsinki',
    age: 250
}
const users = [
    {
        name: 'Asabeneh',
        title: 'Programmer',
        country: 'Finland',
        city: 'Helsinki',
        age: 250
    },
    {
        name: 'Eyob',
        title: 'Teacher',
        country: 'Sweden',
        city: 'London',
        age: 25
    },
    {
        name: 'Asab',
        title: 'Instructor',
        country: 'Norway',
        city: 'Oslo',
        age: 22
    },
    {
        name: 'Matias',
        title: 'Developer',
        country: 'Denmark',
        city: 'Copenhagen',
        age: 28
    }
]

console.table(countriess)
console.table(countries)
console.group('pcuhet is puchet')
console.log(names)
console.groupEnd()
console.assert(10 > 2 * 10, 'no this is wrong')
console.warn('i am warning')
console.error('arrey')
console.time('how fast i am')
names.forEach(l => console.log(l))
console.timeEnd('how fast i am')
let cv = "arbaz uddin ewqwgyegfyewgfhb 2019   2020 vefywebfywegfy mail email e-mail emailaevew vwjfnwbwbf E-mail Email ee-mail"
let par = /\b\w{4}\b/gi
let asad = cv.match(par)
console.log(asad)

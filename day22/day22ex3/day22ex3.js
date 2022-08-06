let wrap = document.querySelector('.wr')
let h1 = document.createElement('h1')
let span2020 = document.createElement('span')
span2020.innerText = `${achallenges.challengeYear}`
span2020.style.fontSize = '70px'
h1.innerHTML = `${achallenges.description} in `
h1.append(span2020)
wrap.append(h1)
let undrtext = document.createElement('u')
undrtext.textContent = `${achallenges.challengeSubtitle}`
undrtext.style.fontSize = '30px'
wrap.append(undrtext)
wrap.style.textAlign = 'center'
let date = document.createElement('div')
wrap.append(date)
date.style.margin = '10px'
date.style.fontSize = '30px'
date.style.width = '20%'
date.className = 'date'

setInterval(() => {
    span2020.style.color = `rgb(${Math.floor(Math.random() * 256)},${Math.floor(Math.random() * 256)},${Math.floor(Math.random() * 256)})`
    let d = new Date()
    let y = d.getFullYear()
    let mo = d.getMonth() + 1
    let da = d.getDate()
    let ho = d.getHours()
    let min = d.getMinutes()
    let sec = d.getSeconds()
    if (mo < 10) {
        mo = `0${mo}`
    }
    if (ho < 10) {
        ho = `0${ho}`
    }
    if (min < 10) {
        min = `0${min}`
    }
    if (sec < 10) {
        sec = `0${sec}`
    }
    if (da < 10) {
        da = `0${da}`
    }
    let puchee = `${y}/${mo}/${da} ${ho}-${min}-${sec}`
    date.innerHTML = puchee
    date.style.backgroundColor = `rgb(${Math.floor(Math.random() * 256)},${Math.floor(Math.random() * 256)},${Math.floor(Math.random() * 256)})`
}, 1000)
let challenge = achallenges.challenges
challenge.forEach(l => {
    let d = document.createElement('div')
    let a = document.createElement('a')
    a.textContent = `${l.name}`
    a.href = l.githubUrl
    let details = document.createElement('details')
    l.topics.forEach(c => {
        let cd = document.createElement('div')
        cd.innerHTML = `${c}`
        details.append(cd)
    })
    let st = document.createElement('span')
    st.innerHTML = `${l.status}`
    if (l.status === 'Done') {
        d.style.backgroundColor = 'green'
    }
    else if (l.status === 'Ongoing') {
        d.style.backgroundColor = 'yellow'
    }
    else {
        d.style.backgroundColor = 'red'
    }
    d.style.margin = '10px'
    d.style.width = '50vw'
    d.className = 'd'


    d.appendChild(a)
    d.appendChild(details)
    d.appendChild(st)

    wrap.append(d)


})
let author = document.createElement('div')
let bold = document.createElement('strong')
bold.innerHTML = `${achallenges.author.firstName} ${achallenges.author.lastName}`
author.appendChild(bold)
author.style.fontSize = '50px'
wrap.append(author)
let icons = achallenges.author.socialLinks
icons.forEach(l => {

    let a = document.createElement('a')
    a.href = l.url
    a.innerHTML = l.fontawesomeIcon
    a.style.fontSize = '50px'
    wrap.append(a)

})
let bio = document.createElement('p')
bio.innerHTML = achallenges.author.bio
bio.style.textAlign = 'center'
bio.style.width = '50vw'
wrap.append(bio)
let info = document.createElement('div')

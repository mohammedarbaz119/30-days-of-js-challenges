contnt=[['🌱', 'Educator'],
['💻', 'Programmer'],
['🌐', 'Developer'],
['🔥', 'Motivator'],
['📔', 'Content Creator']];
keywords= [
    'HTML',
    'HTML5',
    'CSS',
    'CSS3',
    'JS',
    'JavaScript',
    'ES6',
    'Promise',
    'async await',
    'Database',
    'React',
    'React Hooks',
    'Context API',
    'React Router',
    'Web Storage',
    'localStorage',
    'sessionStorage',
    'Redux',
    'Node',
    'MongoDB',
    'SQL',
    'API',
    'DOM',
    'data science',
    'MERN',
    'Python',
    'Flask',
    'Statistics',
    'Linear Algebra',
    'Numpy',
    'Pandas',
    'Scipy',
    'Scikit-learn',
    'Visualization',
    'D3.js'
];
let titles = document.querySelector('.tiles')
let globals = 0
setInterval(()=>{
    let b = document.createElement('div')
    b.className='b'
    b.style.left='30px'
    titles.innerHTML=''
   
    let a = document.createElement('div')
    a.className='a'
    a.innerHTML=contnt[globals][0]
  
    b.textContent=contnt[globals][1]
    titles.append(a)
    titles.append(b)
    globals++
    if(globals===contnt.length){
        globals=0;
    }
    move=30
},2000)
let move =0
setInterval(()=>{
   
    let b = document.querySelector('.b')
    console.log(b)
    if(b!==null){
        b.style.left=`${move}px`
        move+=3
    }
    console.log(move)
},200)

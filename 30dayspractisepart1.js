let s = "30 days fo javascript"
console.log(s.charAt(15))
console.log(s.replace("javascript", "python"));
let c = 'ou cannot end a sentence with because because because is a conjunction';
console.log(c.indexOf("because"))
console.log(c.match("/a/gi"))
console.log(c.repeat(2))
console.log("\"my name is arbaz i isn\'t puchi is nfeghe \"")
let a = ["a", "b", "c", "d"]
console.log(a.length)
console.log(a[0])
let m = (a.length - 1) / 2;
console.log(a[m])
a.forEach(element => {
    console.log(element.toUpperCase());
});
/*function ran() {
    let pu = "0123456789abcde";
    let v = (Math.floor(Math.random() * 256) + "," + Math.floor(Math.random() * 256) + "," + Math.floor(Math.random() * 256))

    let a = [v]
    console.log(a)
}
ran() rgb color generator


hexcolor genrator
 var randomColor = Math.floor(Math.random()*16777215).toString(16);*/
/*function stringGen() {
    var a = []
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    var y = Number(prompt("puchi32er23no of names: "))
    var x = Number(prompt("puchilength of names: "))
    for (var i = 0; i < y; i++) {


        for (var i = 0; i < x; i++) {
            text += possible.charAt(Math.floor(Math.random() * possible.length));

        }

    }
}
stringGen()*/


/*function rdn(he) {
    let a = []
    for (let i = 1; i <= he; i++) {
        let randomColor = Math.floor(Math.random() * 16777215).toString(16);
        a.unshift(randomColor)
    } console.log(a)
}
rdn(10)*/
/* function to shiffle and aaray



function shuffle(ar) {

    for (let i = ar.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [ar[i], ar[j]] = [ar[j], ar[i]];
    }
    console.log(ar)
}
let ab = [2, 2, 43, 34, 3, 3]
shuffle(ab)*/
/*function to check if a values ofr varibale is empty
function p(val) {

    return (val === undefined || val == null || val.length <= 0) ? true : false;
}
console.log(p(""))*/
/*function uniquenoprinting(f) {
    ar = []
    let length = 0;
    while (length < f) {
        var r = Math.floor(Math.random() * 101);
        if (ar.indexOf(r) === -1) {
            ar.push(r);

        } length++;
    } console.log(ar)
}
uniquenoprinting(10)*/

function p(ar, type) {
    ar.forEach((item, index) => {
        if (typeof item == type) {
            console.log(true);

        }
        else {
            console.log(false);
        }
    })

}
let ab = [2, 2, 43, 34, 3, 3]
p(ab, Number)

const obj = {

}
obj.name = "ujji"
console.log(obj)



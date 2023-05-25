const clovek = {
    jmeno: "Mosh",
    mluv() {
        console.log(this)
    }
}

clovek.mluv();

const mluveni = clovek.mluv.bind(clovek);
console.log(mluveni);
mluveni();

//---------------------------------------------------
const druhaMocnina = a => a*a;

console.log(druhaMocnina(-4));

const prace = [
    {id: 1, aktivni: true},
    {id: 2, aktivni: true},
    {id: 3, aktivni: false}
]

aktivniPrace = prace.filter(pr => pr.aktivni)
// Como podemos melhorar o esse código usando TS? 

interface Pessoas {
    nome: string,
    idade: number,
    profissao: "atriz" | "Padeiro" | "padeiro"
}

let pessoa1: Pessoas = {
    nome: "maria",
    idade: 29,
    profissao: "atriz"
}

let pessoa2: Pessoas = {
    nome: "roberto",
    idade: 19,
    profissao: "Padeiro"
}

let pessoa3 = {
    nome: "laura",
    idade: "32",
    profissao: "Atriz"
};

let pessoa4: Pessoas = {
    nome: "carlos",
    idade: 19,
    profissao: "padeiro"
}
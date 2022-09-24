interface Usuario{
    nome: string, 
    email: string,
    address?: string,
};

function getUser(): Usuario{
    return {
        nome: "Marcos",
        email: "marcos@ok.com"
    }
}

function setUser(usuario:Usuario){
    //...
}
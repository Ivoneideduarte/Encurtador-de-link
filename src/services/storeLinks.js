// Buscar os links salvos
export async function getLinksSave(key) {
    //Quem usar a função irá fornecer a chave
    const myLinks = await localStorage.getItem(key)

    let linksSaves = JSON.parse(myLinks) || []

    return linksSaves
}

// Salvar um link no localstorage
export async function saveLink(key, newLink) {
    let linksStored = await getLinksSave(key)

    //Se já tiver um link salvo com algum ID eu não vou deixar duplicar
    const hasLink = linksStored.some(link => link.id === newLink.id)
    if(hasLink) {
        console.log("Esse link já existe na sua lista!")
        return
    }

    // Adicionar esse novo link na lista
    linksStored.push(newLink) //Adiciona no array
    await localStorage.setItem(key, JSON.stringify(linksStored))
    console.log("Link salvo com sucesso!")
    
}

// Deletar algum link salvo do localstorage

export function deleteLink(links, id) {
    let myLinks = links.filter(item => {//Percorre a lista
        return (item.id !== id)
    })

    //Atualiza o localstorage retirando o item
    localStorage.setItem('@encurtaLink', JSON.stringify(myLinks))
    console.log("Link deletado com sucesso!")

    return myLinks //Retorna a lista atualizada
}
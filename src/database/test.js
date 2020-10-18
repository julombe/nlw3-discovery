const Database = require('./db')
const saveOrphanage = require('./saveOrphanage')

Database.then(async db => {
    //inserir dados na tabela
 await saveOrphanage(db, {
        lat: "-8.9055183",
        lng: "13.2121317",
        name: "Lar dos meninos",
        about: "Presta assistência a crianças de 06 a 15 anos que se encontre em situação de risco e/ou vulnerabilidade social",
        whatsapp: "2449223000459",
        images: [

            "https://images.unsplash.com/photo-1572247324584-a841c32b95ac?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9",

            "https://images.unsplash.com/photo-1596962248954-a0381dc10a20?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9"
        ].toString(),
        instructions: "Venha como se sentir a vontade e traga muito amor e paciência para dar",
        opening_hours: "Horário de visitas das 08h até as 18h",
        opening_on_weekends: "0"    
    },)


    //consultar dados da tabela
    const selectedOrphanages = await db.all("SELECT * FROM orphanages")
    console.log(selectedOrphanages)

    //consultar somente 1 orphanato, pelo id
    //const orphanage = await db.all('SELECT * FROM orphanages WHERE id = "2"')
    //console.log(orphanage)


    // deletar dado da tabela
    //console.log(await db.run('DELETE FROM orphanages WHERE id = "2"')) 
    //console.log(await db.run('DELETE FROM orphanages WHERE id = "1"')) 
    //console.log(await db.run('DELETE FROM orphanages WHERE id = "3"')) 
    
})
let agenda = new Map()
agenda.set("Ramon", 654715252)

function myAgenda(){
    console.log("1.Agregar nuevo contacto");
    console.log("2.Bucar un contacto");
    console.log("3.Modificar contacto");
    console.log("4.Eliminar contacto");
    console.log("5.Salir");
    
    let continuar = true
    while(continuar){
        let ask = prompt("¿Que deseas hacer? Introduce un numero");
        let answer = parseInt(ask)
    
    switch(answer){
        case 1:
            let newContact = prompt("Introduce el nombre del contacto")
            let newNumber = prompt("Introduce el numero del contacto")
            function addContact(){
                if (newNumber.length == 9){
                    agenda.set(newContact, newNumber);
                    console.log(`Contacto ${newContact} añadido`)
                }else{
                    console.log("El numero introducido es muy largo o muy corto")
                }
            }
            addContact()
            break;
        case 2:
            let name = prompt("¿Que contacto deseas buscar?");
            let verif = agenda.has(name);
            if (verif == true){
                console.log("EL número del contacto es ", + agenda.get(name));
            }else{
                console.log("Contacto no encontrado")
            }
            break
        case 3:
            let contactName = prompt("¿Que contacto deseas modificar?");
            let revisa = agenda.has(contactName);
            if (revisa == true){
                agenda.delete(contactName);
                let newNumber = prompt("Introduce el nuevo numero del contacto");
                if (newNumber.length == 9){
                    agenda.set(contactName, newNumber);
                    console.log(`Contacto ${contactName} modificado`)
                }else{
                    console.log("El numero introducido es muy largo o muy corto")
                }
                
            }else{
                console.log(`Contacto ${contactName} no encontrado`)
            }
            break
        case 4: 
            let deleteName = prompt("¿Que contacto deseas eliminar?");
            let delName = agenda.has(deleteName);
            if (delName == true){
                agenda.delete(deleteName);
                console.log(`Contacto ${deleteName} eliminado`);
            }else{
                console.log(`Contacto ${deleteName} no encontrado`);
            }
            break
        case 5: 
            (console.log("Saliendo de la aplicacion"))
            continuar = false
            break
        default:
            console.log("Opcion no valida intentalo de nuevo")
            break
    }
}
}


myAgenda()
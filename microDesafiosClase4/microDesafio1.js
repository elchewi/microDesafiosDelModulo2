

let perfil = 'ASISTENTE'
switch(perfil){
    case '':
    console.log('Especifique un usuario');
    break
    case 'Administrador':
      case 'ADMINISTRADOR':
      case 'administrador':
       console.log('Usted tiene todos los privilegios de uso del sistema');
       break;
       case 'Asistente':
        case 'ASISTENTE':
        case 'asistente':
        console.log('Usted solo tiene permisos de registrar, modificar y consultar datos');
        break;
        case 'Invitado':
            case 'INVITADO':
            case 'invitado':
                console.log('Usted solo tiene permisos de consultar datos');
                break
                default:
                    console.log('Usted debe de especificar un perfil valido');
    }    
            

 let perfil2 = 'Invitado'; 
if (perfil2 == 'Administrador' || perfil2 == 'ADMINISTRADOR' || perfil2 == 'administrador'){
    console.log('Usted tiene todos los privilegios de uso del sistema');
}else if(perfil2 == 'Asistente' || perfil2 == 'ASISTENTE' || perfil2 == 'asistente'){
    console.log('Usted solo tiene permisos de registrar, modificar y consultar datos');
}else if(perfil2 == 'Invitado' || perfil2 == 'INVITADO' || perfil2 == 'invitado'){
    console.log('Usted solo tiene permisos de consultar datos');
}else {
    console.log('Especifique un usuario');
} 

// Otra manera de hacer


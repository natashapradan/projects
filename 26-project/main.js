
let string = 'Ella no está buscando novio\n' +
  'Quiere salir a joder (Ey-yeah)\n' +
  'Quiere olvidarse de ese bobo\n' +
  'Porque el cabrón le fue infiel (Oh-no-no-no)\n' +
  'Le rompieron el corazón y no busca a nadie que se lo reponga\n' +
  'Sólo quiere a alguien que se lo ponga\n' +
  'Ella quiere un man que no la llame y que no joda\n' +
  'Pa\' reemplazar al perro que no la valora\n' +
  'Quiere aprovechar que estar más buena es más de moda\n' +
  'Empezó a meterle al gym desde que quedó sola\n' +
  'Las envidiosa\' dicen que eso se lo hizo el cirujano\n' +
  'Pero es ella misma queriendo salir del daño\n' +
  'Quiere salir, fumar, beber\n' +
  'Subir un video pa\' que lo vea él\n' +
  'Pa\' que se de cuenta de lo que perdió\n' +
  'Pa\' que el hijueputa se sienta peor\n' +
  'Quiere salir, fumar, beber\n' +
  'Subir un video pa\' que lo vea él\n' +
  'Pa\' que se de cuenta de lo que perdió\n' +
  'Pa\' que el hijueputa se sienta peor\n' +
  'Ella no está buscando novio (No busca novio, no)\n' +
  'Quiere salir a joder (Ey-yeah)\n' +
  'Quiere olvidarse de ese bobo (Ey, yeah-yeah-yeah-yeah)\n' +
  'Porque el cabrón le fue infiel (Oh-no-no-no)\n' +
  'Y cuando se suelta\n' +
  'No existe una amiguita que la pare\n' +
  'No quiere un novio pa\' rendirle cuentas\n' +
  'No necesita ningún HP en el party, que la pare\n' +
  'Y cuando se suelta\n' +
  'No existe una amiguita que la pare \n' +
  'No quiere un novio pa\' rendirle cuentas\n' +
  'No necesita ningún HP en el party, que la pare\n' +
  'Quiere salir, fumar, beber\n' +
  'Subir un video pa\' que lo vea él\n' +
  'Pa\' que se de cuenta de lo que perdió\n' +
  'Pa\' que el hijueputa se sienta peor\n' +
  'Quiere salir, fumar, beber\n' +
  'Subir un video pa\' que lo vea él\n' +
  'Pa\' que se de cuenta de lo que perdió\n' +
  'Pa\' que el hijueputa se sienta peor (Peor)\n' +
  'Ella no está buscando novio (No busca novio, no)\n' +
  'Quiere salir a joder (Ey-yeah)\n' +
  'Quiere olvidarse de ese bobo (Ey, yeah-yeah-yeah-yeah)\n' +
  'Porque el cabrón le fue infiel (Oh-no-no-no)\n' +
  'Ella no está buscando novio (No busca novio, no)\n' +
  'Quiere salir a joder, yeah-yeah, yeah-yeah\n' +
  'Para olvidarte de ese bobo\n' +
  'Cuenta conmigo, mujer, yeah-yeah, yeah-yeah'

function numberOfMentions() {

    let match = string.match(/(mamacita|joder|bebe|raggaeton|mami|sexy)/gi)
    return match.length
}

console.log(numberOfMentions())

if (numberOfMentions() >= 2){
  console.log("Definitely Latin American music!")
} else {
  console.log("Something boring")
}

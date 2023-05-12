function DiaSemana(){
    var Hoje= new Date(document.getElementById('data').value);
    var DiaSemana= Hoje.getDay()
    var Semana= new Array(6);

    Semana[0] = 'Domingo';
    Semana[0] = 'segunda';
    Semana[0] = 'Terça';
    Semana[0] = 'Quarta';
    Semana[0] = 'Quinta';
    Semana[0] = 'Sexta';
    Semana[0] = 'Sábado';

    document.write(Semana[Dia])
    document.write('<br>', Hoje)
}
function ColorirNome(){
    var Cor = new Array('black', 'Magenta', 'Green'
    ,'Blue', 'Red', 'Yellow', 'Silver')
    var Nome= document.getElementById('pNome').value;

    for (let i=0; i<Cor.length; i++){
        document.write(Nome.fontcolor(Cor[i]+ '<br>' ));
    }

}
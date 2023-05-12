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
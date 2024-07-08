var agora = new Date()
var diaSem = agora.getDay() /* esse comando pega o dia da semana como um numero, sendo 0 o domingo e 6 o sabado */
var horaDia = agora.getHours()
var mesAno = (agora.getMonth() + 1)
var diaMes = agora.getDate()
var ano = agora.getFullYear()
switch (diaSem) {
    case 0:
        console.log('Hoje é domingo ')
        console.log(`São ${horaDia} horas, Dia ${diaMes}/${mesAno}/${ano}`)
        break
    case 1:
        console.log('Segunda-feira')
        console.log(`São ${horaDia} horas, Dia ${diaMes}/${mesAno}/${ano}`)
        break
    case 2:
        console.log('Terça-feira')
        console.log(`São ${horaDia} horas, Dia ${diaMes}/${mesAno}/${ano}`)
        break
    case 3:
        console.log('Quarta-feira')
        console.log(`São ${horaDia} horas, Dia ${diaMes}/${mesAno}/${ano}`)
        break
    case 4:
        console.log('Quinta-feira')
        console.log(`São ${horaDia} horas, Dia ${diaMes}/${mesAno}/${ano}`)
        break
    case 5:
        console.log('Sexta-feira')
        console.log(`São ${horaDia} horas, Dia ${diaMes}/${mesAno}/${ano}`)
        break
    case 6:
        console.log('Sábado')
        console.log(`São ${horaDia} horas, Dia ${diaMes}/${mesAno}/${ano}`)
        break
    default:
        console.log('Erro')
        break    
}
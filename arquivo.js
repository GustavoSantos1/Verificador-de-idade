function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = window.document.getElementById('txtano')
    var res = window.document.querySelector('div#res')
    if(fano.value.length == 0 || fano.value > ano){
        window.alert('Valores impossíveis. Informe novos valores')
    }else{
        var fsex = window.document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('src', 'foto')
        if(fsex[0].checked){
            genero = 'Homem'
            if(idade >= 0 && idade <= 10){
                //criança
                img.setAttribute('src', 'Homem criança.png')
            }else if(idade <= 21){
                //jovem
                img.setAttribute('src', 'Homem adolescente.png')
            }else if(idade <= 50){
                //adulto
                img.setAttribute('src', 'Homem.png')
            }else{
                //idoso
                img.setAttribute('src', 'Homem idoso.png')
            }
        }else{
            genero = 'Mulher'
            if(idade >= 0 && idade <= 10){
                //criança
                img.setAttribute('src', 'Mulher criança.png')
            }else if(idade <= 21){
                //jovem
                img.setAttribute('src', 'Mulher adolescente.png')
            }else if(idade <= 50){
                //adulto
                img.setAttribute('src', 'Mulher.png')
            }else{
                //idoso
                img.setAttribute('src', 'Mulher idosa.png')
            }
        }
        res.innerHTML = `Detectado ${genero} com ${idade} anos`
        res.appendChild(img)
    }
}

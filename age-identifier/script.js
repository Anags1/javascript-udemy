function verificar() 
{
    var data = new Date();
    var ano = data.getFullYear();
    var formularioAno = document.getElementById('txtano');
    var res = document.querySelector('div#res');

    if (formularioAno.value.length == 0 || Number(formularioAno.value) > ano) {
        alert('[ERRO] Verifique os dados e tente novamente');
    } 
    var formularioSexo = document.getElementsByName('radsex');
    var idade = ano - Number(formularioAno.value);
    var genero = '';
    let img = document.createElement('img');
    
    img.setAttribute('id', 'foto');
        

    if (formularioSexo[0].checked) {
        genero = 'um Homem';
    } 

    if (formularioSexo[1].checked) {
        genero = 'uma Mulher';
    }

    let sexo = (genero == 'um Homem')? 'm': 'f';

    defineImagem(sexo, img, idade);
    
    res.style.textAlign = 'center';
    res.innerHTML = `Detectamos ${genero} com ${idade} anos.`;
    res.appendChild(img);
};

function defineImagem(sexo, img, idade)
{
    let objImg = {
        'm': {
            'criancam.png': (idade >= 0 && idade < 10),
            'jovemm.png': (idade > 10 && idade < 21 ),
            'adultom.png': (idade > 21 && idade < 50),
            'idoso.png' : (idade > 50),
        },
        'f': {
            'criancaf.png': (idade >= 0 && idade < 10),
            'jovemf.png': (idade > 10 && idade < 21 ),
            'adultof.png': (idade > 21 && idade < 50),
            'idosa.png' : (idade > 50),
        }
    }; 

    for (let key in objImg[sexo]){
        if (objImg[sexo][key]) {
            img.setAttribute('src', key);
        }
    };
};

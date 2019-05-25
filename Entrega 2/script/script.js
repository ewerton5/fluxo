function criarElemento(tag, texto) {
    var elemento = document.createElement(tag);
    elemento.textContent = texto;
    return elemento;
}

function postar() {
    if (document.getElementById('text').value != "") {
        var idpadrao = document.getElementById('cont').textContent;
        //BR
        var conjunto = document.getElementById('esquerda');
        var depois = document.getElementById('br');
        br = document.createElement('br');
        br.id = 'br';
        conjunto.insertBefore(br, depois);
        //DIV post
        var depois = document.querySelectorAll('#br')[1];
        div = document.createElement('div');
        div.id = 'post'+idpadrao;
        div.setAttribute('class', 'post');
        conjunto.insertBefore(div, depois);
        //DIV borda
        var conjunto = document.querySelectorAll('.post')[1];
        div = document.createElement('div');
        div.setAttribute('class', 'borda');
        conjunto.insertBefore(div, null);
        //a
        var conjunto = document.querySelectorAll('.borda')[2];
        a = document.createElement('a');
        a.id = 'a';
        a.href = '';
        conjunto.insertBefore(a, null);
        //IMG perfil
        var conjunto = document.querySelector('#a');
        img = document.createElement('img');
        img.id = 'icone';
        img.src = 'imagens/homem.jpg';
        conjunto.insertBefore(img, null);
        //SPAN nome
        span = criarElemento('span', 'Fulano Silva');
        conjunto.insertBefore(span, null);
        //p
        var conjunto = document.querySelectorAll('.borda')[2];
        p = criarElemento('p', document.getElementById('text').value);
        conjunto.insertBefore(p, null);
        //DIV borda
        var conjunto = document.querySelectorAll('.post')[1];
        div = document.createElement('div');
        div.setAttribute('class', 'borda');
        conjunto.insertBefore(div, null);
        //IMG curtir
        var conjunto = document.querySelectorAll('.borda')[3];
        img = document.createElement('img');
        img.id = 'icone';
        img.src = 'imagens/curtir.png';
        conjunto.insertBefore(img, null);
        //SPAN like
        span = criarElemento('span', '0');
        span.id = 'like' + idpadrao;
        conjunto.insertBefore(span, null);
        //DIV borda
        var conjunto = document.querySelectorAll('.post')[1];
        div = document.createElement('div');
        div.setAttribute('class', 'borda');
        conjunto.insertBefore(div, null);
        //ul anexo
        var conjunto = document.querySelectorAll('.borda')[4];
        ul = document.createElement('ul');
        ul.id = 'anexo';
        conjunto.insertBefore(ul, null);
        //li curtir
        var conjunto = document.querySelectorAll('#anexo')[1];
        li = document.createElement('li');
        li.id = 'li';
        conjunto.insertBefore(li, null);
        //button curtir
        var conjunto = document.querySelectorAll('#li')[0];
        button = criarElemento('button', 'Curtir');
        button.id = 'buttonlike'+idpadrao;
        button.setAttribute('class', 'curtir');
        button.setAttribute('onClick', "curtir('like" + idpadrao + "')");
        conjunto.insertBefore(button, null);
        //li comentar
        var conjunto = document.querySelectorAll('#anexo')[1];
        li = document.createElement('li');
        li.id = 'li';
        conjunto.insertBefore(li, null);
        //label comentar
        var conjunto = document.querySelectorAll('#li')[1];
        label = criarElemento('label', 'Comentar');
        label.setAttribute('for', 'coment'+idpadrao);
        conjunto.insertBefore(label, null);
        //li compartilhar
        var conjunto = document.querySelectorAll('#anexo')[1];
        li = document.createElement('li');
        li.id = 'li';
        conjunto.insertBefore(li, null);
        //a compartilhar
        var conjunto = document.querySelectorAll('#li')[2];
        a = criarElemento('a', 'Compartilhar');
        a.href = '';
        conjunto.insertBefore(a, null);
        //INPUT comentario
        var conjunto = document.querySelectorAll('.post')[1];
        input = document.createElement('input');
        input.id = 'coment'+idpadrao;
        input.setAttribute('class', 'comentario');
        input.setAttribute('onclick', "enter('"+idpadrao+"')");
        input.type = 'text';
        input.placeholder = 'Escreva um comentário...';
        conjunto.insertBefore(input, null);
        //H1 boolean
        h1 = criarElemento('h1', 'true');
        h1.id = 'booleanlike'+idpadrao;
        h1.setAttribute('class', 'cont');
        conjunto.insertBefore(h1, null);
        //H1 contador
        h1 = criarElemento('h1', '1');
        h1.id = 'contcoment'+idpadrao;
        h1.setAttribute('class', 'cont');
        conjunto.insertBefore(h1, null);
        //ajustes finais
        document.getElementById('text').value = '';
        document.getElementById('cont').textContent = (parseInt(document.getElementById('cont').textContent) + 1).toString();
    }
}
function curtir(id) {
    if (Boolean(document.getElementById('boolean'+id).textContent)) {
        document.getElementById(id).textContent = (parseInt(document.getElementById(id).textContent) + 1).toString();
        document.getElementById(id).setAttribute('class', 'azul');
        document.getElementById('button'+id).setAttribute('class', 'azul');
        document.getElementById('boolean'+id).textContent = '';
    } else {
        document.getElementById(id).textContent = (parseInt(document.getElementById(id).textContent) - 1).toString();
        document.getElementById(id).removeAttribute('class');
        document.getElementById('button'+id).removeAttribute('class');
        document.getElementById('boolean'+id).textContent = 'true';
    }
}
function enter(id){
    var input = document.getElementById('coment'+id);
    input.addEventListener("keydown", function (e) {
        if (e.keyCode === 13) {
            comentar(id);
        }
    });
}
function comentar(id) {
    var input = document.getElementById('coment'+id);
    if (input.value != "") {
        if (document.getElementById('contcoment'+id).textContent == '1') {
            //DIV borda
            var conjunto = document.getElementById('post'+id);
            div = document.createElement('div');
            div.id = 'bordacoment'+id;
            div.setAttribute('class', 'borda');
            conjunto.insertBefore(div, input);
        }
        document.getElementById('contcoment'+id).textContent = (parseInt(document.getElementById('contcoment'+id).textContent) + 1).toString();
        //DIV comentario
        var conjunto = document.getElementById('bordacoment'+id);
        var div = document.createElement('div');
        div.id = 'coment'+id+document.getElementById('contcoment'+id).textContent;
        div.setAttribute('class', 'lateralfixo');
        conjunto.insertBefore(div, null);
        //BR
        br = document.createElement('br');
        conjunto.insertBefore(br, null);
        //a
        var conjunto = document.getElementById('coment'+id+document.getElementById('contcoment'+id).textContent);
        a = document.createElement('a');
        a.id = 'a'+id+document.getElementById('contcoment'+id).textContent;
        a.href = '';
        conjunto.insertBefore(a, null);
        //IMG perfil
        var conjunto = document.getElementById('a'+id+document.getElementById('contcoment'+id).textContent);
        img = document.createElement('img');
        img.id = 'icone';
        img.src = 'imagens/homem.jpg';
        conjunto.insertBefore(img, null);
        //SPAN nome
        span = criarElemento('span', 'Fulano Silva');
        conjunto.insertBefore(span, null);
        //SPAN comentario
        var conjunto = document.getElementById('coment'+id+document.getElementById('contcoment'+id).textContent);
        span = criarElemento('span', ': '+input.value);
        conjunto.insertBefore(span, null);
        document.getElementById('coment'+id).value = '';
    }
}
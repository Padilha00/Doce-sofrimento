const paginaGeneros = document.getElementById("pagina-generos");
const paginaPlaylist = document.getElementById("pagina-playlist");

const containerGeneros = document.getElementById("generos");

const tituloGenero = document.getElementById("titulo-genero");
const descricaoGenero = document.getElementById("descricao-genero");

const containerMusicas = document.getElementById("musicas");

const filtroArtista = document.getElementById("artista");
const botaoVoltar = document.getElementById("voltar");


const categorias = [

    {
        nome: "Bateu a saudade",
        descricao: "Pra quando você lembra, mas ainda tá tentando fingir que tá tudo bem.",

        musicas: [

            {
                titulo: "Caso Indefinido",
                artista: "Cristiano Araújo",
                capa: "img/sertanejo.jpg",
                spotify: "https://open.spotify.com/track/54TwNxgRorpA9lsStXcv0k"
            },

            {
                titulo: "Eu Tenho Medo",
                artista: "Zé Vaqueiro",
                capa: "img/sertanejo.jpg",
                spotify: "https://open.spotify.com/track/7yjduLSgPntFlq79Cuzrfz"
            },

            {
                titulo: "Vidinha de Balada",
                artista: "Henrique & Juliano",
                capa: "img/sertanejo.jpg",
                spotify: "https://open.spotify.com/track/3PfW7ao9HN7DRnCfZBUwzo"
            },

            {
                titulo: "Realidade ou Fantasia",
                artista: "Henrique & Gabriel",
                capa: "img/sertanejo.jpg",
                spotify: "https://open.spotify.com/track/7KSBwyQ6tChVqNkwjL9xY7"
            },

            {
                titulo: "Tinta de Amor / Realidade ou Fantasia / Duas Vidas",
                artista: "Henrique & Juliano",
                capa: "img/sertanejo.jpg",
                spotify: "https://open.spotify.com/track/6jjlG1YeJGAHwZD4L4SwP9"
            },

            {
                titulo: "Promessa de Cachaceiro",
                artista: "George Henrique & Rodrigo",
                capa: "img/sertanejo.jpg",
                spotify: "https://open.spotify.com/track/4YsQFJn8BbpVxxriwW59mL"
            },

            {
                titulo: "Última Saudade",
                artista: "Henrique & Juliano",
                capa: "img/sertanejo.jpg",
                spotify: "https://open.spotify.com/track/1tmD4Xpd1YNSGCG5AYqHDk"
            },

            {
                titulo: "Áudio",
                artista: "Diego & Victor Hugo",
                capa: "img/sertanejo.jpg",
                spotify: "https://open.spotify.com/track/4v6SAnzwEr7s2m0gFQnJFJ"
            },

            {
                titulo: "É Que Eu Não Te Esqueci",
                artista: "Henrique & Juliano",
                capa: "img/sertanejo.jpg",
                spotify: "https://open.spotify.com/track/3D71jvd5cyuaW5c3jBCw4i"
            },

            {
                titulo: "Boate Azul",
                artista: "Bruno & Marrone",
                capa: "img/sertanejo.jpg",
                spotify: "https://open.spotify.com/track/4Z20Nlp53CuArdsy0VbeTb"
            },

            {
                titulo: "Dormi na Praça",
                artista: "Bruno & Marrone",
                capa: "img/sertanejo.jpg",
                spotify: "https://open.spotify.com/track/3kdPjbnYQTWT8Pc1Df3FSD"
            },

            {
                titulo: "Telefone Mudo",
                artista: "Trio Parada Dura",
                capa: "img/sertanejo.jpg",
                spotify: "https://open.spotify.com/track/5aWL7dDwhhxVfALMbSx2G1"
            }

        ]
    },


    {
        nome: "Começou a doer",
        descricao: "Pra quando a saudade já começou a apertar.",

        musicas: [

            {
                titulo: "Estrada da Vida",
                artista: "Milionário & José Rico",
                capa: "img/sertanejo.jpg",
                spotify: "https://open.spotify.com/track/0V2Q6MYSxQiSOM4WtLvJT4"
            },

            {
                titulo: "Jogado na Rua",
                artista: "Guilherme & Santiago",
                capa: "img/sertanejo.jpg",
                spotify: "https://open.spotify.com/track/492GyLqp8CQSTCu5tc3ogK"
            },

            {
                titulo: "Todo Mundo Menos Você",
                artista: "Marília Mendonça, Maiara & Maraisa",
                capa: "img/sertanejo.jpg",
                spotify: "https://open.spotify.com/track/6H1OZfzhdwK4lmaPnOLJ0b"
            },

            {
                titulo: "Cadeira Cativa",
                artista: "Zé Neto & Cristiano",
                capa: "img/sertanejo.jpg",
                spotify: "https://open.spotify.com/track/27BcWN9G2MxGBXvC0tEKkN"
            },

            {
                titulo: "Cuida Bem Dela",
                artista: "Henrique & Juliano",
                capa: "img/sertanejo.jpg",
                spotify: "https://open.spotify.com/track/5lEBgfgvNWyFThpFgCw9lL"
            },

            {
                titulo: "Como Faz Com Ela",
                artista: "Marília Mendonça",
                capa: "img/sertanejo.jpg",
                spotify: "https://open.spotify.com/track/4CUzutFmcLdFZ4MgftBg0O"
            },

            {
                titulo: "Bebe, Beija e Trai",
                artista: "Mayke & Rodrigo e Panda",
                capa: "img/sertanejo.jpg",
                spotify: "https://open.spotify.com/track/1yJYseCZJYRHZkl1DJ3tLs"
            },

            {
                titulo: "Chuva de Arroz",
                artista: "Luan Santana",
                capa: "img/sertanejo.jpg",
                spotify: "https://open.spotify.com/track/66rhnZizvTv2ufYpyHoWoW"
            },

            {
                titulo: "Meia Noite e Meia",
                artista: "Guilherme & Benuto",
                capa: "img/sertanejo.jpg",
                spotify: "https://open.spotify.com/track/5wpBT2RitEgPr9iBYet6W8"
            },

            {
                titulo: "Um Dia Te Levo Comigo",
                artista: "Jorge & Mateus",
                capa: "img/sertanejo.jpg",
                spotify: "https://open.spotify.com/track/1NPnoibZZyeILxD4mpvfAy"
            },

            {
                titulo: "Liberdade Provisória",
                artista: "Henrique & Juliano",
                capa: "img/sertanejo.jpg",
                spotify: "https://open.spotify.com/track/76INkBBe9BT6spplAiiIUa"
            },

            {
                titulo: "Bebaça",
                artista: "Marília Mendonça, Maiara & Maraisa",
                capa: "img/sertanejo.jpg",
                spotify: "https://open.spotify.com/track/6YjyT6MEMsMc41NNWk2dYg"
            },

            {
                titulo: "Medo Bobo",
                artista: "Maiara & Maraisa",
                capa: "img/sertanejo.jpg",
                spotify: "https://open.spotify.com/track/2CW04trIoYMbroZWDzPAjs"
            }

        ]
    },


    {
        nome: "Agora já era",
        descricao: "Pra quando você percebe que não superou absolutamente nada.",

        musicas: [

            {
                titulo: "Seu Polícia",
                artista: "Zé Neto & Cristiano",
                capa: "img/sertanejo.jpg",
                spotify: "https://open.spotify.com/track/39995SwI9fcO5ON9aku0gU"
            },

            {
                titulo: "Romântico",
                artista: "Henrique & Juliano",
                capa: "img/sertanejo.jpg",
                spotify: "https://open.spotify.com/track/3oO9ys8uafPkMG8Ey29bqu"
            },

            {
                titulo: "Eu, Você, o Mar e Ela",
                artista: "Luan Santana",
                capa: "img/sertanejo.jpg",
                spotify: "https://open.spotify.com/track/000xYdQfIZ4pDmBGzQalKU"
            },

            {
                titulo: "Apaga Apaga Apaga",
                artista: "Danilo & Davi",
                capa: "img/sertanejo.jpg",
                spotify: "https://open.spotify.com/track/17tg01y3RhlfRKMnd333yL"
            },

            {
                titulo: "Decide Aí",
                artista: "Matheus & Kauan",
                capa: "img/sertanejo.jpg",
                spotify: "https://open.spotify.com/track/2CKg2u26mtyRYodwbxmA8l"
            },

            {
                titulo: "Aquela Pessoa",
                artista: "Henrique & Juliano",
                capa: "img/sertanejo.jpg",
                spotify: "https://open.spotify.com/track/598ubU6RFZCKFIuqYM81s9"
            },

            {
                titulo: "Todo Mundo Menos Eu",
                artista: "Hugo & Guilherme e Ana Castela",
                capa: "img/sertanejo.jpg",
                spotify: "https://open.spotify.com/track/0RTv8p21Oeav1EztMQ5Xbt"
            },

            {
                titulo: "Mentirosa",
                artista: "Hugo & Guilherme e Wesley Safadão",
                capa: "img/sertanejo.jpg",
                spotify: "https://open.spotify.com/track/7pBPXkaVQaP3Y3Wwfkpvbn"
            },

            {
                titulo: "Telefone Sem Fio",
                artista: "Mari Fernandez",
                capa: "img/sertanejo.jpg",
                spotify: "https://open.spotify.com/track/0mo4IFJlaejAEzwUmyOyTD"
            },

            {
                titulo: "Trocaria Tudo",
                artista: "Henrique & Juliano e Marcos & Fernando",
                capa: "img/sertanejo.jpg",
                spotify: "https://open.spotify.com/track/6PFFPa1lfQcCQ5qeSvtFXe"
            },

            {
                titulo: "Só Eu e Você",
                artista: "Maurício & Eduardo e Max & Luan",
                capa: "img/sertanejo.jpg",
                spotify: "https://open.spotify.com/track/2EFjndYegFjMJFNkfQzBjc"
            },

            {
                titulo: "Anestesiado",
                artista: "Murilo Huff",
                capa: "img/sertanejo.jpg",
                spotify: "https://open.spotify.com/track/2NuJD96MExVkXqhjlprbAD"
            },

            {
                titulo: "Só Com Ela",
                artista: "Murilo Huff e Matheus Fernandes",
                capa: "img/sertanejo.jpg",
                spotify: "https://open.spotify.com/track/7az7NyQSqKGs3sXFlTCAr4"
            }

        ]
    },


    {
        nome: "Pra sofrer de verdade",
        descricao: "Aqui não tem música feliz. É sofrimento do início ao fim.",

        musicas: [

            {
                titulo: "Saudade de Quem Eu Sou",
                artista: "Henrique & Juliano",
                capa: "img/sertanejo.jpg",
                spotify: "https://open.spotify.com/track/3xgrWGYrqZVL7aAvZTm2MA"
            },

            {
                titulo: "Mudando de Assunto",
                artista: "Henrique & Juliano",
                capa: "img/sertanejo.jpg",
                spotify: "https://open.spotify.com/track/5nFT3Y3C0rzuXYmRBVL3AF"
            },

            {
                titulo: "Te Assumi Pro Brasil",
                artista: "Matheus & Kauan",
                capa: "img/sertanejo.jpg",
                spotify: "https://open.spotify.com/track/6P7Uodyh8g40Nyc3no6R8E"
            },

            {
                titulo: "De Copo em Copo",
                artista: "George Henrique & Rodrigo",
                capa: "img/sertanejo.jpg",
                spotify: "https://open.spotify.com/track/37vnlfV2nnlYay3Cuvsqls"
            },

            {
                titulo: "Até Você Voltar",
                artista: "Henrique & Juliano",
                capa: "img/sertanejo.jpg",
                spotify: "https://open.spotify.com/track/3NwkqPmsqCMKiSX3TD6ZFT"
            },

            {
                titulo: "Entregador de Flor",
                artista: "Diego & Victor Hugo",
                capa: "img/sertanejo.jpg",
                spotify: "https://open.spotify.com/track/5aMgTcyBPH90hWHhbNKTwR"
            },

            {
                titulo: "Morena",
                artista: "Luan Santana",
                capa: "img/sertanejo.jpg",
                spotify: "https://open.spotify.com/track/4PQdrXMDHDPl1RczrrlADd"
            },

            {
                titulo: "Todo Mundo Vai Sofrer",
                artista: "Marília Mendonça",
                capa: "img/sertanejo.jpg",
                spotify: "https://open.spotify.com/track/4E6RdcCWMiHTu7zy1VTNDo"
            },

            {
                titulo: "Oi Balde",
                artista: "Zé Neto & Cristiano",
                capa: "img/sertanejo.jpg",
                spotify: "https://open.spotify.com/track/2XmPCfvLakXAbSj2qgxskV"
            },

            {
                titulo: "Infarto",
                artista: "Diego & Victor Hugo",
                capa: "img/sertanejo.jpg",
                spotify: "https://open.spotify.com/track/2dwtGEKVck5Nw4fR92P88O"
            },

            {
                titulo: "Ela é Ela",
                artista: "Thiago Aquino",
                capa: "img/sertanejo.jpg",
                spotify: "https://open.spotify.com/track/7pvrsbBKUQI2QmA74WCJa5"
            }

        ]
    }

];


categorias.forEach(function(categoria, index) {

    const card = document.createElement("div");

    card.classList.add("genero");

    card.innerHTML = `
        <h2>${categoria.nome}</h2>
        <p>Ver músicas →</p>
    `;

    card.addEventListener("click", function() {
        abrirCategoria(index);
    });

    containerGeneros.appendChild(card);
});


function abrirCategoria(index) {

    const categoria = categorias[index];

    paginaGeneros.style.display = "none";
    paginaPlaylist.style.display = "block";

    tituloGenero.textContent = categoria.nome;
    descricaoGenero.textContent = categoria.descricao;

    mostrarMusicas(categoria.musicas);
    carregarArtistas(categoria.musicas);
}


function mostrarMusicas(musicas) {

    containerMusicas.innerHTML = "";

    musicas.forEach(function(musica) {

        const card = document.createElement("a");

        card.classList.add("musica");

        card.href = musica.spotify;
        card.target = "_blank";
        card.rel = "noopener noreferrer";

        card.innerHTML = `
            <img src="${musica.capa}" alt="Capa de ${musica.titulo}">

            <div>
                <h3>${musica.titulo}</h3>
                <p>${musica.artista}</p>
            </div>

            <span>▶</span>
        `;

        containerMusicas.appendChild(card);
    });
}



function carregarArtistas(musicas) {

    filtroArtista.innerHTML = `
        <option value="todos">Todos</option>
    `;

    const artistas = [];

    musicas.forEach(function(musica) {

        if (!artistas.includes(musica.artista)) {
            artistas.push(musica.artista);
        }

    });

    artistas.forEach(function(artista) {

        const opcao = document.createElement("option");

        opcao.value = artista;
        opcao.textContent = artista;

        filtroArtista.appendChild(opcao);
    });
}



filtroArtista.addEventListener("change", function() {

    const artistaSelecionado = filtroArtista.value;

    const categoriaAtual = categorias.find(function(categoria) {

        return categoria.nome === tituloGenero.textContent;

    });


    if (artistaSelecionado === "todos") {

        mostrarMusicas(categoriaAtual.musicas);

    } else {

        const musicasFiltradas = categoriaAtual.musicas.filter(function(musica) {

            return musica.artista === artistaSelecionado;

        });

        mostrarMusicas(musicasFiltradas);
    }

});


botaoVoltar.addEventListener("click", function() {

    paginaPlaylist.style.display = "none";
    paginaGeneros.style.display = "block";

});
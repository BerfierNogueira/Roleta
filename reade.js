
var questions = JSON.parse(`[
    {
       "head":"\ufeff1 - \u00c9 um tipo de computador que tem como fun\u00e7\u00e3o controlar as demais esta\u00e7\u00f5es de trabalho quando ligados em uma rede de computadores:",
       "options":[
          "Desktop",
          "Notebook",
          "PDA",
          "UMPC",
          "Servidor",
          ""
       ],
       "gabarito":5
    },
    {
       "head":"3 - A = 10; B = 20; C = A + B; D = C; Dado o algoritmo, podemos afirmar:",
       "options":[
          "a) B \u00e9 maior do que A sendo D maior que a soma de A e B",
          "b) D \u00e9 diferente da soma de de A e B sendo D maior que C",
          "c) B equivale a A + 10 sendo B + D igual a 50",
          "d) D - A \u00e9 igual a 20 sendo 20 a metade da soma de A + B",
          "e) D \u00e9 diferente de C sendo C a metade da soma de A + D",
          ""
       ],
       "gabarito":3
    },
    {
       "head":"4 - Quando um software \u00e9 dito software livre, tem como principal caracter\u00edstica o fato de:",
       "options":[
          "a)Ser gratuito.",
          "b)Ter o c\u00f3digo-fonte dispon\u00edvel para altera\u00e7\u00e3o.",
          "c)Ser projetado para trabalhar no GNU\/Linux",
          "d)Estar dispon\u00edvel para download, em sites espec\u00edficos.",
          "e)Possuir diversas distros (distribui\u00e7\u00f5es).",
          ""
       ],
       "gabarito":2
    },
    {
       "head":"5 - O Windows e Linux s\u00e3o classificados como sistemas operacionais. A principal diferen\u00e7a entre eles est\u00e1 \u00e9 seu n\u00facleo. Onde o n\u00facleo do Windows \u00e9 propriet\u00e1rio e do Linux \u00e9 livre. Como \u00e9 chamado o n\u00facleo de um sistema operacional?",
       "options":[
          "a)Kernel",
          "b)Unix",
          "c)Chanel",
          "d)Shell",
          "e)CMDN",
          ""
       ],
       "gabarito":1
    },
    {
       "head":"6 - Quais foram os fundadores da Microsoft e em que ano?",
       "options":[
          "a)Ray Ozzie e Bill Gates, 1995",
          "b)Steve Jobs e Bill Gates, 1982",
          "c)Paul Allen e Steve Jobs, 1974",
          "d)Bill Gates e Paul Allen, 1975",
          "e)Steve Ballmer e Steve Jobs, 1969",
          ""
       ],
       "gabarito":3
    },
    {
       "head":"7 - Diversos modelos de barramento tais como ISA e PCI, por exemplo, s\u00e3o, disponibilizados na placa m\u00e3e dos microcomputadores por meio de conectores chamados de:",
       "options":[
          "a)Clock",
          "b)Boot",
          "c)Bios",
          "d)Cmos",
          "e)Slots",
          ""
       ],
       "gabarito":4
    },
    {
       "head":"8 - O elemento de um microcomputador que n\u00e3o pode ter dados gravados pelo usu\u00e1rio, mas cuja grava\u00e7\u00e3o das informa\u00e7\u00f5es referentes \u00e0s rotinas de inicializa\u00e7\u00e3o \u00e9 feita pelo fabricante do microcomputador \u00e9:",
       "options":[
          "a)O cache de disco r\u00edgido.",
          "b)A mem\u00f3ria ROM.",
          "c)A mem\u00f3ria virtual.",
          "d)O Universal Serial Bus.",
          "e)A mem\u00f3ria RAM.",
          ""
       ],
       "gabarito":2
    },
    {
       "head":"9 - Qual o doce da vers\u00e3o 6.0 do Android?",
       "options":[
          "a)Macadamia Nut Cookie",
          "b)Marshmallow",
          "c)Maria Mole",
          "d)Moranguete",
          "e)M&M's",
          ""
       ],
       "gabarito":2
    },
    {
       "head":"10 - O que significa WWW?",
       "options":[
          "a) World Wide Web",
          "b) Web World Wide",
          "c) Wide Web World",
          "d) Worm Wall-e Web",
          "e) Word World Wide",
          ""
       ],
       "gabarito":2
    },
    {
       "head":"11 - Em rela\u00e7\u00e3o a m\u00e9trica da informa\u00e7\u00e3o digital. Qual alternativa abaixo est\u00e1 na ordem correta?",
       "options":[
          "A) b B M G K T",
          "B) B b T G M K",
          "C) b B K M G T",
          "D) b B K M T G",
          "E) K B b M G T",
          ""
       ],
       "gabarito":1
    },
    {
       "head":"12- Atualmente existe um processador com 18 n\u00facleos que j\u00e1 \u00e9 vendido comercialmente, denominado:",
       "options":[
          "a)i3",
          "b)i5",
          "c)i7",
          "d)i9",
          "e)i11",
          ""
       ],
       "gabarito":3
    },
    {
       "head":"13 - O tipo de amea\u00e7a \u00e0 seguran\u00e7a de um computador que consiste em um programa completo que se replica de forma aut\u00f4noma para se propagar para outros computadores \u00e9:",
       "options":[
          "1. Worm",
          "2. V\u00edrus",
          "3. Spyware",
          "4. Spam",
          "5. Sites",
          ""
       ],
       "gabarito":4
    },
    {
       "head":"14 - Qual das alternativas corresponde a linguagem de programa\u00e7\u00e3o mais antiga?",
       "options":[
          "a) Fortran",
          "b) Cobol",
          "c) Pascal",
          "d) Assembly",
          "e) C",
          ""
       ],
       "gabarito":1
    },
    {
       "head":"15 - Supondo que voc\u00ea deseja imprimir da p\u00e1gina 19 \u00e0 p\u00e1gina 27, e tamb\u00e9m a p\u00e1gina 32 de um documento, o que voc\u00ea dever\u00e1 digitar no sistema?",
       "options":[
          "1. 19-27-32",
          "2. 19,27-32",
          "3. 19-27,32",
          "4. 19>27,32",
          "5. 19,27,32",
          ""
       ],
       "gabarito":4
    },
    {
       "head":"1 - O que Dumbledore deixa para Rony, Hermione e Harry, respectivamente?",
       "options":[
          "a) Uma espada, uma varinha e um pomo de ouro",
          "b) Um desiluminador, um chap\u00e9u e uma espada",
          "c) Um pirulito, um livro e uma espada",
          "d) Um desiluminador, um livro e um pomo de ouro",
          "e) Um desiluminador, um s\u00edmbolo e uma espada",
          ""
       ],
       "gabarito":3
    },
    {
       "head":"2 - Qual a primeira Joia do Infinito a aparecer no universo cinematogr\u00e1fico da Marvel e em qual filme?",
       "options":[
          "a) Joia do Tempo, Doutor Estranho",
          "b) Joia do Espa\u00e7o, Capit\u00e3o Am\u00e9rica: O Primeiro Vingador",
          "c) Joia da Realidade, Thor: O Mundo Sombrio",
          "d) Joia do Poder, Guardi\u00f5es da Gal\u00e1xia",
          "e) Joia da Mente, Vingadores",
          ""
       ],
       "gabarito":4
    },
    {
       "head":"3 - Qual das alternativas cont\u00eam apenas personagens da Marvel?",
       "options":[
          "a) Hulk, Thor, Homem Aranha e Estelar",
          "b) Feiticeira Escarlate, Hulk, Wolverine e Adam Warlock",
          "c) Magneto, Doutor Estranho, Superman e Arqueiro Verde",
          "d) Motoqueiro Fantasma, Vis\u00e3o e Star Lord",
          "e) Batman, Superman e Adam Warlock",
          ""
       ],
       "gabarito":2
    },
    {
       "head":"4 - Em O Guia do Mochileiro das Gal\u00e1xias. A resposta para a vida, o universo e tudo \u00e9?",
       "options":[
          "a) 42",
          "b) Amor",
          "c) Trabalho e perseveran\u00e7a",
          "d) Nada faz sentido",
          "e) Coincid\u00eancia",
          ""
       ],
       "gabarito":2
    },
    {
       "head":"5 - S\u00e3o jogos exclusivos para o Playstation:",
       "options":[
          "a) Uncharted, Halo e Bloodborne",
          "b) The Last of Us, GTA V e Gran Turismo",
          "c) The King of Fighters, Forza Horizon e Gears of War",
          "d) FIFA, Minecraft e Just Dance",
          "e) God of War, Uncharted e Driveclub",
          ""
       ],
       "gabarito":1
    },
    {
       "head":"6 - Os quatro continentes iniciais apresentados nos jogos e no anime de Pok\u00e9mon s\u00e3o, respectivamente:",
       "options":[
          "1. Kanto, Johto, Magmar e Kalos",
          "2. Sinnoh, Laranjas, Johto e Kanto",
          "3. Johto, Kanto, Cerulean e Pallet",
          "4. Kanto, Hoenn, Unova e Kalos",
          "5. Kanto, Johto, Hoenn, e Sinnoh",
          ""
       ],
       "gabarito":5
    },
    {
       "head":"7 - Em Pok\u00e9mon, qual o nome do(a) l\u00edder de gin\u00e1sio da Cidade Saffron?",
       "options":[
          "* a) Sabrina",
          "* b) Koga",
          "* c) Erika",
          "* d) Blaine",
          "* e) Misty",
          ""
       ],
       "gabarito":5
    },
    {
       "head":"8 - Em Senhor dos An\u00e9is, onde fica a \u00c1rvore Branca de Gondor?",
       "options":[
          "1. Condado",
          "2. Floresta Velha",
          "3. Rio Entagua",
          "4. Gondor",
          "5. Peregrin",
          ""
       ],
       "gabarito":4
    },
    {
       "head":"9 - Qual v\u00eddeo com mais \u201cdislikes\u201d atualmente no Youtube?",
       "options":[
          "1. Justin Bieber - Baby",
          "2. Miley Cyrus - Wrecking Ball",
          "3. Aruan F\u00e9lix - Cortando placa do Youtube",
          "4. YouTube Rewind 2018",
          "5. Luis Fonsi - Despacito ft. Daddy Yankee",
          ""
       ],
       "gabarito":4
    },
    {
       "head":"10 - Em Naruto,os Oitos Port\u00f5es s\u00e3o tenketsu espec\u00edficos do Sistema de Circula\u00e7\u00e3o de Chakra de um ninja. Eles limitam o fluxo global de chakra dentro do corpo de uma pessoa. Sabendo disso, como \u00e9 chamado o 6\u00ba (sexto) port\u00e3o?",
       "options":[
          "1. Port\u00e3o da Morte",
          "2. Port\u00e3o da Vis\u00e3o",
          "3. Port\u00e3o da Vida",
          "4. Port\u00e3o da Dor",
          "5. Port\u00e3o da Insanidade",
          ""
       ],
       "gabarito":4
    },
    {
       "head":"11- Em Dragon Ball Z, Dai Kaioshin \u00e9 fan\u00e1tico por:",
       "options":[
          "1. Leitura",
          "2. Futebol",
          "3. Mulheres",
          "4. Poder",
          "5. Conhecimento",
          ""
       ],
       "gabarito":2
    },
    {
       "head":"12 - Em Game of Thrones, qual o nome do lobo de Jon Snow?",
       "options":[
          "1. Nymeria",
          "2. Fantasma",
          "3. Vento Cinzento",
          "4. Ver\u00e3o",
          "5. C\u00e3o Felpudo",
          ""
       ],
       "gabarito":3
    },
    {
       "head":"13 - Na s\u00e9rie Breaking Bad. Qual \u00e9 o pseud\u00f4nimo que Walter White adota quando vai falar com Tuco?",
       "options":[
          "1. Einstein",
          "2. Hank",
          "3. Stephen Hawk",
          "4. Heisenberg",
          "5. King",
          ""
       ],
       "gabarito":2
    },
    {
       "head":"14 - No seriado Everybody Hates Chris (Todo Mundo Odeia o Chris), no epis\u00f3dio que o Chris se demite do emprego, como o seu novo patr\u00e3o chama ele?",
       "options":[
          "1. Michael Jackson",
          "2. Prince",
          "3. Lionel Richie",
          "4. Denzel Washington",
          "5. Carinha que mora logo ali",
          ""
       ],
       "gabarito":4
    },
    {
       "head":"15 - Em The Big Bang Theory, a m\u00fasica Gatinho Macio (Soft Kitty) \u00e9 cantada a Sheldon quando:",
       "options":[
          "1. Est\u00e1 feliz",
          "2. Est\u00e1 triste",
          "3. Est\u00e1 doente",
          "4. Est\u00e1 confuso",
          "5. Est\u00e1 com fome",
          ""
       ],
       "gabarito":3
    }
 ]`);
console.log(questions)
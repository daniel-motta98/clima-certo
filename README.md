## OBSERVAÇÔES DA APLICAÇÃO - Clima Certo

- Ao de correr da semana tive uma série de imprevistos, o que acabou me consumindo muito mas não vou deixar de entregar o teste haha... Mesmo não tendo ficado como o desejado.
# Tela de Cidades:
    - Fiz o campo de busca, com botão de favorito. A ideia era: Ao usuário clicar no noração para favoritar, a cidade deveria ficar armazenada em cache, caso ele desmarcasse o favorito, a cidade sumiria. Não consegui aplicar essa ideia devido a outros empecilhos. Mas a ideia era armazenar usando o AsyncStorage, e sempre que o usuário clicasse para favoritar, iria criando uma lista de cidades favoritas.

# Tela de informação de próximas previsões
    - Essa tela ficou estática pois, pelo o que eu entendi na API fornecida, para pegar as informações dos próximos dias, deveria ter uma conta premium, procurei a respeito na internet mas não consegui achar nada. Lendo a docs da API, falava que precisava de conta premium para acessar esse recurso, por isso a página ficou estática.


## Do que esse teste me serviu?
    - Mesmo não tendo deixado ele 100%, aprendi muita coisa! Eu nunca havia trabalhado com essa API, nunca havia trabalhado com a API do google places, então rolou muito aprendizado por aqui hahahaha... Vou finalizar ele, acredito que até semana que vem eu consiga finalizar para deixar no meu repositório como portfólio, mas como o prazo seria até hoje então prefiro subir ele do jeito que está, do que não subir, para mostrar que pelo menos eu tentei :D.

    Aaah... também não foquei no ícone e nem na splash screen da aplicação, meu objetivo era a funcionalidade.

    - A ideia era utilizar várias libs diferentes na home, como por exemplo:
        - react-native-maps para ele ver a localização dele pelo maps;
        - react-native-flash-message para retornar mensagens de erros, avisos e sucesso ao usuário e não deixar "console.log" no catch da requisição;
        - @react-native-community/netinfo para retornar um aviso ao usuário caso ele esteja sem internet a aplicação nem abre;
        - entre outras libs que agora não me recordo.
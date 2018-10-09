 
    

   

💁 Loritta 💁
 Discord Bots

  

 

Olá, eu me chamo Loritta (ou, como meus amigos próximos me chamam, "Lori") e sou apenas um simples bot brasileiro para o Discord com várias funções jamais vistas!

Eu tenho várias funções para entretenimento (como comandos engraçados e memes), funções sociais (sistema de perfil com XP e reputação), extremamente customizável (você pode ativar/desativar qualquer comando meu, alterar meu prefixo para o que você quiser e muito mais!) e com um simples foco: Ser o melhor bot brasileiro para o Discord!

Um dos motivos que me fizeram me tornar o que eu sou hoje é a falta de bots brasileiros para o Discord, já que muitos servidores brasileiros no Discord usam bots "de baixa qualidade" em português ou usam bots que falam (na verdade escrevem) em inglês... e convenhamos, nenhuma dessas opções parece agradável para os usuários... e por isto que eu prometo mudar isto!

🤔 Como adiciono ela ao meu servidor?
Se você quiser usar a Loritta no seu servidor, você pode adicionar ela clicando aqui.

Enquanto é possível fazer "self hosting" (hospedar você mesmo) ela, eu não irei dar suporte para quem quiser fazer isto para evitar pessoas criando "clones" e levando todo o crédito por terem criado o bot, eu dou suporte se você quer fazer "self hosting" para ajudar e contribuir para ela.

💁 Suporte
Você pode obter suporte sobre a Loritta clicando aqui!

🙋 Como ajudar?
Existem vários repositórios na nossa organização de várias partes da Loritta, caso você queria contribuir em outras partes da Loritta, clique nos links abaixo para ir no repositório deles.

Loritta: Código-fonte da Loritta ("backend"), isto inclui toda a parte do bot em si (comandos, funcionalidades, etc) e a parte "backend" do website dela.
LorittaLocales: Arquivos de tradução da Loritta.
LorittaWebsite: "Frontend" do website da Loritta, isto inclui imagens, CSS, HTML, etc do website dela.
PerfectDreams: Servidor de Minecraft da Loritta!
💵 Como Doar?
Mesmo que você não saiba programar, você pode ajudar no desenvolvimento da Loritta doando! https://loritta.website/donate

🙌 Como Usar?
👨‍💻 Como Compilar?
Você também pode hospedar a Loritta em algum lugar se você não quiser utilizar a versão pública dela, mas lembrando...

Nós deixamos o código-fonte de nossos projetos para que outras pessoas possam se inspirar e aprender com nossos projetos, o objetivo é que pessoas que são fãs da Loritta aprendam como ela funciona e, caso queiram, podem ajudar ela com bug fixes e novas funcionalidades.
Eu não irei dar suporte caso você queria fazer self hosting apenas para você querer fazer "fama" falando que você criou um bot, mesmo que na verdade você apenas pegou o código-fonte dela e hospedou, lembre-se, a licença do projeto é AGPL v3, você é obrigado a deixar todas as suas alterações no projeto públicas!
Eu não irei ficar explicando como arrumar problemas na sua versão self hosted dela, você está por sua conta e risco.
Eu irei dar suporte caso você queria hospedar ela para contribuir e ajudar ela.
Lembrando que ela precisa de várias API Keys para várias funcionalidades dela, caso você não coloque uma delas, talvez ela poderá ter funcionalidade reduzida ou talvez não irá funcionar corretamente!
Lembrando que eu não distribuo os "assets" dela (imagens, fontes, etc), ou seja, comandos que utilizam tais assets não irão funcionar corretamente.
Existem várias coisas "hard coded" nela, ou seja, você terá que editar o código-fonte dela e recompilar, afinal, eu nunca pensei que alguém ia usar hospedar a Loritta então você terá que fazer algumas modificações no código-fonte dela para funcionar. 😉
Eu hospedo ela em uma máquina rodando CentOS 7, talvez ela não irá rodar corretamente em outros sistemas operacionais.
Você não pode utilizar o nome "Loritta" ou a personagem Loritta na sua versão self hosted.
Mas se você quiser mesmo hospedar a Loritta, siga os seguintes passos:

Tenha o MongoDB instalado na sua máquina.
Tenha o JDK 8 (ou superior) na sua máquina.
Tenha o Git Bash instalado na sua máquina.
Tenha o Maven instalado na sua máquina com o PATH configurado corretamente. (para que você possa usar mvn install em qualquer pasta e o JAVA_HOME, para que o mvn install funcione)
Tenha o IntelliJ IDEA instalado na sua máquina.
Faça git clone https://github.com/LorittaBot/Loritta.git em alguma pasta no seu computador.
Agora, usando o PowerShell (ou o próprio Git Bash), entre na pasta criada e utilize mvn install
Após terminar de compilar, vá na pasta target e pegue a JAR Loritta-0.0.1-SNAPSHOT.jar e a pasta "libs".
Inicie a JAR que você copiou pelo prompt de comando utilizando java -jar Loritta-0.0.1-SNAPSHOT.jar, você provavelmente terá que futuramente colocar mais memória nela para evitar OutOfMemoryExceptions, no momento que eu escrevi este post, a versão pública dela está utilizando -Xmx8G -Xms8G (ou seja, 8GBs de memória alocada)
Após iniciar, um arquivo chamado config.json será criado, abra ele com um editor de texto decente (como o Notepad++) e preencha todas as opções, a configuração já vem com alguns valores padrões e alguns destes valores padrões vem com explicações sobre para que ele serve e da onde ele surgiu.
Após terminar de configurar, inicie a JAR novamente e, se tudo der certo, ela irá iniciar e você poderá usar os comandos dela! 🎉
🔀 Pull Requests
No seu Pull Request, você deverá seguir o meu estilo de código bonitinho que eu faço, é recomendado que você coloque comentários nas partes do seu código para que seja mais fácil na hora da leitura.

Caso o seu código possua texto, você é obrigado a utilizar o sistema de localização da Loritta, para que o seu Pull Request possa ser traduzido para outras linguagens, ou seja, após criar o seu Pull Request, crie um Pull Request no repositório de linguagens da Loritta com as keys necessárias.

O seu código não pode ser algo "gambiarra", meu código pode ter algumas gambiarras mas isto não significa que você também deve encher a Lori com mais gambiarras no seu Pull Request.

Você precisa pensar "será que alguém iria utilizar isto?", se você criar um comando que só seja útil no seu servidor, provavelmente eu irei negar o seu Pull Request, se for algo apenas útil para o seu servidor, seria melhor você criar o comando utilizando a API de comandos em JavaScript da Loritta.

Funcionalidades (como comandos) relacionados a coisas NSFW não serão adicionadas na Loritta e seu Pull Request será negado, eu prefiro que as pessoas, ao olharem o avatar dela, pensem que ela é um bot que cria memes toscos do que um bot que fica mandando coisas NSFW no chat.

📦 Dependências
A Lori utiliza várias dependências no código-fonte dela, obrigado a todos os mantenedores das dependências! Sem vocês, talvez a Loritta não iria existir (ou teria várias funcionalidades reduzidas ou talvez até inexistentes!)

Nome	Mantenedor
Kotlin	JetBrains
Kotlin Coroutines	JetBrains
Guava	Google
Caffeine	Ben Manes
JDA	DV8FromTheWorld, kantenkugel, MinnDevelopment, Almighty-Alpaca, etc
MongoDB Java Driver	MongoDB
TemmieWebhook	MrPowerGamerBR
TemmieMercadoPago	MrPowerGamerBR
AminoREAPI	MrPowerGamerBR
Apache Commons Lang	Apache
Apache Commons Codec	Apache
Apache Commons IO	Apache
Apache Commons Text	Apache
Jooby	Jooby Project
Jooby Netty	Jooby Project
Jooby Kotlin	Jooby Project
Jooby MongoDB	Jooby Project
Pebble	Pebble Templates
jsoup	jhy
Http Request	kevinsawicki
LavaPlayer	sedmelluq
JDA-NAS	sedmelluq
JRakNet	Whirvis
Kotson	SalomonBrys
📄 Licença
O código-fonte da Loritta está licenciado sob a GNU Affero General Public License v3.0

A personagem Loritta é © MrPowerGamerBR & PerfectDreams — Todos os direitos reservados

Ao utilizar a Loritta você aceita os termos de uso dela.

 


"Discord", "DiscordApp" and any associated logos are registered trademarks of Discord Inc.

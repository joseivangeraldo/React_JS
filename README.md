## App android, feito com Reactive Native
✅ Status: Em desenvolvimento

### Recursos Necessarios

* [Expo go:](https://expo.dev/)
* [Node js:](https://nodejs.org/en)
* [Reactive Native:](https://reactnative.dev/)
* [Type Script:](https://www.typescriptlang.org/docs/)

<a name="ancora"></a>
# Indice 
- [Instação do Ambiente](#instalacao)
- [Acrescentar editar arquivos](#acrescentareditar)
- [Mizukage](#ancora4)
- [Raikage](#ancora5)
- [Tsuchikage](#ancora)

## <a id="instalacao">🔨 Instalação do Ambiente</a>
O codespace já vem com a maioria das ferramentas que precisamos. Já possui instalado o reactive native, e o nodejs, se precisar trabalhar com uma versão  mais atualizada, é só  fazer um update.
precisamos somente instalar o Expo, para visualizar os códigos no aparelho celular.
 Instalação Expo, para visualizar no device.
Obs: Estes exemplos foram formulados totalmente em um ambiente computacional dentro da nuvem. Particulamente no codespace do Github e Gitpod. Na atualidade são as melhores plataformas para isto, balanceando os custos e beneficios. Se você não conhece ou não sabe como acessa-los, [clique aqui.](https://docs.github.com/en/codespaces/developing-in-codespaces/opening-an-existing-codespace/)

Instalar o expo:

digitar:
```bash
$ npx create-expo-app meuprojeto
```

Vão ser feitos varios processos para compilação e montagem de ambiente, vai ser criada uma pasta com o mesmo nome do seu projeto, comprovando abaixo:
```bash
$ ls 
```
depois entrar nesta pasta:
```bash
$ cd meuprojeto
```
Então vamos logar no server do Expo:
```bash
$ expo login
```
Ao final do carregamento sera exibido uma tela parecida com esta:
![Imagem QRCODE Expo](https://github.com/joseivangeraldo/React_JS/blob/main/images/QRCODE_expo_go.png/)

Pode ser então acessado pelos meios que estão  descritos, conforme imagem acima. O mais como é escanear o QRCode. Fazendo isto será carregado a parte do app.js como aplicativo Android. Com isto todas alterações  que forem feitas no arquivo app.js serão  concretizadas na tela do celular.

Obs: este comando seria diferente em uma maquina real, sem ser na nuvem, mas como o nosso hardware é remoto, é este comando.


Criar uma página chamada index.html básica dentro deste diretório, para verificar que ocorreu uma instalação perfeita.
Segue um modelo básico abaixo:
```html
<html>
    <head> </head>
    <body>
        <H1> 
            A Pagina Inicial Funcionou
        </H1>
    </body>
</html>
```

Crie um arquivo chamado docker-compose.yml. Tem de ter este nome, idêntico assim, pois se for diferente não  funcionará a geração da imagem. O Codespace GitHub e Gitpod já vem com Visual Studio configurado, então  para criação e edição é só digitar
```bash
$ code docker-compose.yml
```

O docker compose, que orquestrará todas as dependencias do ambiente, e montará  todas as imagens necessárias para a rodar as imagens Docker.Apache, PHP, MySql e PHPMyadmin. Sintaxe do arquivo:
```yaml 
 services: 
   db: 
     image: mysql:latest 
     environment: 
       MYSQL_DATABASE: lamp_demo 
       MYSQL_USER: lamp_demo 
       MYSQL_PASSWORD: password 
       MYSQL_ALLOW_EMPTY_PASSWORD: 1 
     volumes: 
       - "./db:/docker-entrypoint-initdb.d" 
     networks: 
       - lamp-docker 
   www: 
     depends_on: 
       - db 
     image: php:8.1.1-apache 
     volumes: 
       - "./:/var/www/html" 
     ports: 
       - 80:80 
       - 443:443 
     networks: 
       - lamp-docker 
   phpmyadmin: 
     depends_on: 
       - db 
     image: phpmyadmin/phpmyadmin 
     ports: 
       - 8001:80 
     environment: 
       - PMA_HOST=db 
       - PMA_PORT=3306 
     networks: 
       - lamp-docker 
 networks: 
   lamp-docker: 
     driver: bridge
 ```
Tomar muito cuidado com a digitação, pois  ele necessita ser fortemente idêntico, então espaços, quebra de linhas, devem ser idênticos, se necessário é melhor instalar a extensão para docker compose que o Visual Studio possui.
 Em COPY , copiamos tudo que esta na pasta e colocar na pasta aonde são publicada as paginas web do container.


Vamos , importante estar dentro do diretório que foi criado, e o Dockerfile estar dentro do mesmo diretório:
```bash
$ docker-compose build .
```
Detalhe o sinal de ponto, ao final, fala que a pasta de trabalho é a propria aonde está o arquivo docker-compose.
É colocado uma tag de identificação para melhot localização, com -t , pode ser o nome de sua preferência. 

Será mostrado mensagens da evolução do processo como abaixo:
```bash
[+] Building 1.1s (10/10) FINISHED                                                                                                         
 => [internal] load build definition from Dockerfile                                                                                  0.2s
 => => transferring dockerfile: 37B                                                                                                   0.0s
 => [internal] load .dockerignore                                                                                                     0.3s
 => => transferring context: 2B                                                                                                       0.0s
 => [internal] load metadata for docker.io/library/httpd:2.4                                                                          0.3s
 => [auth] library/httpd:pull token for registry-1.docker.io                                                                          0.0s
 => [internal] load build context                                                                                                     0.1s
 => => transferring context: 60B                                                                                                      0.0s
 => [1/4] FROM docker.io/library/httpd:2.4@sha256:a182ef2350699f04b8f8e736747104eb273e255e818cd55b6d7aa50a1490ed0c                    0.0s
 => CACHED [2/4] COPY ./ /usr/local/apache2/htdocs/                                                                                   0.0s
 => CACHED [3/4] RUN ["apt-get", "update"]                                                                                            0.0s
 => CACHED [4/4] RUN ["apt-get", "install", "-y", "vim"]                                                                              0.0s
 => exporting to image                                                                                                                0.2s
 => => exporting layers                                                                                                               0.0s
 => => writing image sha256:d0b5d542ef584608a2b54597c2a3b85dd5ab06814ab7b349f38d2b0cf279b61d                                          0.0s
 => => naming to docker.io/library/apache-docker                                           0.0s
```
Verificar se existe a imagem no sistema:
```
$ docker images
REPOSITORY      TAG       IMAGE ID       CREATED          SIZE
apache-docker   latest    d0b5d542ef58   16 minutes ago   199MB
```
Neste momento já temos a nossa imagem no sistema, precisamos agora rodar ela em um Docker container.
Verificar agora se existe algum contâiner rodando:
```
$ docker ps
```
Se não existir nenhum container rodando, vai ser retornado uma tabela vazia:
```
CONTAINER ID   IMAGE     COMMAND   CREATED   STATUS    PORTS     NAMES
```
Agora vamos colocar para rodar um container pegando como argumento o ID da imagem Docker,
como podemos conferir pelo comando : docker images, feito acima:
REPOSITORY      TAG       IMAGE ID       CREATED          SIZE
apache-docker   latest    d0b5d542ef58   16 minutes ago   199MB
Pegamos a coluna IMAGE ID , como argumento para o comando abaixo:
docker run -dit --name NOME_BATISMO_CONTAINER -p 80:80 IMAGE ID 
```
$ docker run -dit --name apache-docker -p 80:80 d0b5d542ef58
```
Vai ser montado na porta 80 local, comunicando com a porta 80 do container.

Após isto será exibido a mensagem que a porta 80 está sendo acionada.  <br/> 
![Imagem Port open codespace github](/images/Port_open_codespace.jpg)  <br/>

Ao clicar ou seguir a porta 80 será exibida pagina index.html, que foi criada anteriormente.  <br/>
![Imagem Pagina Index.html](/images/pagina_funcionou.jpg)  <br/>
[Topo](#ancora)


<a id="acrescentareditar"></a>
## 📁 Acrescentar e Editar arquivos

> Para acrescentar e editar arquivos no servidor, precisamos entrar no docker container.
> Vamos acessar ele através de seu bash.Para isto utilizamos o comando 'exec' do docker.
```
 $ docker exec -it 1e936a216edd bash
```
Vai aparecer a seguir a linha de comando bash do container docker.
**O simbolo '#' é o seu status de usuario, que indica ser root, o que terá de ser digitado é somente o texto que está após este sinal.
Se existir conteúdo abaixo do console é somente a visualização da saida do comando.**
```
root@1e936a216edd:/usr/local/apache2#
```
Vamos só para visualizar o conjunto. Listar os arquivos:
```
root@1e936a216edd:/usr/local/apache2# ls
bin  build  cgi-bin  conf  error  htdocs  icons  include  logs  modules
```
Abrir a pasta publica e a seguir listar os arquivos desta pasta.Vamos encontrar os arquivos que criamos da pasta da maquina local.
```
root@1e936a216edd:/usr/local/apache2# cd htdocs
root@1e936a216edd:/usr/local/apache2/htdocs# ls
Dockerfile  index.html
```

Agora vamos entrar no arquivo que queremos editar, ou criar um novo, aí fica conforme a demanda de seu projeto ou  trabalho.
Para isso vamos usar o VIM, que é um dos primeiros editores Shell nativo. Explicaremos aqui comandos básicos para editar e salvar seus documentos.Se quiser buscar [informações completas](https://www.vim.org/).  </br>

Ao abrir o VIM parece uma coisa meio estranha, pois é  um editor feito para ambiente de linha de comando, e os usuarios acostumados com editores graficos ficam bem confusos. Ao iniciar o VIM aguarda oque o usuário deseja fazer, pode ser edição,  visualização ou navegação. Estes comandos são  divididos em comandos de exibição, edição e navegação.
Vamos editar agora o nosso arquivo index.html, para isto digite:
```
root@1e936a216edd:/usr/local/apache2/htdocs#  vi index.html
```

Então o arquivo index.html é exibido, assim:

```
colocar imagem aqui
```
Repare no rodapé,  é nesta área da interface do programa que precisamos prestar atenção, aí é mostrado qual a ação que estamos fazendo.
 Vamos iniciar a edição. A tecla esc funciona como uma baliza, em uma analogia mais simplório é como fosse o ponto neutro do câmbio de um carro, mais para frente vai ficar claro esta comparação.

aperte a tecla esc, para ter certeza que está no menu básico. Em seguida aperte a tecla 'e'. No rodapé do editor aparecerá a palavra INSERT, significando que está  no modo de edição.
root@1e936a216edd:/usr/local/apache2/htdocs# 

> [Topo](#ancora)



gitpod /workspace/DevOps (main) $ git init
Reinitialized existing Git repository in /workspace/DevOps/.git/
gitpod /workspace/DevOps (main) $ git add .
gitpod /workspace/DevOps (main) $ git commit "Alterado e acrescentado"
error: pathspec 'Alterado e acrescentado' did not match any file(s) known to git
gitpod /workspace/DevOps (main) $ git commit -m "Alterado e acrescentado"
[main f16ac4a] Alterado e acrescentado
 7 files changed, 135 insertions(+), 1 deletion(-)
 create mode 100644 Comandos_Git.txt
 create mode 100644 Lamp-Server/anotacoes.txt
 create mode 100644 Lamp-Server/db/dump.sql
 create mode 100644 Lamp-Server/php_info.php
 create mode 100644 docker-composeHelp.txt
 delete mode 100644 teste.txt
gitpod /workspace/DevOps (main) $ git push 
Enumerating objects: 12, done.
Counting objects: 100% (12/12), done.
Delta compression using up to 16 threads
Compressing objects: 100% (8/8), done.
Writing objects: 100% (9/9), 2.64 KiB | 2.64 MiB/s, done.
Total 9 (delta 0), reused 0 (delta 0), pack-reused 0
To https://gitlab.com/devops1960215/DevOps.git
   6b32193..f16ac4a  main -> main
gitpod /workspace/DevOps (main) $ 




###########COMANDOS git #####################
@joseivangeraldo ➜ /workspaces/DevOpsTraining (main) $ git config --global user.name "joseivangeraldo"
@joseivangeraldo ➜ /workspaces/DevOpsTraining (main) $ echo $?

@joseivangeraldo ➜ /workspaces/DevOpsTraining/dockerfile (main) $ git init
@joseivangeraldo ➜ /workspaces/DevOpsTraining/dockerfile (main) $ git add 1.html
@joseivangeraldo ➜ /workspaces/DevOpsTraining/dockerfile (main) $ git add .
@joseivangeraldo ➜ /workspaces/DevOpsTraining/dockerfile (main) $ git commit -m “Mensagem”
@joseivangeraldo ➜ /workspaces/DevOpsTraining/dockerfile (main) $ git config --global user.email "ivan.geraldo@gmail.com


$ uname -r  → Ver sistema
$ cat /etc/os-release → Ver dados do Sistema 







$ git init
$ docker images

$ docker run -it -d ubuntu
$ docker ps
CONTAINER ID   IMAGE     COMMAND       CREATED          STATUS          PORTS     NAMES
bdbe65559ed2   ubuntu    "/bin/bash"   23 seconds ago   Up 23 seconds             pedantic_lehmann
$ docker stop bdbe65559ed2


$ docker ps -a
$ docker ps
$ docker exec -it c101bde68316 bash

$ docker run -ti -d ubuntu → BAIXA DO DOCKERHUB E JÁ FICA EM RUN

$ docker commit 0ce0075abf59 test → Grava mudanças no container_ID cria uma outra Imagem 
REPOSITORY   TAG       IMAGE ID       CREATED          SIZE
test         latest    92338967288c   26 seconds ago   77.8MB


$ docker run -it -d ubuntu
c35c1d1c4cdc8f734f00742de9e9e77112946a1a3d133d777edb7d5b36bdee7c
$ docker exec -it c35c1d1c4cdc8f734f00742de9e9e77112946a1a3d133d777edb7d5b36bdee7c bash


root@c35c1d1c4cdc:/# apt-get update    
root@c35c1d1c4cdc:/# apt-get install apache2
root@c35c1d1c4cdc:/# service apache2 status
 * apache2 is not running

root@c35c1d1c4cdc:/# service apache2 start
 * apache2 is running

$ docker ps
CONTAINER ID   IMAGE     COMMAND       CREATED          STATUS          PORTS     NAMES
c35c1d1c4cdc   ubuntu    "/bin/bash"   10 minutes ago   Up 10 minutes             youthful_snyder
$ docker commit c35c1d1c4cdc ivan/apache
Sha256:69cb796b8cab5c68c861889771782f2d056ad1d21e474c9aa97f10bb7ee6da2e

docker run -it -p 82:80 -d ivan/apache  —> PARA MAPAEAR AS PORTAS USA 82 da maquina, 80 do docker
root@b4e7e3fce777:/# service apache2 start

#########     CARREGAR PARA DOCKERHUB      ##################################
$ docker images
REPOSITORY    TAG       IMAGE ID       CREATED          SIZE
ivan/apache   latest    9402b17caf8c   47 minutes ago   286MB

$ docker tag ivan/apache:latest joseivangeraldo/apacheserver:v1
gitpod /workspace/DevOpsTraining (main) $ docker images
REPOSITORY                     TAG       IMAGE ID       CREATED          SIZE
ivan/apache                    latest    9402b17caf8c   50 minutes ago   286MB
joseivangeraldo/apacheserver   v1        9402b17caf8c   50 minutes ago   286MB
joseivangeraldo                latest    9402b17caf8c   50 minutes ago   286MB

$ docker login
Login Succeeded
$ docker push joseivangeraldo/apacheserver:v1


Dockerfile:

#############CRIAR O ARQUIVO DOCKERFILE ######################
FROM ubuntu  → pega a imagem do ubuntu
RUN apt-get update   → atualiza o sistema
RUN apt-get -y install apache2   → faz a instalação automatica
ADD . /var/www/html → adiciona um diretorio a maquina local
ENTRYPOINT apachectl -D FOREGROUND   → Ele ja Inicia o Apache
ENV name Intelipaat  → cria a variavel de ambiente
CONSTRUINDO A DOCKER IMAGE
$ docker build . -t new_dockerfile
###################################################################

$ docker images
$ docker run -it -p 84:80 -d new_dockerfile
f7eb2a9a276b066c0ead0a87c8fcf5f988bc249abc88653412919a00a027fb79
$ docker ps
CONTAINER ID   IMAGE            COMMAND                  CREATED         STATUS         PORTS                               NAMES
f7eb2a9a276b   new_dockerfile   "/bin/sh -c 'apachec…"   8 seconds ago   Up 8 seconds   0.0.0.0:84->80/tcp, :::84->80/tcp   mystifying_haibt
root@f7eb2a9a276b:/# echo $name
Intelipaat   —> Aqui aparece o nome da seção que criei no Dockerfile 



#### Docker volume Maps ##########
###### TIPO BIND MOUNTING ###########################
$ docker run -it -v /workspaces/DevOpsTraining/dockerfile:/app -d new_dockerfile
workspaces/DevOpsTraining/dockerfile : MINHA PASTA MAQUINA LOCAL 
/app : NOME DA PASTA PARA MONTAR NO CONTAINER
New_dockerfile : MINHA IMAGEM

@joseivangeraldo ➜ /workspaces/DevOpsTraining/dockerfile (main) $ docker images
REPOSITORY       TAG       IMAGE ID       CREATED       SIZE
new_dockerfile   latest    676766b44156   6 hours ago   229MB
@joseivangeraldo ➜ /workspaces/DevOpsTraining/dockerfile (main) $ docker run -it -v /workspaces/DevOpsTraining/dockerfile:/app -d new_dockerfile
7a95fa33ee8ac6fff6becfee048d0492572c24d566210ff3691d2d2ec4c69123
@joseivangeraldo ➜ /workspaces/DevOpsTraining/dockerfile (main) $ docker exec -it 7a95fa33ee8ac6fff6becfee048d0492572c24d566210ff3691d2d2ec4c69123 bash
root@7a95fa33ee8a:/# ls
app  bin  boot  dev  etc  home  lib  lib32  lib64  libx32  media  mnt  opt  proc  root  run  sbin  srv  sys  tmp  usr  var
root@7a95fa33ee8a:/# cd app
root@7a95fa33ee8a:/app# ls
1.html  Dockerfile

###########DOCKER VOLUME BETTER WAY#########
$ docker volume create test
test
docker volume ls
DRIVER    VOLUME NAME
local     test


$ 

```bash
# Clone este repositório
$ git clone <https://github.com/tgmarinho/nlw1>
```







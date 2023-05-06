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
bin  build  cgi-bin  conf  error  htdocs  icons  include  logs  

$ 

```bash
# Clone este repositório
$ git clone <https://github.com/tgmarinho/nlw1>
```







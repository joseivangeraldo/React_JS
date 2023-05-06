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


Você pode clonar este repositório, não esqueça de citar as fontes, e o código de licença.

```bash
# Clone este repositório
<https://github.com/joseivangeraldo/React_JS>
```

MIT License

Copyright (c) <2023> <José Ivan G Silva>


THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.



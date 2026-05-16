# Proportional Pomodoro

Um aplicativo de produtividade que adapta o tempo de descanso ao seu ritmo real de trabalho.

O método Pomodoro tradicional força pausas a cada 25 minutos, quebrando o "estado de fluxo" (flow) de quem precisa de longos períodos de concentração. O _Proportional Pomodoro_ resolve isso invertendo a lógica: você trabalha pelo tempo que conseguir e o sistema calcula uma pausa matematicamente proporcional ao tempo dedicado.

## ⚡ Features Principais

- **Foco Progressivo (Timer Livre):** O cronômetro de foco conta para cima, permitindo que você trabalhe o tempo que quiser sem ser interrompido por alarmes.
- **Descanso Inteligente:** Ao encerrar uma sessão de foco, o aplicativo pega o tempo exato que você dedicou e aplica uma taxa de descanso. O timer regressivo do descanso é gerado automaticamente.
- **Controle de Intensidade:** Permite selecionar o multiplicador do descanso:
    - `10%`: Para tarefas leves (ex: 60 min foco = 6 min descanso)
    - `20%`: Equilibrado (ex: 60 min foco = 12 min descanso)
    - `40%`: Para sessões de alta carga cognitiva (ex: 60 min foco = 24 min descanso)
- **Rastreamento de Sessão:** Painel inferior que acumula e exibe o tempo total focado no dia, ajudando a metrificar a produtividade diária.

## 🎮 Como Usar

1. Clique em **RESUME** para iniciar a contagem de foco. Trabalhe até sentir necessidade de pausa.
2. Selecione a intensidade do seu próximo descanso nas opções (10%, 20% ou 40%).
3. Clique em **SWITCH TO REST**. O aplicativo salvará seu tempo focado, fará o cálculo e iniciará a contagem regressiva da sua pausa.
4. Ao final do tempo de descanso, o relógio para. Clique em **SWITCH TO FOCUS** para iniciar um novo ciclo zerado.

## 🛠️ Tecnologias

- **React:** Gerenciamento reativo de interface e estados do tempo.
- **Tailwind CSS:** Construção da interface fluida e responsiva.
- **Vite:** Ferramenta de build e execução local.

## 🚀 Como Rodar

#### ⚠️ Pré-requisitos:

- [Node.js]([https://nodejs.org/pt-br/download]) (versão +24 LTS recomendada)

###

1. Clone o repositório e entre na pasta:

    ```bash
        git clone https://github.com/naiqfreire/proportional-pomodoro.git
        cd proportional-pomodoro
    ```

2. Instale as dependências (Dentro da pasta raiz do projeto):
    ```bash
        npm install
    ```
3. Inicie o servidor:
    ```bash
        npm run dev
    ```

🔧 Інструкція з встановлення Cursor Talk to Figma MCP на Mac
Ця інструкція допоможе вам встановити Cursor Talk to Figma MCP, який дозволяє Cursor AI взаємодіяти з Figma для читання та зміни дизайну програмним способом.

### 1️⃣ Встановлення Bun

Bun — це JavaScript runtime, який використовується у проєкті.

📌 Щоб встановити Bun, виконайте команду в терміналі:

```sh
curl -fsSL https://bun.sh/install | bash
```

🔄 Перезапустіть термінал, щоб застосувати зміни.
Переконайтеся, що Bun встановлений, виконавши:

```sh
bun --version
```

---

### 2️⃣ Клонування репозиторію

Завантажте код проєкту (якщо він ще не у вас):

```sh
git clone https://github.com/[repo-url]/cursor-talk-to-figma-mcp.git
cd cursor-talk-to-figma-mcp
```

> $\color{#e89820}{\textsf{\Large{⦻} \normalsize{Warning!}}}$
>
> (🔴 Замініть [repo-url] на фактичний URL репозиторію.)

---

### 3️⃣ Встановлення MCP сервера

Ця команда встановить MCP-сервер у ваш поточний проєкт Cursor:

```sh
bun setup
```

---

### 4️⃣ Запуск WebSocket сервера

WebSocket сервер потрібен для зв’язку між Cursor AI та Figma.
Запустіть сервер командою:

```sh
bun socket
```

---

### 5️⃣ Запуск MCP-сервера

Запустіть основний сервер MCP для обробки команд:

```sh
bunx cursor-talk-to-figma-mcp
```

---

### 6️⃣ Налаштування MCP у Cursor

Відкрийте файл конфігурації MCP:

```sh
nano ~/.cursor/mcp.json
```

Додайте в нього:

```json
{
  "mcpServers": {
    "TalkToFigma": {
      "command": "bunx",
      "args": ["cursor-talk-to-figma-mcp"]
    }
  }
}
```

🔄 Збережіть (Ctrl + X, потім Y, потім Enter).

---

### 7️⃣ Встановлення Figma-плагіна

📌 Щоб додати плагін у Figma:

1. Відкрийте Figma.

2. Перейдіть у Plugins > Development > New Plugin.

3. Виберіть "Link existing plugin".

4. Вкажіть шлях до файлу `src/cursor_mcp_plugin/manifest.json` у вашому клонованому репозиторії.

5. Плагін з'явиться у списку Development Plugins.

---

### 8️⃣ Запуск і використання

1️⃣ Запустіть WebSocket сервер:

```sh
bun socket
```

2️⃣ Запустіть MCP сервер:

```sh
bunx cursor-talk-to-figma-mcp
```

3️⃣ Відкрийте Figma, знайдіть Cursor MCP Plugin та запустіть його.

4️⃣ Підключіться до WebSocket-сервера через команду join_channel.

5️⃣ Використовуйте Cursor AI, щоб керувати дизайном у Figma через MCP-команди.

---

✅ Готово!
Тепер Cursor AI може взаємодіяти з Figma 🚀. Якщо у вас виникли питання, пишіть! 😊

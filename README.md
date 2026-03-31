# ArchiveTune Admin Panel

Painel administrativo para gerenciar usuários e assinaturas do ArchiveTune.

## 🚀 Features

- 📊 Dashboard com estatísticas em tempo real
- 👥 Gerenciamento completo de usuários (CRUD)
- 🔄 Gerenciamento de assinaturas (criar, renovar, cancelar)
- 💳 Integração com Stripe para pagamentos
- 🔐 Autenticação segura de administradores
- 📝 Logs de todas as atividades
- 📈 Relatórios detalhados e gráficos

## 📋 Tech Stack

- **Frontend**: Next.js 14 + React 18 + TypeScript
- **Backend**: Express.js + Node.js
- **Database**: MongoDB
- **Pagamentos**: Stripe
- **UI**: Tailwind CSS
- **Autenticação**: JWT

## 🔧 Instalação

### 1. Instale as dependências
\`\`\`bash
npm install
\`\`\`

### 2. Configure as variáveis de ambiente
\`\`\`bash
cp .env.example .env.local
\`\`\`

### 3. Inicie o servidor
\`\`\`bash
npm run dev
\`\`\`

Acesse http://localhost:3000

## 📊 API Endpoints

### Autenticação
- \`POST /api/auth/login\` - Login de admin

### Usuários
- \`GET /api/users\` - Listar usuários
- \`POST /api/users\` - Criar usuário
- \`GET /api/users/:id\` - Obter usuário
- \`PUT /api/users/:id\` - Atualizar usuário
- \`DELETE /api/users/:id\` - Deletar usuário

### Assinaturas
- \`GET /api/subscriptions\` - Listar assinaturas
- \`POST /api/subscriptions\` - Criar assinatura
- \`PUT /api/subscriptions/:id\` - Atualizar assinatura
- \`DELETE /api/subscriptions/:id\` - Cancelar assinatura

### Relatórios
- \`GET /api/reports/dashboard\` - Dados do dashboard

## ���� Licença

GPL-3.0

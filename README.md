# LeetCode Solutions with Angular

Este projeto contém soluções para desafios do [LeetCode](https://leetcode.com/) utilizando Angular (v13+).  
Cada componente resolve um problema específico e está comentado com explicações passo a passo.

## 🚀 Como rodar o projeto

```bash
npm install
ng serve
```

Acesse no navegador: [http://localhost:4200](http://localhost:4200)

## 📁 Organização

- `src/app/pages` – Contém as páginas principais da aplicação.
- `src/app/data` – Armazena os dados e descrições dos problemas.
- `src/app/components` – Componentes reutilizáveis.
- Cada problema está implementado como um componente Angular separado.

## 💡 Comandos úteis

### Criar novo componente (problema):

```bash
ng generate component pages/nome-do-problema
```

### Criar serviço, pipe, diretiva, etc:

```bash
ng generate service nome
ng generate directive nome
```

## 🧪 Testes

### Testes unitários

```bash
ng test
```

Executa os testes com [Karma](https://karma-runner.github.io).

### Testes end-to-end

```bash
ng e2e
```

Para usar este comando, instale um pacote de testes end-to-end, como `@angular/e2e`.

## 📚 Documentação Angular

- [Angular CLI Overview and Command Reference](https://angular.io/cli)
- [Documentação oficial Angular](https://angular.io/docs)

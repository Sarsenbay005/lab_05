# Lab 5.2 — Typed State & Event Handlers

Бұл жоба React + TypeScript арқылы динамикалық іздеу компонентін жасауға арналған.

# Жобада не жасалды


- `User` интерфейсі қайта қолданылды
- `useState<User[]>` generic арқылы typed state
- `React.ChangeEvent<HTMLInputElement>` қолданылды
- `React.MouseEvent<HTMLButtonElement>` қолданылды
- Нақты уақыт режимінде іздеу (filter)
- "No results found" хабарламасы
- Strict mode қосылған
- any қолданылмаған

## Неге React.ChangeEvent қолданылды

React.ChangeEvent<HTMLInputElement> event типін нақты анықтайды және типтік қателердің алдын алады.

## Жобаны іске қосу

```bash
npm install
npm run dev

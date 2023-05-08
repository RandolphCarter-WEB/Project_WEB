# Web Project - (HangMan Game)
----------------------
Vanilla Js Web Component 연습용 HangMan Game

## How to use
-------------------
```
    use the Live Server extension in Vscode.
```

## File Structure
--------------------
    📦HangMan
    ┣ 📂src
    ┃ ┣ 📂component
    ┃ ┃ ┗ 📜component.js
    ┃ ┣ 📂css
    ┃ ┃ ┣ 📜default.css
    ┃ ┃ ┗ 📜index.css
    ┃ ┣ 📂data
    ┃ ┃ ┗ 📜data.js
    ┃ ┣ 📂event
    ┃ ┃ ┗ 📜event.js
    ┃ ┗ 📜app.js
    ┣ 📜index.html
    ┗ 📜README.md

## This Project is..
-------------------
### Purpose of this Project

> 1. 다양한 형태의 Web Component를 적용하고, 각자의 장단점을 연구하기 위함.
> 2. Code clean에 기반하여, 함수 refactoring을 통해 가독성과 유지보수성을 연구하기 위함.
> 3. HangMan Game의 로직을 이해하고 적용하기 위함.
  
### Features & Upcoming features
------------------------
> #### Features
> 
> 1. KeyBoard Button을 통한 다양한 상호작용 제공
> 2. Hang Man Canvus를 통해 진행 상황에 대한 여부 확인 가능
> 3. 그 외의 hint Button, reset Button을 통한 편의성 제공
>
> #### Upcoming features
> 
> 1. Web 화면상의 Button뿐이 아닌 User의 Keyboard로도 상호작용할 수 있도록 확장
> 2. 사용자의 시간과 점수를 체크하여 점수를 기록할 수 있도록 데이터 저장 추가
> 3. Background의 Style과 Button의 Style을 변경하는 등의 사용자 편의 UI 제공

### Technology ( Vanilla JS )
-------------------------
> #### WEB Component
> 1. 현 React의 Func방식의 Component을 가져와 화면상의 반복되는 UI 혹은 데이터를 이용해 표시 해야되는 UI를 정의
> 2. class 방식의 Component를 이용하여, 다른 Component를 가져와 종합하여 조립하는 방식으로 중앙 조립 형식의 Component를 정의
> 3. 기본적으로 제공하는 li-element나 HTMLElement를 사용하지 않고, Basic Component형식으로 작성함
> 
> #### Event Logic
> 1. Game Data를 Json형식으로 data.js에 저장하여 이를 App.js에서 불러와 랜덤한 숫자에 따라서 기본적인 Component의 element를 세팅
> 2. Canvus에 행맨을 그리는 것을 Js 내의 getContext("2d")를 통해 그림을 그릴 수 있도록 Draw함수를 두어 User의 상호작용에 따라 표기
> 3. Code refactoring을 통해 함수를 하나의 역할만 할 수 있도록 나눔

### Update Log
------------------
#### 2023.05.03
> 1. Event.js
> 2. app.js Event Logic refactoring
> 3. Web site design [index.css]

#### 2023.05.08
> 1. write README.md file
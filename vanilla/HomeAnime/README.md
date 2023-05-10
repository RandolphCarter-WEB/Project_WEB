# Web Project - (Anime  Web)
----------------------
Vanilla Js Web Component 연습용 Interective Web Application

## How to use
-------------------
```
    use the Live Server extension in Vscode.
```

## File Structure
--------------------
    📦HomeAnime
    ┣ 📂resource
     ┃ ┗ 📂assets
     ┃ ┃ ┣ 📜vid01.mp4
     ┃ ┃ ┣ 📜vid02.mp4
     ┃ ┃ ┣ 📜vid03.mp4
     ┃ ┃ ┗ 📜vid04.mp4
     ┣ 📂src
     ┃ ┣ 📂component
     ┃ ┃ ┣ 📜container.js
     ┃ ┃ ┗ 📜menu.js
     ┃ ┣ 📂core
     ┃ ┃ ┗ 📜component.js
     ┃ ┣ 📂css
     ┃ ┃ ┣ 📜default.css
     ┃ ┃ ┗ 📜index.css
     ┃ ┣ 📂event
     ┃ ┃ ┗ 📜event.js
     ┃ ┗ 📜app.js
     ┣ 📜index.html
     ┗ 📜README.md

## This Project is..
-------------------
### Purpose of this Project

> 1. 반복되는 section의 container를 구현하고, 각각의 section에 맞게 맞는 자원을 부여하여 홈페이지를 구성함.
> 2. Code clean에 기반하여, 함수 refactoring을 통해 가독성과 유지보수성을 연구하기 위함.
> 3. Hover Animation을 Video에도 적용하여, Section의 호버 액션을 연구하기 위함.
  
### Features & Upcoming features
------------------------
> #### Features
> 
> 1. Navigation의 Option을 호버하거나 해당 Section을 호버하면, 해당 Section이 호버 액션이 발생할 수 있도록 함.
> 2. 호버 액션이 발생할 때에 스타일의 변화 뿐만 아니라, 강조 효과 및 비디오 재생을 넣었다.
> 3. 그 외의 hint Button, reset Button을 통한 편의성 제공
>
> #### Upcoming features
> 
> 1. Router의 기능의 추가로 해당 Section을 눌렀을 경우에 해당 Page로 이동할 수 있도록 확장.
> 2. 호버 액션의 스타일 변경을 최소화 하여, 효율적으로 강조할 수 있도록 확장.
> 3. 최적화 시스템 구축

### Technology ( Vanilla JS )
-------------------------
> #### WEB Component
> 1. class 방식의 Component를 이용하여 index.html에 기획한 Section이나 Custom Navigation을 가져와서 App.js를 이용하여 표기
> 
> #### Event Logic
> 1. class를 지정하여, CSS를 추가하는 방식이 아닌 JS를 이용해서 해당 Tag의 호버 액션에 대한 스타일 변경을 정의함.
> 2. Section의 data와 id값을 이용하여 해당하는 Section의 video 요소에 접근하여, 이를 제어할 수 있도록 설정.

### Update Log
------------------
#### 2023.05.02
> 1. Section의 Video가 불러오지 못하는 에러를 해결
> 2. Navigation을 재구성하여, 호버 되었을 경우 Section이 강조되는 이벤트 추가
> 3. 함수 내용을 Refactoring하여 확장성과 재사용성을 늘였음.

#### 2023.05.06
> 1. Section의 글에 마우스가 호버 될 경우 Video가 제대로 실행되지 않는 에러를 해결
> 2. Component의 전체적인 구조를 리모델링하여, 배열의 값에 따라서 메뉴와 Section이 생성 될 수 있도록 변경

#### 2023.05.10
> 1. README.md 작성
> 2. Section의 Video에 치명적인 안티코드가 있는 것을 확인 후 재설계 중.
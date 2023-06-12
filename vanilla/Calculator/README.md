# Web Project - (Calculate)
----------------------
Vanilla Js Web Component State (React - redux) 연습용 Calculate

## How to use
-------------------
```
    use the Live Server in intelliJ.
```

## File Structure
--------------------
    .   .   .

## This Project is..
-------------------
### Purpose of this Project

> 1. React 형태의 Component를 적용하고, Page에 개인 개발한 Core Component를 적용하고, 내부적인 구조를 이해기 위함
> 2. Code clean에 기반하여, 함수 refactoring을 통해 가독성과 유지보수성을 연구하기 위함.
> 3. Web Component의 로직을 이해하고 적용하기 위함.
  
### Features & Upcoming features
------------------------
> #### Features
> 
> 1. 각 Button은 Number와 Operator를 지원하며, Number는 State에 값을 넣는 내부 Redux가 구현되어있으며, Operator 또한 마찬가지로 내부 Redux에 구현되어있음.
> 2. Component를 어떻게 나누고 props를 어떻게 적용할지에 대한 연구를 위해 props를 두어 Component를 제작
> 3. State가 변경될 시 Render가 발생할 수 있도록 유도
>
> #### Upcoming features
> 
> 1. State 변경은 성공했으나, 계산에 대한 Event는 구현되지 않은 상태
> 2. State의 계산 Event가 발생할 경우 LocalStorage에 저장하고, 이를 로그페이지에 표출
> 3. Setting 페이지를 이용하여, Dark모드 변경

### Technology ( Vanilla JS )
-------------------------
> #### WEB Component
> 1. 현 React의 Func방식의 Component을 가져와 화면상의 반복되는 UI 혹은 데이터를 이용해 표시 해야되는 UI를 정의 (Btn, input)
> 2. page에 표출해야되는 html일 경우 Core의 Component를 이용하여, state설정 및 render설정
> 3. store를 통한 각각의 compoenent가 state에 어디에서든지 접근할 수 있도록 개발
> 
> #### Event Logic
> 1. Observe를 통해서 state 변경감지와 함수 등록을 만들어놓고 Redux를 통해서 다양한 type을 두어 state의 변형을 지시하는 dispatch 개발

### Update Log
------------------
#### 2023.06.11
> 1. Calculate.app Develop Success
> 2. Add Store State

#### 2023.06.12
> 1. app.js부분이 너무 복잡하여, 재설계의 필요성이 있어보임.
> 2. 모든 함수의 얽힘이 매우 복잡하여, 재사용성이 매우 떨어지며, 자체 개발의 Component가 아닌 HTTPElement를 extends하여 조금 더 기능을 챙겨야함.
> 3. Component를 개선하여, Style도 전송할 수 있도록 변형 및 생성함수를 만들 것
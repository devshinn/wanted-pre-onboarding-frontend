# Todo App

## 지원자 정보

| Name  | 김신혁              |
| ----- | ------------------- |
| Email | kor.sshin@gmail.com |

## 로컬실행

> ```bash
> git clone https://github.com/devshinn/wanted-pre-onboarding-frontend.git
> npm install
> npm start
> ```

## 배포링크
>
> [여기](https://wanted-pre-onboarding-frontend-three-delta.vercel.app/)서 확인 및 테스트 할수 있습니다.

## 사용 기술

|               | Framework library             |
| :-----------: | ----------------------------- |
| 프로젝트 설정 | Create React App + TypeScript |
|   스타일링    | tailwindcss                   |
|   서버 통신   | axios                         |
|  페이지 처리  | React Router                  |

### Routing

페이지 진입전 권한 체크, Nested Routes를 이용해 리다이렉션을 처리했습니다.로그인/회원가입/todo 페이지

### Auth

auth의 경우 현재는 토큰만 관리하면 되기때문에 따로 전역상태관리를 설정을 하지않고 CustomHook으로 관리되고, 필요한 곳에서 사용.

### Todo

todo의 경우는 여러개의 컴포넌트로 분리되었기 때문에 todo데이터를 전역에서 관리할 필요성이 있어 context api를 사용 하여 관리.

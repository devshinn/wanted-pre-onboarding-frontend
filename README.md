# Todo App

로컬 서버 실행
서버 프로젝트를 클론 받아 아래 명령어를 이용해 서버를 실행 합니다.

> ```bash
> git clone https://github.com/devshinn/wanted-pre-onboarding-frontend.git
> npm install
> npm start
> ```

> # 배포링크
>
> [여기](https://wanted-pre-onboarding-frontend-three-delta.vercel.app/)서 확인 및 테스트 할수 있습니다.

## 사용 기술

|               | Framework library             |
| :-----------: | ----------------------------- |
| 프로젝트 설정 | Create React App + TypeScript |
|   스타일링    | tailwindcss                   |
|   서버 통신   | axios                         |
|  페이지 처리  | react-router-dom              |

### Routing

페이지 진입전 권한 체크, Nested Routes를 이용해 리다이렉션을 처리했습니다.로그인/회원가입 페이지

### Auth

auth의 경우 현재는 토큰만 관리하면 되기때문에 따로 전역상태관리를 설정을 하지않고 CustomHook으로 관리되고, 필요한 곳에서 사용하고 있습니다.

ui/ux/components 경우 디자인 시스템이 잘 갖춰져 있다면 컴포넌를 분리해서 재사용 할수 있게 설계하겠지만, 현재는 Siginup, Signin으로만 분리되어 있습니다.

### Todo

todo의 경우는 여러개의 컴포넌트로 분리되었기 때문에 todo데이터를 전역에서 관리할 필요성이 있어 context api를 사용 하여 관리되고 있습니다.

redux나 recoil react-query로 할수도 있지만 프로젝트 자체가 복잡하지 않기에 간단하게 사용 할수 있는 context api를 선택하였습니다.

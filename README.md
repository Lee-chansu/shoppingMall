# teamProject 파일 사용법

- 터미널의 경로를 teamProject로 맞추고 사용해야 함
- ex) shoppingMall 폴더 내부에 teamProject 폴더가 있는 경우, 명령어를 사용하여 터미널의 경로를 다음과 같이 바꿔야 함
- C:\(vscode로실행한폴더의경로)\shoppingMall> cd teamProject
- 실행시 경로가 다음과 같이 변함
- C:\(vscode로실행한폴더의경로)\shoppingMall\teamProject>

- 터미널 경로 설정 완료 후 아래 명령어 실행

### 상위 폴더로 경로 변경

- cd..

### 이전 migrate 정보 모두 삭제(테이블 전부 삭제)

- npx sequelize db:migrate:undo:all

### 테이블 생성

- npx sequelize db:migrate

### 데이터 모두 전송

- npx sequelize db:seed:all

### 특정 테이블의 데이터만 넣을 경우 fileName.js 위치에 해당 seeder 파일 이름 넣고 실행

- npx sequelize db:seed --seed fileName.js

# Getting Started with Create React App


# react
- 설치해야할 라이브러리
- npm i jwt-decode // 토큰암호화된거 해독하기위해
- npm i react-bootstrap 
- npm i react-bootstrap-icon
- npm i axios

# node
- 설치해야할 라이브러리
- npm i jsonwebtoken // 토큰사용위해
- npm i nodemailer // 노드 이메일기능
- npm i dotenv // env 를 이용해서 git 에 올릴때 내 계정정보 숨길수있다
- npm i node-cron // 스케줄링 시스템
- npm i imgbb-uploader // imgbb 로 사진업로드하기위해

- env 파일 만들어야함
- env 내부형식
  email_service = 'naver'
  admin = '네이버 아이디' // 본인꺼
  pass = '네이버 비밀번호' // 본인꺼

- naver 메일설정 필요함
- 순서 : 네이버로그인 -> 메일 -> 환경설정 -> POP3/IMAP 설정 -> POP3/SMTP 사용함 체크 -> 원본저장체크란 아무거나 -> 저장

- sequelize model 파일수정 => DeleteUser 테이블 조인
- seeder 파일수정 => user 고유아이디 프라이머리값 에 맞게 carry seeder 수정

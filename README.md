# react 
- 설치해야할 라이브러리
- npm i jwt-decode   // 토큰암호화된거 해독하기위해



# node 
- 설치해야할 라이브러리
- npm i jsonwebtoken   // 토큰사용위해
- npm i nodemailer   // 노드 이메일기능 
- npm i dotenv    // env 를 이용해서 git 에 올릴때 내 계정정보 숨길수있다

- env 파일 만들어야함 
- env 내부형식
email_service = 'naver'
admin = '네이버 아이디'   // 본인꺼
pass = '네이버 비밀번호'  // 본인꺼

- naver 메일설정 필요함
- 순서 : 네이버로그인 -> 메일 -> 환경설정 -> POP3/IMAP 설정 -> POP3/SMTP 사용함 체크 -> 원본저장체크란 아무거나 -> 저장
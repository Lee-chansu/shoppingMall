## router 이후 알아둘 상황

- 더이상 server.js에서 기능 만들 수 없습니다.(app.getX)
- reviewList는 productController에 있습니다.
- payment와 cart는 cartController에 같이 있으나 주석으로 분류해뒀습니다.
  (참고만 해주세요.)

- env 파일 만들어야함
- env 내부형식
  email_service = 'naver'
  admin = '네이버 아이디' // 본인꺼
  pass = '네이버 비밀번호' // 본인꺼

- naver 메일설정 필요함
- 순서 : 네이버로그인 -> 메일 -> 환경설정 -> POP3/IMAP 설정 -> POP3/SMTP 사용함 체크 -> 원본저장체크란 아무거나 -> 저장

- prot번호 env 파일 안으로 옮겼습니다.
- jwt test코드 env로 옮겼습니다.

- sequelize model 파일수정 => DeleteUser 테이블 조인
- seeder 파일수정 => user 고유아이디 프라이머리값 에 맞게 carry seeder 수정

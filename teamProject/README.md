git remote add origin https://github.com/Lee-chansu/shoppingMall.git

git init
git add README.md
git commit -m "first commit"
git branch -M master
git remote add origin https://github.com/Lee-chansu/shoppingMall.git
git push -u origin master













# 기본적인 git 사용법

## github.com 로그인
- 웹의 repository생성

## local 초기 사용자 셋팅
- 설정 
git config --global user.name "hotcake123"
git config --global user.email "tjgyrms123@gmail.com"

- 확인
git config user.name
git config user.email

## git 시작
git init

## staging 시키기

1) 파일 지정
- 원하는 파일 지정
git add 파일명1 파일명2 

- 전체 파일 올리고 싶을때
git add .

2) staging 올리기
git commit -m '버전이름'

### repository에 등록
1) 내 git주소 변수로 등록

git remote add origin https://github.com/hotcake123/exam.git

2) 내 깃으로 업로드
git push -u <깃주소/변수> main
git push -u origin main

ex) git push -u https://github.com/hotcake123/exam.git main


### 결론

<셋팅>
git init
git remote add origin https://github.com/hotcake123/exam.git

<필요할 때마다>
git add .
git commit -m 'first'
git push -u origin main


### …or create a new repository on the command line
echo "# exam" >> README.md
git init
git add README.md
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/hotcake123/exam.git
git push -u origin main

### …or push an existing repository from the command line
git remote add origin https://github.com/hotcake123/exam.git
git branch -M main
git push -u origin main


### …or import code from another repository
You can initialize this repository with code from a Subversion, Mercurial, or TFS project.



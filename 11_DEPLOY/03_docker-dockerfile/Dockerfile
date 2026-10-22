# FROM : 베이스 이미지로 node 지정
FROM node:20-alpine

# WORKDIR : 컨테이너 내부의 기본 작업 경로를 /app 으로 지정
# 이 명령어가 없으면 보통 루트(/)에서 작업하게 되어 파일이 섞일 위험이 있음
WORKDIR /app

# RUN : /app 폴더 안에 test.txt 파일 생성
RUN echo "This is in /app directory" > test.txt
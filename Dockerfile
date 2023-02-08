FROM node:latest

# 디렉토리 설정
WORKDIR /usr/src/app
ADD . /usr/src/app/

# 의존성 파일 가져오기
COPY package.json ./
COPY yarn.lock ./

# 의존성 파일 설치
RUN yarn

# 현재 디렉토리의 파일 가져오기
COPY . .

# 빌드
RUN yarn build

# 모든 아이피를 열어주고 3000번 포트로 개방
ENV HOST 0.0.0.0
EXPOSE 3000

CMD ["yarn", "start"]
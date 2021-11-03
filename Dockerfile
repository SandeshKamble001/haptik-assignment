FROM node:16-alpine as builder
WORKDIR './app'
copy package.json .
copy package-lock.json .
RUN npm install
COPY . .
RUN npm run build

FROM nginx
EXPOSE 80
COPY --from=builder /app/build /usr/share/nginx/html

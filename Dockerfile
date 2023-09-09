FROM node:lts as dependencies
WORKDIR /book-hunt
COPY package.json package-lock.json ./
RUN npm install --frozen-lockfile

FROM node:lts as builder
WORKDIR /book-hunt

COPY . .

COPY tsconfig.json .
COPY --from=dependencies /book-hunt/node_modules ./node_modules
RUN npm run build


FROM node:lts as runner
WORKDIR /web-studio
ENV NODE_ENV production

COPY --from=builder /book-hunt/public ./public
COPY --from=builder /book-hunt/package.json ./package.json
COPY --from=builder /book-hunt/.next ./.next
COPY --from=builder /book-hunt/node_modules ./node_modules


EXPOSE 3000
CMD ["npm", "start"]

FROM node:22-alpine AS builder

WORKDIR /app

# Zależności
COPY package.json package-lock.json ./

# Instalacja zależności
RUN npm ci

# Kopia reszta kodu
COPY . .

# build
RUN npm run build


# --- Uruchomienie ---
FROM nginx:alpine

COPY nginx.conf /etc/nginx/conf.d/default.conf

COPY --from=builder /app/dist /usr/share/nginx/html

EXPOSE 80 


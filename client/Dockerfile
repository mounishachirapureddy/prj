# Stage 1: Development stage
FROM node:latest AS development
ENV NODE_ENV=development
WORKDIR /Snappcoins/client
COPY ["package.json", "package-lock.json*", "./"]
RUN npm install

# Stage 2: Production stage
FROM node:latest AS production
ENV NODE_ENV=production
ENV REACT_APP_GENERAL_MODULE_URL=http://general-module-service
ENV REACT_APP_GAMER_MODULE_URL=http://gamer-module-service
ENV REACT_APP_MERCHANT_MODULE_URL=http://merchant-module-service
ENV REACT_APP_GAMING_VENDOR_MODULE_URL=http://gaming-vendor-module-service
WORKDIR /Snappcoins/client
COPY --from=development /Snappcoins/client/node_modules ./node_modules
COPY . .
RUN npm run build

EXPOSE 3000
CMD ["npm", "start"]

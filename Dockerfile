# Build stage
FROM node:20 as build
WORKDIR /app
# Docusaurus "last updated" uses `git` to compute per-file timestamps
RUN apt-get update \
  && apt-get install -y --no-install-recommends git ca-certificates \
  && rm -rf /var/lib/apt/lists/*
COPY docusaurus/package*.json ./
RUN npm ci
COPY docusaurus/ .
# Include git history so Docusaurus can read last-update metadata.
# Copying it after `npm ci` keeps dependency layers cacheable across commits.
COPY .git .git
RUN npm run build

# Run stage
FROM nginx:alpine
COPY --from=build /app/build /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 8080 
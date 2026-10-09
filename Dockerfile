# Gunakan web server Nginx yang super ringan
FROM nginx:alpine

# Salin folder dist hasil build ke folder root HTTP Nginx
COPY dist /usr/share/nginx/html

# Ekspos port standar web
EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]


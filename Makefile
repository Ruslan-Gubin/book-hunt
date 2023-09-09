run: 
    docker run -d -p 3000:3000 -v monop:/app/data --rm --name bookhunt gubinruslan1986/bookhunt
run-dev: 
    docker run -d -p 3000:3000 -v "D:\WebProjects\Frontend\book-hunt:/app" -v /app/node_modules:/app/node_modules --rm --name book-hunt gubinruslan1986/bookhunt
stop: 
	docker stop bookhunt		

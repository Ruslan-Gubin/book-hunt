run: 
    docker run -d -p 3000:3000 -v monop:/app/data --rm --name book-hunt gubinruslan1986/web-studio
run-dev: 
    docker run -d -p 3000:3000 -v "D:\WebProjects\Frontend\book-hunt:/app" -v /app/node_modules:/app/node_modules --rm --name book-hunt gubinruslan1986/book-hunt
stop: 
		docker stop monopolyfront		

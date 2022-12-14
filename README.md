# Django-React Stack web application

### Following this course

https://www.codebreakthrough.com/free-react-course

#### This repository contains code from Video 1 - Video 53
#### Rest of the code from Video 54 can be found in [typeScriptStack](https://github.com/shikhars22/typeScriptStack)

### Youtube Playlist:
https://www.youtube.com/watch?v=qp6e0tucEhw&list=PL_c9BZzLwBRKFRIBWEWYCnV4Lk9HE3eYJ&index=2  

<br>

# How to start this web app on your laptop

1. Clone this repo in your system using below command:

        git clone https://github.com/shikhars22/djangoReactStack.git

2. Install 
   1. Git Bash
   2. Python 3.10
   3. NodeJs 14 or higher

3. Start the Django server on git bash. Navigate to the cloned repo

        cd djangoReactStack
        cd backend
        sudo apt install python3.10-venv
        python3 -m venv .venv
        source .venv/bin/activate
        pip install -r requirements.txt
        python manage.py migrate
        python manage.py runserver

4. Above commands should start your Django backend server
5. In another git bash terminal, start the react development server
        
        cd ..
        cd hello
        sudo npm install
        npm start

6. In another git bash terminal, start the react production server
        
        npm run build
        serve -s build

7. Go to https://localhost:3000/

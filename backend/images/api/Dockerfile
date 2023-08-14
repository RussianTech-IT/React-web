FROM debian:bullseye
RUN apt update -y && apt upgrade -y
RUN apt install python3 python3-pip -y
WORKDIR /app
RUN pip install flask fuzzywuzzy flask-cors
CMD python3 main.py

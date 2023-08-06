FROM debian:bullseye
RUN apt update -y && apt upgrade -y
RUN apt install python3 python3-pip -y
WORKDIR /app
RUN pip install flask mysql-connector-python
CMD python3 main.py

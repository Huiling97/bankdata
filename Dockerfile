FROM ubuntu:18.04
MAINTAINER huiling_loh_97@hotmail.com
EXPOSE 8000
ARG DEBIAN_FRONTEND=noninteractive
ENV TZ=Asia/Singapore

RUN apt-get update
RUN apt-get install -y nodejs npm
ENV USER root
RUN npm install init
RUN npm install express
RUN npm install body-parser
RUN npm install mysql
RUN useradd -ms /bin/bash user
COPY myapp.js /home/user/myapp.js
COPY start.sh /home/user/start.sh
RUN chmod a+x /home/user/start.sh
USER user
WORKDIR /home/user

CMD ["sh","/home/user/start.sh"]
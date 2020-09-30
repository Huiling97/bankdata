FROM ubuntu:18.04
MAINTAINER huiling_loh_97@hotmail.com
EXPOSE 8000
ARG DEBIAN_FRONTEND=noninteractive
ENV TZ=Asia/Singapore

RUN apt-get update
RUN apt-get install -y nodejs npm
ENV USER root
RUN npm install -g express-generator
RUN npm install express --save
RUN npm install -g body-parser
RUN npm install body-parser --save
RUN npm install -g mysql
RUN npm install mysql --save
RUN useradd -ms /bin/bash user
COPY myapp.js /home/user/myapp.js
COPY start.sh /home/user/start.sh
RUN chmod a+x /home/user/start.sh
USER user
WORKDIR /home/user

CMD ["sh","/home/user/start.sh"]

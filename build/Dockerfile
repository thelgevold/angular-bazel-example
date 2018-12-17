FROM launcher.gcr.io/google/rbe-ubuntu16-04

RUN rm /bin/sh && ln -s /bin/bash /bin/sh

WORKDIR /usr

RUN apt-get update

RUN apt-get install build-essential libssl-dev -y

RUN apt-get -y install curl
RUN apt-get -y install gnupg
RUN apt-get -y install git
RUN apt-get -y install nano

RUN echo "deb [arch=amd64] http://storage.googleapis.com/bazel-apt stable jdk1.8" | tee tee /etc/apt/sources.list.d/bazel.list
RUN curl https://bazel.build/bazel-release.pub.gpg | apt-key add -
RUN apt-get update && apt-get -y install bazel
RUN apt-get upgrade -y bazel

ENV NVM_DIR /usr/local/nvm
ENV NODE_VERSION 10.12.0

RUN curl --silent -o- https://raw.githubusercontent.com/creationix/nvm/v0.31.2/install.sh | bash

RUN source $NVM_DIR/nvm.sh \
    && nvm install $NODE_VERSION \
    && nvm alias default $NODE_VERSION \
    && nvm use default

ENV NODE_PATH $NVM_DIR/v$NODE_VERSION/lib/node_modules
ENV PATH $NVM_DIR/versions/node/v$NODE_VERSION/bin:$PATH

RUN apt-get install npm -y
RUN npm i yarn -g

RUN yarn global add @bazel/ibazel

WORKDIR /usr/demo

ENTRYPOINT [ ]
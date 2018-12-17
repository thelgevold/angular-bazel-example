FROM launcher.gcr.io/google/rbe-ubuntu16-04

WORKDIR /usr

RUN apt-get update

RUN apt-get -y install gnupg
RUN apt-get -y install git
RUN apt-get -y install nano

RUN echo "deb [arch=amd64] http://storage.googleapis.com/bazel-apt stable jdk1.8" | tee tee /etc/apt/sources.list.d/bazel.list
RUN curl https://bazel.build/bazel-release.pub.gpg | apt-key add -
RUN apt-get update && apt-get -y install bazel
RUN apt-get upgrade -y bazel

RUN apt-get -y install nodejs

WORKDIR /usr

RUN git clone https://github.com/bazelbuild/bazel-buildfarm.git

WORKDIR /usr/bazel-buildfarm

COPY worker.config /usr/bazel-buildfarm/examples/worker.config
COPY server.config /usr/bazel-buildfarm/examples/server.config

ENTRYPOINT [ ]
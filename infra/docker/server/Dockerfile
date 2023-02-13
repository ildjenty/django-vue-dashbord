FROM centos:7

WORKDIR /opt/app

USER root
RUN yum install -y gcc python3 python36-devel mysql-devel
RUN pip3 install --upgrade pip
RUN mkdir /opt/docker
COPY ./infra/docker/server/entrypoint.sh /opt/docker
RUN chmod +x /opt/docker/entrypoint.sh

ENTRYPOINT ["/opt/docker/entrypoint.sh"]
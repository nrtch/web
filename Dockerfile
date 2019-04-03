# Base image
FROM node

# RUN \
#   apt-get update \
#   && apt-get -y install gettext-base \
#   && apt-get clean \
#   && rm -rf /var/lib/apt/lists/*

# Place source code to container image folder
ADD . /var/app/

# Set up workin directory for container image
WORKDIR /var/app

# Build app container
RUN yarn
RUN yarn build

# Expose container port
EXPOSE 8080/tcp

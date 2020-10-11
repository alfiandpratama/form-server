FROM node:14.12.0

# Create app directory
RUN mkdir -p /usr/src/form-server
WORKDIR /usr/src/form-server

# Install app dependencies
COPY package.json /usr/src/form-server
RUN npm install

# Bundle app source
COPY . /usr/src/form-server

# Build arguments
ARG NODE_VERSION=14.12.0

# Environment
ENV NODE_VERSION $NODE_VERSION
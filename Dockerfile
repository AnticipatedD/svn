FROM ruby:3.2-slim

# Install system dependencies and Node.js
RUN apt-get update -y && apt-get install -y \
    git \
    build-essential \
    nodejs \
    npm \
    && rm -rf /var/lib/apt/lists/*

WORKDIR /app

# Copy dependency definitions
COPY Gemfile Gemfile.lock package.json package-lock.json ./

# Install project dependencies
RUN bundle install
RUN npm install

# Copy application source
COPY . .

# Default command to run tests or serve
CMD ["script/test"]

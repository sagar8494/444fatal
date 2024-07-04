#!/bin/bash

# Function to display messages in yellow color
print_yellow() {
  echo -e "\e[93m$1\e[0m"
}

# Function to display messages in green color
print_green() {
  echo -e "\e[32m$1\e[0m"
}

# Function to install Node.js dependencies
install_dependencies() {
  print_yellow "Installing Node.js dependencies..."
  npm install
  print_green "Node.js dependencies installed successfully."
}

# Function to setup environment variables (if needed)
setup_environment() {
  print_yellow "Setting up environment variables..."
  # Add any environment setup commands here if needed
  print_green "Environment setup completed."
}

# Main script
print_yellow "Starting installation script..."

# Step 1: Install Node.js dependencies
install_dependencies

# Step 2: Setup environment (if needed)
setup_environment

print_green "Installation completed successfully!"

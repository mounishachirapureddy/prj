provider "aws" {
  region = "ap-south-1"
}
# VPC Network Setup
resource "aws_vpc" "custom_vpc" {
  # Your VPC must have DNS hostname and DNS resolution support. 
  # Otherwise, your worker nodes cannot register with your cluster. 

  cidr_block       =  "10.0.0.0/16"
  enable_dns_support = true
  enable_dns_hostnames = true

  tags = {
    Name = "custom_vpc"
   
  }
}

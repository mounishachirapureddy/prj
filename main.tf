provider "aws" {
  region = "ap-south-1"
}

# Create VPC
resource "aws_vpc" "my_vpc" {
  cidr_block           = "10.0.0.0/16"
  enable_dns_support   = true
  enable_dns_hostnames = true
  tags = {
    Name = "my-vpc"
  }
}

# Create Internet Gateway
resource "aws_internet_gateway" "my_igw" {
  vpc_id = aws_vpc.my_vpc.id
  tags = {
    Name = "my-igw"
  }
}

# Create Subnets
resource "aws_subnet" "subnet_a" {
  vpc_id                  = aws_vpc.my_vpc.id
  cidr_block              = "10.0.1.0/24"
  availability_zone       = "ap-south-1a"
  map_public_ip_on_launch = true
  tags = {
    Name = "subnet-a"
  }
}

resource "aws_subnet" "subnet_b" {
  vpc_id                  = aws_vpc.my_vpc.id
  cidr_block              = "10.0.2.0/24"
  availability_zone       = "ap-south-1b"
  map_public_ip_on_launch = true
  tags = {
    Name = "subnet-b"
  }
}

# Create Private Subnets
resource "aws_subnet" "private_subnet_a" {
  vpc_id                  = aws_vpc.my_vpc.id
  cidr_block              = "10.0.3.0/24"
  availability_zone       = "ap-south-1a"
  tags = {
    Name = "private-subnet-a"
  }
}

resource "aws_subnet" "private_subnet_b" {
  vpc_id                  = aws_vpc.my_vpc.id
  cidr_block              = "10.0.4.0/24"
  availability_zone       = "ap-south-1b"
  tags = {
    Name = "private-subnet-b"
  }
}

# Create Elastic IP Addresses for NAT Gateways
resource "aws_instance" "nat_allocation_a" {
  ami           = "ami-0c55b159cbfafe1f0"
  instance_type = "t2.micro"
}

resource "aws_instance" "nat_allocation_b" {
  ami           = "ami-0c55b159cbfafe1f0"
  instance_type = "t2.micro"
}

# Create NAT Gateway
resource "aws_nat_gateway" "nat_gateway_a" {
  allocation_id = aws_instance.nat_allocation_a.id
  subnet_id     = aws_subnet.private_subnet_a.id

  tags = {
    Name = "nat-gateway-a"
  }
}

resource "aws_nat_gateway" "nat_gateway_b" {
  allocation_id = aws_instance.nat_allocation_b.id
  subnet_id     = aws_subnet.private_subnet_b.id

  tags = {
    Name = "nat-gateway-b"
  }
}

# Create EKS Cluster
module "eks" {
  
  cluster_name    = "my-eks-cluster"
  
  vpc_id          = aws_vpc.my_vpc.id
  

  eks_managed_node_groups = {
one = {
    name = "node-group-1"

    instance_types = ["t3.small"]

    min_size     = 1
    max_size     = 3
    desired_size = 2
}

}
}

#!/bin/bash

# OutOfSyllabuss Deployment Script
# Run this script on your server: bash deploy.sh

set -e  # Exit on any error

echo "========================================="
echo "OutOfSyllabuss Deployment Script"
echo "========================================="
echo ""

# Step 1: Stop existing backend on port 30022
echo "Step 1: Stopping existing backend on port 30022..."
if lsof -ti:30022 > /dev/null 2>&1; then
    kill -9 $(lsof -ti:30022)
    echo "✓ Stopped process on port 30022"
else
    echo "✓ No process running on port 30022"
fi
echo ""

# Step 2: Navigate to project directory
echo "Step 2: Navigating to project directory..."
cd ~/outofsyllabus/OOS
echo "✓ Current directory: $(pwd)"
echo ""

# Step 3: Install frontend dependencies
echo "Step 3: Installing frontend dependencies..."
npm install
echo "✓ Frontend dependencies installed"
echo ""

# Step 4: Build frontend
echo "Step 4: Building frontend for production..."
export VITE_API_URL=""
npm run build
echo "✓ Frontend built successfully"
echo ""

# Step 5: Install backend dependencies
echo "Step 5: Installing backend dependencies..."
cd ~/outofsyllabus/OOS/backend
pip install -r requirements.txt
echo "✓ Backend dependencies installed"
echo ""

# Step 6: Start backend server
echo "Step 6: Starting backend server on port 8000..."
nohup uvicorn app.main:app --host 127.0.0.1 --port 8000 > backend.log 2>&1 &
sleep 2  # Wait for server to start

if lsof -ti:8000 > /dev/null 2>&1; then
    echo "✓ Backend server started successfully on port 8000"
    echo "  PID: $(lsof -ti:8000)"
else
    echo "✗ Failed to start backend server"
    exit 1
fi
echo ""

# Step 7: Display Nginx configuration
echo "Step 7: Nginx Configuration Required"
echo "========================================="
echo "You need to update your Nginx configuration manually."
echo ""
echo "Edit your Nginx config file:"
echo "  nano /etc/nginx/sites-available/outofsyllabuss.org"
echo ""
echo "Add this configuration:"
echo ""
cat << 'EOF'
server {
    listen 80;
    server_name outofsyllabuss.org www.outofsyllabuss.org;

    # Serve the Frontend
    location / {
        root /root/outofsyllabus/OOS/dist;
        index index.html;
        try_files $uri $uri/ /index.html;
    }

    # Proxy to Backend (for forms)
    location /applications {
        proxy_pass http://127.0.0.1:8000;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
    }
}
EOF
echo ""
echo "After updating the config, run:"
echo "  nginx -t && systemctl reload nginx"
echo ""
echo "========================================="
echo "Deployment Complete!"
echo "========================================="
echo ""
echo "Next steps:"
echo "1. Update your Nginx configuration (see above)"
echo "2. Reload Nginx: nginx -t && systemctl reload nginx"
echo "3. Visit https://outofsyllabuss.org to verify"
echo ""
echo "Backend log location: ~/outofsyllabus/OOS/backend/backend.log"
echo "To view logs: tail -f ~/outofsyllabus/OOS/backend/backend.log"
echo ""

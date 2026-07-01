# OutOfSyllabuss (OOS) Port Documentation

This document provides the specific port configurations for the **OutOfSyllabuss** project across different environments.

---

## 🚀 Local Development Environment
For running the project on your local machine.

| Component | Port | Service | Configuration File |
| :--- | :--- | :--- | :--- |
| **Frontend** | `5173` | Vite (React + TS) | `vite.config.ts` |
| **Backend** | `8000` | FastAPI (Uvicorn) | `backend/.env` |
| **API Docs** | `8000` | Swagger UI | `/docs` path |

### Local Links:
- **Frontend**: [http://localhost:5173](http://localhost:5173)
- **Backend API**: [http://localhost:8000](http://localhost:8000)
- **Swagger Documentation**: [http://localhost:8000/docs](http://localhost:8000/docs)

---

## 🌐 Production Server Environment
Configuration used on the live server (`outofsyllabuss.org`).

| Component | Port | Description | Managed By |
| :--- | :--- | :--- | :--- |
| **Frontend** | `80 / 443` | Web Traffic (HTTPS) | Nginx |
| **Backend API** | `30024` | FastAPI Service | `restart_backend.sh` |
| **Database** | `30018` | PostgreSQL | `backend/.env` |

### Production Access:
- **Main Website**: [https://outofsyllabuss.org](https://outofsyllabuss.org)
- **Health Check**: [https://outofsyllabuss.org/health](https://outofsyllabuss.org/health)

---

## ⚙️ Configuration Reference

### Frontend Port (`vite.config.ts`)
```typescript
server: {
  host: "::",
  port: 5173,
}
```

### Backend Port (`backend/.env`)
```env
BACKEND_PORT=8000
DB_PORT=30018
```

### Server Process (`backend/restart_backend.sh`)
```bash
# Starts backend on 30024
uvicorn app.main:app --host 127.0.0.1 --port 30024
```

---

### 🛠️ Quick Commands

**Check if ports are active (PowerShell):**
```powershell
Get-NetTCPConnection -State Listen | Where-Object { $_.LocalPort -match "5173|8000|30024" }
```

**Restart Backend on Server:**
```bash
cd ~/outofsyllabus/OOS/backend
bash restart_backend.sh
```

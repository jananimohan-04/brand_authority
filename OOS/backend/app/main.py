# app/main.py
import os
from fastapi import FastAPI, Depends, HTTPException, File, UploadFile
from fastapi.staticfiles import StaticFiles
from fastapi.middleware.cors import CORSMiddleware
from sqlalchemy.orm import Session
from dotenv import load_dotenv
from typing import List
import shutil
import uuid
from pathlib import Path

from . import models, schemas, crud
from .database import SessionLocal, engine, Base

load_dotenv()

# create tables
Base.metadata.create_all(bind=engine)

app = FastAPI(title="OutOfSyllabuss Applications API")

# Mount static files directory for uploads
# Use absolute path to ensure it works regardless of CWD
BASE_DIR = Path(__file__).resolve().parent.parent
UPLOAD_DIR = BASE_DIR / "uploads"
UPLOAD_DIR.mkdir(exist_ok=True)
app.mount("/uploads", StaticFiles(directory=str(UPLOAD_DIR)), name="uploads")

# CORS - allow your frontend dev origin(s)
origins = [
    "http://localhost:5173",   # Vite default
    "http://localhost:3000",
    "http://192.168.0.24:5173",  # Local network
    "https://outofsyllabuss.org",  # Production domain
    "http://outofsyllabuss.org",   # Production domain HTTP
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Allow all origins for development
    allow_credentials=True,
    allow_methods=["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allow_headers=["*"],
    expose_headers=["*"],
)

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

@app.post("/upload")
async def upload_file(file: UploadFile = File(...)):
    """Upload a file and return its URL"""
    try:
        # Generate unique filename
        file_extension = os.path.splitext(file.filename)[1]
        unique_filename = f"{uuid.uuid4()}{file_extension}"
        file_path = UPLOAD_DIR / unique_filename
        
        # Save file
        with open(file_path, "wb") as buffer:
            shutil.copyfileobj(file.file, buffer)
            
        # Return relative URL (works for both local and production)
        file_url = f"/uploads/{unique_filename}"
        
        return {"url": file_url}
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Could not upload file: {str(e)}")

@app.post("/applications/student", response_model=None)
def submit_student(payload: schemas.CampusAmbassadorCreate, db: Session = Depends(get_db)):
    created = crud.create_ambassador(db, payload)
    return {"status": "ok", "id": created.id}

@app.get("/ambassadors/approved", response_model=List[schemas.CampusAmbassadorResponse])
def get_approved_ambassadors(db: Session = Depends(get_db)):
    """Get all approved campus ambassadors for display on the website"""
    return crud.get_approved_ambassadors(db)

@app.post("/applications/leader", response_model=None)
def submit_leader(payload: schemas.LeaderNominationCreate, db: Session = Depends(get_db)):
    created = crud.create_leader_nomination(db, payload)
    return {"status": "ok", "id": created.id}

@app.get("/leaders/approved", response_model=List[schemas.LeaderNominationResponse])
def get_approved_leaders(db: Session = Depends(get_db)):
    """Get all approved leaders for display on the website"""
    return crud.get_approved_leaders(db)

@app.post("/applications/volunteer", response_model=None)
def submit_volunteer(payload: schemas.VolunteerCreate, db: Session = Depends(get_db)):
    created = crud.create_volunteer(db, payload)
    return {"status": "ok", "id": created.id}

# simple health check
@app.get("/health")
def health():
    return {"status": "ok"}


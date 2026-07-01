# app/schemas.py
from pydantic import BaseModel, EmailStr
from typing import Optional
from datetime import datetime

class CampusAmbassadorCreate(BaseModel):
    name: str
    email: EmailStr
    phone: Optional[str] = None
    college: Optional[str] = None
    year: Optional[str] = None
    major: Optional[str] = None
    why: Optional[str] = None
    experience: Optional[str] = None

class CampusAmbassadorResponse(BaseModel):
    id: int
    name: str
    email: str
    phone: Optional[str] = None
    college: Optional[str] = None
    year: Optional[str] = None
    major: Optional[str] = None
    photo: Optional[str] = None
    linkedin_url: Optional[str] = None
    status: str
    created_at: datetime
    
    class Config:
        from_attributes = True

class LeaderNominationCreate(BaseModel):
    nominator_name: Optional[str] = None  # Optional since leaders self-nominate
    nominator_email: Optional[EmailStr] = None  # Optional since leaders self-nominate
    leader_name: str
    leader_title: Optional[str] = None
    leader_company: Optional[str] = None
    leader_email: Optional[EmailStr] = None
    leader_phone: Optional[str] = None
    why_nominate: Optional[str] = None

class LeaderNominationResponse(BaseModel):
    id: int
    leader_name: str
    leader_title: Optional[str] = None
    leader_company: Optional[str] = None
    leader_email: Optional[str] = None
    leader_phone: Optional[str] = None
    why_nominate: Optional[str] = None
    photo: Optional[str] = None
    linkedin_url: Optional[str] = None
    status: str
    created_at: datetime
    
    class Config:
        from_attributes = True

class VolunteerCreate(BaseModel):
    name: str
    email: EmailStr
    phone: Optional[str] = None
    location: Optional[str] = None
    skills: Optional[str] = None
    availability: Optional[str] = None
    why: Optional[str] = None


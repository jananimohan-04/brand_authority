# app/crud.py
from sqlalchemy.orm import Session
from . import models, schemas

def create_ambassador(db: Session, payload: schemas.CampusAmbassadorCreate):
    obj = models.CampusAmbassador(
        name=payload.name,
        email=payload.email,
        phone=payload.phone,
        college=payload.college,
        year=payload.year,
        major=payload.major,
        why=payload.why,
        experience=payload.experience,
    )
    db.add(obj)
    db.commit()
    db.refresh(obj)
    return obj

def get_approved_ambassadors(db: Session):
    """Get all approved campus ambassadors"""
    return db.query(models.CampusAmbassador).filter(
        models.CampusAmbassador.status == "approved"
    ).all()

def create_leader_nomination(db: Session, payload: schemas.LeaderNominationCreate):
    obj = models.LeaderNomination(
        nominator_name=payload.nominator_name,
        nominator_email=payload.nominator_email,
        leader_name=payload.leader_name,
        leader_title=payload.leader_title,
        leader_company=payload.leader_company,
        leader_email=payload.leader_email,
        why_nominate=payload.why_nominate,
    )
    db.add(obj)
    db.commit()
    db.refresh(obj)
    return obj

def get_approved_leaders(db: Session):
    """Get all approved leader nominations"""
    return db.query(models.LeaderNomination).filter(
        models.LeaderNomination.status == "approved"
    ).all()

def create_volunteer(db: Session, payload: schemas.VolunteerCreate):
    obj = models.Volunteer(
        name=payload.name,
        email=payload.email,
        phone=payload.phone,
        location=payload.location,
        skills=payload.skills,
        availability=payload.availability,
        why=payload.why,
    )
    db.add(obj)
    db.commit()
    db.refresh(obj)
    return obj


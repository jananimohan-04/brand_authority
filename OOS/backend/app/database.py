# app/database.py
import os
from urllib.parse import quote_plus
from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker, declarative_base
from dotenv import load_dotenv

load_dotenv()

DB_HOST = os.getenv("DB_HOST", "127.0.0.1")
DB_PORT = os.getenv("DB_PORT", "5432")
DB_USER = os.getenv("DB_USER", "user")
DB_PASS = os.getenv("DB_PASS", "")
DB_NAME = os.getenv("DB_NAME", "db")

USE_SQLITE = os.getenv("USE_SQLITE", "false").lower() in ("true", "1", "yes")

if USE_SQLITE:
    DATABASE_URL = "sqlite:///./local_syllabus.db"
    engine = create_engine(DATABASE_URL, connect_args={"check_same_thread": False})
else:
    # percent-encode password (handles @ or other special chars)
    db_pass_quoted = quote_plus(DB_PASS)
    DATABASE_URL = f"postgresql://{DB_USER}:{db_pass_quoted}@{DB_HOST}:{DB_PORT}/{DB_NAME}"
    engine = create_engine(DATABASE_URL, pool_pre_ping=True)


SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)

Base = declarative_base()

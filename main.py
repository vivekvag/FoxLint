from typing import Union
from fastapi import FastAPI
from pydantic import BaseModel

from scraper import ScrapeData

app = FastAPI(title="FoxLint", version="0.1")

@app.get("/")
def read_root():
    return {"Description": "Welcome to FoxLint! Your all in one place to know which policy is safe for you to agree with and which can expose your data!"}

@app.get("/scrape/")
def scrape_data(url: str, website_name: str):
    try:
        scrape_data = ScrapeData(url, website_name)
        scrape_data.run()
        return {"Description": f"Scraped data stored in {website_name}.txt in ./scraped_policy"}
    except:
        return {"Description": f"Oops! Something went wrong"}

@app.get("/get_embeddings/")
def get_embeddings(file_name: str):
    pass
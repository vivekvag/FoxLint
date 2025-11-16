import asyncio
import sys
from typing import Union
from fastapi import FastAPI
from pydantic import BaseModel

from scraper import ScrapeData

# Set Windows Proactor event loop for subprocess support (only on Windows)
if sys.platform == "win32":
    asyncio.set_event_loop_policy(asyncio.WindowsProactorEventLoopPolicy())

app = FastAPI(title="FoxLint", version="0.1")


@app.get("/")
def read_root():
    return {"Description": "Welcome to FoxLint! Your all in one place to know which policy is safe for you to agree with and which can expose your data!"}


@app.get("/scrape/")
async def scrape_data(url: str, website_name: str):
    try:
        scraper = ScrapeData(url, website_name)
        await scraper.run()
        return {"Description": f"Scraped data stored in {website_name}.txt in ./scraped_policy."}
    except Exception as e:
        return {"Description": f"Oops! Something went wrong: {str(e)}"}


@app.get("/get_embeddings/")
def get_embeddings(file_name: str):
    pass
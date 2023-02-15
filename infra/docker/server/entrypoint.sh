#!/bin/bash

cd /opt/app
source venv/bin/activate
python3 manage.py runserver 0.0.0.0:8000
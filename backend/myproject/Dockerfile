FROM python:3.10-slim

WORKDIR /myproject

COPY ../requirements.txt /myproject/
RUN pip install --no-cache-dir -r requirements.txt

COPY . /myproject/

EXPOSE 8000
CMD ["python", "manage.py", "runserver", "0.0.0.0:8000"]
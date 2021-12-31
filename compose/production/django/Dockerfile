FROM python:3-alpine

ADD . /app
WORKDIR /app

RUN apk update && apk add postgresql-dev gcc python3-dev musl-dev libffi-dev
RUN pip install -r requirements.txtEXPOSE 8000

EXPOSE 8000

CMD ["./manage.py", "runserver"]
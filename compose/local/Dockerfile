FROM python:3-alpine

ADD . /app
WORKDIR /app
COPY requirements /app/

# if you use ubuntu change apk to apt-get (apk add to apt-get install --no-install-recommended)
RUN apk update && \
    apk add \
        # add bash
        bash \
        # add python 3 latest version
        python3 \
        python3-dev \
        # add postgres
        postgresql-dev \
        gcc \
        musl-dev \
        libffi-dev \
        # add pillow requirements
        jpeg-dev \
        zlib-dev \
        freetype-dev \
        lcms2-dev \
        openjpeg-dev \
        tiff-dev \
        tk-dev \
        tcl-dev

# update pip and install requirements
RUN pip install --upgrade pip
RUN pip install -r ./requirements/local.txt

# use port 8000
ENV PORT=8000
EXPOSE ${PORT}

# copy start file and run it
COPY ./compose/local/start /start
CMD ["/start"]
# change permisions to root
RUN chmod +x /start
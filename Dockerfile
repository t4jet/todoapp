FROM golang:1.19
WORKDIR /api
COPY ./api /api/
RUN go mod download
COPY ./api /api/
RUN CGO_ENABLED=0 GOOS=linux go build -o /docker-golang
CMD ["/docker-golang"]


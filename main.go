package main

import (
	"time"
)

type User struct {
	Id   int16
	Name string
}

type Message struct {
	Id      int32
	Content string
	Date    time.Time
	Sender  User
}

func main() {

}

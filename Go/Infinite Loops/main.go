package main

import (
	"fmt"
	"strconv"
)

func main() {
	type score struct {
		name  string
		score int
	}

	scores := []score{}

	for {
		fmt.Println("Please enter a student's name and score: ")
		var name, rawScore string
		fmt.Scanln(&name, &rawScore)
		scoreAsInt, errorRecieved := strconv.Atoi(rawScore)
		if errorRecieved != nil {
			fmt.Println("Invalid score. Please enter a valid integer.")
			continue
		}
		scores = append(scores, score{name: name, score: scoreAsInt})
	}
}
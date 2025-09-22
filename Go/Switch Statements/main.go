package main

import (
	"fmt"
	"strings"
)

func main() {

	type score struct {
		name  string
		score int
	}
	students := []string{"Dent, Arthur", "MacMillan, Tricia", "Prefect, Ford"}
	scores := []score{ {students[0], 87}, {students[1], 96}, {students[2], 64} }

	fmt.Println("Select a score to print (1 - 3):")
	var option string
	fmt.Scanln(&option)

	fmt.Println("Student Scores")
	fmt.Println(strings.Repeat("-", 14))
	var index int
	switch option {
		case "1":
			index = 0
		case "2":
			index = 1
		case "3":
			index = 2
		default:
			fmt.Println("Invalid option, defaulting to 1")
			index = 0
	}
	fmt.Println(students[index], scores[index].score)
}
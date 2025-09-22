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

	fmt.Println("Student Scores")
	fmt.Println(strings.Repeat("-", 14))
	fmt.Println(students[0], scores[0].score)
	fmt.Println(students[1], scores[1].score)
	fmt.Println(students[2], scores[2].score)
}
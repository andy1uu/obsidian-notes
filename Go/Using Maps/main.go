package main

import (
	"fmt"
	"strings"
)

func main() {
	students := []string{"Dent, Arthur", "MacMillan, Tricia", "Prefect, Ford"}
	scores := map[string]int{students[0]:87, students[1]:96, students[2]:64}

	fmt.Println("Student Scores")
	fmt.Println(strings.Repeat("-", 14))
	fmt.Println(students[0], scores[students[0]])
	fmt.Println(students[1], scores[students[1]])
	fmt.Println(students[2], scores[students[2]])

}
package main

import (
	"fmt"
	"strings"
)

func main() {
	students := []string{"Dent, Arthur", "MacMillan, Tricia", "Prefect, Ford"}
	scores := []int{87, 96, 64}

	fmt.Println("Student Scores")
	fmt.Println(strings.Repeat("-", 14))
	fmt.Println(students[0], scores[0])
	fmt.Println(students[1], scores[1])
	fmt.Println(students[2], scores[2])

}
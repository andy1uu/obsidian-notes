package main

import (
	"fmt"
	"strings"
)

func main() {
	//var name string = "Dent, Arther"
	// var score = 87
	//name := "Dent, Arther"
	//score := 87

	name, score := "Dent, Arther", 87

	fmt.Println("Student Scores")
	fmt.Println(strings.Repeat("-", 14))
	fmt.Println(name, score)
}
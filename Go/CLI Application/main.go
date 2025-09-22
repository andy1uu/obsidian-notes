package main

import (
	"bufio"
	"flag"
	"fmt"
	"log"
	"os"
	"strings"
)

func main() {
	errorLevel := flag.String("level", "CRITICAL", "log level to filter for")

	flag.Parse()

	fileHandle, errorRecieved := os.Open("./log.txt")

	if errorRecieved != nil {
		log.Fatal(errorRecieved)
	}

	defer fileHandle.Close()

	bufferedReader := bufio.NewReader(fileHandle)

	for line, errorRecieved := bufferedReader.ReadString('\n'); errorRecieved == nil; line, errorRecieved = bufferedReader.ReadString('\n') {
		if strings.Contains(line, *errorLevel) {
			fmt.Println(line)
		}
	}
}

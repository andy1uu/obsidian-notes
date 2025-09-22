package main

import (
	"fmt"
	"net/http"
)

func main() {
	http.HandleFunc("/", func(responseWriter http.ResponseWriter, request * http.Request) {
		fmt.Fprint(responseWriter, "Web services are easy with Go!") 
	})

	http.HandleFunc("/home", func(responseWriter http.ResponseWriter, request * http.Request) {
		http.ServeFile(responseWriter, request, "./home.html") 
	})
	
	http.ListenAndServe(":3000", nil)
}
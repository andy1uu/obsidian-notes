```table-of-contents
```
# Go: The Big Picture

## Why Go?

### Why Create Go?

Go was originally created in Google because engineers recognized challenges with the current languages they were using...

Goals of Software Development

- Efficient Compilation
- Efficient Execution
- Ease of Programming

Programming Languages at Google at the Time

- C++ —> Efficient Execution
- Java —> Efficient Execution and Compilation
- Python —> Ease of Programming and Efficient Compilation

### Guiding Principles

- Simplicity as a core value
  - Simple Syntax
    - Simple methods to perform actions
      - Go only has for loops
  - Commitment to backward compatibility
  - Made for concurrent, network-enabled applications
  - Holistic approach to solve common problems

### Language Characteristics

- Strong static type system
- C-inspired syntax
- Garbage Collected
- Fully compiled
- Rapid compilation
- Single binary output
- Cross platform

### Primary Use Cases

- Cloud and network services
- Command-line interfaces
- Cloud Infrastructure
  - Docker
  - Kubernetes
  - Terraform

## Programming with Go

### Go's Evolution

- Made off of C to take advantage of:
  - Faster Computers
  - Multiple CPUs
  - Network aware

To get started in Go, create a Go module with:

```bash
go mod init [module-path]
```

go mod file:

```text
module demo

go 1.19
```

### Demo: Hello World

main.go file:

```go
package main

import "fmt"

func main() {

 fmt.Println("Hello World!")

}
```

To run the main.go file, use this command:

```bash
go run .
```

### Demo: A Simple Web Service

main.go file:

```go
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
```

### Demo: CLI Application

main.go file:

```go
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
```

## Leveraging the Go Ecosystem

### Development Tools
- VSCode
- Goland
- Vim
- Emacs
- Eclipse
- …
- All are using Gopls as the underlying software
### Common Frameworks
- Network Services
    - Go kit (gokit.io)
        - Comprehensive microservice framework
    - Gin (gin-gonic.com)
        - Fast, lightweight web framework
    - Gorilla Toolkit (gorillatoolkit.org)
        - Collection of useful tools without framework lock-in
- CLIs
    - Cobra (github.com/spf13/cobra)
        - Framework for building command-line interface CLI applications
    - Standard library (pkg.go.dev/std)
        - Zero dependency APIs for managing simple CLIs
- Cloud Infrastructure
    - Docker (docker.com)
        - Containerize Applications to simplify development
    - Kubernetes (kubernetes.io)
        - System that builds, deploys, and scales containerized applications
    - Terraform (terraform.io)
        - Cloud infrastructure management platform

# Go Fundamentals

## Variables and Simple Data Types

### The Simple Data Types

- Strings
- Numbers
- Booleans
- Errors

### Using String Types

Interpreted Strings: 
- Uses the double quotes
- Go will interpret the escape characters

```go
  "This is a string"
  
  "this is an escape character: \n it creates a newline"
  
  becomes:
  
  this is an escape character:
   it creates a newline
  ```

Raw Strings: 
- Uses the tilda quotes
- Go will not interpret the escape characters
- Encodes new line characters inside the string
- Useful for structured json messages

```go
  `This is a string`
  
  `this is an escape character: \n it creates a newline`
  
  becomes:
  
  this is an escape character: \n it creates a newline
  
  `raw strings
  ignore new lines`
  
  becomes:
  
  raw strings
  ignore new lines
  ```

### Using Numeric Types

Integers:

- Represented using int
- Examples:
    - 99
    - 0
    - -937

Unsigned Integers:

- Represented using uint
- Examples:
    - 0
    - 15
    - 7329

Floating Point Numbers

- Represented using float32/float64
- Examples:
    - 6.02e23
    - 3.1415
    - 0.25

Complex Numbers:

- Represented using complex32/complex64
- Examples:
    - 1 + 2i
    - 0.833i
    - 6.02e23 + 3.1415i

### Using Boolean Data Types

- Represented using bool
- Examples:
    - true
    - false

### Using Error Types

- Error built-in interface type
    - Conventional interface for representing an error condition
    - nil value represents no error

```go
type error interface {
    Error() string
}
```

### Declaring Variables

Variables are declared using the var keyword, then the variable name, and then the variable type.

```go
var myName string // Declare Variable

var myName string = "Mike" // Declare and Initialize a Variable

var myName = "Mike" // Initialize a variable with an inferred type

myName := "Mike" // Short declaration syntax
```

### Working with Constants

```go
const a = 42 // Implicitly Typed Constant

const b string = "Hello World!" // Explicitly Typed Constant

const c = a // One Constant can be assigned to another one

const ( // Constants can be grouped
    d = true
    e = 3.14
)

const c = 2 * 5 // Constant expression, derived at compile time

const d = "Hello " + "World" // Must be calculable at compile time

const e = someFunction() // Will not work! Can not be evaluated at compile time
```

### Demo: Using Variables and Simple Types

```go
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
```

### Pointers and Values

Traditional Values

```go
a := 42 // a stores the value 42 in memory

b := a // b will look at the value of a in memory and then copy it so now a = 42 and b = 42

a := 27 // Even though we change the value of a to 27, since they are independent of each other, b remains 42
```

Pointers

```go
a := 42

b := &a // b will store the memory address of a so they point to the same place

*b // 42

a = 27

*b // 27 because it only looks at the place where a is and sees that value, it does not copy it
```

Values are good for copying data, pointers are good for sharing data

## Aggregate Data Types

- Arrays
- Slices
- Maps
- Structs

### Using Arrays

- Zero-indexed
- Fixed-size collection of variables of the same data type
- Static Data Structure

Example:

| index | 0   | 1   | 2   | 3   | 4   | 5   | 6   | 7   | 8   | 9   | 10  | 11  | 12  |
| ----- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| value | 0   | 0   | 0   | 0   | 0   | 0   | 0   | 0   | 0   | 0   | 0   | 0   | 0   |

```go
var array [3]int // array of 3 integers
fmt.Println(array) // prints [0 0 0] since all are originally initialized to the zero value
array = [3]int{1, 2, 3} // array literal, similar to Java initializer list

fmt.Println(array[1]) // prints 2 which is the value stored at index 1
array[1] = 99 // Updates the value stored at index 1
fmt.Println(array) // prints [1 99 3] since the value at index 1 got updated

fmt.Println(len(array)) // Prints the length of the array

array := [3]string{"foo", "bar", "baz"}

array2 := array // arrays are copied by value
fmt.Println(array2) // {"foo", "bar", "baz"}

array[0] = "quux"
fmt.Println(array) // {"quux", "bar", "baz"}
fmt.Println(array2) // {"foo", "bar", "baz"}

array == array2 // false - arrays are comparable since they are value types, checks value by value
```

### Understanding Slices

- Slices are subsets of arrays
- Slices do not contain their own data
- Slice store the reference to the data of the array they are slice of
- If you change a value in the slice, you also change it in the original array

```go
var slice []int // slice of integers, no predeclared size
fmt.Println(slice) // prints [] (nil)
slice = []int{1, 2, 3} // slice literal, similar to Java initializer list

fmt.Println(slice[1]) // prints 2 which is the value stored at index 1
slice[1] = 99 // Updates the value stored at index 1
fmt.Println(slice) // prints [1 99 3] since the value at index 1 got updated

slice = append(slice, 5, 10, 15) // how to add elements to the slice
fmt.Println(slice) // prints [1 99 3 5 10 15]

s = slices.Delete(s, 1, 3) // From https://pkg.go.dev/slices#Delete, removes the values from the slice from the initial index to one before the end index

slice := []string{"foo", "bar", "baz"}
slice2 := slice // slices are copied by reference
                // use slices.Clone to copy by value

slice[0], slice2[2] = "qux", "fred" // Updating values in slices
fmt.Println(slice, slice2) // ["qux", "bar", "fred"] ["qux", "bar", "fred"],  data is shared

slice == slice2 // compile time error - slices are not comparable
```
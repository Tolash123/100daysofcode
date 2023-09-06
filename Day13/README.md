# Day 13

String in Javascript
 string is a sequence characters enclosed in single or double quotes.
 > 'abc' === "abc"

 ## Escape sequence in Strings
 \t tab
 \n new line
 \" Double quote
 \' single quote
 \\ Backlash

## String Length

The length property returns the length of a string

> var x = "Hello"
document.write(x.length)

## Extracting String Characters

- charAt(position)
The charAt() method returns the character at a specified index in a string.


## Extracting String parts

- substring(start, end)
+ slice(start, end)
Extracts a part of a string and returns the extracted part in a new string. The substring() is similar to slice().

## Finding a String in a string

The indexOf() method returns the index of the first occurrence of a specified text in a string.
The lastIndexOf() method returns the index of the last occurrence of a specified text in a string.
Both indexOf(), and lastIndexOf() return -1 if the text is not found.

## Converting a string to an Array

A string can be converted to an array with the split() method

## Replacing string content

The replace() method replaces a specified value with another value in a string

## Converting to Upper and Lower Case

+ A string is converted to upper case with toUpperCase()
+ A string is converted to lowe case with toLowerCasw()

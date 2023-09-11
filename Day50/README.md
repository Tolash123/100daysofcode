# Day 50

Deleting Array Elements in js.

#### Deleting Array Elements

Removing js Array items is important to managing your data. There is not a single 'remove' method available, but there are different methods and techniques you can use to clean unwanted array items.

- Elements in array can be deleted by using the operator delete:

var fruits = ['banana', 'orange'];
delete fruits[1];

- Clear or reset array:

var array = [1, 2, 3];
array = []; //a new, empty array!

- Clear an array is to set its length property to 0

var array = [1, 2, 3];
array.length = 0;
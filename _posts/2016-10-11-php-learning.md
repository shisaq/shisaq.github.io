---
layout: post
title: My PHP Notes
date:   2016-10-11 18:24:49
categories: front-end notes
---

> Learnd from [Codecademy](https://www.codecademy.com/)

## Several functions

1. strlen
    `$length = strlen($example);`
2. substr
    `$subString = substr($example, 0, 4); // 0 is starting position; 4 is length`
3. strtoupper
    `$uppercase = strtoupper($example);`
4. strtolower
    the same with 3
5. strpos
    `$position = strpos($example, "q"); `
6. M_PI
    a PHP constant that is equal to _pi_
7. round
    `$integerNum = round($floatNum);`
    `$twoDecimalPlaces = round($floatNum, 2);`
8. rand
    `print rand(); // prints a number between 0 and 32767`
    `print rand(1, 10); // prints a number between 1 and 10`
9. array
    `$anArray = array();`
10. array_push
    `array_push($anArray, "item");`
11. count
    `count($anArray); // return the number of elements of the array`
12. sort
    `sort($anArray); // sequense from small to big`
13. rsort
    `rsort($anArray); // sequense from big to small`
14. join
    `join(",", $anArray); // make an array into a string, splited by ","`

## Object Oriented PHP
``` php
<!DOCTYPE html>
<html>
    <head>
      <title> Introduction to Object-Oriented Programming </title>
      <link type='text/css' rel='stylesheet' href='style.css'/>
    </head>
	<body>
      <p>
      <?php
        // The code below creates the class
        class Person {
            // Creating some properties (variables tied to an object)
            public $isAlive = true;
            public $firstname;
            public $lastname;
            public $age;

            // Assigning the values
            public function __construct($firstname, $lastname, $age) {
              $this->firstname = $firstname;
              $this->lastname = $lastname;
              $this->age = $age;
            }

            // Creating a method (function tied to an object)
            public function greet() {
              return "Hello, my name is " . $this->firstname . " " . $this->lastname . ". Nice to meet you! :-)";
            }
          }

        // Creating a new person called "boring 12345", who is 12345 years old ;-)
        $me = new Person('boring', '12345', 12345);

        // Printing out, what the greet method returns
        echo $me->greet();
        ?>
        </p>
    </body>
</html>
```
1. Create a new class
    `class Person {}`
2. Construct an instance of the class
    `$instance = new Person();`
3. print a public property from a class

``` php
class Person {
  public $theValue = true;
}

$example = new Person();

print $example->theValue; // true
```

4. methods: functions bundled into objects

``` php
class Person {
  public function __construct($para1, $para2) {
    this->num1 = $para1;
    this->num2 = $para2;
  }
}
$obj = new Person("one", "two");
print $obj->num1; // one
```

## OOP PHP

``` php
class Person {
  function __construct($name) {
      $this->name = $name;
  }

  public function dance() {
    return "I'm dancing!";
  }
}
```

1. `is_a()`: find out if a particular object is an instance of a given class

``` php
if (is_a($me, "Person")) {
  echo "I'm a person";
}
```

2. `property_exists()`: if an object has a given property

``` php
if (property_exists($me, "name")) {
  echo "I have a name";
}
```

3. `method_exists()`: if an object has a given method

``` php
if (method_exists($me, "dance")) {
  echo "I know how to dance";
}
```

4. inheritance

``` php
class Shape {
  public $hasSides = true;
}

class Square extends Shape {
}
```

5. override and the final word

``` php
class Vehicle {
    final public function honk() {
      return "HONK HONK!";
    }
  }

  class Bicycle extends Vehicle {
      public function honk() {
          return "Beep beep!";    
      }
  }

  $bicycle = new Bicycle();

  echo $bicycle->honk(); // Cannot override final method Vehicle::honk()

?>
```

6. `const` is short for constant, which is not allowed to change

``` php
class Immortal extends Person {
  // Immortals never die!
  const alive = true;
}
```

7. Scope Resolution 范围解析符 __::__

``` php
class Person {
  const life = "MAXIMUM";
}

echo Person::life; //MAXIMUM
```

8. `static` is similar with `const`, but it can be a function for a class

## arrays
1. `$anArray = array(0, 'apple', '333');`
2. `echo $anArray[0]; // 0`
3. Associative Arrays

``` php
$anotherArray = array('color' => 'blue',
                       'sex' => 'male',
                       'year' => 2016);
echo $anotherArray['color']; // blue
```

4. Iterating over Associative Arrays

``` php
$salad = array('lettuce' => 'with',
               'tomato' => 'without',
               'onions' => 'with');

foreach ($salad as $key => $value) {
  echo $value . ' ' . $key; // with lettuce without tomato with onions
}
```

5. Multidimensional Arrays

``` php
$deck = array(array('2 of Diamonds', 2),
                  array('5 of Diamonds', 5),
                  array('7 of Diamonds', 7));

echo 'You have the ' . $deck[2][1] . '!'; // You have the 7!
echo 'You have the ' . $deck[2] . '!'; // You have the Array!
```

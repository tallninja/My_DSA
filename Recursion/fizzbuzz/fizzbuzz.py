

def fizzBuzz(num):
    if num <= 0:
        return;

    if num % 3 == 0 and num % 5 == 0:
        print("FizzBuzz")

    elif num % 3 == 0:
        print("Fizz")

    elif num % 5 == 0:
        print("Buzz")

    else:
        print(num)
    
    num -= 1
    fizzBuzz(num)



fizzBuzz(35)

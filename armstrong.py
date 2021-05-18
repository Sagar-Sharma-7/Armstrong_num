import math

userNum = input("Type any postive number:" )
integer = int(userNum)
if integer < 0:
    print("Only postive numbers are allowed.")  
    exit()
else:
    digits = len(userNum)
    num = integer
    sumNum = 0 
    while num > 0:
        lastDigit = num % 10 # getting last digit of number
        sumNum += math.pow(lastDigit, digits) 
        num = math.floor(num / 10) # removing last digit of number
if integer == sumNum:
    print(integer, "is an Armstrong number.")
else:
    print(integer, "is not an Armstrong number.")

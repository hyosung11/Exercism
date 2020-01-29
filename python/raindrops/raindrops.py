# Exercism
# Python Track
# Exercise 2 - Raindrops

def convert(number):
    result = ''

    if number % 3 == 0:
        result += 'Pling'

    if number % 5 == 0:
        result += 'Plang'

    if number % 7 == 0:
        result += 'Plong'

    # does not have any of 3, 5, or 7 as a factor, the result should be the digits of the number.
    if not result:
        result = number

    return str(result)


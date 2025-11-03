'''You can define other functions before Solution functions'''
'''Write your code inside this Solution function and must return the answer'''

def Solution(input):



    s = str(input)



    return s == s[::-1]

print(Solution(10),end='_')
print(Solution(2112),end='_')
print(Solution(30003),end='_')
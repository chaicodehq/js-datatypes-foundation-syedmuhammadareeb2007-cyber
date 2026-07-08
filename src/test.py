dict={
    "apple":2,
    "orange":6,
    "banana":5,
    "quit":0
}

Total=0
user__input= ""
while user__input != "quit":
    user__input=(input("Enter something: "))

    if user__input in dict:     
            Total += dict[user__input]
    print( Total)

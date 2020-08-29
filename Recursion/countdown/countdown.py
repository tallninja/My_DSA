

def countdown(num):
    if num <= 0:
        print("Done !")
        return;

    print(num)
    num -= 1
    countdown(num)

countdown(10)



def anagrams(str1, str2):
    charMap1 = getCharMap(str1)
    charMap2 = getCharMap(str2)

    if len(charMap1.keys()) != len(charMap2.keys()):
        return False
    else:
        for char in charMap1.keys():
            if charMap1[char] != charMap2[char]:
                return False
        return True


def getCharMap(str):
    charMap = {}
    for char in str.replace(" ", "").lower():
        if charMap.get(char):
            charMap[char] += 1
        charMap[char] = 1
    return charMap

print(f"Hello and Olleh ---> {anagrams('Hello', 'Olleh')}")
print(f"Hello and Ollehs ---> {anagrams('Hello', 'Ollehs')}")

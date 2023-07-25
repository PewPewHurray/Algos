# Write a function that takes in a string of one or more words, and returns the same string, but with all five or more letter words reversed (Just like the name of this Kata). Strings passed in will consist of only letters and spaces. Spaces will be included only when more than one word is present.

# Examples:

# spinWords( "Hey fellow warriors" ) => returns "Hey wollef sroirraw" 
# spinWords( "This is a test") => returns "This is a test" 
# spinWords( "This is another test" )=> returns "This is rehtona test"

def spin_words(sentence):
    revtmp = ""
    tmp = ""
    final = ""
    count = 0
    for x in sentence:
        if x == " ":
            if count < 5:
                final = final + tmp + " "
            else:
                final = final + revtmp + " "
            revtmp = ""
            tmp = ""
            count = 0
        else:
            tmp = tmp + x
            revtmp = x + revtmp
            count = count + 1
    if count < 5:
        final = final + tmp
    else:
        final = final + revtmp
    return final

#Better
# def spin_words(sentence):
#     return " ".join([x[::-1] if len(x) >= 5 else x for x in sentence.split(" ")])
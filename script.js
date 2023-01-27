// Created By Pratham Asrani

function submitBirthday() {
    let myBirthday = document.getElementById("myBirthday").value;
    // document.write(myBirthday); // create a new DOM not required
    // console.log(myBirthday);
    let arr;
    let year, month, day;
    arr = myBirthday.split("-");
    year = arr[0];
    month = arr[1];
    day = arr[2];
    // console.log(year);
    // console.log(month);
    // console.log(day);
    let yourZodiacSign = zodiacSign(day, month);
    // console.log(yourZodiacSign);
    document.getElementById("output").innerHTML = yourZodiacSign;
}

const zodiacSign = (day, month) => {
    let result = "";
    if (month == 3 && day >= 21) {
        // right
        result = "Aries : Aries people are very Ambitious";
    } else if (month == 4 && day <= 19) {
        // right
        result = "Aries : Aries people are very Ambitious";
    } else if (month == 4 && day >= 20) {
        // right
        result = "Taurus : You are a builder, restorer, and caretaker of those things you find important—primarily the earth, animals, and people.";
    } else if (month == 5 && day <= 20) {
        // right
        result = "Taurus : You are a builder, restorer, and caretaker of those things you find important—primarily the earth, animals, and people.";
    } else if (month == 5 && day >= 21) {
        // right
        result = "Gemini : Positive Qualities First of all, you're a great thinker. Many of the world's intellectuals are Geminis.";
    } else if (month == 6 && day <= 21) {
        // right
        result = "Gemini : Positive Qualities First of all, you're a great thinker. Many of the world's intellectuals are Geminis.";
    } else if (month == 6 && day >= 22) {
        // right
        result = "Cancer : Positive traits: Tenacity, dependability and persuasion";
    } else if (month == 7 && day <= 22) {
        // right
        result = "Cancer : Positive traits: Tenacity, dependability and persuasion";
    } else if (month == 7 && day >= 23) {
        // right
        result = "Leo : Leo Positive Traits: Good and Best Traits of this Zodiac Sign. Positive traits: generosity, aristocracy, chivalry, optimism";
    } else if (month == 8 && day <= 22) {
        // right
        result = "Leo : Leo Positive Traits: Good and Best Traits of this Zodiac Sign. Positive traits: generosity, aristocracy, chivalry, optimism";
    } else if (month == 8 && day >= 23) {
        // right
        result = "Virgo : Next of many positive Virgo traits is their neatness";
    } else if (month == 9 && day <= 22) {
        // right
        result = "Virgo : Next of many positive Virgo traits is their neatness";
    } else if (month == 9 && day >= 23) {
        // right
        result = "Libra : Librans is that they are sensitive and often care about others' feelings";
    } else if (month == 10 && day <= 23) {
        // right
        result = "Libra : Librans is that they are sensitive and often care about others' feelings";
    } else if (month == 10 && day >= 24) {
        // right
        result = "Scorpion : Scorpio has united many positive traits of the Water signs with the power given by ruling planets";
    } else if (month == 11 && day <= 21) {
        // right
        result = "Scorpion : Scorpio has united many positive traits of the Water signs with the power given by ruling planets";
    } else if (month == 11 && day >= 22) {
        // right
        result = "Sagittarius : Sagittarius loves (actually, needs) to try new things and have new experiences.";
    } else if (month == 12 && day <= 21) {
        // right
        result = "Sagittarius : Sagittarius loves (actually, needs) to try new things and have new experiences.";
    } else if (month == 12 && day >= 22) {
        // right
        result = "Capricornus : Capricorns are very strong emotionally, especially when achieving their goals as they don’t let anything distract them from getting ahead";
    } else if (month == 1 && day <= 19) {
        // right
        result = "Capricornus : Capricorns are very strong emotionally, especially when achieving their goals as they don’t let anything distract them from getting ahead";
    } else if (month == 1 && day >= 20) {
        // right
        result = "Aquarius : Open-mindedness. Almost every horoscope says that Aquarius personalities always try to consider new ideas.";
    } else if (month == 2 && day <= 18) {
        // right
        result = "Aquarius : Open-mindedness. Almost every horoscope says that Aquarius personalities always try to consider new ideas.";
    } else if (month == 2 && day >= 19) {
        // right
        result = "Pieces : Pisces Positive Traits Empathetic Pisces are extremely empathetic creatures with a lively imagination and a friendly disposition";
    } else if (month == 3 && day <= 20) {
        // right
        result = "Pieces : Pisces Positive Traits Empathetic Pisces are extremely empathetic creatures with a lively imagination and a friendly disposition";
    }
    return result;
};

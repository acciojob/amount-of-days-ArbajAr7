function daysOfAYear(year) {
    // Check if the year is a leap year
    if((year % 4 == 0 && year % 100 != 0) || year % 400 == 0){
        // If it's a leap year, return 366
        return 366;
    }else{
        // If it's not a leap year, return 365
        return 365;
    }
}
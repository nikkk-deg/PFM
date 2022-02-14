function getAverage(marks){
    return Math.floor(marks.reduce((sum, current) => sum + current, 0) / marks.length);
}
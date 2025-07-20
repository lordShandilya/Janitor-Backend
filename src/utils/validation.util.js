
export function isValidRoll(roll) {
    const str = roll.toString();
    if(!/^\d{7}$/.test(str)) {
        return false;
    }

    const year = parseInt(str.substring(0,2), 10);

    const current_year = new Date().getFullYear();
    const year_suffix = current_year % 100;

    return year <= year_suffix;
}

export function isValidEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

export function isValidPhoneNumber(num) {
    const str = num.toString();
    const regex = /^\d{10}$/;    

    return regex.test(str);
}

export function isValidRoomNumber(room) {
    const str = room.toString();
    const regex = /^\d{3}$/;

    return regex.test(str);
    
}
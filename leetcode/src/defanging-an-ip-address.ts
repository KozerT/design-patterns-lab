/* Given a valid (IPv4) IP address, return a defanged version of that IP address.

A defanged IP address replaces every period "." with "[.]". */

export function defangIPaddr(address: string): string {
    let result = "";

    const addressArray = address.split("");

    addressArray.forEach(character => {
        if (character === '.') {
            result += '[.]';
        } else {
            result += character;
        }
    });

    return result;
}
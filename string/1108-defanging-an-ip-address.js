var defangIPaddr = function (address) {
    return address.replaceAll(".", "[.]")
};

defangIPaddr("255.100.50.0");

var workerName = ['Alade idris', 'Ayodeji Akinfemiwa', 'Orahachi Rosemary', 'Okatahi sunday', 'Ebiloma umar', 'Alade Qozeem', 'Ishola Emmanuel'];
var nationality = ['Nigeria', 'Togo', 'Djibouti', 'Ethopia','Qatar', 'UK', 'Gabon'];

for (var i = 0; i < workerName.length; i++) {
    document.write("<tr><td>" + workerName[i] + "</td>");
    document.write("<td>" + nationality[i] + "</td></tr>");
}
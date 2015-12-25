/// <reference path="jquery-1.7.1.min.js" />
/// <reference path="jquery-easyui-1.4.3/jquery.easyui.min.js" />

function mSuccessChanges() {

    $.messager.alert('Message Success','DATA CHANGES Has Been Successfully UPDATED')
}

function mFailChanges(message) {
    $.messager.alert('Message Error', 'DATA CHANGES Has Been Failed <br />[' + message + ']', 'error');
}

function mSuccessDelete() {
    $.messager.alert('Message Success', 'DELETE Data Has Been Successfully')
}

function mFailDelete() {
    $.messager.alert('Message Error', 'DELETE Has Been Failed', 'error');
}

function mSuccessChangePassword(){
    $.messager.alert('Message Success','Change Password Has Been Successfully');
}

function mFailChangePassword() {
    $.messager.alert('Message Error', 'Change Password Has Been Failed! <br/>-Password minimum 8 characters <br/> -Password must contains alphanumeric <br/> -Password must contains CAPITAL Letter');
}

function DateFormatter(value, row, index) {

    if (value!=null) {
        var date = new Date(parseInt(value.substr(6)));

        var month = new Array();
        month[0] = "January";
        month[1] = "February";
        month[2] = "March";
        month[3] = "April";
        month[4] = "May";
        month[5] = "June";
        month[6] = "July";
        month[7] = "August";
        month[8] = "September";
        month[9] = "October";
        month[10] = "November";
        month[11] = "December";

        var y = date.getFullYear();
        var m = month[date.getMonth()];
        var d = date.getDate();

        return (d < 10 ? ('0' + d) : d) + '-' + (m < 10 ? ('0' + m) : m) + '-' + y;
    }
}

function DateFormatterFull(value, row, index) {
    //alert(value);
    if (value!=null) {
        var date = new Date(parseInt(value.substr(6)));
        var month = new Array();
        month[0] = "January";
        month[1] = "February";
        month[2] = "March";
        month[3] = "April";
        month[4] = "May";
        month[5] = "June";
        month[6] = "July";
        month[7] = "August";
        month[8] = "September";
        month[9] = "October";
        month[10] = "November";
        month[11] = "December";

        var y = date.getFullYear();
        //var m = date.getMonth() + 1;
        var m = month[date.getMonth()];
        var d = date.getDate();
        var h = date.getHours();
        var min = date.getMinutes();
        var s = date.getSeconds();

        //var completeDate = (d < 10 ? ('0' + d) : d) + '-' + (m < 10 ? ('0' + m) : m) + '-' + y + ' ' + h + ':' + m + ':' + s;
        //return $.fn.datebox.defaults.formatter(completeDate);
        //return completeDate;

        return (d < 10 ? ('0' + d) : d) + '-' + (m < 10 ? ('0' + m) : m) + '-' + y + ' ' + h + ':' + min + ':' + s;
    }
}
//function mSuccess() {
//    $.messager.show({
//        title: 'Status - OK...',
//        msg: 'Update Data Has Been Successfully',
//        timeout: 5000,
//        showType: 'slide',
//        iconCls: 'icon-ok',
//        style: {
//            //left: '',
//            //right: 0,
//            //bottom: ''
//            right: '',
//            top: document.body.scrollTop + document.documentElement.scrollTop,
//            bottom: ''
//        }
//    });
//}

//function mFail() {
//    $.messager.show({
//        title: 'Status - ERROR...',
//        msg: 'Update Data Has Been Failed',
//        timeout: 5000,
//        showType: 'slide',
//        iconCls: 'icon-no',
//        style: {
//            right:'',
//            //left: '',
//            //right: 0,
//            //bottom: ''
//            top: document.body.scrollTop + document.documentElement.scrollTop,
//            bottom:''
//        }
//    });
//}

//function mSuccessPasswordCompliance() {
//    $.messager.show({
//        title: 'Status - OK...',
//        msg: 'Password has been changed',
//        timeout: 5000,
//        showType: 'slide',
//        iconCls: 'icon-ok',
//        style: {
//            //left: '',
//            //right: 0,
//            //bottom: ''
//            right: '',
//            top: document.body.scrollTop + document.documentElement.scrollTop,
//            bottom: ''
//        }
//    });
//}

//function mFailPasswordCompliance() {
//    $.messager.show({
//        title: 'Status - ERROR...',
//        msg: 'Password minimum 8 character, Password must contains numeric and alphanumeric, Password must contains special character',
//        timeout: 5000,
//        showType: 'slide',
//        iconCls: 'icon-no',
//        style: {
//            right: '',
//            //left: '',
//            //right: 0,
//            //bottom: ''
//            top: document.body.scrollTop + document.documentElement.scrollTop,
//            bottom: ''
//        }
//    });
//}

//function DateFormat(date) {
//    var y = date.getFullYear();
//    var m = date.getMonth() + 1;
//    var d = date.getDate();

//    return (d < 10 ? ('0' + d) : d) + '-' + (m < 10 ? ('0' + m) : m) + '-' + y
//}

//function DateParser(s) {
//    //alert(s);
//    if (!s) return new Date();
//    var ss = (s.split('/'));
//    //alert(ss);
//    var y = parseInt(ss[2], 10);
//    var m = parseInt(ss[1], 10);
//    var d = parseInt(ss[0], 10);

//    if (!isNaN(y) && !isNaN(m) && !isNaN(d)) {
//        return new Date(y, m - 1, d);
//        //} else {
//        //return new Date();
//    }
//}

//function myformatter(date) {

//    alert(date);
//    alert("year ==> " + date.getFullYear());
//    alert("month ==> " + date.getMonth());
//    alert("date ==> " + date.getDate());

//    var y = date.getFullYear();
//    var m = date.getMonth() + 1;
//    var d = date.getDate();
//    return y + '-' + (m < 10 ? ('0' + m) : m) + '-' + (d < 10 ? ('0' + d) : d);
//    //return (d < 10 ? ('0' + d) : d) + '-' + (m < 10 ? ('0' + m) : m) + '-' + y
//    //return date;
//}
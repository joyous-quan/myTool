var listObj = getAllData();
var table = document.getElementById("table")
var box = document.getElementById("box")
var tbody = document.getElementById("tbody");
var totalPrice = document.getElementById("totalPrice");
var allCheck = document.getElementById("allCheck");

if(listObj.length == 0) {
    box.className = "box";
    table.className = "hide";
} else {
    box.className = "box hide";
    table.className = "";
    for(var i = 0, len = listObj.length; i < len; i++) {
        var tr = document.createElement("tr");
        tr.setAttribute("pid", listObj[i].pid);
            //{"pid":值,"pImg":值,"pName":值,"pDesc":值,"price":值,"pCount":1},
        tr.innerHTML = '<td>' +
            '<input type="checkbox" class="ck" />' +
            '</td><td>' +
            '<img src="' + listObj[i].pImg + '" alt="" />' +
            '</td><td>' +
            listObj[i].pDesc +
            '</td><td>' +
            '<button class="down">-</button><input type="text" value="' + listObj[i].pCount + '" readonly="readonly" /><button class="up">+</button>' +
            '</td><td>' +
            '￥<span>' + listObj[i].price + '</span>' +
            '</td><td>' +
            '￥<span>' + listObj[i].price * listObj[i].pCount + '</span>' +
            '</td><td>' +
            '<button class="del" >删除</button>' +
            '</td>';
        tbody.appendChild(tr);
    }
}

var cks = document.querySelectorAll("tbody .ck");
function getTotalPrice() {
    //cks = document.querySelectorAll("tbody .ck");
    var sum = 0;
    for(var i = 0, len = cks.length; i < len; i++) {
        if(cks[i].checked) { 
            var tr = cks[i].parentNode.parentNode;
            var temp = tr.children[5].firstElementChild.innerHTML;
            sum = Number(temp) + sum;
        }
    }
    return sum;
}

for(var i = 0, len = cks.length; i < len; i++) {
    cks[i].onchange = function() {
        checkAllChecked();
        totalPrice.innerHTML = getTotalPrice();
    }
}

allCheck.onchange = function() {
    if(this.checked) {
        for(var i = 0, len = cks.length; i < len; i++) {
            cks[i].checked = true;
        }
    } else {
        for(var i = 0, len = cks.length; i < len; i++) {
            cks[i].checked = false;
        }
    }
    totalPrice.innerHTML = getTotalPrice();
}

var downs = document.querySelectorAll(".down"); 
var ups = document.querySelectorAll(".up"); 
var dels = document.querySelectorAll(".del");
for(var i = 0, len = downs.length; i < len; i++) {
    downs[i].onclick = function() {
        var txtObj = this.nextElementSibling;
        var tr = this.parentNode.parentNode;
        var pid = tr.getAttribute("pid");
        txtObj.value = txtObj.value - 1;
        if(txtObj.value < 1) {
            txtObj.value = 1;
            updateObjById(pid, 0)
        } else {
            updateObjById(pid, -1)
        }
        tr.children[0].firstElementChild.checked = true;
        checkAllChecked();
        var price = tr.children[4].firstElementChild.innerHTML;
        tr.children[5].firstElementChild.innerHTML = price * txtObj.value;
        totalPrice.innerHTML = getTotalPrice();

    }

    ups[i].onclick = function() {
        var txtObj = this.previousElementSibling;
        var tr = this.parentNode.parentNode;
        var pid = tr.getAttribute("pid");
        txtObj.value = Number(txtObj.value) + 1;
        updateObjById(pid, 1)
        tr.children[0].firstElementChild.checked = true;
        checkAllChecked()
        var price = tr.children[4].firstElementChild.innerHTML;
        tr.children[5].firstElementChild.innerHTML = price * txtObj.value;
        totalPrice.innerHTML = getTotalPrice();
    }

    dels[i].onclick = function() {
        var tr = this.parentNode.parentNode;
        var pid = tr.getAttribute("pid")
        if(confirm("确定删除？")) {
            tr.remove();
            listObj = deleteObjByPid(pid);
        }
        if(listObj.length == 0) {
            box.className = "box";
            table.className = "hide";
        } else {
            box.className = "box hide";
            table.className = "";
        }
        totalPrice.innerHTML = getTotalPrice();
    }
}

function checkAllChecked() {
    var isSelected = true;
    for(var j = 0, len = cks.length; j < len; j++) {
        if(cks[j].checked == false) {
            isSelected = false;
            break;
        }
    }
    allCheck.checked = isSelected;
}
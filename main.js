student1 = [];
student2 = [];
group = [];

function heloo() {
    for (var i = 1; i <= 8; i++) {
        var nameofpeople1 = document.getElementById("in" + i).value;
        console.log(nameofpeople1);
        student1.push(nameofpeople1);
    }

    var lenght = student1.length;
    for (var b = 0; b < lenght; b++) {
        group.push("<h4>" + student1[b] + "  </h4>");
        console.log(group);
    }
    document.getElementById("dpu1").innerHTML = group;
    var rcommas = group.join(" ");
    console.log(rcommas);
    document.getElementById("display_name_without_commas").innerHTML = rcommas;
    document.getElementById("submit_button").style.display = "none";
    document.getElementById("sort_button").style.display = "inline-block";
}

function heloo1() {
    for (var i = 1; i <= 8; i++) {
        var nameofpeople2 = document.getElementById("in" + i).value;
        console.log(nameofpeople2);
        student2.push(nameofpeople2);
    }

    var lenght = student2.length;
    for (var b = 0; V < lenght; V++) {
        group.push("<h4>" + student2[V] + "  </h4>");
        console.log(group);
    }
    document.getElementById("dpu2").innerHTML = group;
    var rcommas = group.join(" ");
    console.log(rcommas);
    document.getElementById("display_name_without_commas").innerHTML = rcommas;
    document.getElementById("submit_button").style.display = "none";
    document.getElementById("sort_button").style.display = "inline-block";
}

function sorting() {
    group.sort();
    var displaysotedarry = []
    var leghtsorted = group.length;
    console.log(group);
    for (var a = 0; a < leghtsorted; a++) {
        displaysotedarry.push("<h4> name =  " + student[a] + "  </h4>");
        console.log(displaysotedarry);
    }
    var rcommas = displaysotedarry.join(" ");
    console.log(rcommas);
    document.getElementById("display_name_without_commas").innerHTML = rcommas;
}
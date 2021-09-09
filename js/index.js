$(function () {
  load();
  // 获取文本框元素，添加回车键按键事件
  $("#title").on("keydown", function (event) {
    // 判断按下的键盘按键Unicode值，是否对应回车键
    if (event.keyCode === 13) {
      var local = getDate();
      console.log(local);

      local.push({ title: $(this).val(), done: false });
      saveDate(local);

      load();
      $(this).val("");
    }
  });

  // 3. toDoList 删除操作
  $("ol, ul").on("click", "a", function () {
    var data = getDate();
    console.log(data);
    var index = $(this).attr("id");
    console.log(index);
    //   根据 index索引，在 data数组中删除 1个项目，并返回删除后的数组
    data.splice(index, 1);
    saveDate(data);
    load();
  });

  // 4. toDoList 正在进行和已完成选项操作
  $("ol, ul").on("click", "input", function () {
    var data = getDate();
    var index = $(this).siblings("a").attr("id");
    console.log(index);
    data[index].done = $(this).prop("checked");
    console.log(data);

    saveDate(data);
    load();
  });

  // 读取本地存储的数据
  function getDate() {
    // 获取本地localStorage里，key属性为todolist的数据
    var data = localStorage.getItem("todolist");
    // 判断数据内容，是否为空
    if (data !== null) {
      return JSON.parse(data);
    } else {
      return [];
    }
  }

  // 保存本地存储数据
  function saveDate(data) {
    localStorage.setItem("todolist", JSON.stringify(data));
  }

  // 渲染加载数据
  function load() {
    // 读取本地存储的数据
    var data = getDate();
    console.log(data);

    $("ol,ul").empty();
    var todoCount = 0;
    var doneCount = 0;

    $.each(data, function (i, n) {
      if (n.done) {
        $("ul").prepend(
          $(
            `<li>
                <input type="checkbox" checked='checked'>
                <p>${n.title}</p>
                <a href="#" id='${i}'></a>
            </li>`
          )
        );
        doneCount++;
      } else {
        $("ol").prepend(
          $(
            `<li>
                <input type="checkbox">
                <p>${n.title}</p>
                <a href="#" id='${i}'></a>
            </li>`
          )
        );
        todoCount++;
      }
    });
    $("#todocount").text(todoCount);
    $("#donecount").text(doneCount);
  }
});

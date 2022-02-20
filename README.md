# valine
## 添加功能

添加简单验证判断系统的valine评论系统

添加默认头像

## 引用

### 未适配pjax

```html
<script src="https://cdn.jsdelivr.net/gh/ialoe/valine@master/av-min.js"></script>
<script src="https://cdn.jsdelivr.net/gh/ialoe/valine@master/Valine.min.js"></script>
<!--  输入特效 可不引用 -->
<script src="https://cdn.jsdelivr.net/gh/ialoe/valine@master/activate-power-mode.min.js"></script>
<script>
                let initData = {
                    el: '#vcomments',
                    path: window.location.pathname,
                    appId: '<%- theme.valine.appId %>',
                    appKey: '<%- theme.valine.appKey %>'
                }
                new Valine(initData)

                document.getElementById("roboter").addEventListener('click', function () {
                    let robot_check_text = document.getElementById("robot-check-text")
                    robot_check_text.innerHTML = '·&nbsp;&nbsp;&nbsp;&nbsp;验证成功'
                    document.getElementById("robotxian").style.backgroundColor = "#26a69a"
                    document.getElementById("robotimg").src = 'https://cdn.jsdelivr.net/gh/ialoe/valine@master/img/robot.png'
                    robot_check_text.style.color = "#26a69a"
                })
                let robot_check = document.querySelector(".robot-check")
                let vsubmit = document.querySelector(".vsubmit")
                if (!robot_check.checked) {
                    vsubmit.disabled = true
                    vsubmit.title = "评论前勾选机器人验证按钮"
                }
                robot_check.addEventListener('click', function () {
                    vsubmit.disabled = false
                    vsubmit.title = "欢迎畅所欲言"
                });
            });
            document.getElementById("comment").style.display = "none"
</script>
```

### 适配pjax

```html
<script>
    let initDate = {
        el: '#vcomments',
        appId: '<%- theme.valine.appId %>',
        appKey: '<%- theme.valine.appKey %>'
    }
    $.getScript("https://cdn.jsdelivr.net/gh/ialoe/valine@master/av-min.js", function () {
        $.getScript("https://cdn.jsdelivr.net/gh/ialoe/valine@master/Valine.min.js", function () {
            $.getScript("https://cdn.jsdelivr.net/gh/ialoe/valine@master/activate-power-mode.min.js", function () { // 输入特效 可不引用
            new Valine(initDate);
            
            document.getElementById("roboter").addEventListener('click', function () {
                    let robot_check_text = document.getElementById("robot-check-text")
                    robot_check_text.innerHTML = '·&nbsp;&nbsp;&nbsp;&nbsp;验证成功'
                    document.getElementById("robotxian").style.backgroundColor = "#26a69a"
                    document.getElementById("robotimg").src = 'https://cdn.jsdelivr.net/gh/ialoe/valine@master/img/robot.png'
                    robot_check_text.style.color = "#26a69a"
                })
                let robot_check = document.querySelector(".robot-check")
                let vsubmit = document.querySelector(".vsubmit")
                if (!robot_check.checked) {
                    vsubmit.disabled = true
                    vsubmit.title = "评论前勾选机器人验证按钮"
                }
                robot_check.addEventListener('click', function () {
                    vsubmit.disabled = false
                    vsubmit.title = "欢迎畅所欲言"
                });
            });
            document.getElementById("comment").style.display = "none"
        })
        })
    })
</script>
```

## 修改方式

fork此库后在 `valine.min.js` 中查询 `https://cdn.jsdelivr.net/gh/ialoe/valine@master/img/valineDefaule.jpg` 修改默认头像

## 效果演示

![演示](https://cdn.jsdelivr.net/gh/ialoe/valine@master/img/1.jpg)

![演示](https://cdn.jsdelivr.net/gh/ialoe/valine@master/img/2.jpg)


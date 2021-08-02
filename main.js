<script type="text/javascript">
    window.onload = function () {
        //valine验证
        document.getElementById("roboter").addEventListener('click', function () {
            let robot_check_text = document.getElementById("robot-check-text")
            robot_check_text.innerHTML = '·&nbsp;&nbsp;&nbsp;&nbsp;验证成功'
            document.getElementById("robotxian").style.backgroundColor = "#26a69a"
            document.getElementById("robotimg").src = 'https://files.islu.cn/detail/robot.png'
            robot_check_text.style.color = "#26a69a"
        })

        let robot_check = document.getElementsByClassName("robot-check")[0]
        let vsubmit = document.getElementsByClassName("vsubmit")[0]
        if (!robot_check.checked) {
            vsubmit.disabled = true
            vsubmit.title = "评论前勾选机器人验证按钮"
        }
        robot_check.addEventListener('click', function () {
            vsubmit.disabled = false
            vsubmit.title = "欢迎畅所欲言"
        });
    }
</script>

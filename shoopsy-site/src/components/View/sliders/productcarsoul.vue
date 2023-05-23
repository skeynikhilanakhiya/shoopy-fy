<template>
<h2>𝓑𝓤𝓓𝓖𝓔𝓣 𝓟𝓘𝓒𝓚𝓢 𝓘𝓝𝓕𝓛𝓤𝓔𝓝𝓒𝓔𝓡𝓢 𝓛𝓞𝓥𝓔</h2><br><br>
<div class="change">
<div class="view skewed">
        <div class="panel bottom">
            <div class="content">
                <div class="description">
                    <h1>25% Sales In Product</h1>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut dolorum assumenda delectus culpa sit cupiditate quis molestiae, magni incidunt quos, voluptatum dignissimos quia temporibus consequuntur blanditiis alias impedit. Totam, libero!</p>
                </div>

                <img src="@/assets/cupan.jpg" alt="Original">
            </div>
        </div>

        <div class="panel top">
            <div class="content">
                <div class="description">
                    <h1>50% Mega Discount </h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, animi, modi eaque eius ratione corporis temporibus molestiae qui facilis magnam ipsa repudiandae maxime nobis, odio error aspernatur quam illo voluptate!</p>
                </div>

                <img src="@/assets/Discount.jpg" alt="Duotone">
            </div>
        </div>

        <div class="handle"></div>
    </div>
</div>
</template>

<script>
export default {
    name: "carsoul-item",
    mounted(){
        document.addEventListener('DOMContentLoaded', function() {
    var parent = document.querySelector('.view'),
        topPanel = parent.querySelector('.top'),
        handle = parent.querySelector('.handle'),
        slide = 0,
        discount = 0;

    // If the parent has .skewed class, set the skewHack var.
    if (parent.className.indexOf('skewed') != -1) {
        slide = 1000;
    }

    parent.addEventListener('mousemove', function(event) {
        // Get the delta between the mouse position and center point.
        discount = (event.clientX - window.innerWidth / 2) * 0.5;

        // Move the handle.
        handle.style.left = event.clientX + discount + 'px';

        // Adjust the top panel width.
        topPanel.style.width = event.clientX + slide + discount + 'px';
    });
});
    }
}
</script>

<style scoped>
h2 {
    float: left;
    margin-left: 32px;
    margin-top: 90px;
    font-family: fantasy;
}
* {
    box-sizing: border-box;
}

body {
    margin: 0;
    padding: 0;
    font-size: 100%;
    font-family: Arial, Helvetica, sans-serif;
}

/* Panels. */
.view {
    position: relative;
    width: 100%;
    min-height: 35vw;
    overflow: hidden;
}

.panel {
    position: absolute;
    width: 100vw;
    min-height: 35vw;
    overflow: hidden;
}

    .panel .content {
        position: absolute;
        width: 100vw;
        min-height: 45vw;
        color: #FFF;
    }

    .panel .description {
        width: 25%;
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        text-align: center;
    }

    .panel img {
        box-shadow: 0 0 20px 20px rgba(0, 0, 0, 0.15);
        width: 35%;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }


.bottom {
    background-color: rgb(44, 44, 44);
    z-index: 1;
}

    .bottom .description {
        right: 5%;
    }

.top {
    background-color: rgb(77, 69, 173);
    z-index: 2;
    width: 50vw;

    /*-webkit-clip-path: polygon(60% 0, 100% 0, 100% 100%, 40% 100%);
    clip-path: polygon(60% 0, 100% 0, 100% 100%, 40% 100%);*/
}

    .top .description {
        left: 5%;
    }

/* Handle. */
.handle {
    height: 100%;
    position: absolute;
    display: block;
    background-color: rgb(0, 0, 0);
    width: 5px;
    top: 0;
    left: 50%;
    z-index: 3;
}

/* Skewed. */
.skewed .handle {
    top: 50%;
    transform: rotate(30deg) translateY(-50%);
    height: 200%;
    -webkit-transform-origin: top;
    -moz-transform-origin: top;
    transform-origin: top;
}

.skewed .top {
    transform: skew(-30deg);
    margin-left: -1000px;
    width: calc(50vw + 1000px);
}

.skewed .top .content {
    transform: skew(30deg);
    margin-left: 1000px;
}

/* Responsive. */
@media (max-width: 900px) {
    body {
        font-size: 75%;
    }
}
</style>

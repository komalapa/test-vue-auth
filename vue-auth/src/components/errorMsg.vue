<template>
    <p>{{msg}}</p>
</template>
<script>
export default {
    props:['msg']
        
}
</script>
<style scoped>
    p {
        display: block;
        width: 100%;
        background-color:rgb(199, 146, 146);
        color: crimson;
        position:absolute;
        z-index: 11;
        left:0;
        bottom:0px;
        margin: 0;
        padding: 10px;
        box-sizing: border-box;
        font-size: 14px;
        font-weight: 600;
        text-align: center;
        opacity: 0.5;
    };
</style>
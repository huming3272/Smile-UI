<template>
    <div>
        Tabs组件22
    </div>
</template>
<script lang="ts">
    export default {
        setup(props, context){
            console.log({
              ...context  
            },'扩展context')
            console.log(context,'原来的context')
        }
    }
</script>
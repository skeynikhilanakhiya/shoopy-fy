<template>
    <div>
        <p>{{ data }}</p>
        <button @click="handleButtonClick">Click Me</button>
    </div>
</template>

<script>
export default {
    name:"child-card",
    props: {
        data: {
            type: String,
            required: true,
        },
    },
    methods: {
        handleButtonClick() {
            // Emit the custom event to notify the parent
            this.$emit('buttonClicked');
        },
    },
};
</script>

<!--
 * @Author: your name
 * @Date: 2021-09-06 14:34:12
 * @LastEditTime: 2021-10-12 15:14:10
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \eVSM-Viewer\src\App.vue
-->
<template>
	<div id="app">
		<router-view />
	</div>
</template>
<script>
export default {
};
</script>
<style lang="scss">
* {
	// margin: 0;
	padding: 0;
	list-style: none;
}
body {
	margin: 0;
	font-size: 16px;
}

#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
	font-weight: 200;
	font-size: 16px;
	height: 100vh;
	width: 100%;
}
html,
body,
#app {
	height: 100vh;
	width: 100%;
}
.el-popper[x-placement^="top"] .popper__arrow {
	border-bottom-color: rgba(74, 121, 190,.8) !important;
}
.el-popper[x-placement^="top"] .popper__arrow::after {
	border-bottom-color: rgba(74, 121, 190,.8) !important;
	border-top-color: rgba(74, 121, 190,.8) !important;
}
.el-popover {
	background-color: rgba(74, 121, 190,.8) !important;
	border-color: rgba(74, 121, 190,.8) !important;
	color: #fff
}
</style>

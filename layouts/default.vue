<template>
    <LayoutHeader />

    <main>
        <slot />
    </main>

    <footer>FOOTER</footer>
</template>

<style>
main {
  min-height: calc(100vh - 200px);
}
</style>

<template>
    <LayoutHeader />

    <main>
        <div class="container">
          <slot />
        </div>
    </main>

    <LayoutFooter />
</template>

<style>
main {
  padding: 32px 0;
  position: relative;
  display: block;
  box-sizing: border-box;
  min-height: calc(100vh - 200px);
}
.container {
  max-width: 1200px;
  width: 100%;
  padding: 0 16px;
  margin: 0 auto;
  position: relative;
}
</style>

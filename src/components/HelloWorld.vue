<template>

  <div class="container-sm">
    <h1>Notion-to-Tistory </h1>
  </div>

  <div class="container-sm">
    <div class="input-group mb-3">
      <input type="text" class="form-control" placeholder="Notion page url 을 입력하세요." aria-label="Notion page url" aria-describedby="button-addon2">
      <button class="btn btn-outline-secondary" type="button" id="button-addon2">Button</button>
    </div>
  </div>


  <div class="container-md">

    <div class="bd-clipboard">
      <button type="button" class="btn-clipboard" title data-bs-original-title="클립보드에 복사">Copy</button>
    </div>
    <highlightjs
        language="html"
        :code=msg
    />
  </div>
</template>

<script>

export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.bd-clipboard {
  position: relative;
  display: block;
  float: right;
}
.bd-clipboard+.highlight {
  margin-top: 0;
}
.bd-example+.bd-clipboard+.highlight {
  border-bottom-right-radius: 0.25rem;
  border-bottom-left-radius: 0.25rem;
}
.bd-content .highlight {
  margin-right: 0;
  margin-left: 0;
}
.highlight {
  padding: 1rem 1.5rem;
}
.highlight {
  padding: 1rem;
  margin-bottom: 1rem;
  background-color: #f8f9fa;
}
.highlight pre {
  padding: 0;
  margin-top: 0.65rem;
  margin-bottom: 0.65rem;
  white-space: pre;
  background-color: transparent;
  border: 0;
}
.btn-clipboard {
  position: absolute;
  top: 0.65rem;
  right: 0.65rem;
  z-index: 10;
  display: block;
  padding: 0.25rem 0.5rem;
  font-size: .65em;
  color: #0d6efd;
  background-color: #fff;
  border: 1px solid;
  border-radius: 0.25rem;
}

</style>

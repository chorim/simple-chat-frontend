<template>
  <div class="col-12">
    <table class="table table-hover">
      <thead>
      <tr>
        <th scope="col">제목</th>
      </tr>
      </thead>
      <tbody id="roomList">
      </tbody>
    </table>
  </div>
</template>

<script>
  export default {
    props: ['rooms']
  }
</script>

<script>
  export let quizName = "Svelte Quiz";
  // let title = "";
  let a = 0;
  let b = 0;
</script>

<div>
  <h2>{quizName}</h2>
  <!-- <h4>{title}</h4> -->
  <!-- <input bind:value={title} type="text" > -->
  <h3>Calculate:</h3>
  <input bind:value={a} type="number">
  <input bind:value={b} type="number">
  <p>The sum is {a + b}</p>
</div>

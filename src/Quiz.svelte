<script>
  export let quizName = "Svelte Quiz";
  let title = "";
</script>

<div>
  <h2>{quizName}</h2>
  <h4>{title}</h4>
  <input bind:value={title} type="text" >
</div>

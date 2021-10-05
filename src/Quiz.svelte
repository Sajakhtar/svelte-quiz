<script>
  let result;
  const correctAnswer = "B";
  let answers = ['A', 'B', 'C', 'D'];

  const pickAnswer = (answer) => {
    // console.log(`Answered ${answer}`);
    if(answer === correctAnswer) {
      return (result = 'Correct!');
    }

    result = "Wrong answer"
  }
</script>

<style>
  h4 {
    /* color: purple; */
  }
</style>


<div>
  {#if result}
    <h4>{result}</h4>
  {:else}
    <h4>Please pick an answer</h4>
  {/if}

  {#each answers as answer}
    <button on:click={() => pickAnswer(answer)}>Answer {answer}</button>
  {/each}

</div>

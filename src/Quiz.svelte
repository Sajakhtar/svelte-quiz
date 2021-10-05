<script>
  let result;
  const correctAnswer = "B";
  let answers = ['A', 'B', 'C', 'D'];
  // let quiz = getQuiz();

  const pickAnswer = (answer) => {
    // console.log(`Answered ${answer}`);
    if(answer === correctAnswer) {
      return (result = 'Correct!');
    }

    result = "Wrong answer";
  }

  const getQuiz = async () => {
    const res = await fetch('https://opentdb.com/api.php?amount=10&category=18&type=multiple');
    const quiz = await res.json();
    console.log(quiz);
    // debugger;
  }
</script>

<style>
  h4 {
    /* color: purple; */
  }
</style>


<div>

  <button on:click={getQuiz}>Get Questions</button>

  {#if result}
    <h4>{result}</h4>
  {:else}
    <h4>Please pick an answer</h4>
  {/if}

  {#each answers as answer}
    <button on:click={() => pickAnswer(answer)}>Answer {answer}</button>
  {/each}

</div>

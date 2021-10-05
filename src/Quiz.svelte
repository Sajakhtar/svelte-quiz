<script>
  let result;
  const correctAnswer = "B";
  let answers = ['A', 'B', 'C', 'D'];

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
    // console.log(quiz);
    // debugger;
    return quiz;
  }

  const handleClick = () => {
    quiz = getQuiz();
  }

  let quiz = getQuiz();
</script>

<style>
  h4 {
    /* color: purple; */
  }
</style>


<div>

  <button on:click={handleClick}>Get Questions</button>

  {#if result}
    <h4>{result}</h4>
  {:else}
    <h4>Please pick an answer</h4>
  {/if}

  {#await quiz}
    Loading Questions ...
  {:then data}
    <h3>{data.results[0].question}</h3>
  {/await}

  {#each answers as answer}
    <button on:click={() => pickAnswer(answer)}>Answer {answer}</button>
  {/each}

</div>

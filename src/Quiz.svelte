<script>

  import Question from './Question.svelte';

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

<div>

  <button on:click={handleClick}>Get Questions</button>


  {#await quiz}
    Loading Questions ...
  {:then data}

    {#each data.results as question}
      <Question {question} />
    {/each}

  {/await}


</div>

<script>
  import { fade, blur, fly, slide, scale } from 'svelte/transition';
  import Question from './Question.svelte';
  let activeQuestion = 0;
  let score = 0;

  const getQuiz = async () => {
    const res = await fetch('https://opentdb.com/api.php?amount=10&category=18&type=multiple');
    const quiz = await res.json();
    // console.log(quiz);
    // debugger;
    return quiz;
  }

  let quiz = getQuiz();

  const nextQuestion = () => {
    activeQuestion += 1;
  }

  const resetQuiz = () => {
    score = 0;
    activeQuestion = 0;
    quiz = getQuiz();
  }

  const incrementScore = () => {
    score += 1;
  }
</script>

<style>
  .fade-wrapper {
    position: absolute;
  }
</style>

<div>

  <button on:click={resetQuiz}>Start new quiz</button>

  <h3>Score: {score}</h3>
  <h4>Question #{activeQuestion + 1}</h4>

  {#await quiz}
    Loading Questions ...
  {:then data}

    {#each data.results as question, index}
      {#if index === activeQuestion}
        <div in:fly={{ x: 100}} out:fly={{ x: -100}} class="fade-wrapper">
          <Question {incrementScore} {nextQuestion} {question} />
        </div>
      {/if}
    {/each}

  {/await}

</div>

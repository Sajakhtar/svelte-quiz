<script>
  import { fade, blur, fly, slide, scale } from 'svelte/transition';
  import { onMount, beforeUpdate, afterUpdate, onDestroy } from 'svelte';
  import Question from './Question.svelte';
  import Modal from './Modal.svelte';
  import { score } from './store.js';

  let activeQuestion = 0;
  // let score = 0;
  let isModalOpen = false;

  const getQuiz = async () => {
    const res = await fetch('https://opentdb.com/api.php?amount=10&category=18&type=multiple');
    const quiz = await res.json();
    // console.log(quiz);
    // debugger;
    return quiz;
  }

  let quiz = getQuiz();

  onMount(() => {
    console.log('mounted');
  });

  beforeUpdate(() => {
    console.log('before update');
  });

  afterUpdate(() => {
    console.log('after update');
  });

  const nextQuestion = () => {
    activeQuestion += 1;
  }

  const resetQuiz = () => {
    isModalOpen = false;
    // score = 0;
    score.set(0);
    activeQuestion = 0;
    quiz = getQuiz();
  }

  // const incrementScore = () => {
  //   score += 1;
  // }

  //  reactive statement
  $: if($score > 7) {
    isModalOpen = true;
  }

  // reactive declaration
  $: questionNumber = activeQuestion + 1;
</script>

<style>
  .fade-wrapper {
    position: absolute;
  }

  .container {
    min-height: 500px;
  }
</style>

<div>

  <button on:click|once={resetQuiz}>Start new quiz</button>

  <h3>Score: {$score}</h3>
  <h4>Question #{questionNumber}</h4>

  <div class="container">
    {#await quiz}
      Loading Questions ...
    {:then data}

      {#each data.results as question, index}
        {#if index === activeQuestion}
          <div in:fly={{ x: 100}} out:fly={{ x: -100}} class="fade-wrapper">
            <Question {nextQuestion} {question} />
          </div>
        {/if}
      {/each}

    {/await}
  </div>

</div>


{#if isModalOpen}
  <Modal on:close={resetQuiz}>
    <h2>You Won!</h2>
    <p>Congratulations</p>
    <button on:click={resetQuiz}>Start over</button>
  </Modal>
{/if}

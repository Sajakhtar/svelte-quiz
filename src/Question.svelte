<script>
  import { score } from './store.js';
  export let question;
  export let nextQuestion;
  // export let incrementScore;

  let isCorrect;
  let isAnswered = false;

  let wrongAnswers = question.incorrect_answers.map(answer => {
    return {
      answer,
      correct: false
    }
  });

  let answers = [
    ...wrongAnswers,
    {
      answer: question.correct_answer,
      correct: true
    }
  ]

  const shuffle = (arr) => {
    arr.sort(() => Math.random() - 0.5)
  }

  shuffle(answers);

  const checkAnswer = (correct) => {
    isAnswered = true;
    isCorrect = correct;
    if(correct) {
      // incrementScore();
      score.update((val) => val + 1);
    }
  }
</script>

<style>

  h5 {
    color: orange;
  }

  h5.wrong {
    color:darkred;
  }

  h5.isCorrect {
    color:darkgreen;
  }

  .answer {
    display: block;
    width: 100%;
    color: #524763;
  }
</style>

<h3>{@html question.question}</h3>

{#if isAnswered}
  <h5 class:isCorrect class:wrong={!isCorrect}>
    {#if isCorrect}
      You got it right!
    {:else}
      Wrong answer!
    {/if}
  </h5>
{/if}

{#each answers as answer}
  <button class="answer" disabled={isAnswered} on:click={() => checkAnswer(answer.correct)}>
    {@html answer.answer}
  </button>
{/each}

{#if isAnswered}
  <div>
    <button on:click={nextQuestion}>Next</button>
  </div>
{/if}

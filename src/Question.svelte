<script>
  export let question;

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
  }
</script>



<h3>{@html question.question}</h3>

{#if isAnswered}
  <h4>
    {#if isCorrect}
      You got it right!
    {:else}
      Wrong answer!
    {/if}
  </h4>
{/if}

{#each answers as answer}
  <button on:click={() => checkAnswer(answer.correct)}>
    {@html answer.answer}
  </button>
{/each}

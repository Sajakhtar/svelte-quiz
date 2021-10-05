<script>
  let result = "";
  const correctAnswer = "B";

  const pickAnswer = (answer) => {
    // console.log(`Answered ${answer}`);
    if(answer === correctAnswer) {
      return (result = 'Correct!');
    }

    result = "Wrong answer"
  }

</script>

<div>
  <h4>{result}</h4>
  <button on:click={() => pickAnswer('A')}>Answer A</button>
  <button on:click={() => pickAnswer('B')}>Answer B</button>
  <button on:click={() => pickAnswer('C')}>Answer C</button>
  <button on:click={() => pickAnswer('D')}>Answer D</button>
</div>

<script>
    export let type;
</script>

{#if type == "0"}
<div class="bloom"></div>
{:else if type == "1"}
<div class="book"></div>
{/if}

<svelte:head>
    <style>
      .bloom {
  height: 30px;
  position: relative;
  width: 30px; }
  .bloom:before, .bloom:after {
    border-radius: 100%;
    content: '';
    display: block;
    height: 30px;
    width: 30px; }
  .bloom:before {
    background-color: var(--primary);
    -webkit-animation: scale-up 1s infinite ease;
            animation: scale-up 1s infinite ease; }
  .bloom:after {
    -webkit-animation: scale 1s infinite;
            animation: scale 1s infinite;
    border: 4px solid var(--primary);
    left: 0;
    position: absolute;
    top: 0; }

@-webkit-keyframes scale-up {
  0% {
    -webkit-transform: scale(0);
            transform: scale(0); }
  50% {
    -webkit-transform: scale(1);
            transform: scale(1); } }

@keyframes scale-up {
  0% {
    -webkit-transform: scale(0);
            transform: scale(0); }
  50% {
    -webkit-transform: scale(1);
            transform: scale(1); } }

@-webkit-keyframes scale {
  0%, 50% {
    opacity: 0; }
  55% {
    opacity: 1; }
  100% {
    opacity: 0;
    -webkit-transform: scale(2);
            transform: scale(2); } }

@keyframes scale {
  0%, 50% {
    opacity: 0; }
  55% {
    opacity: 1; }
  100% {
    opacity: 0;
    -webkit-transform: scale(2);
            transform: scale(2); } }
    </style>
</svelte:head>
<script>
	import { _, isLoading, locale } from 'svelte-i18n';

	let weight = 150;
	let windSpeed = 15;
	let recommendedKiteSize = null;

	function calculateKiteSize() {
		if (windSpeed > 50) {
			recommendedKiteSize = -1;
			return;
		}
		// Placeholder for calculation logic
		const kiteSizeChart = [
			{ weight: 95, sizes: [3, 3, 4, 4, 5, 5, 5, 6, 6, 7, 7, 8] },
			{ weight: 110, sizes: [3, 4, 4, 5, 5, 6, 7, 7, 8, 8, 9, 9] },
			{ weight: 125, sizes: [4, 5, 5, 6, 6, 7, 8, 8, 9, 8, 10, 11] },
			{ weight: 140, sizes: [4, 5, 6, 7, 7, 8, 9, 9, 10, 11, 12, 12] },
			{ weight: 155, sizes: [5, 6, 7, 7, 8, 9, 10, 11, 11, 12, 13, 14] },
			{ weight: 170, sizes: [6, 6, 7, 8, 9, 10, 11, 12, 13, 14, 14, 15] },
			{ weight: 185, sizes: [6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17] },
			{ weight: 200, sizes: [7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18] },
			{ weight: 215, sizes: [7, 8, 10, 11, 12, 13, 14, 15, 16, 18, 19, 20] },
			{ weight: 230, sizes: [8, 9, 10, 12, 13, 14, 15, 16, 18, 19, 20, 21] },
			{ weight: 245, sizes: [8, 10, 11, 12, 14, 15, 16, 18, 19, 20, 22, 23] },
			{ weight: 260, sizes: [9, 10, 12, 13, 15, 16, 17, 19, 20, 22, 23, 24] }
		];

		const windSpeedRanges = [39, 32, 28, 24, 22, 20, 17, 16, 15, 14, 13, 12];

		function findClosestWeight(weight) {
			return kiteSizeChart.reduce((prev, curr) => 
				Math.abs(curr.weight - weight) < Math.abs(prev.weight - weight) ? curr : prev
			);
		}

		function findWindSpeedIndex(windSpeed) {
			const index = windSpeedRanges.findIndex(speed => windSpeed >= speed);
			return index === -1 ? windSpeedRanges.length - 1 : index;
		}

		const closestWeight = findClosestWeight(weight);
		const windSpeedIndex = findWindSpeedIndex(windSpeed);
		recommendedKiteSize = closestWeight.sizes[windSpeedIndex];
	}

	function switchLanguage() {
		locale.set($locale === 'en' ? 'es' : 'en');
	}
</script>

{#if !$isLoading}
	<main>
		<div class="language-switcher">
			<button on:click={switchLanguage}>
				{$locale === 'en' ? 'Español' : 'English'}
			</button>
		</div>

		<h1>{$_('title')}</h1>
		<p>{$_('subtitle')}</p>
		
		<div class="input-container">
			<label>
				{$_('weight')}:
				<div class="input-wrapper">
					<input type="number" bind:value={weight} min="0" step="10">
					<div class="input-arrows">
						<button class="arrow-up" on:click={() => weight += 10}>▲</button>
						<button class="arrow-down" on:click={() => weight -= 10}>▼</button>
					</div>
				</div>
			</label>
			<label>
				{$_('windSpeed')}:
				<div class="input-wrapper">
					<input type="number" bind:value={windSpeed} min="0" step="1">
					<div class="input-arrows">
						<button class="arrow-up" on:click={() => windSpeed += 1}>▲</button>
						<button class="arrow-down" on:click={() => windSpeed -= 1}>▼</button>
					</div>
				</div>
			</label>
			<button on:click={calculateKiteSize} class="cloud-button">
				{$_('calculate')}
			</button>
		</div>
		<div class="image-container">
			{#if recommendedKiteSize === null}
				<img src="./images/kiter_12.png" alt="Kiteboarder" class="kiter-image">
			{:else if recommendedKiteSize <= 5}
				<img src="./images/kiter_3.png" alt="Kiteboarder" class="kiter-image">
			{:else if recommendedKiteSize <= 9}
				<img src="./images/kiter_7.png" alt="Kiteboarder" class="kiter-image">
			{:else if recommendedKiteSize <= 15}
				<img src="./images/kiter_12.png" alt="Kiteboarder" class="kiter-image">
			{:else if recommendedKiteSize <= 20}
				<img src="./images/kiter_18.png" alt="Kiteboarder" class="kiter-image">
			{:else if recommendedKiteSize > 20}
				<img src="./images/kiter_24.png" alt="Kiteboarder" class="kiter-image">
			{/if}
		</div>
		
		{#if recommendedKiteSize !== null && recommendedKiteSize > 0}
			<p class="result">{$_('result', { values: { size: recommendedKiteSize } })}</p>
		{:else if recommendedKiteSize === -1}
			<p class="result">{$_('result_no_kite')}</p>
		{/if}
	</main>
{/if}

<style>
	@font-face {
        font-family: 'Comic Sans MS';
        src: url("../fonts/comici.ttf") format('truetype');
    }

	:global(body) {
		margin: 0;
		padding: 0;
		height: 100vh;
		display: flex;
		flex-direction: column;
		overflow: hidden;
		background-image: url('../images/beach.jpeg');
		background-size: 1920px auto; /* Fixed width of 1920px, height auto */
		background-position: center;
		background-repeat: no-repeat;
		background-attachment: fixed; /* Keep the background fixed while scrolling */
		font-family: 'Comic Sans MS', sans-serif;
	}

	main {
		text-align: center;
		padding: 2em;
		max-width: 100%;
		margin: 0 auto;
		flex-grow: 1;
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		align-items: center;
		position: relative;
		z-index: 1;
		border-radius: 10px;
	}

	.language-switcher {
		position: fixed;
		top: -40px;
		left: 10px;
		transition: all 0.3s ease;
	}

	.language-switcher:hover {
		transform: translateY(5px);
	}

	.language-switcher button {
		padding: 20px 20px 10px;
		background-color: #ffffff;
		border-top: none;
		border-radius: 50%;
		cursor: pointer;
		display: flex;
		align-items: flex-end;
		justify-content: center;
		height: 75px;
	}

	h1 {
		color: #ffffff; /* White */
		text-transform: uppercase;
		font-size: 3em;
		font-weight: bold;
	}

	p {
		color: #ffffff;
		font-size: 1.2em;
		margin-top: 1em;
		text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.8);
	}

	.input-container {
		display: flex;
		flex-direction: column;
		align-items: center;
		margin-top: 2em;
	}

	label {
		display: flex;
		flex-direction: column;
		align-items: center;
		margin-bottom: 1em;
		font-weight: bold;
		color: #ffffff;
		text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.8);
	}

	input[type="number"] {
		width: 80px;
		padding: 0.5em;
		margin-top: 0.5em;
		border: 2px solid #008080;
		border-radius: 4px;
		background-color: rgba(255, 255, 255, 0.8);
		text-align: center;
	}

	input[type="number"]::-webkit-outer-spin-button,
    input[type="number"]::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }

	.input-wrapper {
        display: flex;
        align-items: center;
    }

    .input-arrows {
        display: flex;
        flex-direction: column;
        margin-left: 2px;
		margin-top: 0.4em;
    }

    .arrow-up, .arrow-down {
        padding: 0;
        font-size: 12px;
        width: 18px;
        height: 18px;
        display: flex;
        justify-content: center;
        align-items: center;
        border: 1px solid #ccc;
        background-color: #ffffff;
        cursor: pointer;
        border-radius: 50%;
		font-family: Arial, sans-serif;  /* Specify a consistent font */
        line-height: 1;
    }

    .arrow-up:hover, .arrow-down:hover {
        background-color: #e0e0e0;
    }

    .arrow-up {
        margin-bottom: 2px;
    }

    .cloud-button {
        background-color: #ffffff;
        color: #4a4a4a;
        border: none;
        padding: 0.8em 1.5em;
        font-size: 1em;
        font-weight: bold;
        cursor: pointer;
        position: relative;
        transition: all 0.3s ease;
        border-radius: 20px;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    }

    .cloud-button::before,
    .cloud-button::after {
        content: '';
        position: absolute;
        background-color: #ffffff;
        border-radius: 50%;
        z-index: -1;
    }

    .cloud-button::before {
        width: 50%;
        height: 50%;
        top: -5px;
        left: 8px;
    }

    .cloud-button::after {
        width: 60%;
        height: 30%;
        top: 38px;
        right: 14px;
        z-index: 1;
    }

    .cloud-button:hover {
        transform: translateY(-2px);
        box-shadow: 0 6px 8px rgba(0, 0, 0, 0.15);
    }

    .result {
        font-size: 1.5em;
        font-weight: bold;
        color: #ffffff;
        margin-top: 0.87em;
        text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.8);
    }

    .image-container {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        z-index: -1;
    }
    .kiter-image {
        width: 20rem;
        bottom:1rem;
        left: 2rem;
        transform: translateY(40%) translateX(100%);
    }

    @media (min-width: 640px) {
        main {
            max-width: none;
        }
    }
</style>
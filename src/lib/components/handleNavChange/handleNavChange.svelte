<script lang="ts">
	import { section } from '$lib/stores/section';
	import { onMount, onDestroy } from 'svelte';

	export let name: string;
	let observer: IntersectionObserver | null = null;

	function handleIntersection(entries: IntersectionObserverEntry[]): void {
		const visibleEntries = entries.filter((entry) => entry.isIntersecting);

		if (visibleEntries.length > 0) {
			visibleEntries.sort((a, b) => {
				const aCenter = (a.boundingClientRect.top + a.boundingClientRect.bottom) / 2;
				const bCenter = (b.boundingClientRect.top + b.boundingClientRect.bottom) / 2;
				return Math.abs(aCenter) - Math.abs(bCenter);
			});

			section.set(name);
		}
	}

	onMount(() => {
		observer = new IntersectionObserver(handleIntersection, {
			root: null,
			threshold: 0.5
		});

		const element = document.querySelector(`#${name}`) as HTMLElement;
		if (element) {
			observer.observe(element);
		}

		onDestroy(() => {
			if (observer) {
				observer.disconnect();
			}
		});
	});
</script>

<div id={name}>
	<slot></slot>
</div>

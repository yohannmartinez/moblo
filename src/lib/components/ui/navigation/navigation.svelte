<script lang="ts">
	import IconMenu from '~icons/tabler/menu-3';
	import { page } from '$app/stores';
	import { routes, type Route } from '$lib/data/routes';
	import * as Drawer from '$lib/components/ui/drawer';
	import { section } from '$lib/stores/section';

	let currentPath: string = $page.url.pathname;
	let currentRoute: Route | undefined = routes.find(({ route }) => route === currentPath);

	let scaleClass = '';

	$: if ($section) {
		scaleClass = 'scale-animation';
		setTimeout(() => (scaleClass = ''), 500);
	}
</script>

<Drawer.Root>
	<Drawer.Trigger>
		<div
			class="fixed bottom-5 left-1/2 flex w-max transform cursor-pointer rounded-3xl border border-[#AAAAAA] bg-[#0d0d0db3] py-3 pl-6 pr-3 transition-transform duration-500 ease-out hover:scale-105 {scaleClass}"
			style="transform: translateX(-50%);"
		>
			<div class="flex items-center pr-4">
				<div class="h-1.5 w-1.5 rounded-full bg-[#AAAAAA]"></div>
			</div>
			<div class="flex flex-col pr-6 text-left">
				<span class="text-xs text-[#AAAAAA]">{currentRoute?.name}</span>
				<span class="text-sm text-white">{$section}</span>
			</div>
			<div class="ml-6 flex w-9 items-center justify-center rounded-xl border border-[#AAAAAA]">
				<IconMenu style="color:#FFF" />
			</div>
		</div>
	</Drawer.Trigger>
	<Drawer.Content class="max-h-screen rounded-xl">
		<Drawer.Header>
			<Drawer.Title class="pb-1 pt-2 text-center text-xl">Menu</Drawer.Title>
		</Drawer.Header>
		<div class="flex justify-center pb-5">
			<div class="flex w-80 flex-col items-start">
				{#each routes as route}
					<div
						class="my-0 flex w-full cursor-pointer items-center rounded-sm p-3 hover:bg-gray-100"
					>
						<div class="mr-3 h-10 min-h-10 w-10 min-w-10 rounded-sm border"></div>
						<div class="flex flex-col">
							<span class="text-sm font-medium">{route.name}</span>
							<span class="text-xs font-light text-[#757575]">{route.description}</span>
						</div>
					</div>
				{/each}
			</div>
		</div>
	</Drawer.Content>
</Drawer.Root>

<style>
	@keyframes scaleBounce {
		0% {
			transform: scale(1) translateX(-50%);
		}
		50% {
			transform: scale(1.1) translateX(-50%);
		}
		100% {
			transform: scale(1) translateX(-50%);
		}
	}

	.scale-animation {
		animation: scaleBounce 0.5s ease-in-out;
		transform-origin: center;
	}
</style>

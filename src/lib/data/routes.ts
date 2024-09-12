export type Route = { route: string; name: string; description: string };

export const routes: Route[] = [
	{ route: '/', name: 'Accueil', description: "Page d'accueil de notre site web" },
	{
		route: '/collection',
		name: 'Collection',
		description: 'Toutes les créations Moblo référencées'
	},
	{
		route: '/custom',
		name: 'Sur mesure',
		description: 'Votre concept, notre travail'
	},
	{
		route: '/faq',
		name: 'Foire aux questions',
		description: 'Une question ? notre réponse'
	},
	{ route: '/about', name: 'A propos', description: "Présentation de l'entreprise" }
];

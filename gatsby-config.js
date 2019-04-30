module.exports = {
	siteMetadata: {
		siteUrl: `https://swanburger.com`,
		title: `SwanBurger`,
		description: `Freerange web developer (full stack), eCommerce, websites, CMS, ERP, DAM, SaaS and most edge technologies. Farm fresh designs on buns straight out of the oven. Available for consulting and contract work.`,
		author: `@jeremyswann`,
	},
	plugins: [
		`gatsby-transformer-sharp`,
		`gatsby-plugin-react-helmet`,
		`gatsby-plugin-sharp`,
		`gatsby-plugin-sitemap`,
		`gatsby-plugin-linaria`,
		`gatsby-plugin-react-helmet`,
		{
			resolve: `gatsby-transformer-remark`,
			options: {
				plugins: [`gatsby-remark-a11y-emoji`],
			},
		},
		{
			resolve: `gatsby-plugin-google-tagmanager`,
			options: {
				id: process.env.GOOGLE_GTM_ID,
				includeInDevelopment: false,
				// gtmAuth: "YOUR_GOOGLE_TAGMANAGER_ENVIROMENT_AUTH_STRING",
				// gtmPreview: "YOUR_GOOGLE_TAGMANAGER_ENVIROMENT_PREVIEW_NAME",
				// dataLayerName: "YOUR_DATA_LAYER_NAME",
			},
		},
		// {
		// 	resolve: `gatsby-source-contentful`,
		// 	options: {
		// 		spaceId: process.env.CONTENTFUL_SPACE_ID,
		// 		accessToken: process.env.CONTENTFUL_DELIVERY_TOKEN,
		// 		downloadLocal: true,
		// 	},
		// },
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `images`,
				path: `${__dirname}/src/images`,
			},
		},
		{
			resolve: `gatsby-plugin-manifest`,
			options: {
				name: `SwanBurger`,
				short_name: `SwanBurger`,
				start_url: `/`,
				background_color: `#FCF2F5`,
				theme_color: `#4F1B2A`,
				// Enables "Add to Homescreen" prompt and disables browser UI (including back button)
				// see https://developers.google.com/web/fundamentals/web-app-manifest/#display
				display: `standalone`,
				icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
				include_favicon: true, // Include favicon
			},
		},
		// this (optional) plugin enables Progressive Web App + Offline functionality
		// To learn more, visit: https://gatsby.dev/offline
		// `gatsby-plugin-offline`,
	],
}

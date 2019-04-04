let contentfulConfig

try {
	// Load the Contentful config from the .contentful.json
	contentfulConfig = require('./.contentful')
} catch (_) {}

// Overwrite the Contentful config with environment variables if they exist
contentfulConfig = {
	spaceId: process.env.CONTENTFUL_SPACE_ID || contentfulConfig.spaceId,
	accessToken:
		process.env.CONTENTFUL_DELIVERY_TOKEN || contentfulConfig.accessToken,
}

const { spaceId, accessToken } = contentfulConfig

if (!spaceId || !accessToken) {
	throw new Error(
		'Contentful spaceId and the delivery token need to be provided.'
	)
}

module.exports = {
	siteMetadata: {
		siteUrl: 'https://swanburger.com',
		title: 'Swanburger - Freerange Web Development',
		description:
			'Freerange web developer (full stack), eCommerce, websites, CMS, ERP, DAM, SaaS and most edge technologies. Farm fresh designs on buns straight out of the oven. Available for consulting and contract work.',
	},
	pathPrefix: '/gatsby-contentful-starter',
	plugins: [
		'gatsby-transformer-remark',
		'gatsby-transformer-sharp',
		'gatsby-plugin-react-helmet',
		'gatsby-plugin-sharp',
		'gatsby-plugin-sitemap',
		{
			resolve: 'gatsby-source-contentful',
			options: contentfulConfig,
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
	],
}

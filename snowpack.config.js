// Consult https://www.snowpack.dev to learn about these options
module.exports = {
	extends: '@sveltejs/snowpack-config',
	plugins: ['@snowpack/plugin-typescript'],
	// NOTE: Commenting out the above line fixed the manifest issue in Snowpack 2.18.0 - 2.18.4
	// Snowpack 2.18.5 is first version to include https://github.com/snowpackjs/snowpack/pull/2006 which fixes the issue
	mount: {
		'src/pages': '/_pages',
		'src/components': '/_components'
	},
	alias: {
		$pages: './src/pages',
		$components: './src/components'
	}
};

// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  api_endpoint: "https://the-cocktail-db.p.rapidapi.com/",
  list_alc_filter: "list.php?a=list",
  list_ingredients: "list.php?i=list",
  list_glass: "list.php?g=list",
  list_categories: "list.php?c=list",
  search_ingredients:"filter.php?i=",
  search_cocktail_by_name: "search.php?i=",
  search_ingredient_by_name: "search.php?i=",
  filter_by_category: "filter.php?c=",
  filter_by_alcoholic: "filter.php?a=",
  filter_by_glass: "filter.php?c=",
  lookup_ingredient_by_id: "lookup.php?iid=",
  lookup_random_cocktail: "random.php",
  lookup_cocktail_details: "lookup.php?i=",
  x_rapidapi_host: "the-cocktail-db.p.rapidapi.com",
  x_rapidapi_key: "RxpRDspbUamsh1B7uv2lN5kfne87p1w7mZUjsnzisC5LqxajGI"
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.

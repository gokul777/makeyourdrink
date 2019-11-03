import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BarService {

  private apiUrl: string;
  private headers: {};  
  constructor(private httpClient: HttpClient) {
    this.apiUrl = environment.api_endpoint;
    this.headers = {'x-rapidapi-host':environment.x_rapidapi_host, 'x-rapidapi-key': environment.x_rapidapi_key}
   }

   //List 
   /**
    * List the alcoholic filters
    */
  public list_alcoholic_filter(){
     return this.httpClient.get(`${this.apiUrl}${environment.list_alc_filter}`, { headers:this.headers });
  }

  /**
   * List the ingredients
   */
  public list_ingredients(){
    return this.httpClient.get(`${this.apiUrl}${environment.list_ingredients}`, { headers:this.headers });
  }

  /**
   * List the glasses
   */
  public list_glasses(){
    return this.httpClient.get(`${this.apiUrl}${environment.list_glass}`, { headers:this.headers });
  }

  /**
   * List the categories
   */
  public list_categories(){
    return this.httpClient.get(`${this.apiUrl}${environment.list_categories}`, { headers:this.headers });
  }

  //Search

  /**
   * Search by ingredient
   * @param ingredient 
   */
  public search_by_ingredients(ingredient: string){
    return this.httpClient.get(`${this.apiUrl}${environment.search_ingredients}${ingredient}`, { headers:this.headers });
  }

  /**
   * Search cocktail by name
   * @param cocktail
   */
  public search_cocktail_by_name(cocktail: string){
    return this.httpClient.get(`${this.apiUrl}${environment.search_cocktail_by_name}${cocktail}`, { headers:this.headers });
  }

  /**
   * Search ingredient by name
   * @param ingredient 
   */
  public search_ingredient_by_name(ingredient: string){
    return this.httpClient.get(`${this.apiUrl}${environment.search_ingredient_by_name}${ingredient}`, { headers:this.headers });
  }

  //Filter

  /**
   * Filter by category
   * @param category 
   */
  public filter_by_category(category: string){
    return this.httpClient.get(`${this.apiUrl}${environment.filter_by_category}${category}`, { headers:this.headers });
  }

  /**
   * Filter by alcoholic
   * @param content 
   */
  public filter_by_alcoholic(content: string){
    return this.httpClient.get(`${this.apiUrl}${environment.filter_by_alcoholic}${content}`, { headers:this.headers });
  }

  /**
   * Filter by Glass
   * @param glass 
   */
  public filter_by_glass(glass: string){
    return this.httpClient.get(`${this.apiUrl}${environment.filter_by_glass}${glass}`, { headers:this.headers });
  }

  //Lookup

  /**
   * Lookup ingredient by ID
   * @param id 
   */
  public lookup_ingredient_by_id(id : number){
    return this.httpClient.get(`${this.apiUrl}${environment.lookup_ingredient_by_id}${id}`, { headers:this.headers });
  }

  /**
   * Lookup a random cocktail
   */
  public lookup_random_cocktail(){
    return this.httpClient.get(`${this.apiUrl}${environment.lookup_random_cocktail}`, { headers:this.headers });
  }

  /**
   * Lookup full cocktail details by ID
   * @param id 
   */
  public lookup_cocktail_details(id : number){
    return this.httpClient.get(`${this.apiUrl}${environment.lookup_cocktail_details}${id}`, { headers:this.headers });
  }

}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PokemonInterface } from './pokemonInterface';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor(private http :HttpClient) { 

  }

  getPokemon () : Observable <PokemonInterface []> {
    return this.http.get<PokemonInterface []> ("http://vps204.tyrolium.fr/apiPokemon/index.php?controller=pokemon&task=getAll"); 
  }


  addPokemon(newPokemon: any): Observable<any> {
    return this.http.post<any>("http://vps204.tyrolium.fr/apiPokemon/index.php?controller=pokemon&task=createPokemon&userApi=Maxime", newPokemon);
  }

// Récupère un pokemon via son Id 
  getPokemonById (id: string): Observable <PokemonInterface> {
    return this.http.get<PokemonInterface> ("http://vps204.tyrolium.fr/apiPokemon/index.php?controller=pokemon&task=getById&id" + id);
  }

  


}

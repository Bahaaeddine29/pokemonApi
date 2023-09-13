import { PokemonService } from './../pokemon.service';
import { Component, OnInit } from '@angular/core';
import { PokemonInterface } from '../pokemonInterface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  pokemonList: PokemonInterface [] = [];

  pokemonSelected: PokemonInterface | undefined ; 

  newPokemon: any = {};

  constructor(private pokemonService: PokemonService) { }

  ngOnInit(): void {
    this.getAllPokemons();
  }

  getAllPokemons(): void {
    this.pokemonService.getPokemon().subscribe((pokemonListResult) => {
      this.pokemonList = pokemonListResult;
      console.table( this.pokemonList);
    });
  }

  onSubmit(): void {
    this.pokemonService.addPokemon(this.newPokemon).subscribe(() => {
    });
  }

  viewOnePokemon (id : string) : void {
    this.pokemonService.getPokemonById(id).subscribe((pokemonResult) => {
      this.pokemonSelected = pokemonResult; 
       console.log(this.pokemonSelected); 
    })
  }

  
}

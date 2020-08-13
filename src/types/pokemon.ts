export interface Pokemon {
  abilities: {
    ability: NameUrl,
    is_hidden: boolean
    slot: number
  }[]
  base_experience: number
  forms: NameUrl[]
  game_indices: {
    game_index: number
    version: NameUrl
  }[]
  height: number
  held_items: {
    item: NameUrl
    version_details: {
      rarity: number
      version: NameUrl
    }[]
  }[]
  id: number
  is_default: boolean
  location_area_encounters: string
  moves: {
    move:NameUrl
    version_group_details: {
      level_learen_ar: number
      move_learn_method: NameUrl
      version_group: NameUrl
    }[]
  }[]
  name: string
  order: number
  species: NameUrl
  sprites: {
    back_default: string | null
    back_female : string | null
    back_shiny : string | null
    back_shiny_femail : string | null
    front_default: string | null
    front_femail: string | null
    front_shiny: string | null
    front_shiny_female: string | null
  }
  other: {
    dream_world: Sprites
    offcial_artwork: string | null
  }
  versions: {
    "generation-i": {
      "red-blue": Sprites
      yellow: Sprites
    }
    "generation-ii": {
      crystal: Sprites
      gold: Sprites
      silver: Sprites
    }
    "generation-iii": {
      emerald: Sprites
      "firered-leafgreen": Sprites
      "ruby-sapphire": Sprites
    }
    "generation-iv": {
      "diamond-pearl": Sprites
      "heartgold-soulsilver": Sprites
      "platinum": Sprites
    }
    "generation-v": {
      "black-white": Sprites
    }
    "generation-vi": {
      "omegaruby-alphasapphire": Sprites
      "x-y": Sprites
    }
    "generation-vii": {
      "ultra-sun-ultra-moon": Sprites
    }
  }
  starts: {
    base_stat: number
    effort: number
    stat: NameUrl
  }[]
  types: {
    slot: number
    type: NameUrl
  }[]
  weight: number
}

export interface Sprites {
  back_default: string | null
  back_femail: string | null
  back_shiny: string | null
  back_shiny_female: string | null
  front_default: string | null
  front_female: string | null
  front_shiny: string | null
  front_shiny_female: string | null
}

export interface NameUrl {
  name: string
  url: string
}
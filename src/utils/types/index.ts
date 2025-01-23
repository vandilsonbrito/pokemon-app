
export interface PokemonCardType {
    id: string;
    name: string;
    supertype: string;
    subtypes: string[];
    hp: string;
    types: string[];
    evolvesFrom: string;
    evolvesTo: string;
    abilities: Ability[];
    attacks: Attack[];
    weaknesses: Weakness[];
    retreatCost: string[];
    convertedRetreatCost: number;
    set: CardSet;
    number: string;
    artist: string;
    rarity: string;
    flavorText: string;
    nationalPokedexNumbers: number[];
    legalities: Legalities;
    level: string;
    images: Images;
    tcgplayer: TcgPlayer;
    cardmarket: CardMarket;
  }
  
 export interface Ability {
    name: string;
    text: string;
    type: string;
  }
  
 export interface Attack {
    name: string;
    cost: string[];
    convertedEnergyCost: number;
    damage: string;
    text: string;
  }
  
 export interface Weakness {
    type: string;
    value: string;
  }
  
export  interface CardSet {
    id: string;
    name: string;
    series: string;
    printedTotal: number;
    total: number;
    legalities: Legalities;
    ptcgoCode: string;
    releaseDate: string;
    updatedAt: string;
    images: {
      symbol: string;
      logo: string;
    };
  }
  
export  interface Legalities {
    unlimited: string;
    standard: string;
    expanded: string;
  }
  
 export interface Images {
    small: string;
    large: string;
  }
  
export  interface TcgPlayer {
    url: string;
    updatedAt: string;
    prices: Prices;
  }
  
export  interface Prices {
    normal: PriceDetails;
    reverseHolofoil: PriceDetails;
  }
  
export  interface PriceDetails {
    low: number;
    mid: number;
    high: number;
    market: number;
    directLow?: number;
  }
  
export  interface CardMarket {
    url: string;
    updatedAt: string;
    prices: CardMarketPrices;
  }
  
 export interface CardMarketPrices {
    averageSellPrice: number;
    lowPrice: number;
    trendPrice: number;
    germanProLow?: number;
    suggestedPrice?: number;
    reverseHoloSell?: number;
    reverseHoloLow?: number;
    reverseHoloTrend?: number;
    lowPriceExPlus?: number;
    avg1: number;
    avg7: number;
    avg30: number;
    reverseHoloAvg1?: number;
    reverseHoloAvg7?: number;
    reverseHoloAvg30?: number;
  }
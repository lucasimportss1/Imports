
export type League = 
  | 'Premier League' 
  | 'La Liga' 
  | 'Serie A' 
  | 'Bundesliga' 
  | 'Ligue 1' 
  | 'Brasileirão' 
  | 'Seleção Nacional' 
  | 'NBA' 
  | 'Outros';

export type ProductType = 
  | 'Versão Jogador' 
  | 'Versão Torcedor' 
  | 'Retrô' 
  | 'Feminino' 
  | 'Infantil' 
  | 'Agasalho' 
  | 'Corta-Vento';

export interface Product {
  id: string;
  name: string;
  team: string;
  league: League;
  price: number;
  oldPrice?: number;
  image: string;
  gallery: string[];
  description: string;
  type: ProductType;
  season: string;
  badge?: 'New' | 'Limited' | 'Sale';
  sizes: string[];
  inStock: boolean;
}

export interface CartItem extends Product {
  selectedSize: string;
  quantity: number;
}

export interface NavItem {
  label: string;
  href: string;
}

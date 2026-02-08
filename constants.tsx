
import { Product, NavItem } from './types';

export const PRODUCTS: Product[] = [
  // --- LA LIGA ---
  {
    id: '1',
    name: 'Camisa Real Madrid Home 25/26',
    team: 'Real Madrid',
    league: 'La Liga',
    price: 349.90,
    oldPrice: 399.90,
    image: 'https://images.unsplash.com/photo-1596445836561-991206180902?q=80&w=800&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1596445836561-991206180902?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1596445836561-991206180902?q=80&w=800&auto=format&fit=crop&flip=h',
      'https://images.unsplash.com/photo-1577223625816-7546f13df25d?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1596445836561-991206180902?q=80&w=800&auto=format&fit=crop&crop=focalpoint&fp-z=2'
    ],
    description: 'A nova e imponente camisa branca dos Los Blancos para a temporada 25/26. Tecido com tecnologia de ventilação avançada e acabamento premium.',
    type: 'Versão Jogador',
    season: '2025/26',
    badge: 'New',
    sizes: ['P', 'M', 'G', 'GG'],
    inStock: true
  },
  {
    id: '10',
    name: 'Camisa Barcelona Home 25/26',
    team: 'Barcelona',
    league: 'La Liga',
    price: 329.90,
    image: 'https://images.unsplash.com/photo-1522778119026-d647f0596c20?q=80&w=800&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1522778119026-d647f0596c20?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1522778119026-d647f0596c20?q=80&w=800&auto=format&fit=crop&flip=h',
      'https://images.unsplash.com/photo-1522778119026-d647f0596c20?q=80&w=800&auto=format&fit=crop&crop=center',
      'https://images.unsplash.com/photo-1522778119026-d647f0596c20?q=80&w=800&auto=format&fit=crop&crop=top'
    ],
    description: 'As cores Blaugrana retornam com design clássico para a temporada 25/26. Qualidade premium 1:1.',
    type: 'Versão Torcedor',
    season: '2025/26',
    sizes: ['P', 'M', 'G', 'GG'],
    inStock: true
  },

  // --- PREMIER LEAGUE ---
  {
    id: '2',
    name: 'Camisa Manchester City Away 25/26',
    team: 'Manchester City',
    league: 'Premier League',
    price: 299.90,
    image: 'https://images.unsplash.com/photo-1620311319728-6874872935bc?q=80&w=800&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1620311319728-6874872935bc?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1620311319728-6874872935bc?q=80&w=800&auto=format&fit=crop&flip=v',
      'https://images.unsplash.com/photo-1522778119026-d647f0596c20?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1620311319728-6874872935bc?q=80&w=800&auto=format&fit=crop&crop=faces'
    ],
    description: 'A nova camisa reserva dos Citizens para a nova jornada na Premier League. Design moderno e caimento impecável.',
    type: 'Versão Torcedor',
    season: '2025/26',
    sizes: ['P', 'M', 'G', 'GG'],
    inStock: true
  },
  {
    id: '11',
    name: 'Camisa Liverpool Home 25/26',
    team: 'Liverpool',
    league: 'Premier League',
    price: 349.90,
    image: 'https://images.unsplash.com/photo-1518152006812-edab29b069ac?q=80&w=800&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1518152006812-edab29b069ac?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1518152006812-edab29b069ac?q=80&w=800&auto=format&fit=crop&flip=h',
      'https://images.unsplash.com/photo-1518152006812-edab29b069ac?q=80&w=800&auto=format&fit=crop&crop=focalpoint',
      'https://images.unsplash.com/photo-1518152006812-edab29b069ac?q=80&w=800&auto=format&fit=crop&crop=bottom'
    ],
    description: 'The Reds com o novo manto para 25/26. Detalhes em dourado e tecido de alta performance.',
    type: 'Versão Jogador',
    season: '2025/26',
    badge: 'New',
    sizes: ['P', 'M', 'G', 'GG'],
    inStock: true
  },
  {
    id: '12',
    name: 'Camisa Arsenal Home 25/26',
    team: 'Arsenal',
    league: 'Premier League',
    price: 319.90,
    image: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?q=80&w=800&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1574629810360-7efbbe195018?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1574629810360-7efbbe195018?q=80&w=800&auto=format&fit=crop&flip=h',
      'https://images.unsplash.com/photo-1574629810360-7efbbe195018?q=80&w=800&auto=format&fit=crop&crop=center',
      'https://images.unsplash.com/photo-1574629810360-7efbbe195018?q=80&w=800&auto=format&fit=crop&crop=top'
    ],
    description: 'O canhão de Londres com estilo clássico. Versão torcedor com escudo bordado de alta definição.',
    type: 'Versão Torcedor',
    season: '2025/26',
    sizes: ['P', 'M', 'G', 'GG'],
    inStock: true
  },

  // --- SERIE A ---
  {
    id: '5',
    name: 'Camisa Milan Retrô 1988/89',
    team: 'Milan',
    league: 'Serie A',
    price: 289.90,
    image: 'https://images.unsplash.com/photo-1551958219-acbc608c6377?q=80&w=800&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1551958219-acbc608c6377?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1551958219-acbc608c6377?q=80&w=800&auto=format&fit=crop&flip=h',
      'https://images.unsplash.com/photo-1554062614-6da4d6736363?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1551958219-acbc608c6377?q=80&w=800&auto=format&fit=crop&crop=bottom'
    ],
    description: 'Camisa clássica da era de ouro do Milan. Reprodução fiel com bordados em alta definição.',
    type: 'Retrô',
    season: '1988/89',
    badge: 'Limited',
    sizes: ['M', 'G', 'GG'],
    inStock: true
  },
  {
    id: '13',
    name: 'Camisa Juventus Home 25/26',
    team: 'Juventus',
    league: 'Serie A',
    price: 339.90,
    image: 'https://images.unsplash.com/photo-1516731415730-0c6419096c7c?q=80&w=800&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1516731415730-0c6419096c7c?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1516731415730-0c6419096c7c?q=80&w=800&auto=format&fit=crop&flip=h',
      'https://images.unsplash.com/photo-1516731415730-0c6419096c7c?q=80&w=800&auto=format&fit=crop&crop=center',
      'https://images.unsplash.com/photo-1516731415730-0c6419096c7c?q=80&w=800&auto=format&fit=crop&crop=top'
    ],
    description: 'A Velha Senhora com as tradicionais listras pretas e brancas reinterpretadas para o futuro.',
    type: 'Versão Jogador',
    season: '2025/26',
    sizes: ['P', 'M', 'G', 'GG'],
    inStock: true
  },

  // --- BUNDESLIGA ---
  {
    id: '7',
    name: 'Kit Infantil Bayern de Munique 25/26',
    team: 'Bayern de Munique',
    league: 'Bundesliga',
    price: 249.90,
    image: 'https://images.unsplash.com/photo-1551958219-acbc608c6377?q=80&w=800&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1551958219-acbc608c6377?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1551958219-acbc608c6377?q=80&w=800&auto=format&fit=crop&flip=v',
      'https://images.unsplash.com/photo-1508098682722-e99c43a406b2?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1551958219-acbc608c6377?q=80&w=800&auto=format&fit=crop&crop=left'
    ],
    description: 'Conjunto completo (camisa + calção) para os pequenos craques na nova temporada. Conforto total para a garotada.',
    type: 'Infantil',
    season: '2025/26',
    sizes: ['2 anos', '4 anos', '6 anos', '8 anos', '10 anos'],
    inStock: true
  },
  {
    id: '14',
    name: 'Camisa Borussia Dortmund Home 25/26',
    team: 'Dortmund',
    league: 'Bundesliga',
    price: 319.90,
    image: 'https://images.unsplash.com/photo-1551958219-acbc608c6377?q=80&w=800&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1551958219-acbc608c6377?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1551958219-acbc608c6377?q=80&w=800&auto=format&fit=crop&flip=h',
      'https://images.unsplash.com/photo-1551958219-acbc608c6377?q=80&w=800&auto=format&fit=crop&crop=center',
      'https://images.unsplash.com/photo-1551958219-acbc608c6377?q=80&w=800&auto=format&fit=crop&crop=top'
    ],
    description: 'A Muralha Amarela representada no novo manto do BVB. Detalhes em preto fosco.',
    type: 'Versão Torcedor',
    season: '2025/26',
    sizes: ['P', 'M', 'G', 'GG'],
    inStock: true
  },

  // --- LIGUE 1 ---
  {
    id: '8',
    name: 'Corta-Vento PSG Training 2025',
    team: 'PSG',
    league: 'Ligue 1',
    price: 459.90,
    oldPrice: 529.90,
    image: 'https://images.unsplash.com/photo-1522778119026-d647f0596c20?q=80&w=800&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1522778119026-d647f0596c20?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1522778119026-d647f0596c20?q=80&w=800&auto=format&fit=crop&flip=h',
      'https://images.unsplash.com/photo-1531415074968-036ba1b575da?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1522778119026-d647f0596c20?q=80&w=800&auto=format&fit=crop&crop=right'
    ],
    description: 'Agasalho impermeável de alta performance atualizado para 2025. Ideal para treinos em dias frios ou uso casual.',
    type: 'Corta-Vento',
    season: '2025',
    badge: 'Sale',
    sizes: ['P', 'M', 'G', 'GG'],
    inStock: true
  },
  {
    id: '15',
    name: 'Camisa PSG Home 25/26',
    team: 'PSG',
    league: 'Ligue 1',
    price: 349.90,
    image: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?q=80&w=800&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1574629810360-7efbbe195018?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1574629810360-7efbbe195018?q=80&w=800&auto=format&fit=crop&flip=h',
      'https://images.unsplash.com/photo-1574629810360-7efbbe195018?q=80&w=800&auto=format&fit=crop&crop=center',
      'https://images.unsplash.com/photo-1574629810360-7efbbe195018?q=80&w=800&auto=format&fit=crop&crop=top'
    ],
    description: 'A elegância de Paris em cada detalhe. O novo manto Hechter para 25/26.',
    type: 'Versão Jogador',
    season: '2025/26',
    sizes: ['P', 'M', 'G', 'GG'],
    inStock: true
  },

  // --- BRASILEIRÃO ---
  {
    id: '3',
    name: 'Camisa Flamengo Home 2025',
    team: 'Flamengo',
    league: 'Brasileirão',
    price: 319.90,
    image: 'https://images.unsplash.com/photo-1620311319728-6874872935bc?q=80&w=800&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1620311319728-6874872935bc?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1620311319728-6874872935bc?q=80&w=800&auto=format&fit=crop&flip=h',
      'https://images.unsplash.com/photo-1610486828556-912c9339e88b?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1620311319728-6874872935bc?q=80&w=800&auto=format&fit=crop&crop=center'
    ],
    description: 'O novo manto sagrado do Mengão para a temporada 2025. Listras icônicas e tecnologia que mantém o corpo seco.',
    type: 'Versão Torcedor',
    season: '2025',
    badge: 'New',
    sizes: ['P', 'M', 'G', 'GG', 'XG'],
    inStock: true
  },
  {
    id: '16',
    name: 'Camisa Palmeiras Home 2025',
    team: 'Palmeiras',
    league: 'Brasileirão',
    price: 319.90,
    image: 'https://images.unsplash.com/photo-1551958219-acbc608c6377?q=80&w=800&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1551958219-acbc608c6377?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1551958219-acbc608c6377?q=80&w=800&auto=format&fit=crop&flip=h',
      'https://images.unsplash.com/photo-1551958219-acbc608c6377?q=80&w=800&auto=format&fit=crop&crop=center',
      'https://images.unsplash.com/photo-1551958219-acbc608c6377?q=80&w=800&auto=format&fit=crop&crop=top'
    ],
    description: 'O Verdão com seu novo manto para a temporada 2025. Tradição e modernidade em verde esmeralda.',
    type: 'Versão Torcedor',
    season: '2025',
    sizes: ['P', 'M', 'G', 'GG'],
    inStock: true
  },
  {
    id: '17',
    name: 'Camisa São Paulo Home 2025',
    team: 'São Paulo',
    league: 'Brasileirão',
    price: 319.90,
    image: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?q=80&w=800&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1574629810360-7efbbe195018?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1574629810360-7efbbe195018?q=80&w=800&auto=format&fit=crop&flip=h',
      'https://images.unsplash.com/photo-1574629810360-7efbbe195018?q=80&w=800&auto=format&fit=crop&crop=center',
      'https://images.unsplash.com/photo-1574629810360-7efbbe195018?q=80&w=800&auto=format&fit=crop&crop=top'
    ],
    description: 'O Tricolor Paulista com as cinco estrelas e as faixas no peito. O novo manto para 2025.',
    type: 'Versão Torcedor',
    season: '2025',
    sizes: ['P', 'M', 'G', 'GG'],
    inStock: true
  },
  {
    id: '18',
    name: 'Camisa Corinthians Home 2025',
    team: 'Corinthians',
    league: 'Brasileirão',
    price: 319.90,
    image: 'https://images.unsplash.com/photo-1610486828556-912c9339e88b?q=80&w=800&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1610486828556-912c9339e88b?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1610486828556-912c9339e88b?q=80&w=800&auto=format&fit=crop&flip=h',
      'https://images.unsplash.com/photo-1610486828556-912c9339e88b?q=80&w=800&auto=format&fit=crop&crop=center',
      'https://images.unsplash.com/photo-1610486828556-912c9339e88b?q=80&w=800&auto=format&fit=crop&crop=top'
    ],
    description: 'O novo manto do Timão. Design minimalista em branco com detalhes sutis em preto para 2025.',
    type: 'Versão Torcedor',
    season: '2025',
    sizes: ['P', 'M', 'G', 'GG'],
    inStock: true
  },

  // --- SELEÇÕES ---
  {
    id: '4',
    name: 'Camisa Brasil Home 2025',
    team: 'Brasil',
    league: 'Seleção Nacional',
    price: 349.90,
    image: 'https://images.unsplash.com/photo-1518152006812-edab29b069ac?q=80&w=800&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1518152006812-edab29b069ac?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1518152006812-edab29b069ac?q=80&w=800&auto=format&fit=crop&flip=h',
      'https://images.unsplash.com/photo-1612041285497-7e614488b8cc?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1518152006812-edab29b069ac?q=80&w=800&auto=format&fit=crop&crop=edges'
    ],
    description: 'A amarelinha premium atualizada para os desafios de 2025. Sinta a vibração da seleção brasileira com o melhor tecido esportivo.',
    type: 'Versão Jogador',
    season: '2025',
    badge: 'New',
    sizes: ['P', 'M', 'G', 'GG'],
    inStock: true
  },
  {
    id: '19',
    name: 'Camisa Argentina Home 2025',
    team: 'Argentina',
    league: 'Seleção Nacional',
    price: 349.90,
    image: 'https://images.unsplash.com/photo-1522778119026-d647f0596c20?q=80&w=800&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1522778119026-d647f0596c20?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1522778119026-d647f0596c20?q=80&w=800&auto=format&fit=crop&flip=h',
      'https://images.unsplash.com/photo-1522778119026-d647f0596c20?q=80&w=800&auto=format&fit=crop&crop=center',
      'https://images.unsplash.com/photo-1522778119026-d647f0596c20?q=80&w=800&auto=format&fit=crop&crop=top'
    ],
    description: 'A Albiceleste com as três estrelas no peito. Novo manto oficial para 2025.',
    type: 'Versão Jogador',
    season: '2025',
    sizes: ['P', 'M', 'G', 'GG'],
    inStock: true
  },
  {
    id: '20',
    name: 'Camisa Portugal Home 2025',
    team: 'Portugal',
    league: 'Seleção Nacional',
    price: 349.90,
    image: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?q=80&w=800&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1574629810360-7efbbe195018?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1574629810360-7efbbe195018?q=80&w=800&auto=format&fit=crop&flip=h',
      'https://images.unsplash.com/photo-1574629810360-7efbbe195018?q=80&w=800&auto=format&fit=crop&crop=center',
      'https://images.unsplash.com/photo-1574629810360-7efbbe195018?q=80&w=800&auto=format&fit=crop&crop=top'
    ],
    description: 'A Seleção das Quinas com o novo manto para a busca de novos títulos em 2025.',
    type: 'Versão Jogador',
    season: '2025',
    sizes: ['P', 'M', 'G', 'GG'],
    inStock: true
  },

  // --- NBA ---
  {
    id: '9',
    name: 'Camisa Lakers City Edition 25/26',
    team: 'LA Lakers',
    league: 'NBA',
    price: 389.90,
    image: 'https://images.unsplash.com/photo-1518152006812-edab29b069ac?q=80&w=800&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1518152006812-edab29b069ac?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1518152006812-edab29b069ac?q=80&w=800&auto=format&fit=crop&flip=v',
      'https://images.unsplash.com/photo-1515523110800-9415d13b84a8?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1518152006812-edab29b069ac?q=80&w=800&auto=format&fit=crop&crop=entropy'
    ],
    description: 'A exclusiva regata da NBA para colecionadores da temporada 25/26. Detalhes bordados e tecido premium mesh.',
    type: 'Versão Jogador',
    season: '2025/26',
    sizes: ['M', 'G', 'GG', 'XG'],
    inStock: true
  },
  {
    id: '21',
    name: 'Camisa Celtics Classic 25/26',
    team: 'Celtics',
    league: 'NBA',
    price: 389.90,
    image: 'https://images.unsplash.com/photo-1551958219-acbc608c6377?q=80&w=800&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1551958219-acbc608c6377?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1551958219-acbc608c6377?q=80&w=800&auto=format&fit=crop&flip=h',
      'https://images.unsplash.com/photo-1551958219-acbc608c6377?q=80&w=800&auto=format&fit=crop&crop=center',
      'https://images.unsplash.com/photo-1551958219-acbc608c6377?q=80&w=800&auto=format&fit=crop&crop=top'
    ],
    description: 'O verde tradicional dos Celtics. Versão jogador com tecnologia Vapor.',
    type: 'Versão Jogador',
    season: '2025/26',
    sizes: ['P', 'M', 'G', 'GG'],
    inStock: true
  },
  {
    id: '22',
    name: 'Camisa Warriors Statement 25/26',
    team: 'Warriors',
    league: 'NBA',
    price: 389.90,
    image: 'https://images.unsplash.com/photo-1620311319728-6874872935bc?q=80&w=800&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1620311319728-6874872935bc?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1620311319728-6874872935bc?q=80&w=800&auto=format&fit=crop&flip=h',
      'https://images.unsplash.com/photo-1620311319728-6874872935bc?q=80&w=800&auto=format&fit=crop&crop=center',
      'https://images.unsplash.com/photo-1620311319728-6874872935bc?q=80&w=800&auto=format&fit=crop&crop=top'
    ],
    description: 'A baía em foco. O novo manto Statement dos Warriors para 25/26.',
    type: 'Versão Jogador',
    season: '2025/26',
    sizes: ['P', 'M', 'G', 'GG'],
    inStock: true
  },

  // --- FEMININO & OUTROS ---
  {
    id: '6',
    name: 'Camisa Feminina Liverpool Home 25/26',
    team: 'Liverpool',
    league: 'Premier League',
    price: 279.90,
    image: 'https://images.unsplash.com/photo-1596445836561-991206180902?q=80&w=800&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1596445836561-991206180902?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1596445836561-991206180902?q=80&w=800&auto=format&fit=crop&flip=h',
      'https://images.unsplash.com/photo-1626248801379-51a073446f77?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1596445836561-991206180902?q=80&w=800&auto=format&fit=crop&crop=top'
    ],
    description: 'Corte feminino exclusivo com toda a tecnologia dos Reds para 25/26. Ajuste perfeito e estilo inigualável.',
    type: 'Feminino',
    season: '2025/26',
    sizes: ['P', 'M', 'G'],
    inStock: true
  }
];

export const NAV_ITEMS: NavItem[] = [
  { label: 'Início', href: '/' },
  { label: 'Europeus', href: '/products?league_group=europe' },
  { label: 'Brasileirão', href: '/products?league=Brasileirão' },
  { label: 'Seleções', href: '/products?league=Seleção+Nacional' },
  { label: 'Retrô', href: '/products?type=Retrô' },
  { label: 'Feminino', href: '/products?type=Feminino' },
  { label: 'Infantil', href: '/products?type=Infantil' },
  { label: 'Agasalhos', href: '/products?type_group=outerwear' },
  { label: 'NBA', href: '/products?league=NBA' },
];

export const FOOTER_LINKS = {
  shop: [
    { label: 'Novidades 25/26', href: '/products?badge=New' },
    { label: 'Mais Vendidos', href: '/products' },
    { label: 'Promoções', href: '/products?badge=Sale' },
    { label: 'Kits Infantis', href: '/products?type=Infantil' },
  ],
  support: [
    { label: 'FAQ', href: '/faq' },
    { label: 'Trocas e Devoluções', href: '/faq' },
    { label: 'Rastreio', href: '/faq' },
  ],
  company: [
    { label: 'Sobre a Lucas Imports', href: '/about' },
    { label: 'Fale Conosco', href: '/about' },
    { label: 'Privacidade', href: '#' },
  ]
};

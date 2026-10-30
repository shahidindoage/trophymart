export interface TrophyProduct {
  id: string;
  name: string;
  category: 'crystal' | 'sculpted-gold' | 'plaques' | 'medals' | 'bespoke' | 'Trophies';
  categoryLabel: string;
  price: number;
  originalPrice?: number;
  material: string;
  height: string;
  weight: string;
  rating: number;
  reviewsCount: number;
  sku: string;
  image?: string;
  turnaroundDays: number;
  description: string;
  features: string[];
  inStock: boolean;
  bulkTiers: { minQty: number; price: number; discount: string }[];
  primaryColor: string;
  badge?: string;
  silhouetteType: 'obelisk' | 'cup' | 'plaque' | 'flame' | 'star' | 'medal';
}

export interface CartItem {
  id: string;
  product: TrophyProduct;
  quantity: number;
  customization?: {
    recipientName: string;
    awardTitle: string;
    organization: string;
    plateFinish: string;
    eventDate: string;
    specialNotes?: string;
  };
}

export interface BespokeQuoteRequest {
  fullName: string;
  companyName: string;
  email: string;
  phone: string;
  trophyCategory: string;
  approximateQuantity: number;
  targetBudgetPerPiece: string;
  eventDate: string;
  deliveryCity: string;
  notes: string;
}

// Catalog listing shown on /parts. Prices are quoted per order (FX-linked), so
// the catalog focuses on fitment, spec and stock status and routes to a quote.

export const vehicleModels = ['F-150', 'Ranger', 'Explorer', 'Expedition', 'Edge', 'Everest', 'Transit', 'Fusion', 'Focus'] as const
export type VehicleModel = (typeof vehicleModels)[number]

export const categories = [
  'Engine Oils',
  'Filters',
  'Brake Systems',
  'Suspension',
  'Ignition & Electrical',
  'Cooling',
  'Accessories',
] as const
export type Category = (typeof categories)[number]

export type Stock = 'in-stock' | 'low-stock' | 'sourcing-48h'

export interface Part {
  id: string
  name: string
  category: Category
  models: Array<VehicleModel>
  spec: string
  ref: string
  stock: Stock
}

export const parts: Array<Part> = [
  { id: 'oil-5w30-fs', name: 'Full Synthetic Engine Oil SAE 5W-30 (5 qt)', category: 'Engine Oils', models: ['F-150', 'Explorer', 'Expedition', 'Edge'], spec: 'Meets Ford WSS-M2C961-A1 · API SP', ref: 'Motorcraft spec', stock: 'in-stock' },
  { id: 'oil-5w20-sb', name: 'Synthetic Blend Engine Oil SAE 5W-20 (5 qt)', category: 'Engine Oils', models: ['F-150', 'Fusion', 'Focus', 'Edge'], spec: 'Meets Ford WSS-M2C945-B1 · API SP', ref: 'Motorcraft spec', stock: 'in-stock' },
  { id: 'oil-5w30-diesel', name: 'Diesel Engine Oil SAE 5W-30 (5 L)', category: 'Engine Oils', models: ['Ranger', 'Everest', 'Transit'], spec: 'Ford WSS-M2C950-A · ACEA C2', ref: 'TDCi / EcoBlue', stock: 'in-stock' },
  { id: 'oil-atf-12', name: 'Automatic Transmission Fluid (10R80 / 6R80)', category: 'Engine Oils', models: ['F-150', 'Ranger', 'Expedition', 'Everest'], spec: 'Mercon ULV / LV approved', ref: 'Genuine fluid', stock: 'low-stock' },
  { id: 'filter-oil-ecoboost', name: 'Oil Filter — EcoBoost & V8', category: 'Filters', models: ['F-150', 'Explorer', 'Expedition', 'Edge'], spec: 'Anti-drainback valve · 13,000 km interval', ref: 'OE fitment', stock: 'in-stock' },
  { id: 'filter-oil-tdci', name: 'Oil Filter — 2.2 / 3.2 TDCi & 2.0 Bi-Turbo', category: 'Filters', models: ['Ranger', 'Everest', 'Transit'], spec: 'Cartridge type with O-ring kit', ref: 'OE fitment', stock: 'in-stock' },
  { id: 'filter-air', name: 'Engine Air Filter Element', category: 'Filters', models: ['F-150', 'Ranger', 'Explorer', 'Everest'], spec: 'High-dust rated for Nigerian road conditions', ref: 'OE fitment', stock: 'in-stock' },
  { id: 'filter-fuel-diesel', name: 'Diesel Fuel Filter with Water Separator', category: 'Filters', models: ['Ranger', 'Everest', 'Transit'], spec: 'Protects injectors from contaminated diesel', ref: 'OE fitment', stock: 'low-stock' },
  { id: 'brake-pads-front', name: 'Front Brake Pad Set — Ceramic', category: 'Brake Systems', models: ['F-150', 'Expedition', 'Explorer'], spec: 'Low-dust ceramic · wear sensor included', ref: 'OE fitment', stock: 'in-stock' },
  { id: 'brake-pads-ranger', name: 'Front Brake Pad Set — Heavy Duty', category: 'Brake Systems', models: ['Ranger', 'Everest'], spec: 'HD compound for loaded pick-ups', ref: 'OE fitment', stock: 'in-stock' },
  { id: 'brake-rotor', name: 'Vented Brake Rotor (pair)', category: 'Brake Systems', models: ['F-150', 'Ranger', 'Explorer', 'Everest'], spec: 'Balanced, coated against corrosion', ref: 'OE fitment', stock: 'sourcing-48h' },
  { id: 'brake-fluid', name: 'DOT 4 LV High Performance Brake Fluid', category: 'Brake Systems', models: ['F-150', 'Ranger', 'Explorer', 'Everest', 'Edge', 'Transit'], spec: 'Low viscosity · ESC compatible', ref: 'Genuine fluid', stock: 'in-stock' },
  { id: 'shock-front', name: 'Front Shock Absorber / Strut Assembly', category: 'Suspension', models: ['F-150', 'Explorer', 'Expedition'], spec: 'Complete strut · ready to fit', ref: 'OE fitment', stock: 'sourcing-48h' },
  { id: 'shock-ranger', name: 'Rear Shock Absorber — Pick-up', category: 'Suspension', models: ['Ranger', 'Everest'], spec: 'Twin-tube gas · load rated', ref: 'OE fitment', stock: 'in-stock' },
  { id: 'control-arm', name: 'Lower Control Arm with Ball Joint', category: 'Suspension', models: ['F-150', 'Ranger', 'Explorer', 'Edge'], spec: 'Pre-pressed bushings', ref: 'OE fitment', stock: 'sourcing-48h' },
  { id: 'spark-plugs', name: 'Iridium Spark Plug Set', category: 'Ignition & Electrical', models: ['F-150', 'Explorer', 'Expedition', 'Edge', 'Fusion'], spec: 'Pre-gapped for EcoBoost engines', ref: 'OE fitment', stock: 'in-stock' },
  { id: 'battery', name: 'Maintenance-Free Battery (H7 / H8)', category: 'Ignition & Electrical', models: ['F-150', 'Ranger', 'Explorer', 'Everest', 'Expedition'], spec: 'High CCA · start-stop ready', ref: 'Genuine', stock: 'low-stock' },
  { id: 'coil-pack', name: 'Ignition Coil Pack', category: 'Ignition & Electrical', models: ['F-150', 'Explorer', 'Edge', 'Fusion', 'Focus'], spec: 'Direct-fit coil-on-plug', ref: 'OE fitment', stock: 'in-stock' },
  { id: 'coolant', name: 'Orange Engine Coolant — Pre-diluted', category: 'Cooling', models: ['F-150', 'Ranger', 'Explorer', 'Everest', 'Edge', 'Transit'], spec: 'Ford WSS-M97B44-D · 5-year formula', ref: 'Genuine fluid', stock: 'in-stock' },
  { id: 'thermostat', name: 'Thermostat & Housing Assembly', category: 'Cooling', models: ['Ranger', 'Everest', 'F-150'], spec: 'Includes gasket', ref: 'OE fitment', stock: 'sourcing-48h' },
  { id: 'water-pump', name: 'Water Pump Kit', category: 'Cooling', models: ['F-150', 'Explorer', 'Ranger'], spec: 'With gasket and bolts', ref: 'OE fitment', stock: 'sourcing-48h' },
  { id: 'wipers', name: 'Wiper Blade Set (Front)', category: 'Accessories', models: ['F-150', 'Ranger', 'Explorer', 'Everest', 'Edge', 'Expedition'], spec: 'Beam-type, all-weather', ref: 'Genuine', stock: 'in-stock' },
  { id: 'floor-mats', name: 'All-Weather Floor Liners', category: 'Accessories', models: ['F-150', 'Ranger', 'Explorer', 'Everest'], spec: 'Laser-measured fit', ref: 'Genuine accessory', stock: 'low-stock' },
  { id: 'cabin-filter', name: 'Cabin Air Filter — Carbon', category: 'Accessories', models: ['F-150', 'Ranger', 'Explorer', 'Everest', 'Edge'], spec: 'Blocks dust, odours & harmattan haze', ref: 'OE fitment', stock: 'in-stock' },
]

export const stockLabel: Record<Stock, { text: string; cls: string }> = {
  'in-stock': { text: 'In stock · Lagos', cls: 'bg-emerald-50 text-emerald-700 ring-emerald-200' },
  'low-stock': { text: 'Low stock', cls: 'bg-amber-50 text-amber-700 ring-amber-200' },
  'sourcing-48h': { text: 'USA-sourced · 48h', cls: 'bg-sky-50 text-sky-700 ring-sky-200' },
}

/**
 * Excel (PRODUCTS.xlsx) ve public/images/{SKU} klasörlerinden ürün verisini üretir.
 * Çalıştırma: node scripts/generate-products.cjs [excel-path]
 */
const fs = require('fs');
const path = require('path');
const XLSX = require('xlsx');

const projectRoot = path.resolve(__dirname, '..');
const imagesBase = path.join(projectRoot, 'public', 'images');
let excelPath = path.resolve(process.argv[2] || path.join(projectRoot, 'PRODUCTS.xlsx'));

if (!fs.existsSync(excelPath)) {
  const alt = path.join(process.env.HOME || '', 'Downloads', 'PRODUCTS.xlsx');
  if (fs.existsSync(alt)) excelPath = alt;
  else {
    console.error('PRODUCTS.xlsx bulunamadı. Yol verin: node scripts/generate-products.cjs /path/to/PRODUCTS.xlsx');
    process.exit(1);
  }
}

const wb = XLSX.readFile(excelPath);
const rows = XLSX.utils.sheet_to_json(wb.Sheets[wb.SheetNames[0]]);

function getImages(sku) {
  const dir = path.join(imagesBase, String(sku));
  if (!fs.existsSync(dir)) return [];
  const files = fs.readdirSync(dir)
    .filter(f => {
      const full = path.join(dir, f);
      return fs.statSync(full).isFile() && /\.(jpg|jpeg|png|webp)$/i.test(f);
    })
    .sort((a, b) => a.localeCompare(b, undefined, { numeric: true }));
  return files.map(f => '/images/' + sku + '/' + encodeURIComponent(f));
}

function categoryToKey(c) {
  return (c || '').replace(/\s+/g, '_').toUpperCase();
}

const categories = [...new Set(rows.map(r => r.Categorie).filter(Boolean))];

const products = rows.map(r => {
  const sku = String(r.SKU);
  const imgs = getImages(sku);
  const nameRo = r['Denumirea Produsului pe Site'] || r.Produsul || 'Produs ' + sku;
  const dims = [r['Dimensiune lungime * latime * ınaltime'], r['Dimensiune pat']].filter(Boolean).join(' / ');
  return {
    id: sku,
    sku,
    name: { ro: nameRo, en: nameRo },
    category: categoryToKey(r.Categorie),
    image: imgs[0] || '',
    images: imgs,
    description: { ro: r['Meta Descriere'] || '', en: r['Meta Descriere'] || '' },
    features: {
      ro: [r.Culoare && ('Culoare: ' + r.Culoare), dims && ('Dimensiuni: ' + dims)].filter(Boolean),
      en: [r.Culoare && ('Color: ' + r.Culoare), dims && ('Dimensions: ' + dims)].filter(Boolean),
    },
  };
});

const categoryLabels = {};
categories.forEach(c => {
  const key = categoryToKey(c);
  const labelEn = key.replace(/_/g, ' ').toLowerCase().replace(/\b\w/g, l => l.toUpperCase());
  categoryLabels[key] = { ro: c, en: labelEn };
});

const out = {
  categories: categories.map(c => categoryToKey(c)),
  categoryLabels,
  products,
};

const outPath = path.join(projectRoot, 'products.generated.json');
fs.writeFileSync(outPath, JSON.stringify(out, null, 2), 'utf8');
console.log('Yazıldı:', outPath, '| Ürün:', products.length, '| Kategoriler:', out.categories.length);

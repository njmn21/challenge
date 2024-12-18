export class Item {
    name: string;
    sellIn: number;
    quality: number;

    constructor(name: string, sellIn: number, quality: number) {
        this.name = name;
        this.sellIn = sellIn;
        this.quality = quality;
    }

    updateQuality(){
        if(this.quality > 0){
            this.quality--;
        }
        this.sellIn--;
        if(this.sellIn < 0 && this.quality > 0){
            this.quality--;
        }
    }
}

class AgedBrie extends Item{
    updateQuality(){
        if(this.quality < 50){
            this.quality++;
        }
        this.sellIn--;
        if(this.sellIn < 0 && this.quality < 50){
            this.quality++;
        }
    }
}

class BackstagePass extends Item{
    updateQuality(){
        if(this.quality < 50){
            this.quality++;
            if(this.sellIn < 11 && this.quality < 50){
                this.quality++;
            }
            if(this.sellIn < 6 && this.quality < 50){
                this.quality++;
            }
        }
        this.sellIn--;
        if(this.sellIn < 0){
            this.quality = 0;
        }
    }
}

class Sulfuras extends Item{
    updateQuality(){
        return;
    }
}

class ConjuredItem extends Item{
    updateQuality(){
        if(this.quality > 0){
            this.quality -= 2;
        }
        this.sellIn--;
        if(this.sellIn < 0 && this.quality > 0){
            this.quality -= 2;
        }
    }
}

export class GildedRose{
    items: Array<Item>;
    
    constructor(items = [] as Array<Item>){
        this.items = items.map(item => {
            switch (item.name) {
                case 'Aged Brie':
                    return new AgedBrie(item.name, item.sellIn, item.quality);
                case 'Backstage passes to a TAFKAL80ETC concert':
                    return new BackstagePass(item.name, item.sellIn, item.quality);
                case 'Sulfuras, Hand of Ragnaros':
                    return new Sulfuras(item.name, item.sellIn, item.quality);
                case 'Conjured':
                    return new ConjuredItem(item.name, item.sellIn, item.quality);
                default:
                    return new Item(item.name, item.sellIn, item.quality);
            }
        });
    }

    updateQuality(){
        for(let item of this.items){
            item.updateQuality();
        }
        return this.items;
    }
}



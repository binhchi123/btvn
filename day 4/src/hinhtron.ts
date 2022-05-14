class HinhTron {
    banKinh: number;
    Pi: number = 3.14;

    constructor(banKinh: number) {
        this.banKinh = banKinh;
    }
    dienTich = (): number => {
        return this.Pi * this.banKinh * this.banKinh;
    }
    chuVi = (): number => {
        return 2 * this.Pi * this.banKinh;
    }
}
class HinhTru extends HinhTron {
    chieuCao: number;

    constructor(banKinh: number, chieuCao: number) {
        super(banKinh);
        this.chieuCao = chieuCao;
    }
    dienTichXq = (): number => {
        return 2 * this.Pi * this.banKinh * this.chieuCao;
    }
    dienTichTp = (): number => {
        return 2 * this.Pi * this.banKinh * this.chieuCao + 2 * this.Pi * this.banKinh * this.banKinh;
    }
    theTich = () => {
        return this.Pi * this.banKinh * this.banKinh * this.chieuCao;
    }
}

var HinhTron1 = new HinhTron(5);
var HinhTru1 = new HinhTru(5, 10);

console.log(HinhTron1.dienTich());
console.log(HinhTron1.chuVi());

console.log(HinhTru1.dienTichXq());
console.log(HinhTru1.dienTichTp());
console.log(HinhTru1.theTich());

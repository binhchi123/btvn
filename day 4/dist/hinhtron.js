class HinhTron {
    constructor(banKinh) {
        this.Pi = 3.14;
        this.dienTich = () => {
            return this.Pi * this.banKinh * this.banKinh;
        };
        this.chuVi = () => {
            return 2 * this.Pi * this.banKinh;
        };
        this.banKinh = banKinh;
    }
}
class HinhTru extends HinhTron {
    constructor(banKinh, chieuCao) {
        super(banKinh);
        this.dienTichXq = () => {
            return 2 * this.Pi * this.banKinh * this.chieuCao;
        };
        this.dienTichTp = () => {
            return 2 * this.Pi * this.banKinh * this.chieuCao + 2 * this.Pi * this.banKinh * this.banKinh;
        };
        this.theTich = () => {
            return this.Pi * this.banKinh * this.banKinh * this.chieuCao;
        };
        this.chieuCao = chieuCao;
    }
}
var HinhTron1 = new HinhTron(5);
var HinhTru1 = new HinhTru(5, 10);
console.log(HinhTron1.dienTich());
console.log(HinhTron1.chuVi());
console.log(HinhTru1.dienTichXq());
console.log(HinhTru1.dienTichTp());
console.log(HinhTru1.theTich());

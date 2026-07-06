class ContaBancaria
{
    titular: string;
    saldo: number;
    limite: number;
    extrato: string[];

    constructor(titular: string, saldo: number, limite: number = 0)
    {
        this.titular = titular;
        this.saldo = saldo;
        this.limite = limite;
        this.extrato = [`Conta criada com saldo ${saldo}, e limite ${limite}\nData, Hora: ${new Date().toLocaleDateString()}`]
    }

    depositar(valor: number): void 
    {
        this.saldo += valor;
        this.extrato.push(`Deposito feito no valor de ${valor}\nData, Hora: ${new Date().toLocaleDateString()}\nSaldo Atual: ${this.saldo}`)
    }

    sacar(valor: number): void
    {
        if(this.saldo + this.limite >= valor)
        {
            this.saldo -= valor
            this.extrato.push(`Saque feito no valor de ${valor}\nData, Hora: ${new Date().toLocaleDateString()}\nSaldo Atual: ${this.saldo}`)
            return
        }

        console.log(`Tentativa de saque invalida no valor de ${valor}, saldo atual da conta ${this.saldo}`)
    }

    exibirSaldo(): void
    {
        console.log("Saldo atual:", this.saldo)
    }

    exibirExtrato(): void
    {
        console.log(":::Extrato:::")
        for(let i = 0; i < this.extrato.length; i++)
        {
            console.log(i+1,"-", this.extrato[i],"\n");
        }
    }
}

let conta1 = new ContaBancaria("Jorge", 2340);
let conta2 = new ContaBancaria("Ana", 1500, 100);

conta1.depositar(200);
conta1.sacar(2640)
conta1.exibirExtrato()
console.log();

conta2.depositar(300);
conta2.sacar(2000);
conta2.exibirExtrato()


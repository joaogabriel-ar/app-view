import styled from "styled-components";


interface ChildProps {
    balance: number;
    assetsCount: number;
    sellCount: number;
    buyCount: number;
    loading: boolean;
}

const formatter = new Intl.NumberFormat('pt-BR', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
});

export default function InfoCards({ loading, balance, assetsCount, sellCount, buyCount }: ChildProps) {

    const Card = styled.div`        
        display: flex;
        justify-content: center;
        align-items: start;
        flex-direction:column;
        flex: 1 1 150px;
        gap: 10px;
        padding: 1rem;
        border-radius: 15px;
        box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
        min-height: 75px;

    `;

    const Cards = styled.div`        
        width:100%;
        display:flex;
        justify-content:space-between;
        align-items:center;
        gap: 15px;
        flex-wrap: wrap;
    `;

    const Title = styled.div`
        font-size:18px;
        font-weight:500;
    `;

    const Text = styled.div`
        font-size:20px;
        font-weight:600;
    `

    return (
        <Cards>
            <Card>
                {loading ? <b>Carregando...</b> :
                    <>
                        <Title>
                            Saldo bruto
                        </Title>
                        <Text>
                            R$ {formatter.format(balance)}
                        </Text>
                    </>
                }
            </Card>
            <Card>
                {loading ? <b>Carregando...</b> :

                    <>
                        <Title>
                            Total de ativos
                        </Title>
                        <Text>
                            {assetsCount}
                        </Text>
                    </>
                }

            </Card>
            <Card>
                {loading ? <b>Carregando...</b> :
                    <>
                        <Title>
                            Movimentação no mês
                        </Title>
                        <Text>
                            {buyCount} compras - {sellCount} vendas
                        </Text>
                    </>
                }

            </Card>
        </Cards>
    )

}
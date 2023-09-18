export const GetCiclo = () => {
    const mesInicioFaculdade = 1;
    const anoInicioFaculdade = 2022;
    const duracaoCicloMeses = 6;

    const dataAtual = new Date();
    const anoAtual = dataAtual.getFullYear();
    const mesAtual = dataAtual.getMonth() + 1;

    const mesesDecorridos = (anoAtual - anoInicioFaculdade) * 12 + (mesAtual - mesInicioFaculdade);

    return Math.ceil(mesesDecorridos / duracaoCicloMeses);
}
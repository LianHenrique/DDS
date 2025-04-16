import { useEffect, useState } from "react"

// Variavel importando a url do .env
const url = import.meta.env.VITE_API_URL

const urlProf = url+"professores"

// Função para coletar os funcionarios
export function getFuncionarios(){
    const [funcionarios, setFuncionarios] = useState([])
    // Chama a função no momento ideal
    useEffect(() => {
        async function fatchData() {
            try{
                // Busca no link comunicado, de acordo com o verbo, sem o verbo ele usa o get, await para aguardar a finalização do fetch
                // Transforma as informaçoes de texto para json com .json()
                const resp = await fetch(urlProf)
                const data = await resp.json()
                setFuncionarios(data)
                console.log("Dados:",data)
            }
            catch(error){
                console.log("Erro:", error)
            }
        }
        fatchData()
    }, [/* Dependencia para o re uso da função */])
    return funcionarios
}

export function addFuncionario(funcionario){
    async function catchData() {
        try{
            const resp = await fetch(urlProf, {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(funcionario)
            })
            const data = await resp.json()
            console.log("Usuario adicionado", data)
        }
        catch(error){
            console.log("Erro:", error)
        }
    }
    catchData()
}
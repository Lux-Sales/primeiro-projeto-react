import React, { useState, FormEvent, useEffect } from 'react'
import { Title, Form, Repositories, Error } from './styles'
import ExplorerLogo from '../../assets/ExplorerLogo.svg'
import { FiChevronRight } from 'react-icons/fi'
import api from '../../services/api'
import { Link } from 'react-router-dom'

interface Repository {
    full_name: string,
    description: string,
    owner: {
        avatar_url: string,
        login: string,
    }
}


const Dashboard: React.FC = () => {

    const [newRepo, setNewRepo] = useState('');
    const [inputError, setInputError] = useState('')
    const [repositories, setRepositories] = useState<Repository[]>(() => {
        const localRepos = localStorage.getItem('@primeiro-projeto-react:Repositories')
        if (localRepos) {
            return JSON.parse(localRepos)
        }
        else
            return []

    })

    useEffect(() => {
        localStorage.setItem('@primeiro-projeto-react:Repositories', JSON.stringify(repositories))
    }, [repositories])

    async function addRepo(e: FormEvent<HTMLFormElement>): Promise<void> {
        e.preventDefault();
        if (!newRepo) {
            setInputError('Type user/repo to search')
            return
        }
        

        try {
            const response = await api.get<Repository>(`repos/${newRepo}`)
            const repository = response.data
            setRepositories([...repositories, repository])
            setNewRepo('')
            setInputError('')
        } catch (err) {
            setInputError("Error in repository's search")
        }


    }
    return (
        <>
            <img src={ExplorerLogo} alt="GitHub Explorer" />
            <Title>Explore repositórios no Github</Title>
            <Form hasError={Boolean(inputError)} onSubmit={addRepo} >
                <input
                    placeholder="Repositório a ser buscado"
                    value={newRepo}
                    onChange={(e) => setNewRepo(e.target.value)}
                />
                <button>Pesquisar</button>
            </Form>
            {inputError && <Error>
                {inputError}
            </Error>}
            <Repositories>
                {repositories.map(repository => (
                    <Link key={repository.full_name}
                        to={`/repositories/${repository.full_name}`}>
                        <img src={repository.owner.avatar_url} alt={repository.owner.login} />
                        <div>
                            <strong>{repository.full_name}</strong>
                            <p>{repository.description}</p>
                        </div>
                        <FiChevronRight size={20} />
                    </Link>
                ))}
            </Repositories>

        </>
    )
}

export default Dashboard
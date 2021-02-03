import React, {useEffect, useState} from 'react'
import { Link } from 'react-router-dom'
import { useRouteMatch } from 'react-router-dom'
import ExplorerLogo from '../../assets/ExplorerLogo.svg'
import api from '../../services/api'
import { RepositoryInfo, Header, Issues } from './styles'
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'

interface Repo {
    repository: string
}

interface RepositoryData {
    full_name: string,
    description: string,
    stargazers_count: number;
    forks_count: number,
    open_issues_count: number,
    owner: {
        avatar_url: string,
        login: string,
    }
}

interface Issue {
    id: number;
    title: string;
    html_url: string;
    user: {
      login: string;
    };
  }

const Repository: React.FC = () => {

    const { params } = useRouteMatch<Repo>()

    const [repo, setRepo] = useState<RepositoryData | null>(null)
    const [issues, setIssues] = useState<Issue[]>([])

    useEffect(()=>{
        api.get(`repos/${params.repository}`).then(response =>{
        setRepo(response.data)
    })

        api.get(`repos/${params.repository}/issues`).then(response=>{
            setIssues(response.data)
        })

    },[params.repository])


    return (
        <>
            <Header>
                <img src={ExplorerLogo} alt="" />
                <Link to="/">
                    <FiChevronLeft size={20} />
                Voltar
                </Link>
            </Header>
           {repo && ( <RepositoryInfo>
                <header>
                    <img src={repo.owner.avatar_url} alt={repo?.owner.login} />
                    <div>
                        <strong>{repo.full_name}</strong>
                        <p>{repo.description}</p>
                    </div>
                </header>
                <ul>
                    <li>
                        <strong>{repo.stargazers_count}</strong>
                        <span>Stars</span>
                    </li>
                    <li>
                        <strong>{repo.forks_count}</strong>
                        <span>Forks</span>
                    </li>
                    <li>
                        <strong>{repo.open_issues_count}</strong>
                        <span>Issues abertas</span>
                    </li>
                </ul>
            </RepositoryInfo>)}
            <Issues>
                      {issues.map(issue => (
                          <a key= {issue.id} href={issue.html_url}>
                          <div>
                              <strong>{issue.title}</strong>
                              <p>{issue.user.login}</p>
                          </div>
                          <FiChevronRight size={20} />
                          </a>
                      ))}
            </Issues>
        </>
    )
}

export default Repository
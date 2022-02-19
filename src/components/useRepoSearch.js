import { useState, useEffect } from 'react';
import { Octokit } from '@octokit/core';


const useRepoSearch = (username, reponame) => {

    const [ loading, setLoading ] = useState(true);
    const [ error, setError ] = useState(false);
    const [ repo, setRepo ] = useState(null);

    // fetch the repo and set the state
    useEffect(() => {
        setLoading(true);
        setError(false);

        const octokit = new Octokit({ auth: process.env.REACT_APP_GH });

        octokit.request('GET /repos/{owner}/{repo}', {
            owner: username,
            repo: reponame
        }).then(res => {
            setRepo(res.data);
            setLoading(false);
        }).catch(e => {
            console.log(e);
            setError(true);
        });
    }, [username, reponame]);

    return { loading, error, repo };
}

export default useRepoSearch;
import { useState, useEffect } from 'react';
import { Octokit } from '@octokit/core';


const useReposSearch = (query, pageNumber) => {

    const [ loading, setLoading ] = useState(true);
    const [ error, setError ] = useState(false);
    const [ repos, setRepos ] = useState([]);
    const [ hasMore, setHasMore ] = useState(false);

    // reset the repos array when query changed
    useEffect(() => {
        setRepos([]);
    }, [query]);

    // fetch the repos and set the state
    useEffect(() => {
        setLoading(true);
        setError(false);

        const octokit = new Octokit({ auth: process.env.REACT_APP_GH });

        octokit.request('GET /users/{username}/repos', {
            username: query,
            per_page: 10,
            page: pageNumber
        }).then(res => {
            setRepos(prevRepos => {
                return [...prevRepos, ...res.data];
            });
            setHasMore(res.data.length > 0);
            setLoading(false);
        }).catch(e => {
            console.log(e);
            setError(true);
        });
    }, [query, pageNumber]);

    return { loading, error, repos, hasMore };
}

export default useReposSearch;
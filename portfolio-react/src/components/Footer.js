import React, {useEffect} from 'react';
import './Footer.css'

function Footer() {
    const sanitizeHTML = function (str) {
        const temp = document.getElementById('fetchDate');
        temp.textContent = str;
        return temp.innerHTML;
    };
    useEffect(() => {
        fetch(
            "https://api.github.com/repos/Schallenballa/Portfolio/branches/main"
        )
            .then(response => {
                response.json().then(json => {
                    const stringParam = "Last Updated - " + json.commit.commit.author.date.slice(0, 10) + " @ " + json.commit.commit.author.date.slice(11, 16);
                    sanitizeHTML(stringParam);
                });
            })
            .catch(error => {
                console.log(error);
            });
    }, []);


    return (
        <footer>
            <div className={'footer-div'}>
                <p id="fetchDate">Last Updated - <em>…fetching</em></p>
                <p>All rights reserved</p>
                <div className="LatestCommitComponent"></div>
            </div>
        </footer>
    );
}

export default Footer;
# Postman_Analytics


This a postman analytics gathering function. Get results and average of time taken by the requests

## Usage 

Install the module using `npm install pm-runner-info` andd then import the module into any folder on your computer and implement the pm-runner-info module to help with your automation for api-level unit tests results. Just add the results from your postman runner.

## Getting Started
When you are working with pm-runner-info, I guess you should have atleast written some tests in your collection. So before you import your collection write some tests inside postman. Download the results from postman runner and add them to your project and then

```javascript
    
    pm-runner-info( collection-results )
    
    # example response 
    /*
        name: collection-two-results
        totaltime: 23049 ( ms )
        ...
        date: Tuesday, 8 January 2019
    */

```

## License
A short and simple permissive license with conditions only requiring preservation of copyright and license notices. Licensed works, modifications, and larger works may be distributed under different terms and without source code. License


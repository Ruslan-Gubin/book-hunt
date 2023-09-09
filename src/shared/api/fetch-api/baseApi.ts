
interface BaseFetchProps {
  params: string | null;
  url: string;
  method: string;
  body?: {}
}

export const baseFetch = <T>({ body, params, url, method='GET' }:BaseFetchProps ): Promise<T> => {
  
  return new Promise((resolve, reject) => {
      try{

        const _config: RequestInit = { 
          method, 
          headers: {
          'Content-Type': 'application/json', 
          },
        }
         
        if (body) {
          _config['body'] = JSON.stringify(body)
        }
        
        let mainUrl = new URL(url)
        
        if (params) {
          mainUrl = new URL(`${url}/${params}`)
        }
          
          window.fetch(mainUrl, {
            ..._config,
          })
          .then(response => response.json())
          .then(resolve, reject)
          
      } catch(error) {
        console.error('Error in base fetch:', error)
        reject(error)
      }
  })
}


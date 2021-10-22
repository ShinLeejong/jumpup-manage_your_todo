const Test = () => {
    const arr = [
        {
            name: "Lee",
            major: "Software Engineering"
        },
        {
            name: "Another Guy",
            major: "Sports"
        }
    ];

    const _ret_dom = arr.map((obj) => 
        <ul key={obj.name}>
            <li>
                <strong>{obj.name}</strong>
            </li>
            <li>
                {obj.major}
            </li>
        </ul>
    );

    return ( <div id="container"> {_ret_dom} </div> );
};

/*
  <div id="container">
    <section>
      <ul v-for="obj in arr" :key="obj.name">
        <li>
          <strong>
            {{obj.name}}
          </strong>
        </li>
        <li>
          {{obj.major}}
        </li>
      </ul>
    </section>
  </div>
*/

export default Test;
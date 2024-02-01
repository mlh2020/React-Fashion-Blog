import blog1 from './blog-image-1.jpg'
import blog2 from './blog-image-2.jpg'
function Articles() {
    return (
        <main>
            <article>
                <h3>11/12/20</h3>
                <h2 class="artHeader">On the Street in Brooklyn</h2>
                <img src={blog1} alt="A woman walking on an empty street" />
                <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt neque,
                    sed sint totam error recusandae aspernatur optio fugit repellendus
                    iure ex deleniti nobis voluptates labore eligendi dicta fuga doloribus
                    placeat.
                </p>
                <h4 class="cont">Continues...</h4>
                <h3>11/11/20</h3>
                <h2 class="artHeader">On the Street in Brooklyn</h2>
                <img src={blog2} alt="A group of people at a photoshoot" />
                <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt neque,
                    sed sint totam error recusandae aspernatur optio fugit repellendus
                    iure ex deleniti nobis voluptates labore eligendi dicta fuga doloribus
                    placeat.
                </p>
                <h4 class="cont">Continues...</h4>
            </article>
        </main>
    );

}

export default Articles;
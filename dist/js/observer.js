/** the Intersection Observer API  for the body sections code start **/

const animationItems = document.querySelectorAll(".animate");
const isNotIntersect = "animate-is-not-intersect";
const isIntersect = "animate-is-intersect";


const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            console.log(entry);
            if (entry.isIntersecting) {

                entry.target.classList.remove(isNotIntersect);
                entry.target.classList.add(isIntersect);
            }
            else {
                entry.target.classList.remove(isIntersect);
                entry.target.classList.add(isNotIntersect);

            }
        });
    },
    {
        threshold: .3
        // ,
        // rootMargin: "0px 0px -250px 0px"
    }
);
animationItems.forEach(item => {
    observer.observe(item)
})

/** the Intersection Observer  API  for the body sections code end **/

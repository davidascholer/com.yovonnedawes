module.exports = function (body) {
    let pw = "password";

    if (!body || body.password !== pw) {
        return { error: "bad password" };
    } else {

        const returnHTML = `
        <div class="page-title-container">
        <div class="page-title-container">
            <img loading="lazy" src="./assets/img/signature.svg" alt="Yovonne Dawes Signature">
        </div>
        <section class="row-container l2">
            <h2 class="title">Pencil Charcoal</h2>
            <div class="row">
                <div class="art-image-container">
                    <img loading="lazy" src="https://source.unsplash.com/random/200x200?sig=1" alt="PassatoRemoto"
                        onclick="handleGraphicDesignImageClicked(event)" />
                    <h4 class="art-title text">Passato Remoto</h4>
                </div>
                <div class="art-image-container">
                    <img loading="lazy" src="https://source.unsplash.com/random/200x200?sig=2" alt="Pencil Study"
                        onclick="handleGraphicDesignImageClicked(event)" />
                    <h4 class="art-title text">Pencil Study</h4>
                </div>
                <div class="art-image-container">
                    <img loading="lazy" src="https://source.unsplash.com/random/200x200?sig=3" alt="Pencil Study"
                        onclick="handleGraphicDesignImageClicked(event)" />
                    <h4 class="art-title text">Pencil Study II</h4>
                </div>
                <div class="art-image-container">
                    <img loading="lazy" src="https://source.unsplash.com/random/200x200?sig=4"
                        alt="Stefachka Yunger" onclick="handleGraphicDesignImageClicked(event)" />
                    <h4 class="art-title text">Stefachka Yunger</h4>
                </div>
                <div class="art-image-container">
                    <img loading="lazy" src="https://source.unsplash.com/random/200x200?sig=5"
                        alt="freckles - Satin" onclick="handleGraphicDesignImageClicked(event)" />
                    <h4 class="art-title text">Freckles - Satin</h4>
                </div>
                <div class="art-image-container">
                    <img loading="lazy" src="https://source.unsplash.com/random/200x200?sig=6" alt="Andrew Cadima"
                        onclick="handleGraphicDesignImageClicked(event)" />
                    <h4 class="art-title text">Andrew Cadima</h4>
                </div>
                <div class="art-image-container">
                    <img loading="lazy" src="https://source.unsplash.com/random/200x200?sig=7"
                        alt="Sock Monkey Subtractive Study" onclick="handleGraphicDesignImageClicked(event)" />
                    <h4 class="art-title text">Sock Monkey Subtractive Study </h4>
                </div>
                <div class="art-image-container">
                    <img loading="lazy" src="https://source.unsplash.com/random/200x200?sig=8"
                        alt="Elephant Charcoal Subtractive Study"
                        onclick="handleGraphicDesignImageClicked(event)" />
                    <h4 class="art-title text">Elephant Charcoal Subtractive Study</h4>
                </div>
        </section>
        <section class="row-container l2">
            <h2 class="title">Oil Paintings</h2>
            <div class="row">
                <div class="art-image-container">
                    <img loading="lazy" src="https://source.unsplash.com/random/200x200?sig=9" alt="Taxi Cab"
                        onclick="handleGraphicDesignImageClicked(event)" />
                    <h4 class="art-title text">Taxi Cab</h4>
                </div>
                <div class="art-image-container">
                    <img loading="lazy" src="https://source.unsplash.com/random/200x200?sig=10" alt="Rue"
                        onclick="handleGraphicDesignImageClicked(event)" />
                    <h4 class="art-title text">Rue</h4>
                </div>
                <div class="art-image-container">
                    <img loading="lazy" src="https://source.unsplash.com/random/200x200?sig=11" alt="Bleu et Jaune"
                        onclick="handleGraphicDesignImageClicked(event)" />
                    <h4 class="art-title text">Bleu et Jaune</h4>
                </div>
                <div class="art-image-container">
                    <img loading="lazy" src="https://source.unsplash.com/random/200x200?sig=12"
                        alt="Yellow Raincoat" onclick="handleGraphicDesignImageClicked(event)" />
                    <h4 class="art-title text">Yellow Raincoat</h4>
                </div>
                <div class="art-image-container">
                    <img loading="lazy" src="https://source.unsplash.com/random/200x200?sig=13"
                        alt="Chartreuse Bird" onclick="handleGraphicDesignImageClicked(event)" />
                    <h4 class="art-title text">Chartreuse Bird</h4>
                </div>
                <div class="art-image-container">
                    <img loading="lazy" src="https://source.unsplash.com/random/200x200?sig=14" alt="Cleanse"
                        onclick="handleGraphicDesignImageClicked(event)" />
                    <h4 class="art-title text">Cleanse</h4>
                </div>
                <div class="art-image-container">
                    <img loading="lazy" src="https://source.unsplash.com/random/200x200?sig=15"
                        alt="Stone Arch Bridge" onclick="handleGraphicDesignImageClicked(event)" />
                    <h4 class="art-title text">Stone Arch Bridge</h4>
                </div>
                <div class="art-image-container">
                    <img loading="lazy" src="https://source.unsplash.com/random/200x200?sig=16"
                        alt="Mont St. Michel" onclick="handleGraphicDesignImageClicked(event)" />
                    <h4 class="art-title text">Mont St. Michel</h4>
                </div>
                <div class="art-image-container">
                    <img loading="lazy" src="https://source.unsplash.com/random/200x200?sig=17" alt="Tourcoing"
                        onclick="handleGraphicDesignImageClicked(event)" />
                    <h4 class="art-title text">Tourcoing</h4>
                </div>
                <div class="art-image-container">
                    <img loading="lazy" src="https://source.unsplash.com/random/200x200?sig=18" alt="Hinckley Fire"
                        onclick="handleGraphicDesignImageClicked(event)" />
                    <h4 class="art-title text">Hinckley Fire</h4>
                </div>
                <div class="art-image-container">
                    <img loading="lazy" src="https://source.unsplash.com/random/200x200?sig=19" alt="Mann Study"
                        onclick="handleGraphicDesignImageClicked(event)" />
                    <h4 class="art-title text">Mann Study</h4>
                </div>
                <div class="art-image-container">
                    <img loading="lazy" src="https://source.unsplash.com/random/200x200?sig=20" alt="Answering Mann"
                        onclick="handleGraphicDesignImageClicked(event)" />
                    <h4 class="art-title text">Answering Mann</h4>
                </div>
                <div class="art-image-container">
                    <img loading="lazy" src="https://source.unsplash.com/random/200x200?sig=21" alt="Expose"
                        onclick="handleGraphicDesignImageClicked(event)" />
                    <h4 class="art-title text">Expose</h4>
                </div>
                <div class="art-image-container">
                    <img loading="lazy" src="https://source.unsplash.com/random/200x200?sig=22"
                        alt="Deconstructing Home I" onclick="handleGraphicDesignImageClicked(event)" />
                    <h4 class="art-title text">Deconstructing Home I</h4>
                </div>
                <div class="art-image-container">
                    <img loading="lazy" src="https://source.unsplash.com/random/200x200?sig=23"
                        alt="Deconstructing Home II" onclick="handleGraphicDesignImageClicked(event)" />
                    <h4 class="art-title text">Deconstructing Home II</h4>
                </div>
                <div class="art-image-container">
                    <img loading="lazy" src="https://source.unsplash.com/random/200x200?sig=24"
                        alt="Deconstructing Home III" onclick="handleGraphicDesignImageClicked(event)" />
                    <h4 class="art-title text">Deconstructing Home III</h4>
                </div>
            </div>
        </section>
        <section class="row-container l2">
            <h2 class="title">Mixed Media</h2>
            <div class="row">
                <div class="art-image-container">
                    <img loading="lazy" src="https://source.unsplash.com/random/200x200?sig=25" alt="Cami"
                        onclick="handleGraphicDesignImageClicked(event)" />
                    <h4 class="art-title text">Cami</h4>
                </div>
                <div class="art-image-container">
                    <img loading="lazy" src="https://source.unsplash.com/random/200x200?sig=26" alt="Sanguine Eyes"
                        onclick="handleGraphicDesignImageClicked(event)" />
                    <h4 class="art-title text">Sanguine Eyes</h4>
                </div>
                <div class="art-image-container">
                    <img loading="lazy" src="https://source.unsplash.com/random/200x200?sig=27" alt="Red"
                        onclick="handleGraphicDesignImageClicked(event)" />
                    <h4 class="art-title text">Red</h4>
                </div>
                <div class="art-image-container">
                    <img loading="lazy" src="https://source.unsplash.com/random/200x200?sig=28" alt="Sunset"
                        onclick="handleGraphicDesignImageClicked(event)" />
                    <h4 class="art-title text">Sunset</h4>
                </div>
                <div class="art-image-container">
                    <img loading="lazy" style="max-width:150px"
                        src="https://source.unsplash.com/random/200x200?sig=29"
                        alt="Evolution of Womanhood_ But Firts Lemme Take a Selfie"
                        onclick="handleGraphicDesignImageClicked(event)" />
                    <h4 class="art-title text">Evolution of Womanhood But Firts Lemme Take a Selfie</h4>
                </div>
            </div>
        </section>
        <section class="row-container l2">
            <h2 class="title">India Ink</h2>
            <div class="row">
                <div class="art-image-container">
                    <img loading="lazy" src="https://source.unsplash.com/random/200x200?sig=30"
                        alt="Connecting the Divide" onclick="handleGraphicDesignImageClicked(event)" />
                    <h4 class="art-title text">Connecting the Divide</h4>
                </div>
                <div class="art-image-container">
                    <img loading="lazy" src="https://source.unsplash.com/random/200x200?sig=31" alt="Line Series I"
                        onclick="handleGraphicDesignImageClicked(event)" />
                    <h4 class="art-title text">Line Series I</h4>
                </div>
                <div class="art-image-container">
                    <img loading="lazy" src="https://source.unsplash.com/random/200x200?sig=32" alt="Line Series II"
                        onclick="handleGraphicDesignImageClicked(event)" />
                    <h4 class="art-title text">Line Series II</h4>
                </div>
                <div class="art-image-container">
                    <img loading="lazy" src="https://source.unsplash.com/random/200x200?sig=33"
                        alt="Line Series III" onclick="handleGraphicDesignImageClicked(event)" />
                    <h4 class="art-title text">Line Series III</h4>
                </div>
                <div class="art-image-container">
                    <img loading="lazy" src="https://source.unsplash.com/random/200x200?sig=34" alt="Line Series IV"
                        onclick="handleGraphicDesignImageClicked(event)" />
                    <h4 class="art-title text">Line Series IV</h4>
                </div>
            </div>
        </section>
        <section class="row-container l2">
            <h2 class="title">Color Pencil</h2>
            <div class="row">
                <div class="art-image-container">
                    <img loading="lazy" src="https://source.unsplash.com/random/200x200?sig=35"
                        alt="Kiss Bug Vermillion" onclick="handleGraphicDesignImageClicked(event)" />
                    <h4 class="art-title text">Kiss Bug Vermillion</h4>
                </div>
                <div class="art-image-container">
                    <img loading="lazy" src="https://source.unsplash.com/random/200x200?sig=36" alt="Apples"
                        onclick="handleGraphicDesignImageClicked(event)" />
                    <h4 class="art-title text">Apples</h4>
                </div>
            </div>
        </section>
        <section class="row-container l2">
            <h2 class="title">Sculpture</h2>
            <div class="row">
                <div class="art-image-container">
                    <img loading="lazy" src="https://source.unsplash.com/random/200x200?sig=37" alt="Human Nest"
                        onclick="handleGraphicDesignImageClicked(event)" />
                    <h4 class="art-title text">Human Nest</h4>
                </div>
                <div class="art-image-container">
                    <img loading="lazy" src="https://source.unsplash.com/random/200x200?sig=38" alt="Human Nest II"
                        onclick="handleGraphicDesignImageClicked(event)" />
                    <h4 class="art-title text">Human Nest II</h4>
                </div>
            </div>
        </section>
        <section class="row-container l2">
            <h2 class="title">People Photography</h2>
            <div class="row">
                <div class="art-image-container">
                    <img loading="lazy" src="https://source.unsplash.com/random/200x200?sig=39" alt="La Vie en Rose"
                        onclick="handleGraphicDesignImageClicked(event)" />
                    <h4 class="art-title text">La Vie en Rose</h4>
                </div>
                <div class="art-image-container">
                    <img loading="lazy" src="https://source.unsplash.com/random/200x200?sig=40"
                        alt="Room of Ones Own" onclick="handleGraphicDesignImageClicked(event)" />
                    <h4 class="art-title text">Room of Ones Own</h4>
                </div>
                <div class="art-image-container">
                    <img loading="lazy" src="https://source.unsplash.com/random/200x200?sig=41" alt="Composure"
                        onclick="handleGraphicDesignImageClicked(event)" />
                    <h4 class="art-title text">Composure</h4>
                </div>
                <div class="art-image-container">
                    <img loading="lazy" src="https://source.unsplash.com/random/200x200?sig=42" alt="The Sitter"
                        onclick="handleGraphicDesignImageClicked(event)" />
                    <h4 class="art-title text">The Sitter</h4>
                </div>
                <div class="art-image-container">
                    <img loading="lazy" src="https://source.unsplash.com/random/200x200?sig=43"
                        alt="Jimmy Barthel is an Asshole" onclick="handleGraphicDesignImageClicked(event)" />
                    <h4 class="art-title text">Jimmy Barthel is an Asshole</h4>
                </div>
                <div class="art-image-container">
                    <img loading="lazy" src="https://source.unsplash.com/random/200x200?sig=44" alt="Three Worlds"
                        onclick="handleGraphicDesignImageClicked(event)" />
                    <h4 class="art-title text">Three Worlds</h4>
                </div>
                <div class="art-image-container">
                    <img loading="lazy" src="https://source.unsplash.com/random/200x200?sig=45" alt="Stillness"
                        onclick="handleGraphicDesignImageClicked(event)" />
                    <h4 class="art-title text">Stillness</h4>
                </div>
                <div class="art-image-container">
                    <img loading="lazy" src="https://source.unsplash.com/random/200x200?sig=46"
                        alt="BarcelonanBullfight" onclick="handleGraphicDesignImageClicked(event)" />
                    <h4 class="art-title text">Barcelonan Bullfight</h4>
                </div>
                <div class="art-image-container">
                    <img loading="lazy" src="https://source.unsplash.com/random/200x200?sig=47" alt="Sitting"
                        onclick="handleGraphicDesignImageClicked(event)" />
                    <h4 class="art-title text">Sitting</h4>
                </div>
                <div class="art-image-container">
                    <img loading="lazy" src="https://source.unsplash.com/random/200x200?sig=48" alt="Big World"
                        onclick="handleGraphicDesignImageClicked(event)" />
                    <h4 class="art-title text">Big World</h4>
                </div>
                <div class="art-image-container">
                    <img loading="lazy" src="https://source.unsplash.com/random/200x200?sig=49" alt="Oh Fame"
                        onclick="handleGraphicDesignImageClicked(event)" />
                    <h4 class="art-title text">Oh Fame</h4>
                </div>
                <div class="art-image-container">
                    <img loading="lazy" src="https://source.unsplash.com/random/200x200?sig=50"
                        alt="Spousal Arrest III" onclick="handleGraphicDesignImageClicked(event)" />
                    <h4 class="art-title text">Spousal Arrest III</h4>
                </div>
                <div class="art-image-container">
                    <img loading="lazy" src="https://source.unsplash.com/random/200x200?sig=51"
                        alt="Lucky Dichotomy" onclick="handleGraphicDesignImageClicked(event)" />
                    <h4 class="art-title text">Lucky Dichotomy</h4>
                </div>
                <div class="art-image-container">
                    <img loading="lazy" src="https://source.unsplash.com/random/200x200?sig=52" alt="Intersections"
                        onclick="handleGraphicDesignImageClicked(event)" />
                    <h4 class="art-title text">Intersections</h4>
                </div>
                <div class="art-image-container">
                    <img loading="lazy" src="https://source.unsplash.com/random/200x200?sig=53"
                        alt="The Eiffel Tower" onclick="handleGraphicDesignImageClicked(event)" />
                    <h4 class="art-title text">The Eiffel Tower</h4>
                </div>
                <div class="art-image-container">
                    <img loading="lazy" src="https://source.unsplash.com/random/200x200?sig=54" alt="The Pilrimage"
                        onclick="handleGraphicDesignImageClicked(event)" />
                    <h4 class="art-title text">The Pilrimage</h4>
                </div>
                <div class="art-image-container">
                    <img loading="lazy" src="https://source.unsplash.com/random/200x200?sig=55" alt="BLM I"
                        onclick="handleGraphicDesignImageClicked(event)" />
                    <h4 class="art-title text">BLM I</h4>
                </div>
                <div class="art-image-container">
                    <img loading="lazy" src="https://source.unsplash.com/random/200x200?sig=56" alt="BLM II"
                        onclick="handleGraphicDesignImageClicked(event)" />
                    <h4 class="art-title text">BLM II</h4>
                </div>
                <div class="art-image-container">
                    <img loading="lazy" src="https://source.unsplash.com/random/200x200?sig=57" alt="BLM III"
                        onclick="handleGraphicDesignImageClicked(event)" />
                    <h4 class="art-title text">BLM III</h4>
                </div>
                <div class="art-image-container">
                    <img loading="lazy" src="https://source.unsplash.com/random/200x200?sig=58" alt="BLM IV"
                        onclick="handleGraphicDesignImageClicked(event)" />
                    <h4 class="art-title text">BLM IV</h4>
                </div>
                <div class="art-image-container">
                    <img loading="lazy" src="https://source.unsplash.com/random/200x200?sig=59" alt="Speechless I"
                        onclick="handleGraphicDesignImageClicked(event)" />
                    <h4 class="art-title text">Speechless I</h4>
                </div>
                <div class="art-image-container">
                    <img loading="lazy" src="https://source.unsplash.com/random/200x200?sig=60" alt="Speechless II"
                        onclick="handleGraphicDesignImageClicked(event)" />
                    <h4 class="art-title text">Speechless II</h4>
                </div>
            </div>
        </section>
        <section class="row-container l2">
            <h2 class="title">Animal Photography</h2>
            <div class="row">
                <div class="art-image-container">
                    <img loading="lazy" src="https://source.unsplash.com/random/200x200?sig=61" alt="Green Heron "
                        onclick="handleGraphicDesignImageClicked(event)" />
                    <h4 class="art-title text">Green Heron </h4>
                </div>
                <div class="art-image-container">
                    <img loading="lazy" src="https://source.unsplash.com/random/200x200?sig=62" alt="Barred Owl"
                        onclick="handleGraphicDesignImageClicked(event)" />
                    <h4 class="art-title text">Barred Owl</h4>
                </div>
                <div class="art-image-container">
                    <img loading="lazy" src="https://source.unsplash.com/random/200x200?sig=63" alt="BarredOwlII"
                        onclick="handleGraphicDesignImageClicked(event)" />
                    <h4 class="art-title text">BarredOwlII</h4>
                </div>
                <div class="art-image-container">
                    <img loading="lazy" src="https://source.unsplash.com/random/200x200?sig=64" alt="White Ibis"
                        onclick="handleGraphicDesignImageClicked(event)" />
                    <h4 class="art-title text">White Ibis</h4>
                </div>
                <div class="art-image-container">
                    <img loading="lazy" src="https://source.unsplash.com/random/200x200?sig=65" alt="White IbisII"
                        onclick="handleGraphicDesignImageClicked(event)" />
                    <h4 class="art-title text">White IbisII</h4>
                </div>
                <div class="art-image-container">
                    <img loading="lazy" src="https://source.unsplash.com/random/200x200?sig=66" alt="Bison"
                        onclick="handleGraphicDesignImageClicked(event)" />
                    <h4 class="art-title text">Bison</h4>
                </div>
                <div class="art-image-container">
                    <img loading="lazy" src="https://source.unsplash.com/random/200x200?sig=67" alt="Caribou"
                        onclick="handleGraphicDesignImageClicked(event)" />
                    <h4 class="art-title text">Caribou</h4>
                </div>
                <div class="art-image-container">
                    <img loading="lazy" src="https://source.unsplash.com/random/200x200?sig=68" alt="BaldEagle"
                        onclick="handleGraphicDesignImageClicked(event)" />
                    <h4 class="art-title text">Bald Eagle</h4>
                </div>
                <div class="art-image-container">
                    <img loading="lazy" src="https://source.unsplash.com/random/200x200?sig=69" alt="Conversations"
                        onclick="handleGraphicDesignImageClicked(event)" />
                    <h4 class="art-title text">Conversations</h4>
                </div>
                <div class="art-image-container">
                    <img loading="lazy" src="https://source.unsplash.com/random/200x200?sig=70" alt="Otter"
                        onclick="handleGraphicDesignImageClicked(event)" />
                    <h4 class="art-title text">Otter</h4>
                </div>
                <div class="art-image-container">
                    <img loading="lazy" src="https://source.unsplash.com/random/200x200?sig=71" alt="The Purge"
                        onclick="handleGraphicDesignImageClicked(event)" />
                    <h4 class="art-title text">The Purge</h4>
                </div>
                <div class="art-image-container">
                    <img loading="lazy" src="https://source.unsplash.com/random/200x200?sig=72" alt="Fish Heads"
                        onclick="handleGraphicDesignImageClicked(event)" />
                    <h4 class="art-title text">Fish Heads</h4>
                </div>
                <div class="art-image-container">
                    <img loading="lazy" src="https://source.unsplash.com/random/200x200?sig=73" alt="Orcas"
                        onclick="handleGraphicDesignImageClicked(event)" />
                    <h4 class="art-title text">Orcas</h4>
                </div>
            </div>
        </section>
        <section class="row-container l2">
            <h2 class="title">Nature Photography</h2>
            <div class="row">
                <div class="art-image-container">
                    <img loading="lazy" src="https://source.unsplash.com/random/200x200?sig=74"
                        alt="1. Evening Haze" onclick="handleGraphicDesignImageClicked(event)" />
                    <h4 class="art-title text">Evening Haze</h4>
                </div>
                <div class="art-image-container">
                    <img loading="lazy" src="https://source.unsplash.com/random/200x200?sig=75" alt="2. Lights"
                        onclick="handleGraphicDesignImageClicked(event)" />
                    <h4 class="art-title text">Lights</h4>
                </div>
                <div class="art-image-container">
                    <img loading="lazy" src="https://source.unsplash.com/random/200x200?sig=76" alt="3. Lights II"
                        onclick="handleGraphicDesignImageClicked(event)" />
                    <h4 class="art-title text">Lights II</h4>
                </div>
                <div class="art-image-container">
                    <img loading="lazy" src="https://source.unsplash.com/random/200x200?sig=77" alt="4. Greensun"
                        onclick="handleGraphicDesignImageClicked(event)" />
                    <h4 class="art-title text">Greensun</h4>
                </div>
                <div class="art-image-container">
                    <img loading="lazy" src="https://source.unsplash.com/random/200x200?sig=78"
                        alt="5. Storm Warning" onclick="handleGraphicDesignImageClicked(event)" />
                    <h4 class="art-title text">Storm Warning</h4>
                </div>
                <div class="art-image-container">
                    <img loading="lazy" src="https://source.unsplash.com/random/200x200?sig=79" alt="6. GoldenHour"
                        onclick="handleGraphicDesignImageClicked(event)" />
                    <h4 class="art-title text">GoldenHour</h4>
                </div>
                <div class="art-image-container">
                    <img loading="lazy" src="https://source.unsplash.com/random/200x200?sig=80"
                        alt="7. Otter Island Botany Bay" onclick="handleGraphicDesignImageClicked(event)" />
                    <h4 class="art-title text">Otter Island Botany Bay</h4>
                </div>
                <div class="art-image-container">
                    <img loading="lazy" src="https://source.unsplash.com/random/200x200?sig=81"
                        alt="8. Morning Fences" onclick="handleGraphicDesignImageClicked(event)" />
                    <h4 class="art-title text">Morning Fences</h4>
                </div>
                <div class="art-image-container">
                    <img loading="lazy" src="https://source.unsplash.com/random/200x200?sig=82" alt="9. Idaho"
                        onclick="handleGraphicDesignImageClicked(event)" />
                    <h4 class="art-title text">Idaho</h4>
                </div>
                <div class="art-image-container">
                    <img loading="lazy" src="https://source.unsplash.com/random/200x200?sig=83"
                        alt="10. NC Waterfalls" onclick="handleGraphicDesignImageClicked(event)" />
                    <h4 class="art-title text">NC Waterfalls</h4>
                </div>
                <div class="art-image-container">
                    <img loading="lazy" src="https://source.unsplash.com/random/200x200?sig=84" alt="11. Fireworks"
                        onclick="handleGraphicDesignImageClicked(event)" />
                    <h4 class="art-title text">Fireworks</h4>
                </div>
            </div>
        </section>
        <section class="row-container l2">
            <h2 class="title">Walk About Photography</h2>
            <div class="row">
                <div class="art-image-container">
                    <img loading="lazy" src="https://source.unsplash.com/random/200x200?sig=85" alt="Bridge Panel"
                        onclick="handleGraphicDesignImageClicked(event)" />
                    <h4 class="art-title text">Bridge Panel</h4>
                </div>
                <div class="art-image-container">
                    <img loading="lazy" src="https://source.unsplash.com/random/200x200?sig=86" alt="Perspective"
                        onclick="handleGraphicDesignImageClicked(event)" />
                    <h4 class="art-title text">Perspective</h4>
                </div>
                <div class="art-image-container">
                    <img loading="lazy" src="https://source.unsplash.com/random/200x200?sig=87" alt="Light"
                        onclick="handleGraphicDesignImageClicked(event)" />
                    <h4 class="art-title text">Light</h4>
                </div>
                <div class="art-image-container">
                    <img loading="lazy" src="https://source.unsplash.com/random/200x200?sig=88" alt="Panel"
                        onclick="handleGraphicDesignImageClicked(event)" />
                    <h4 class="art-title text">Panel</h4>
                </div>
                <div class="art-image-container">
                    <img loading="lazy" src="https://source.unsplash.com/random/200x200?sig=89" alt="Sagrada"
                        onclick="handleGraphicDesignImageClicked(event)" />
                    <h4 class="art-title text">Sagrada</h4>
                </div>
                <div class="art-image-container">
                    <img loading="lazy" src="https://source.unsplash.com/random/200x200?sig=90" alt="Spain"
                        onclick="handleGraphicDesignImageClicked(event)" />
                    <h4 class="art-title text">Spain</h4>
                </div>
                <div class="art-image-container">
                    <img loading="lazy" src="https://source.unsplash.com/random/200x200?sig=91" alt="Walking path"
                        onclick="handleGraphicDesignImageClicked(event)" />
                    <h4 class="art-title text">Walking path</h4>
                </div>
                <div class="art-image-container">
                    <img loading="lazy" src="https://source.unsplash.com/random/200x200?sig=92"
                        alt="San Fran Bay Boat" onclick="handleGraphicDesignImageClicked(event)" />
                    <h4 class="art-title text">San Fran Bay Boat</h4>
                </div>
                <div class="art-image-container">
                    <img loading="lazy" src="https://source.unsplash.com/random/200x200?sig=93" alt="Skeleton"
                        onclick="handleGraphicDesignImageClicked(event)" />
                    <h4 class="art-title text">Skeleton</h4>
                </div>
                <div class="art-image-container">
                    <img loading="lazy" src="https://source.unsplash.com/random/200x200?sig=94" alt="Bridge Study"
                        onclick="handleGraphicDesignImageClicked(event)" />
                    <h4 class="art-title text">Bridge Study</h4>
                </div>
                <div class="art-image-container">
                    <img loading="lazy" src="https://source.unsplash.com/random/200x200?sig=95" alt="Textures"
                        onclick="handleGraphicDesignImageClicked(event)" />
                    <h4 class="art-title text">Textures</h4>
                </div>
            </div>
        </section>
        <!-- <section class="row-container l2">
            <h2 class="title">Section Title</h2>
            <div class="inner-row-container">
                <h3 class="title">Sub title</h3>
                <div class="row sub title">
                    title content
                </div>
            </div>
       
        </section> -->

        <section class="row-container l2">
            <h2 class="title">Films</h2>
            <div>

                <div class="video-container">
                    <video width="80%" controls>
                        <source
                            src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4"
                            type="video/mp4">
                        Your browser does not support the mp4 elements.
                    </video>
                    <h4 class="sub-title">Wait</h4>
                    <video width="80%" controls>
                        <source
                            src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4">
                        Your browser does not support the mov elements.
                    </video>
                    <h4 class="sub-title">Pepowina</h4>
                </div>
            </div>
        </section>
        <section class="contact-container">
            <span>Client Name</span>
            <br>
            <span class="phone">555-555-5555</span>
        </section>
    </div>
`;

        return returnHTML;
    }
}
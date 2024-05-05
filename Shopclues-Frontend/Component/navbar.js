
// navbar export function

function navbar(){
    return `<!-- header -> present above dropdown menu option -->

    <div class="header">
        <div id="sellList">
            <ul>
                <li style="border-right: 2px solid #757575; padding-right: 24px;">Sell With Us</li>
                <li style="border-right: 2px solid #757575; padding-right: 24px;">Call Us</li>
                <li>Download App</li>
                <li></li>
            </ul>
        </div>

        <!-- website logo -->

        <div id="logo">
            <a href="/index.html">
                <img src="data:image/png;base64,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" alt="logo">
            </a>
        </div>

        <!-- search box -->

        <div id="searchBar">
            <span>
                <input type="text" placeholder="Whatis on your mind today?" id="getinput">
                <button class="srch_btn">Search</button>
            </span>
        </div>

        <!-- login - cart - wishlist - location options -->

        <div id="sellListbtm">
            <ul>
                <li>
                    <span id="pin">421005</span><i class="fal fa-map-marker-alt"></i>
                </li>
                <li>
                    <i class="far fa-bell"></i>
                </li>
                <li>
                    <i class="far fa-heart"></i>
                </li>
                <li>
                    <a href="/Pages/CartPage.html"><i class="fal fa-shopping-cart" id="showcart"><span id="qty">1</span></i></a>
                    <div class="hover_content1">
                        <div id="quickCart">
                            <div class="nItems">
                                
                            </div>
                            <div class="listItem">
                                
                            </div>
                            <div class="btnContainer">
                                <a href="">View Cart</a>
                                <a href="">Place Order</a>
                            </div>
                        </div>
                    </div>
                </li>
                <li id="signin">
                    <a id="login_sucess">Sign In</a>
                    <div class="hover_content">
                        <div id="userHeading">
                            <i class="fal fa-user-circle"></i><span id="login_sucess1">Login/Register</span>
                            <p>Join VIP club</p>
                        </div>
                        <ul id="gotouserpage">
                            <li>
                                <i class="fal fa-clipboard-list"></i>
                                My Orders
                            </li>
                            <li>
                                <i class="fal fa-comment-alt-dots"></i>
                                My Returns
                            </li>
                            <li>
                                <i class="far fa-heart"></i>
                                Wishlist
                            </li>
                            <li>
                                <i class="fas fa-user-circle"></i>
                                My Profile
                            </li>
                            <li>
                                <i class="fal fa-comment-alt-dots"></i>
                                My Chat
                            </li>
                            <li>
                                <i class="fal fa-rupee-sign"></i>
                                My CluesBucks
                            </li>
                            <li>
                                <i class="fal fa-comment-alt-edit"></i>
                                My Feedback
                            </li>
                            <li>
                                <i class="fal fa-user-headset"></i>
                                Help & Support
                            </li>
                            <li>
                                <i class="fal fa-rupee-sign"></i>
                                My Favorite Stores
                            </li>
                            <li id="signout">
                                <i class="fal fa-sign-out"></i>
                                Sign Out
                            </li>
                        </ul>
                    </div>
                </li>
            </ul>
        </div>
    </div>
    <!-- end of header -->

    <!-- main navigation bar(dropdown options) -->

    <div class="main_navigation">
        <div id="wrapper">
            <ul>
                <!-- made in india logo -->

                <li id="madeIN">
                    <a href="">
                        <img src="https://images.shopclues.com/images/ui/madeinindia.png" alt="madeInIndia">
                    </a>
                </li>

                <!-- Mobiles & More dropdown options -->

                <li id="nav1">
                    <a href="/ProductListPage.html">Mobiles & More</a>
                    <div class="menu_wrap">
                        <div class="ul_menu_block">
                            <div id="column_1" class="s_col">
                                <ul>
                                    <li><strong><a href="/ProductListPage.html">Smartphones & Tablets</a></strong></li>
                                    <li><a href="/ProductListPage.html">I KALL</a></li>
                                    <li><a href="/ProductListPage.html">Mi</a></li>
                                    <li><a href="/ProductListPage.html">Realme</a></li>
                                    <li><a href="/ProductListPage.html">Samsung</a></li>
                                    <li><a href="/ProductListPage.html">Vivo</a></li>
                                    <li><a href="/ProductListPage.html">Oppo</a></li>
                                    <li><a href="/ProductListPage.html">Apple</a></li>
                                    <li><a href="/ProductListPage.html">Techno</a></li>
                                    <li><a href="/ProductListPage.html">Infinix</a></li>
                                    <li><a href="/ProductListPage.html">Micromax</a></li>
                                    <br>
                                    <li><strong>Refurbished Smartphones</strong></li>
                                    <br><br>
                                    <li><strong>Refurbished Feature Phones</strong></li>
                                </ul>
                            </div>
                            <div id="column_2" class="s_col">
                                <ul>
                                    <li><strong>Feature Phones</strong></li>
                                    <li>Micromax</li>
                                    <li>I KALL</li>
                                    <li>Nokia</li>
                                    <li>MTR</li>
                                    <li>Heemax</li>
                                    <li>Karbonn</li>
                                    <li>Kechaoda</li>
                                    <li>Gfive</li>
                                    <li>Blackbear</li>
                                    <li>Samsung</li>
                                    <br>
                                    <li><strong>Gaming Consoles</strong></li>
                                    <li>Gaming Titles</li>
                                    <li>Gaming Accessories</li>
                                </ul>
                            </div>
                            <div id="column_3" class="s_col">
                                <ul>
                                    <li><strong>Bestsellers in Accessories</strong></li>
                                    <li>Top Rated Accessories</li>
                                    <li>Combos</li>
                                    <li>Power Banks</li>
                                    <li>Cases & Covers</li>
                                    <li>Mobile Holders</li>
                                    <li>Cables</li>
                                    <li>Adapter & Chargers</li>
                                    <li>Selfie Sticks</li>
                                    <br>
                                    <li><strong>Storage Devices</strong></li>
                                    <li>Memory Cards</li>
                                    <li>Pen Drives</li>
                                    <li>External Hard disks</li>
                                </ul>
                            </div>
                            <div id="column_4" class="s_col">
                                <ul>
                                    <li><strong>Branded Accessories</strong></li>
                                    <li>Tiitan</li>
                                    <li>Toshiba</li>
                                    <li>Sandisk</li>
                                    <li>Philips</li>
                                    <li>Portronics</li>
                                    <li>Zebronics</li>
                                    <li>Boat</li>
                                    <li>Syska</li>
                                    <li>JBL</li>
                                    <br>
                                    <li><strong>Audio Store</strong></li>
                                    <li>Headphones & Earphones</li>
                                    <li>Bluetooth Earphones</li>
                                    <li>Bluetooth Speakers</li>
                                </ul>
                            </div>
                            <div id="column_5" class="s_col">
                                <ul>
                                    <li><strong>Laptops</strong></li>
                                    <li>HP</li>
                                    <li>Lenovo</li>
                                    <li>Asus</li>
                                    <li>Acer</li>
                                    <li>Coconics</li>
                                    <br>
                                    <li><strong>Refurbished Laptops</strong></li>
                                    <br>
                                    <li><strong>Laptop Accessories</strong></li>
                                    <li>Mouse</li>
                                    <li>Keyboards</li>
                                    <li>Laptop Bags</li>
                                    <li>Laptop Skins</li>
                                    <br>
                                    <li><strong>Printers</strong></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </li>
                <!-- End of Mobiles & More dropdown options -->

                <!-- MEN dropdown options -->

                <li id="nav2">
                    <a href="">MEN</a>
                    <div class="menu_wrap">
                        <div class="ul_menu_block">
                            <div id="column_1" class="s_col">
                                <ul>
                                    <li><strong>Men's Clothing</strong></li>
                                    <li>T-shirt</li>
                                    <li>Shirt</li>
                                    <li>Jeans</li>
                                    <li>Cargos</li>
                                    <li>Trousers</li>
                                    <li>Track Pants</li>
                                    <li>Shorts & 3/4th</li>
                                    <li>Jackets</li>
                                    <li>Ethnic Wear</li>
                                    <li>Winter wear</li>
                                    <li>Inner & Sleepwear</li>
                                    <li>29K Store</li>
                                    <br>
                                    <li><strong>Sportswear</strong></li>
                                </ul>
                            </div>
                            <div id="column_2" class="s_col">
                                <ul>
                                    <li><strong>Footwear</strong></li>
                                    <li>Casual Shoes</li>
                                    <li>Sports Shoes</li>
                                    <li>Formal Shoes</li>
                                    <li>Sandals & Floaters</li>
                                    <li>Slippers & Flip Flops</li>
                                    <li>Loafers And Moccasins</li>
                                    <li>Boots</li>
                                    <li>Ethnic</li>
                                    <li>Speciality Footwear</li>
                                    <li>Shoe Care Kit & Accessories</li>
                                    <li>Top Selling Brands</li>
                                </ul>
                            </div>
                            <div id="column_3" class="s_col">
                                <ul>
                                    <li><strong>Men's Watches</strong></li>
                                    <li>Watch Combos</li>
                                    <li>Couple Watches</li>
                                    <li>Fastrack, Sonata & More</li>
                                    <li>Budget Watches</li>
                                    <li>Smart Watches</li>
                                    <br>
                                    <li><strong>Men's Jewellery</strong></li>
                                    <li>Fashion Jewellery</li>
                                    <li>Chains & Pendants</li>
                                    <li>Precious Jewellery</li>
                                    <li>Silver Jewellery</li>
                                    <li>Coins & Collectibles</li>
                                </ul>
                            </div>
                            <div id="column_4" class="s_col">
                                <ul>
                                    <li><strong>Fragrances</strong></li>
                                    <li>Fragrance Combos and Kits</li>
                                    <li>Deodorants</li>
                                    <br>
                                    <li><strong>Grooming</strong></li>
                                    <li>Beard & Moustache Care</li>
                                    <li>Men's Shaving</li>
                                    <li>Grooming Appliances</li>
                                    <li>Bath Essentials</li>
                                    <li>Oral Care</li>
                                    <li>Skin Care</li>
                                    <li>Hair Care</li>
                                    <br>
                                    <li><strong>Eyewear</strong></li>
                                    <li>Sunglasses</li>
                                    <li>Spectacle Frames</li>
                                </ul>
                            </div>
                            <div id="column_5" class="s_col">
                                <ul>
                                    <li><strong>Fashion Accessories</strong></li>
                                    <li>Wallets</li>
                                    <li>Belts</li>
                                    <li>Socks</li>
                                    <li>Caps</li>
                                    <li>Winter Accessories</li>
                                    <li>Men's Accessories Gift Sets</li>
                                    <br>
                                    <li><strong>Bags & luggage</strong></li>
                                    <li>Backpacks & Laptop Bags</li>
                                    <li>Gym Bags</li>
                                    <li>Trolleys & Duffle Bags</li>
                                    <li>Travel Accessories</li>
                                    <li>Messenger Bags</li>
                                    <li>Rucksacks</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </li>
                <!-- End of MEN dropdown options -->

                <!-- WOMEN dropdown options -->

                <li id="nav3">
                    <a href="">WOMEN</a>
                    <div class="menu_wrap">
                        <div class="ul_menu_block">
                            <div id="column_1" class="s_col">
                                <ul>
                                    <li><strong>Ethnic Wear</strong></li>
                                    <li>Sarees</li>
                                    <li>Kurtas & Kurtis</li>
                                    <li>Lehengas & Party Gowns</li>
                                    <li>Dress Material</li>
                                    <li>Leggings & Churidar</li>
                                    <li>Meia Store</li>
                                    <br>
                                    <li><strong>Western Wear</strong></li>
                                    <li>Tops & Tees</li>
                                    <li>Dresses</li>
                                    <li>Jeans & Jeggings</li>
                                    <li>Pants & Trousers</li>
                                    <li>Skirts</li>
                                    <li>Code Yellow Store</li>
                                </ul>
                            </div>
                            <div id="column_2" class="s_col">
                                <ul>
                                    <li><strong>Lingerie</strong></li>
                                    <li>Bra</li>
                                    <li>Panties</li>
                                    <li>Sleepwear</li>
                                    <li>Shapewear</li>
                                    <li>Lingerie Sets</li>
                                    <br>
                                    <li><strong>Footwear</strong></li>
                                    <li>Casual Shoes</li>
                                    <li>Flats & Sandals</li>
                                    <li>Women's Heels & Pumps</li>
                                    <li>Women Sports Shoes</li>
                                    <li>Wedges</li>
                                    <li>Women's Bellies</li>
                                    <li>Flip Flops & Slippers</li>
                                </ul>
                            </div>
                            <div id="column_3" class="s_col">
                                <ul>
                                    <li><strong>All Jewellery</strong></li>
                                    <li>Fashion Jewellery</li>
                                    <li>Pendant & Necklace Sets</li>
                                    <li>Mangalsutra & Bangles</li>
                                    <li>Earrings & Rings</li>
                                    <li>Gold & Diamond Jewellery</li>
                                    <li>Silver Jewellery</li>
                                    <li>Coins & Collectibles</li>
                                    <br>
                                    <li><strong>Women's Watches</strong></li>
                                    <li>Casual Wear Watches</li>
                                    <li>Office Wear Watches</li>
                                    <li>Branded Watches</li>
                                    <li>Budget Watches</li>
                                    <br>
                                    <li><strong>Couple Watches</strong></li>
                                </ul>
                            </div>
                            <div id="column_4" class="s_col">
                                <ul>
                                    <li><strong>Beauty & Perfumes</strong></li>
                                    <li>Skin Care</li>
                                    <li>Make-Up</li>
                                    <li>Hair Care</li>
                                    <li>Personal Care & Grooming</li>
                                    <li>Beauty Accessories</li>
                                    <li>Grooming Appliances</li>
                                    <li>Bath Essentials</li>
                                    <li>Oral Care</li>
                                    <li>Women Hygiene</li>
                                    <br>
                                    <li><strong>Fragrances</strong></li>
                                    <li>Perfumes</li>
                                    <li>Deodorants</li>
                                </ul>
                            </div>
                            <div id="column_5" class="s_col">
                                <ul>
                                    <li><strong>Fashion Accessories</strong></li>
                                    <li>Socks & Stockings</li>
                                    <li>Hair Accessories</li>
                                    <li>Scarves & Stoles</li>
                                    <li>Belts</li>
                                    <li>Handkerchiefs</li>
                                    <li>Shawls</li>
                                    <br>
                                    <li><strong>Bags & luggage</strong></li>
                                    <li>Backpacks & Laptop Bags</li>
                                    <li>Gym Bags</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </li>
                <!-- End of WOMEN dropdown options -->
                
                <!-- HOME & KITCHEN dropdown options -->

                <li id="nav4">
                    <a href="">HOME & KITCHEN</a>
                    <div class="menu_wrap">
                        <div class="ul_menu_block">
                            <div id="column_1" class="s_col">
                                <ul>
                                    <li><strong>Kitchen & Dining</strong></li>
                                    <li>Dinner sets</li>
                                    <li>Cookware</li>
                                    <li>Container Sets</li>
                                    <li>Kitchen tools</li>
                                    <li>Lunch box</li>
                                    <li>Kitchen storage</li>
                                    <br>
                                    <li><strong>Kitchen Appliances</strong></li>
                                    <li>Gas Cooktops</li>
                                    <li>Juicer Mixer Grinders</li>
                                    <li>Induction Cooktops</li>
                                    <li>Kettles</li>
                                    <li>Sandwich Makers</li>
                                    <li>Blenders and choppers</li>
                                </ul>
                            </div>
                            <div id="column_2" class="s_col">
                                <ul>
                                    <li><strong>Home Furnishing</strong></li>
                                    <li>Home Berry</li>
                                    <li>Bedsheets</li>
                                    <li>Curtains</li>
                                    <li>Carpets & Rugs</li>
                                    <li>Blankets</li>
                                    <li>Towels</li>
                                    <li>Furnishing Combos</li>
                                    <br>
                                    <li><strong>Bathroom & Sanitaryware</strong></li>
                                    <li>Sanitaryware</li>
                                    <li>Bathroom Fixtures</li>
                                    <li>Bathing Utilities</li>
                                    <li>Bathroom Mirror and Cabinets</li>
                                    <li>Faucets and Jet sprays</li>
                                </ul>
                            </div>
                            <div id="column_3" class="s_col">
                                <ul>
                                    <li><strong>Lighting Solutions</strong></li>
                                    <li>Led bulbs</li>
                                    <li>Tubelights & Battens</li>
                                    <li>Rechargeable Lights</li>
                                    <li>Electrical</li>
                                    <li>Panel & Ceiling Lights</li>
                                    <br>
                                    <li><strong>Tools & Hardware</strong></li>
                                    <li>Hand Tools</li>
                                    <li>Power Tools</li>
                                    <li>Safety Equipments</li>
                                    <br>
                                    <li><strong>Home Improvement</strong></li>
                                    <li>Cleaning Supplies</li>
                                    <li>Laundry Organisation</li>
                                    <li>Organisers</li>
                                </ul>
                            </div>
                            <div id="column_4" class="s_col">
                                <ul>
                                    <li><strong>Decor</strong></li>
                                    <li>Clocks</li>
                                    <li>Hookahs & Accessories</li>
                                    <li>Wall Decor</li>
                                    <li>Religion & Spirituality</li>
                                    <li>Table Decoratives</li>
                                    <li>Garden</li>
                                    <br>
                                    <li><strong>Furniture</strong></li>
                                    <li>Inflatable Sofas</li>
                                    <li>Storage Furniture</li>
                                    <li>Bean Bags</li>
                                    <li>Wall Shelves</li>
                                    <li>Sofa Sets</li>
                                    <li>Beds</li>
                                </ul>
                            </div>
                            <div id="column_5" class="s_col">
                                <ul>
                                    <li><strong>Home Appliance</strong></li>
                                    <li>Water Purifiers</li>
                                    <li>Irons</li>
                                    <li>Emergency Lights</li>
                                    <li>Sewing Machines</li>
                                    <li>Vacuum Cleaners</li>
                                    <li>Appliances Parts & Components</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </li>
                <!-- End of HOME & KITCHEN dropdown options -->

                <!-- APPLIANCES dropdown options -->

                <li id="nav5">
                    <a href="">APPLIANCES</a>
                    <div class="menu_wrap">
                        <div class="ul_menu_block">
                            <div id="column_1" class="s_col">
                                <ul>
                                    <li><strong>TV & DTH</strong></li>
                                    <li>Television</li>
                                    <li>Full HD</li>
                                    <li>HD Ready</li>
                                    <li>Ultra HD</li>
                                    <br>
                                    <li><strong>Shop TV By Screen</strong></li>
                                    <li>Below 32 Inch</li>
                                    <li>32 Inch</li>
                                    <li>39 Inch - 42 Inch</li>
                                    <li>43 Inch & Above</li>
                                    <br>
                                    <li><strong>DTH</strong></li>
                                </ul>
                            </div>
                            <div id="column_2" class="s_col">
                                <ul>
                                    <li><strong>Large Home Appliances</strong></li>
                                    <li>Air Conditioners</li>
                                    <li>Split ACs</li>
                                    <li>Window Acs</li>
                                    <br>
                                    <li><strong>Stabilizers</strong></li>
                                    <br>
                                    <li><strong>Air Coolers</strong></li>
                                    <br>
                                    <li><strong>Air Purifiers And De-Humidifiers</strong></li>
                                    <br>
                                    <li><strong>Refrigerators</strong></li>
                                    <li>Single Door</li>
                                    <li>Double Door</li>
                                    <li>Side by Side</li>
                                </ul>
                            </div>
                            <div id="column_3" class="s_col">
                                <ul>
                                    <li><strong>Washing Machine</strong></li>
                                    <li>Semi Automatic</li>
                                    <li>Fully Automatic Top Load</li>
                                    <li>Fully Automatic Front Load</li>
                                    <br>
                                    <li><strong>Geysers</strong></li>
                                    <br>
                                    <li><strong>Heaters</strong></li>
                                    <br>
                                    <li><strong>Inverters</strong></li>
                                    <br>
                                    <li><strong>Large Kitchen Appliances</strong></li>
                                    <li>Chimney & Hoods</li>
                                    <li>Microwave and Halogen Ovens</li>
                                    <li>OTG</li>
                                    <li>Dishwashers</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </li>
                <!-- End of APPLIANCES dropdown options -->

                <!-- SPORTS & MORE dropdown options -->

                <li id="nav6">
                    <a href="">SPORTS & MORE</a>
                    <div class="menu_wrap">
                        <div class="ul_menu_block">
                            <div id="column_1" class="s_col">
                                <ul>
                                    <li><strong>Diet Nutrition</strong></li>
                                    <li>Whey Protein</li>
                                    <li>Weight Gainers</li>
                                    <li>Pre & Post Workout</li>
                                    <li>Fat Burners</li>
                                    <li>Vitamins & Minerals</li>
                                    <li>Ayurveda & Herbal</li>
                                    <br>
                                    <li><strong>Healthcare</strong></li>
                                    <li>Flu Care</li>
                                    <li>Massage & Relaxation</li>
                                    <li>Weighing Scales</li>
                                    <li>BP Monitors</li>
                                    <li>Supports & Elderly Care</li>
                                    <li>General Wellness</li>
                                </ul>
                            </div>
                            <div id="column_2" class="s_col">
                                <ul>
                                    <li><strong>Fitness & Exercise</strong></li>
                                    <li>Ab Exercisers</li>
                                    <li>Home Gyms</li>
                                    <li>Exercise Bikes</li>
                                    <li>Fitness Accessories</li>
                                    <li>Treadmills</li>
                                    <li>Cardio Equipments</li>
                                    <br>
                                    <li><strong>Sports</strong></li>
                                    <li>Cricket Bats</li>
                                    <li>Footballs</li>
                                    <li>Badminton Racquets</li>
                                    <li>Table Tennis</li>
                                    <li>Basketball</li>
                                    <li>Swimming & Water Sports</li>
                                </ul>
                            </div>
                            <div id="column_3" class="s_col">
                                <ul>
                                    <li><strong>Car Accessories & Electronics</strong></li>
                                    <li>Perfumes & Fresheners</li>
                                    <li>Dashboard Accessories</li>
                                    <li>Sun Shades</li>
                                    <li>Car Body Covers</li>
                                    <li>Door & Bumper Guards</li>
                                    <li>Car Electronics</li>
                                    <br>
                                    <li><strong>Bike Accessories & more</strong></li>
                                    <li>Bike Body Covers</li>
                                    <li>Riding Gear</li>
                                    <li>Helmets</li>
                                    <li>Bike Locks & Alarm Systems</li>
                                    <li>Car & Bike Care</li>
                                    <li>Tools & Oils</li>
                                </ul>
                            </div>
                            <div id="column_4" class="s_col">
                                <ul>
                                    <li><strong>Beauty & Perfumes</strong></li>
                                    <li>Skin Care</li>
                                    <li>Make-Up</li>
                                    <li>Hair Care</li>
                                    <li>Personal Care & Grooming Products</li>
                                    <li>Beauty Accessories</li>
                                    <br>
                                    <li><strong>Grooming</strong></li>
                                    <li>Fragrance Combos and Kits</li>
                                    <li>Beard & Moustache Care</li>
                                    <li>Men's Shaving</li>
                                    <li>Grooming Appliances</li>
                                    <li>Bath Essentials</li>
                                    <li>Oral Care</li>
                                </ul>
                            </div>
                            <div id="column_5" class="s_col">
                                <ul>
                                    <li><strong>Daily Needs & Essentials</strong></li>
                                    <li>Food & Beverages</li>
                                    <li>Household Supplies</li>
                                    <li>Pet Suplies</li>
                                    <li>Regional Sweets and snacks</li>
                                    <li>Stationery</li>
                                    <li>Books</li>
                                    <br>
                                    <li><strong>Gift Cards</strong></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </li>
                <!-- End of SPORTS & MORE dropdown options -->

                <!-- ESSENTIALS dropdown options -->

                <li id="nav7">
                    <a href="">ESSENTIALS</a>
                    <div class="menu_wrap">
                        <div class="ul_menu_block">
                            <div id="column_1" class="s_col">
                                <ul>
                                    <li><strong>Food and Beverage</strong></li>
                                    <li>Oils & Vinegars</li>
                                    <li>Pastas & Noodles</li>
                                    <li>Coffee & Tea</li>
                                    <li>Cakes Biscuits & Chips</li>
                                    <li>Dry Fruits Nuts & Seeds</li>
                                    <li>Jams Honey & Spreads</li>
                                    <li>Mouth Freshners & Digestives</li>
                                    <li>Ready to cook</li>
                                    <li>Sauces Dips & Pickles</li>
                                    <br>
                                    <li><strong>Grocery & Staples</strong></li>
                                    <li>Rice & Flours</li>
                                    <li>Pulses</li>
                                    <li>Sugar & Jaggery</li>
                                </ul>
                            </div>
                            <div id="column_2" class="s_col">
                                <ul>
                                    <li><strong>Household Supplies</strong></li>
                                    <li>Laundry and Detergents</li>
                                    <li>Disposables</li>
                                    <li>Pooja Essentials</li>
                                    <li>Repellents & Devices</li>
                                    <br>
                                    <li><strong>Ayurveda & Herbal</strong></li>
                                    <br>
                                    <li><strong>Flu Care</strong></li>
                                    <br>
                                    <li><strong>Medical Equipment & Accessories</strong></li>
                                    <br>
                                    <li><strong>Nutrition & Supplements</strong></li>
                                    <li>Ayurveda & Herbal</li>
                                    <li>Family Nutrition</li>
                                    <li>Vitamins and Minerals</li>
                                </ul>
                            </div>
                            <div id="column_3" class="s_col">
                                <ul>
                                    <li><strong>Personal Care and Grooming</strong></li>
                                    <li>Men's Grooming</li>
                                    <li>Feminine Hygiene</li>
                                    <li>Oral Care</li>
                                    <li>Hair Care</li>
                                    <li>Fragrances</li>
                                    <br>
                                    <li><strong>Baby Care</strong></li>
                                    <li>Baby Food</li>
                                    <li>Bath & Skin Care</li>
                                    <li>Diapers & Wipes</li>
                                    <li><strong>Pet Supplies</strong></li>
                                </ul>
                            </div>
                            <div id="column_4" class="s_col">
                                <ul>
                                    <li><strong>Top Brands</strong></li>
                                    <br>
                                    <li><strong>Himalaya</strong></li>
                                    <br>
                                    <li><strong>Cadbury</strong></li>
                                    <br>
                                    <li><strong>Veet</strong></li>
                                    <br>
                                    <li><strong>Pharma</strong></li>
                                    <li>Ayurveda</li>
                                    <li>Pain Relief</li>
                                    <li>Sexual Wellness</li>
                                    <li>Homeopathy</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </li>
                <!-- End of ESSENTIALS dropdown options -->

                <!-- OFFERS dropdown options -->

                <li id="nav8">
                    <a href="">OFFERS</a>
                    <div class="menu_wrap">
                        <div class="ul_menu_block">
                            <div id="column_1" class="s_col">
                                <ul>
                                    <li><strong>All Offers</strong></li>
                                    <br>
                                    <li><strong>Kotra Top Sellers</strong></li>
                                    <br>
                                    <li><strong>Season Essentials</strong></li>
                                    <li>Womens Tops & Skirts</li>
                                    <li>FlipFlops</li>
                                    <li>Mens Shorts</li>
                                    <br>
                                    <li><strong>Kitchen Essentials</strong></li>
                                    <br>
                                    <li><strong>Popular Categories</strong></li>
                                    <li>Women Ethnic</li>
                                    <li>Mens Tshirt</li>
                                    <li>Watches</li>
                                    <li>Mens Footwear</li>
                                    <li>Women Western</li>
                                    <li>Home Furnishing</li>
                                </ul>
                            </div>
                            <div id="column_2" class="s_col">
                                <ul>
                                    <li><strong>Wholesale</strong></li>
                                    <li>Mobile and Laptop Accessories</li>
                                    <li>Fashion</li>
                                    <li>Home & Kitchen</li>
                                    <li>Footwear</li>
                                    <br>
                                    <li><strong>Featured Brands</strong></li>
                                    <li>Stylogue</li>
                                    <li>Ikall</li>
                                    <li>eglob</li>
                                    <li>Walltola</li>
                                    <li>Seagate HD</li>
                                    <li>DCH</li>
                                </ul>
                            </div>
                            <div id="column_3" class="s_col">
                                <ul>
                                    <li><strong>New Arrivals</strong></li>
                                    <li>Lifestyle</li>
                                    <li>Home & Living</li>
                                    <li>Electronic</li>
                                    <li>Daily Utility</li>
                                    <br>
                                    <li><strong>Explore Our Stores</strong></li>
                                    <li>Saree Fest</li>
                                    <li>Watch Carnival</li>
                                    <li>Lighting Shoppe</li>
                                    <li>Jeans Fest</li>
                                    <li>Mobile Accessories</li>
                                    <li>Bed Sheets</li>
                                </ul>
                            </div>
                            <div id="column_4" class="s_col">
                                <ul>
                                    <li><strong>Shop By Price</strong></li>
                                    <li>Under 99</li>
                                    <li>Under 199</li>
                                    <li>Under 249</li>
                                    <li>Under 349</li>
                                    <br>
                                    <li><strong>Shop By Discount</strong></li>
                                    <li>Upto 25% Off</li>
                                    <li>Upto 50% Off</li>
                                    <li>Upto 60% Off</li>
                                    <li>Upto 80% Off</li>
                                </ul>
                            </div>
                            <div id="column_5" class="s_col">
                                <ul>
                                    <li><strong>Buy More Save More</strong></li>
                                    <li>Ethnic Wear Combo</li>
                                    <li>Men Combo</li>
                                    <li>Watch Combo</li>
                                    <li>Footwear Combo</li>
                                    <br>
                                    <li><strong>Best Offers</strong></li>
                                    <li>Korean Avenue</li>
                                    <li>Refer & Earn</li>
                                    <li>Wholesale</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </li>
                <!-- End of OFFERS dropdown options -->
                
                <!-- GLOBAL SHOPPING options -->

                <li id="nav9">
                    <a href="">GLOBAL SHOPPING</a>
                </li>
            </ul>
        </div>
    </div>


    <!-- popup Window signin and regiser page -->

    <div id="back">
        <div class="popup_signin">
            <div class="points">
                <ul>
                    <li>
                        <i class="fas fa-hand-holding-usd"></i>
                        <h6>Loyalty Points</h6>
                        <p>Earn CluesBucks on prepaid orders</p>
                    </li>
                    <li>
                        <i class="fas fa-cart-arrow-down"></i>
                        <h6>Instant Checkout</h6>
                        <p>Hassle-Free Payment Everytime</p>
                    </li>
                    <li>
                        <i class="fas fa-badge-percent"></i>
                        <h6>Exclusive Offers</h6>
                        <p>For special offers & value deals</p>
                    </li>
                </ul>
            </div>
            <div id="page_signin">
                <div id="select_op">
                    <h2 id="showin">LOGIN</h2>
                    <h2 id="showster">REGISTER</h2>
                    <button id="closetab"><i class="fal fa-times"></i></button>
                </div>
                <div class="signinShow">
                    <form>
                        <input type="text" placeholder="Enter your username" id="username2">
                        <br><br>
                        <input type="password" placeholder="Enter your password" id="password2">
                        <br><br>
                        <input type="submit" value="Login" id="checkdetail">
                    </form>
                    <h3>Social Login</h3>
                    <button>Continue with Facebook</button>
                </div>
                <div class="signup">
                    <form>
                        <input type="email" placeholder="Enter your email id" id="email">
                        <br>
                        <p id="emailError"></p>
                        <input type="number" placeholder="Enter your mobile number" id="number">
                        <br>
                        <p id="MobileError"></p>
                        <input type="text" placeholder="Enter your username" id="username1">
                        <br>
                        <p id="UsernameError"></p>
                        <input type="password" placeholder="Enter your password" id="password1">
                        <br>
                        <p id="PasswordError"></p>
                        <input type="submit" value="Register" id="storedetail">
                    </form>
                    <h3>Register With</h3>
                    <button>Continue with Facebook</button>
                </div>
            </div>
        </div>
    </div>`
}

export default navbar;
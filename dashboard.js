function printSkinType() {
    const skinTypeSelect = document.getElementById('skin-type');
    const selectedValue = skinTypeSelect.value;
    const routineOutput = document.getElementById('routine-output');
    
    let routineMessage = '';

    switch (selectedValue) {
        case 'Oily':
            routineMessage = `
                <h2>Oily Skin Care Routine</h2>
                <p><h2>Skincare routine for oily skin </h2><br>
                For oily skin, a well-crafted skincare routine is crucial to control oil production, shrink pores, and smooth out texture. Here are some key steps to follow:
                <ol>
                <li><b>Cleansing:</b> Cleansing is the most important step in any skincare routine, and it’s especially crucial for oily skin. Use a gentle, non-comedogenic cleanser that won’t clog pores or irritate the skin. Look for a cleanser that is fragrance-free and labeled as “non-comedogenic” or “oil-free.” Cleanse your face twice a day, morning and night, making sure to rinse all the cleanser off your face completely.</li>
                
                <li><b>Moisturizing:</b> Moisturizing is often overlooked in oily skin routines, but it’s essential to keep the skin hydrated to prevent it from producing even more oil. Look for a lightweight, oil-free moisturizer that won’t clog pores. Apply a small amount to the face and neck, avoiding the T-zone (chin, nose, and forehead).</li>
                
                <li><b>Sunscreen:</b> Sunscreen is a must-have in any skincare routine, regardless of skin type. For oily skin, look for a lightweight, oil-free sunscreen with an SPF of at least 30. Apply it to the face and neck after moisturizing.</li>
                
                <li><b>Exfoliating:</b> Exfoliating helps remove dead skin cells and unclog pores, which can help reduce the appearance of pores and control oil production. Use a gentle exfoliating scrub or a chemical exfoliant containing alpha-hydroxy acids (AHAs) or beta-hydroxy acids (BHAs) one to three times a week.</li></ol><br>
                
                Spot treatments: For areas of the face that are particularly oily or acne-prone, use a spot treatment containing salicylic acid or benzoyl peroxide to help control oil production and reduce acne.</p>
            `;
            break;
        case 'Dry':
            routineMessage = `
                <h2>Dry Skin Care Routine</h2>
                <p>Best skin care routine for dry skin on face
                While the causes may differ, anyone can practice a skin routine for dry skin that will be to their benefit.<br>
                
                “As skin dries, it shrinks and causes cracks, which can get deep, painful, and even start to bleed. Cracks allow germs and bacteria to enter the body, which can potentially lead to a skin infection,” says Melanie Speed, RN, BSN, CAN, and owner of Flawless Aesthetics.<br>
                
                When it comes to a skin care routine for dry skin, keep the five steps listed below in mind:
                <br><ol>
                <li><b>Cleanse</b> with a hydrating cleanser that doesn’t disrupt the outer skin layer.</li>
                <li><b>Tone</b> with an alcohol-free toner to restore skin pH.</li>
                <li>Target specific skin concerns with a serum.</li>
                <li><b>Moisturize</b> with a nourishing, noncomedogenic moisturizer to lock in hydration.</li>
                <li><b>Protect</b> from harmful ultraviolet (UV) rays to prevent sun damage.</li></ol></p>

                <p><h2>Best skin care routine for dry skin with acne</h2><br>
                A few tips can help you clear up blemishes and hydrate at the same time:
                <ol>
                <li>Avoid heavy products like oil-based lotions, moisturizers, and sunscreens.</li>
                <li>Only cleanse the face once per day.</li>
                <li>Avoid exfoliating, which can dry out the skin.</li>
                <li>Go easy on drying ingredients like benzoyl peroxide and salicylic acid.</li></ol><br>
                Remember that alcohol, dyes, and fragrances may be irritating to sensitive skin. It’s best to look for noncomedogenic products.
                <br>
                <h2>Best all-natural skin care routine for dry skin</h2><br>
                There are plenty of natural remedies for dry skin, and some work great for the face.
                <br>
                Coconut oil is an emollient that can be used on sensitive areas, like the under-eyes and around the mouth.
                <br>
                Oatmeal is another soothing ingredient that can help relieve redness and itching.
                <br>
                You can use it in a homemade face mask.
                <br>
                Increasing your intake of omega-3s is another great way to address dryness. Try adding flaxseeds, salmon, and walnuts to your diet.</p>
            `;
            break;
        case 'Normal':
            routineMessage = `
            <h2>The ultimate skin care routine for normal skin</h2><br>
With no major skin concerns to tackle, it can be challenging to know where to begin when creating a skin care routine for normal skin.<br>

There’s no better place to start than with the basics. These include:<br>
<ol>
<li><b>Cleanse</b> twice a day with a gentle, nonfoaming cleanser.</li>
<li><b>Moisturize</b> with a light, hydrating moisturizer.</li>
<li><b>Protect</b> your skin from sun damage with an SPF of 30 or more.</li>
</ol>
A moisturizer containing hyaluronic acid. As a bonus step, you can treat the skin with a serum to brighten, hydrate, or smooth.

                <h2>Normal Skin Care Routine</h2>
                <p><h2>The best skin care routine for normal skin with acne</h2><br>
                Acne is often most associated with oily skin, but normal skin types can get breakouts too.
                <br>
                This can happen when the delicate balance of the skin is upset, triggering the production of excess oil that clogs pores.
                <br>
                Try the following:
                <br><ol>
                <li>Spot treat your breakouts with salicylic acid or benzoyl peroxide.</li>
                <li>Avoid overexfoliating. Remember, gentle cleansing is key.</li>
                <li>Swap heavier moisturizers for lighter, oil-free options.</li>
                <li>Avoid products containing alcohol.</li>
                </ol>
                <h2>The best all-natural skin care routine for normal skin</h2><br>
                There are many natural products believed to treat common skin care concerns. Some you’ll even find in your kitchen.
                <br>
                For example, coconut oil can add moisture, and oatmeal calms irritation.
                <br>
                Another natural ingredient you’ll often find in skin care products is rosehip oil, which may help with signs of aging, hyperpigmentation, and mild acne.
                <br>
                <h2>How to keep it cheap</h2><br>
                Good news! You don’t have to spend big to keep normal skin looking its best. There are skin care products to suit every budget.
                <br>
                To get the most bang for your buck, look out for active ingredients and check the dose listed on the packaging. For instance, active ingredients like hyaluronic acid and vitamin C are usually listed with a percentage.
                <br>
                Try to avoid anything overly harsh or drying.
                <br>
                <h2>Best skin care routine for men with normal skin</h2><br>
                Spoiler alert: the advice for men is exactly the same as for any other gender.
                <br>
                The only difference is that people who shave their faces should follow up with a shaving balm that doesn’t irritate or strip the skin.
                <br>
                “Immediately post-shave, the skin may be more sensitive, so using an anti-inflammatory such as hyaluronic acid and SPF is very important,”.</p>
            `;
            break;
        case 'Sensitive':
            routineMessage = `
                <h2>Sensitive Skin Care Routine</h2>
                <p><h2>A 5-Step Skincare Routine for Sensitive Skin</h2><br>
                <h2>STEP 1: Cleanser</h2>
                Any skincare routine should begin with a cleanser. You can have the best products that money can buy, but if you’re layering them on top of dirt, pollution, makeup, sunscreen and other impurities that can linger on the skin’s surface, they aren’t going to do their job. By not cleansing your skin, you risk clogged pores, which can lead to everything from breakouts and irritation to dull skin. Look for a gentle formula that won’t strip your skin of necessary oils.<br>
               <h2> STEP 2: Alcohol-Free Toner</h2><br>
Toners offer a wide range of benefits, including balancing the skin’s pH levels post-cleansing, soothing the skin and removing any lingering bits of residue or dirt. Sensitive skin types can benefit from using a toner but should steer clear of those formulated with too much alcohol or astringent ingredients.<br>
<h2>STEP 3: Serum</h2><br>
Serums are a great addition to any skincare routine, as they can target specific concerns such as wrinkles, fine lines, dark spots and more. Serum helps maintain the skin’s moisture levels and reduces the appearance of redness.<br>
<h2>STEP 4: Moisturizer</h2><br>
While your skin is still slightly damp, reach for a non-comedogenic, fragrance-free cream, gel or water-based moisturizer. Keeping your skin well-hydrated will help reduce your risk of irritation.
<br>
<h2>STEP 5: Sunscreen</h2><br>
If there’s one product every skin type needs to wear daily, it’s sunscreen. Not only can it prevent skin cancer, it can also ward off skin damage that causes a weakened skin barrier and sensitivities. Reach for a sunscreen that's sensitive skin-safe.
<br>                
                </p>
            `;
            break;
        default:
            routineMessage = '<p>Please select a skin type.</p>';
            break;
    }

    routineOutput.innerHTML = routineMessage;
}

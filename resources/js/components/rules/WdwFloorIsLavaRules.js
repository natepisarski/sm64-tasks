export const WdwFloorIsLavaRules = () => {
    return <div className={'rules list-disc'}>
        {/* Introduction */}
        <div className={'font-semibold text-gray-700'}>
            Wet Dry World is Super Mario 64's most puzzly stage.
            In the same spirit, your goal will be to find a way to <b>Collect the most coins as possible</b>, without
            touching
            the water or the dark brick texture.<br />

            In this task, <b>you will get as many coins in possible in Wet Dry World</b>. The _only_ other rules are:<br /><br />

            <ul className={'list-disc'}>
                <li> You can't touch water</li>
                <li>You can't touch the brick texture (the dark bricks; see image)</li>
                <li>You can't touch the red switch by the elevator - see "Specifics"</li>
            </ul>
            <br />
            <code>"touch"</code> means to stand on, slide on, jump on, etc. <b>You are allowed to wallkick off these
            textures, or push them.</b>
            <br />
            Whoever can collect the most coins wins. Although a tie is extremely unlikely, they will be broken by time -
            so make sure <code>MISCTMR</code> and <code>COIN</code> are on.
            <br />
            <div className={'text-3xl my-6'}>Specifics</div>
            <ul className={'list-disc'}>
                <li> You can start from a save-state on the original platform. Any time already on the clock will be
                    deducted.
                </li>
                <li> (this is because WDW has a super long entry animation)</li>
                <li><b>Once you touch a banned texture</b>, you will stop moving. However, any coins collected AFTER you
                    stop still count.
                </li>
                <li> Everything else is fair-game. You can use the cannon, you can BLJ, you can manipulate the
                    heave-hos, etc.
                </li>
            </ul>

            <div className={'text-3xl text-red-600 my-6'}>DO NOT USE THIS SWITCH</div>
            <img src={'https://i.imgur.com/0P25SXY.png'} height={512} width={512} />

                When the switch is depressed, it becomes _extremely_ subjective whether you're on the bricks or not. So
                to avoid any drama over this, it's just banned.

                <div className={'text-2xl my-4'}>Allowed Brick Textures</div>

                There are multiple kinds of brick that are <b>okay</b>:<br />
                <ul className={'list-disc'}>
                    <li> White Brick (i.e where the row of coins / water level switcher is) / where the 1-ups are</li>
                    <li> Gray brick (i.e where the cannon is)</li>
                    <li> Dark-white brick (i.e the walls of WDW)</li>
                    <li> Tile (i.e platforms near <code>Shocking Arrow Lifts</code>)</li>
                    <li> Granite (i.e where the blue coin switch is)</li>
                </ul>

                <div className={'text-3xl my-6'}>Hints</div>

                <ul className={'list-disc'}>
                    <li>The first 10 coins are by far the hardest</li>
                    <li>Without giving an exact number; it's possible to get more than 50 coins.</li>
                </ul>

                <div className={'text-3xl my-6'}>Edge Cases</div>
                <ul className={'list-disc'}>
                    <li>If a heave-ho is on dark bricks, and you land on it / get thrown, you haven't touched dark
                        bricks.
                    </li>

                    <li>You ARE allowed to touch water, if you're doing it while ledge-grabbing. Or if it's the result
                        of
                        a platform tipping into the water slightly.
                    </li>
                </ul>

                <img src={'https://i.imgur.com/KF4JM9j.png'} height={512} width={512} />

                <div className={'text-4xl'}>
                    If you can collect the 100 coin star, you will automatically win this task. I'm _fairly_ confident it's
                    impossible, so it would be a truly amazing feat if you can figure it out.
                </div>


        </div>
    </div>
};

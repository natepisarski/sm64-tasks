import {Ruleset} from "./helpers/Ruleset";
import {RuleList} from "./helpers/RuleList";

export const SlSlopeMasterRules = () => {
    return <Ruleset>
        This is August Task 1. The task is designed to encourage the use of slopes in
        several different ways. Depending on how you do it, most of the task can be done
        at 50+ speed. <br/><br/>

        Being a short movement-based task, the rules are pretty straight-forward:<br/><br/>

        <RuleList>
            <p> You start from a save-state on the lower tree on the Snowman. You may be on any part of the tree, facing any direction. </p>
            <p> You must collect the first red coin. This is the red coin next to 'Whirl into the freezing pond', and the box containing the shell. </p>
            <p> Finally, you will collect 'In the Deep Freeze'. The clock stops on star-grab. </p>
        </RuleList>

        Even more specific rules:<br /> <br />
        <RuleList>
            <p>Tasks must be done in that order.</p>
            <p>You can set the world up in advance. Before you set your save-state on the tree, you can kill any enemy, or break any box. You just can't collect Red Coin 1 before the clock starts.</p>
        </RuleList>

        The preferred deadline for task submissions is August 13th, 10:00pm EDT. The results stream is held the next day, August 14th at 11:30am EDT. <br/><br/>

        I am doing this task as well (but not competing). If you beat my time, I will give you 1 month of Discord Nitro (up to 3 people). If more than 3 people beat my time I'll give it to the top 3.
    </Ruleset>
};

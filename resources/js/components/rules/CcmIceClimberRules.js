import {Ruleset} from "./helpers/Ruleset";
import {DiscordNitroDisclaimer} from "./helpers/DiscordNitroDisclaimer";

export const CcmIceClimberRules = () => {
    return <Ruleset>
        <p>
            For this task, you will start at <b>05 01 20</b> in CCM. This is leaving the teleporter, coming out on the bottom of the mountain <br />
            near the penguin. From here, your task is to get the red coin that's near the gigantic ice spike.<br/><br/>
            That red coin is shown in the Task Picture.
        </p>
        <br /><br/>
        <p>
            Your score is based on the time that it takes to go from the spawn, to the red coin. You are allowed to use
            Special Triple Jump, and you're allowed to start from a Save State. If you choose to start from a save-state,<br/>
            it will have to be placed during the warp animation (probably towards the end).
        </p>
        <DiscordNitroDisclaimer />
    </Ruleset>
};

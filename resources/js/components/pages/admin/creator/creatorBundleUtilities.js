export const getStageObjectFromStageId = (creatorBundle, stageId) => {
    return creatorBundle?.stages?.find(stage => stage?.id === stageId);
};

export const getCategoryObjectFromCategoryId = (creatorBundle, categoryId) => {
    return creatorBundle?.categories?.find(category => category?.id) === categoryId;
};

export const getPlayerObjectFromPlayerId = (creatorBundle, playerId) => {
    return  creatorBundle?.players?.find(player => player?.id === playerId);
};

// season, stage
export const getSeasonObjectFromSeasonId = (creatorBundle, seasonId) => {
    return creatorBundle?.seasons?.find(season => season?.id === seasonId)
};

export const getTaskObjectFromTaskId = (creatorBundle, taskId) => {
    return creatorBundle?.tasks?.find(task => task?.id === taskId);
};

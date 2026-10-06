
export type GoalData = {
  name: string;
  time: string;
};

export function saveCompletedGoal(goal: GoalData) {

  var newSavedCompletedGoals : GoalData[] = getSavedCompletedGoals()
  newSavedCompletedGoals.push(goal)

  localStorage.setItem("completed_goals", JSON.stringify(newSavedCompletedGoals))
}

export  function getSavedCompletedGoals(): GoalData[] {

  if (localStorage.getItem("completed_goals") == null) return []

  return JSON.parse(localStorage.getItem("completed_goals")!) as GoalData[]
}
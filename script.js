document.addEventListener('DOMContentLoaded', function () {
    const addExerciseButton = document.getElementById('addExerciseButton');
    const showStatsButton = document.getElementById('showStatsButton');
    const exerciseList = document.getElementById('exerciseList');
    const statisticsContainer = document.getElementById('statisticsContainer');
    const goalProgressContainer = document.getElementById('goalProgressContainer');

    const totalDuration = {
        Running: 0,
        Cycling: 0,
        Swimming: 0,
        // Add more exercise categories as needed
    };

    const totalCalories = {
        Running: 0,
        Cycling: 0,
        Swimming: 0,
        // Add more exercise categories as needed
    };

    const exerciseGoal = {
        Running: 0,
        Cycling: 0,
        Swimming: 0,
        // Add more exercise categories as needed
    };

    const goalProgress = {
        Running: 0,
        Cycling: 0,
        Swimming: 0,
        // Add more exercise categories as needed
    };

    addExerciseButton.addEventListener('click', function () {
        addExercise();
        updateGoalProgress();
    });

    showStatsButton.addEventListener('click', function () {
        toggleStatistics();
    });

    function addExercise() {
        const exerciseInput = document.getElementById('exerciseInput');
        const durationInput = document.getElementById('durationInput');
        const caloriesInput = document.getElementById('caloriesInput');
        const categoryInput = document.getElementById('categoryInput');
        const goalInput = document.getElementById('goalInput');

        const exerciseText = exerciseInput.value.trim();
        const duration = parseInt(durationInput.value, 10) || 0;
        const calories = parseInt(caloriesInput.value, 10) || 0;
        const category = categoryInput.value;
        const goal = parseInt(goalInput.value, 10) || 0;

        if (exerciseText !== '' && category !== '') {
            const li = document.createElement('li');
            li.className = 'list-group-item';
            li.innerHTML = `<strong>${exerciseText}</strong> - Category: ${category}, Duration: ${duration} mins, Calories Burned: ${calories} calories`;

            exerciseList.appendChild(li);

            updateStatistics(category, duration, calories);

            exerciseInput.value = '';
            durationInput.value = '';
            caloriesInput.value = '';
            categoryInput.value = '';
        }

        // Update goal progress
        updateGoalProgress();
    }

    function updateStatistics(category, duration, calories) {
        totalDuration[category] += duration;
        totalCalories[category] += calories;

        document.getElementById(`${category.toLowerCase()}Stats`).textContent = `Total Duration: ${totalDuration[category]} mins, Total Calories: ${totalCalories[category]}`;
    }

    function updateGoalProgress() {
        // Update goal progress
        for (const category in totalCalories) {
            if (exerciseGoal[category] > 0) {
                goalProgress[category] = (totalCalories[category] / exerciseGoal[category]) * 100 || 0;
                document.getElementById(`goalProgress${category}`).textContent = goalProgress[category].toFixed(2) + "%";
            }
        }
    }

    function toggleStatistics() {
        statisticsContainer.style.display = (statisticsContainer.style.display === 'none' || statisticsContainer.style.display === '') ? 'block' : 'none';
        goalProgressContainer.style.display = (goalProgressContainer.style.display === 'none' || goalProgressContainer.style.display === '') ? 'block' : 'none';
    }
});

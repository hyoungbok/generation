document.addEventListener('DOMContentLoaded', () => {
	const taskInput = document.querySelector('.task_input');
	const addBtn = document.querySelector('.add_btn');
	const taskList = document.querySelector('.task_list');
	const emptyImg = document.querySelector('.empty_img');

	const progressBar = document.querySelector('.progress');
	const progressNumber = document.querySelector('.numbers');


	const toggleEmpty = () => {
		emptyImg.style.display = taskList.children.length === 0 ? 'block' : 'none';
	}

	const updateProgress = (checkCompletion = true) => {
		const totalTasks = taskList.children.length;
		const completedTasks = taskList.querySelectorAll('.checkbox:checked').length;

		progressBar.style.width = totalTasks ? `${(completedTasks / totalTasks) * 100}%` : '0';
		progressNumber.textContent = `${completedTasks} / ${totalTasks}`;
	}

	const addTask = (text, completed = false, checkCompletion = true) => {
		const taskText = text || taskInput.value.trim();
		if (!taskText) {
			return;
		}

		const li = document.createElement('li');
		li.innerHTML = `
		<input type="checkbox" class="checkbox" ${completed ? 'checked' : ''}>
		<span>${taskText}</span>
		<div class="task_btns">
			<button class="edit_btn"><i class="ri-pencil-line"></i></button>
			<button class="delete_btn"><i class="ri-delete-bin-line"></i></button>
		</div>
		`;

		const checkbox = li.querySelector('.checkbox');
		const editBtn = li.querySelector('.edit_btn');

		if (completed) {
			li.classList.add('completed');
			editBtn.disabled = true;
			editBtn.style.opacity = '0.5';
			editBtn.style.pointerEvents = 'none';
		}
		checkbox.addEventListener('change', () => {
			const isChecked = checkbox.checked;
			li.classList.toggle('completed', isChecked);
			editBtn.disabled = isChecked;
			editBtn.style.opacity = isChecked ? '0.5' : '1';
			editBtn.style.pointerEvents = isChecked ? 'none' : 'auto';
			updateProgress();
		})

		editBtn.addEventListener('click', () => {
			if (!checkbox.checked) {
				taskInput.value = li.querySelector('span').textContent;
				li.remove();
				toggleEmpty();
				updateProgress(false);
			}

		});


		li.querySelector('.delete_btn').addEventListener('click', () => {
			li.remove();
			toggleEmpty();
			updateProgress();
		})

		taskList.appendChild(li);
		taskInput.value = '';
		toggleEmpty();
		updateProgress(checkCompletion);

	}
	addBtn.addEventListener('click', (e) => {
		e.preventDefault();
		addTask();
	});
	taskInput.addEventListener('keypress', (e) => {
		if (e.key === 'Enter') {
			e.preventDefault();
			addTask()
		}
	})


})
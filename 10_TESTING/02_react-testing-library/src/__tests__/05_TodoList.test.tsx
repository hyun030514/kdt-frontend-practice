import TodoList from '@/components/05_TodoList';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

describe('TodoList 컴포넌트 테스트', () => {
  test('초기에는 할 일 목록이 비어있다.', () => {
    render(<TodoList />);
    expect(screen.getByText('할 일이 없습니다')).toBeInTheDocument();
  });

  test('할 일을 추가할 수 있다.', async () => {
    render(<TodoList />);
    const user = userEvent.setup();

    const input = screen.getByPlaceholderText('할 일을 입력하세요');
    const addBtn = screen.getByRole('button', { name: '추가' });

    await user.type(input, '밥 먹기');
    await user.click(addBtn);

    expect(screen.getByText('밥 먹기')).toBeInTheDocument();
    expect(screen.queryByText('할 일이 없습니다')).not.toBeInTheDocument();
  });

  test('할 일을 처리할 수 있다.', async () => {
    render(<TodoList />);
    const user = userEvent.setup();

    const input = screen.getByPlaceholderText('할 일을 입력하세요');
    const addBtn = screen.getByRole('button', { name: '추가' });

    await user.type(input, '밥 먹기');
    await user.click(addBtn);

    // checkbox 요소 찾기 : getByRole('checkbox', {name: aria-label 값})
    const checkbox = screen.getByRole('checkbox', {
      name: '밥 먹기 완료 표시',
    });
    await user.click(checkbox);

    // 특정 요소의 가장 가까운 xx 부모 요소 찾기 : 요소.closest('xx)
    const todoItem = checkbox.closest('li');

    // 요소가 특정 Class를 가지고있는지 확인 : toHaveClass('Class명)
    expect(todoItem).toHaveClass('line-through');

    // 요소가 체크되었는지 확인 : toBeChecked();
    expect(checkbox).not.toBeChecked();
  });

  test('완료된 할 일을 다시 활성화할 수 있다.', async () => {
    render(<TodoList />);
    const user = userEvent.setup();

    const input = screen.getByPlaceholderText('할 일을 입력하세요');
    const addBtn = screen.getByRole('button', { name: '추가' });

    await user.type(input, '밥 먹기');
    await user.click(addBtn);

    //완료 처리
    const checkbox = screen.getByRole('checkbox', {
      name: '밥 먹기 완료 표시',
    });
    await user.click(checkbox);
    const todoItem = checkbox.closest('li');
    expect(todoItem).toHaveClass('line-through');
    expect(checkbox).toBeChecked();

    //다시 활성화 처리
    await user.click(checkbox);
    expect(todoItem).not.toHaveClass('line-through');
    expect(checkbox).not.toBeChecked();
  });

  test('할 일을 삭제할 수 있다.', async () => {
    render(<TodoList />);
    const user = userEvent.setup();

    const input = screen.getByPlaceholderText('할 일을 입력하세요');
    const addBtn = screen.getByRole('button', { name: '추가' });

    await user.type(input, '밥 먹기');
    await user.click(addBtn);

    // 할 일 삭제
    const deleteBtn = screen.getByRole('button', { name: '할 일 삭제' });
    await user.click(addBtn);

    expect(screen.queryByText('할 일')).not.toBeInTheDocument();
  });

  test('필터링이 정상적으로 동작한다.', async () => {
    render(<TodoList />);
    const user = userEvent.setup();
    const input = screen.getByPlaceholderText('할 일을 입력하세요');
    const addBtn = screen.getByRole('button', { name: '추가' });

    // 할 일 3개 추가
    await user.type(input, '할일1');
    await user.click(addBtn);
    await user.type(input, '할일2');
    await user.click(addBtn);
    await user.type(input, '할일3');
    await user.click(addBtn);

    // 하나를 완료 처리로 변경
    const checkbox = screen.getByRole('checkbox', { name: '할일1 완료 표시' });
    await user.click(checkbox);

    // [활성] 필터: 할일B만 보이고 할일A는 안 보임
    const activeFilter = screen.getByRole('button', { name: /활성/ });
    await user.click(activeFilter);

    // 활성 상태인 할일 들만 보여지는지 확인
    expect(screen.queryByText('할일1')).not.toBeInTheDocument();
    expect(screen.getByText('할일2')).toBeInTheDocument();
    expect(screen.getByText('할일3')).toBeInTheDocument();

    // [완료] 필터: 할일A만 보이고 할일B는 안 보임
    const completedFilter = screen.getByRole('button', { name: /완료/ });
    await user.click(completedFilter);

    // 완료 상태인 할일들만 보여지는지 확인
    expect(screen.getByText('할일1')).toBeInTheDocument();
    expect(screen.queryByText('할일2')).not.toBeInTheDocument();
    expect(screen.queryByText('할일3')).not.toBeInTheDocument();

    // [전체] 필터 클릭
    const allFilter = screen.getByRole('button', { name: /전체/ });
    await user.click(allFilter);

    // 완료 상태인 할일들만 보여지는지 확인
    expect(screen.getByText('할일1')).toBeInTheDocument();
    expect(screen.getByText('할일2')).not.toBeInTheDocument();
    expect(screen.getByText('할일3')).not.toBeInTheDocument();
  });
});


import { Cmp6082Component } from './cmp';
describe('Cmp6082Component', () => {
  it('should add', () => {
    expect(new Cmp6082Component().add6082(1)).toBe(6083);
  });
});

import { Cmp7082Component } from './cmp';
describe('Cmp7082Component', () => {
  it('should add', () => {
    expect(new Cmp7082Component().add7082(1)).toBe(7083);
  });
});

import { Cmp9082Component } from './cmp';
describe('Cmp9082Component', () => {
  it('should add', () => {
    expect(new Cmp9082Component().add9082(1)).toBe(9083);
  });
});
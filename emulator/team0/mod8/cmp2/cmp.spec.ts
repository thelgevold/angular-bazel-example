
import { Cmp4082Component } from './cmp';
describe('Cmp4082Component', () => {
  it('should add', () => {
    expect(new Cmp4082Component().add4082(1)).toBe(4083);
  });
});
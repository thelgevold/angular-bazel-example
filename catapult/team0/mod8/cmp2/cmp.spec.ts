
import { Cmp2082Component } from './cmp';
describe('Cmp2082Component', () => {
  it('should add', () => {
    expect(new Cmp2082Component().add2082(1)).toBe(2083);
  });
});
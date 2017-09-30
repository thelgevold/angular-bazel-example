
import { Cmp3082Component } from './cmp';
describe('Cmp3082Component', () => {
  it('should add', () => {
    expect(new Cmp3082Component().add3082(1)).toBe(3083);
  });
});
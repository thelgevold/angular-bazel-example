
import { Cmp8082Component } from './cmp';
describe('Cmp8082Component', () => {
  it('should add', () => {
    expect(new Cmp8082Component().add8082(1)).toBe(8083);
  });
});
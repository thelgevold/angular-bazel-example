
import { Cmp5082Component } from './cmp';
describe('Cmp5082Component', () => {
  it('should add', () => {
    expect(new Cmp5082Component().add5082(1)).toBe(5083);
  });
});